import React, { useState, useCallback, useEffect, ChangeEvent } from "react";
import { FiEdit2, FiTrash2, FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import {
  Reservation,
  Shift,
  subscribeToReservations,
  updateReservation,
  deleteReservation,
  getShiftsForDate,
  updateShift,
  initializeShiftsForDate,
  allTimes
} from "../services/Reservation";

const ReservationPage: React.FC = () => {
  // Stato per le prenotazioni (tutte le date)
  const [reservations, setReservations] = useState<Reservation[]>([]);
  // Stato per la data selezionata (default oggi)
  const [selectedDate, setSelectedDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));
  // Stato per i turni relativi alla data selezionata
  const [shifts, setShifts] = useState<Shift[]>([]);
  // Stato per il turno selezionato dalla select
  const [selectedShift, setSelectedShift] = useState<string>(allTimes[0]);

  // Stati per gestione edit e delete (invariati)
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    seats: 1,
    specialRequests: ""
  });

  // Sottoscrizione in tempo reale a tutte le prenotazioni
  useEffect(() => {
    const unsubscribe = subscribeToReservations((reservationsData) => {
      setReservations(reservationsData);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Carica i turni per la data selezionata (solo quando selectedDate cambia)
  useEffect(() => {
    const loadShifts = async () => {
      try {
        let shiftsData = await getShiftsForDate(selectedDate);
        // Se non esistono turni per la data, inizializza quelli di default
        if (shiftsData.length === 0) {
          await initializeShiftsForDate(selectedDate);
          shiftsData = await getShiftsForDate(selectedDate);
        }
        setShifts(shiftsData);
        // Se il turno selezionato corrente non è presente, impostiamo quello di default
        if (!shiftsData.find((s) => s.time === selectedShift)) {
          setSelectedShift(allTimes[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadShifts();
  }, [selectedDate]);

  // Filtra le prenotazioni in base alla data selezionata
  const filteredReservations = reservations.filter(
    (reservation) => reservation.date === selectedDate
  );

  // Gestione della modifica della data
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  // Gestione della select dei turni: mappiamo allTimes e per ogni orario cerchiamo i dati in shifts
  const handleShiftChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedShift(e.target.value);
  };

  // Funzione per alternare lo stato del turno selezionato
  const toggleShiftStatus = async () => {
    try {
      // Cerchiamo lo shift nel database in base all'orario selezionato
      const currentShift = shifts.find((s) => s.time === selectedShift);
      // Se non lo troviamo, usiamo valori di default (bloccato)
      const shiftToUpdate = currentShift || { time: selectedShift, enabled: false, maxReservations: 15 };
      await updateShift(selectedDate, selectedShift, { enabled: !shiftToUpdate.enabled });
      // Ricarichiamo i turni aggiornati da Firebase
      const updatedShifts = await getShiftsForDate(selectedDate);
      setShifts(updatedShifts);
      toast.success(
        `Turno ${selectedShift} ${!shiftToUpdate.enabled ? "attivato" : "bloccato"}`
      );
    } catch (error) {
      toast.error("Errore nell'aggiornamento dello stato del turno");
    }
  };

  // Funzioni per edit e delete delle prenotazioni (invariabili)
  const handleEdit = useCallback((reservation: Reservation) => {
    setSelectedReservation(reservation);
    setFormData({
      fullName: reservation.fullName,
      phone: reservation.phone,
      date: format(new Date(reservation.date), "yyyy-MM-dd"),
      time: reservation.time,
      seats: reservation.seats,
      specialRequests: reservation.specialRequests || ""
    });
    setIsEditModalOpen(true);
  }, []);

  const handleDelete = useCallback((reservation: Reservation) => {
    setSelectedReservation(reservation);
    setIsDeleteModalOpen(true);
  }, []);

  const handleUpdate = useCallback(async () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.seats
    ) {
      toast.error("Please fill all fields");
      return;
    }
    if (selectedReservation && selectedReservation.id) {
      const updatedReservation: Reservation = {
        ...selectedReservation,
        ...formData,
        date: formData.date
      };
      try {
        await updateReservation(selectedReservation.id, updatedReservation);
        setReservations((prev) =>
          prev.map((res) =>
            res.id === selectedReservation.id ? updatedReservation : res
          )
        );
        toast.success("Reservation updated successfully");
        setIsEditModalOpen(false);
      } catch (error) {
        toast.error("Errore nell'aggiornamento della prenotazione");
      }
    }
  }, [formData, selectedReservation]);

  const handleConfirmDelete = useCallback(async () => {
    if (selectedReservation && selectedReservation.id) {
      try {
        await deleteReservation(selectedReservation.id);
        setReservations((prev) =>
          prev.filter((res) => res.id !== selectedReservation.id)
        );
        toast.success("Reservation deleted successfully");
        setIsDeleteModalOpen(false);
      } catch (error) {
        toast.error("Errore nella cancellazione della prenotazione");
      }
    } else {
      toast.error("Reservation id is undefined");
    }
  }, [selectedReservation]);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
     {/* Header con titolo, selezione data e gestione dei turni */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-8">
  <h1 className="text-2xl md:text-3xl font-heading text-foreground">
    Prenotazioni
  </h1>
  
  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
    {/* Selettore della data */}
    <div className="relative">
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="w-full sm:w-auto px-4 py-2.5 bg-card border border-border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          text-foreground cursor-pointer hover:border-primary transition-colors"
      />
    </div>

    {/* Select per scegliere il turno */}
    <div className="relative">
      <select
        value={selectedShift}
        onChange={handleShiftChange}
        className="w-full sm:w-auto appearance-none px-4 py-2.5 pr-10 bg-card border border-border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          text-foreground cursor-pointer hover:border-primary transition-colors"
      >
        {allTimes.map((time) => {
          const shift = shifts.find((s) => s.time === time);
          const enabled = shift ? shift.enabled : false;
          return (
            <option 
              key={time} 
              value={time}
              className="py-2"
            >
              {time} {enabled ? "(Attivo)" : "(Bloccato)"}
            </option>
          );
        })}
      </select>
      {/* Icona freccia custom */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    {/* Bottone per alternare lo stato del turno selezionato */}
    <button
      onClick={toggleShiftStatus}
      className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 
        active:bg-primary/80 transition-colors duration-200 shadow-sm
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {shifts.find((s) => s.time === selectedShift)?.enabled ? "Blocca" : "Sblocca"}
    </button>
  </div>
</div>




        {/* Lista delle prenotazioni per la data selezionata */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredReservations.map((reservation) => (
            <div key={reservation.id} className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {reservation.fullName}
                  </h3>
                  <p className="text-accent">{reservation.phone}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(reservation)}
                    className="p-2 text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-200"
                  >
                    <FiEdit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(reservation)}
                    className="p-2 text-destructive hover:bg-destructive hover:text-white rounded-full transition-all duration-200"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-accent">
                  <FiCalendar className="mr-2" />
                  <span>{format(new Date(reservation.date), "MMMM dd, yyyy")}</span>
                </div>
                <div className="flex items-center text-accent">
                  <FiClock className="mr-2" />
                  <span>{reservation.time}</span>
                </div>
                <div className="flex items-center text-accent">
                  <FiUsers className="mr-2" />
                  <span>{reservation.seats} seats</span>
                </div>
                {reservation.specialRequests && (
                  <div className="flex items-center text-accent">
                    <span>{reservation.specialRequests}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal per modifica della prenotazione */}
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-card p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Edit Reservation</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
                <select
                  value={formData.seats}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setFormData({ ...formData, seats: Number(e.target.value) })
                  }
                  className="w-full p-2 border rounded"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} seats
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Special Requests (optional)"
                  value={formData.specialRequests}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, specialRequests: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition-colors"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal per conferma eliminazione prenotazione */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-card p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Conferma eliminazione</h2>
              <p className="text-accent mb-6">
               Sei sicuro di voler eliminare questa prenotazione?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-muted transition-colors"
                >
                  Indietro
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-destructive text-white rounded hover:bg-opacity-90 transition-colors"
                >
                  Conferma
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default ReservationPage;