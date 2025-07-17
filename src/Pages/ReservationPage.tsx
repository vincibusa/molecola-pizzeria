// src/pages/ReservationPage.tsx
import React, { useState, useCallback, useEffect, ChangeEvent } from "react";
import { FiEdit2, FiTrash2, FiCalendar, FiClock, FiUsers, FiCheck, FiX } from "react-icons/fi";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import {
  Reservation,
  subscribeToReservations,
  updateReservation,
  deleteReservation,
  acceptReservation,
  rejectReservation,
  allTimes
} from "../services/Reservation";
import ReservationModalEdit from "../components/ReservationModalEdit";

const ReservationPage: React.FC = () => {
  // Stati per le prenotazioni e la data selezionata
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));

  // Stati per modale edit e delete
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);

  useEffect(() => {
    if(localStorage.getItem("isAuthenticated") === "false" || localStorage.getItem("isAuthenticated") === null) {
      window.location.href = "/login";
    }
  }, []);

  // Sottoscrizione in tempo reale alle prenotazioni
  useEffect(() => {
    const unsubscribe = subscribeToReservations((reservationsData) => {
      setReservations(reservationsData);
    });
    return () => unsubscribe();
  }, []);

  // Filtra le prenotazioni in base alla data selezionata
  const filteredReservations = reservations.filter(
    (reservation) => reservation.date === selectedDate
  );

  // Gestione della modifica: apre la modale con i dati della prenotazione da modificare
  const handleEdit = useCallback((reservation: Reservation) => {
    setSelectedReservation(reservation);
    setIsEditModalOpen(true);
  }, []);

  // Gestione della cancellazione: apre la modale di conferma
  const handleDelete = useCallback((reservation: Reservation) => {
    setSelectedReservation(reservation);
    setIsDeleteModalOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    if (selectedReservation && selectedReservation.id) {
      try {
        await deleteReservation(selectedReservation.id);
        toast.success("Prenotazione eliminata con successo");
        setIsDeleteModalOpen(false);
      } catch (error) {
        toast.error("Errore nella cancellazione della prenotazione");
      }
    } else {
      toast.error("ID prenotazione non definito");
    }
  }, [selectedReservation]);

  // Gestione della modifica della data
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleAccept = useCallback(async (reservation: Reservation) => {
    try {
      await acceptReservation(reservation.id!, reservation);
      
      // Invia email di conferma
      const templateParams = {
        to_name: reservation.fullName,
        to_email: reservation.email,
        reservation_date: format(new Date(reservation.date), "dd/MM/yyyy"),
        reservation_time: reservation.time,
        seats: reservation.seats
      };

      await emailjs.send(
        'service_jlzz6px',
        'template_5ltxf0t',
        templateParams,
        'iIz1ynV6Pc7STPfuf'
      );

      toast.success("Prenotazione accettata e email di conferma inviata");
    } catch (error) {
      toast.error("Errore nell'accettazione della prenotazione");
      console.error(error);
    }
  }, []);

  const handleReject = useCallback(async (reservation: Reservation) => {
    try {
      await rejectReservation(reservation.id!, reservation);
      
      // Invia email di rifiuto
      const templateParams = {
        to_name: reservation.fullName,
        to_email: reservation.email,
        reservation_date: format(new Date(reservation.date), "dd/MM/yyyy"),
        reservation_time: reservation.time,
        seats: reservation.seats
      };

      await emailjs.send(
        'service_jlzz6px', 
        'template_reject',
        templateParams,
        'iIz1ynV6Pc7STPfuf'
      );

      toast.success("Prenotazione rifiutata e email di notifica inviata");
    } catch (error) {
      toast.error("Errore nel rifiuto della prenotazione");
      console.error(error);
    }
  }, []);

  // Raggruppa prenotazioni per orario per una migliore visualizzazione
  const groupedReservations = allTimes.reduce((acc, time) => {
    acc[time] = filteredReservations.filter(res => res.time === time);
    return acc;
  }, {} as Record<string, Reservation[]>);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header: titolo e selezione data */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Prenotazioni
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Selettore della data */}
            <div className="relative">
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="w-full sm:w-auto px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  text-gray-700 cursor-pointer hover:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Sezione informazioni sistema */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Sistema Semplificato
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>Le prenotazioni sono ora sempre disponibili per tutti gli orari. Non è più necessario gestire i turni.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lista delle prenotazioni raggruppate per orario */}
        <div className="space-y-8">
          {Object.entries(groupedReservations).map(([time, timeReservations]) => {
            if (timeReservations.length === 0) return null;
            
            return (
              <div key={time} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                    <FiClock className="mr-2" />
                    Orario: {time}
                    <span className="ml-2 text-sm font-normal text-gray-600">
                      ({timeReservations.length} {timeReservations.length === 1 ? 'prenotazione' : 'prenotazioni'})
                    </span>
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {timeReservations.map((reservation) => (
                      <div key={reservation.id} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {reservation.fullName}
                            </h3>
                            <p className="text-gray-600">{reservation.phone}</p>
                            <p className="text-gray-600">{reservation.email}</p>
                            <span className={`inline-block px-2 py-1 rounded-full text-sm mt-2 ${
                              reservation.status === 'accepted' ? 'bg-green-100 text-green-800' :
                              reservation.status === 'rejected' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {reservation.status === 'accepted' ? 'Accettata' :
                               reservation.status === 'rejected' ? 'Rifiutata' :
                               'In attesa'}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            {(!reservation.status || reservation.status === 'pending') && (
                              <>
                                <button
                                  onClick={() => handleAccept(reservation)}
                                  className="p-2 text-green-600 hover:bg-green-600 hover:text-white rounded-full transition-all duration-200"
                                  title="Accetta prenotazione"
                                >
                                  <FiCheck className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleReject(reservation)}
                                  className="p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-full transition-all duration-200"
                                  title="Rifiuta prenotazione"
                                >
                                  <FiX className="w-5 h-5" />
                                </button>
                              </>
                            )}
                            <button
                              onClick={() => handleEdit(reservation)}
                              className="p-2 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-200"
                              title="Modifica prenotazione"
                            >
                              <FiEdit2 className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(reservation)}
                              className="p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-full transition-all duration-200"
                              title="Elimina prenotazione"
                            >
                              <FiTrash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        {/* Dettagli della prenotazione */}
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <FiCalendar className="mr-2" />
                            <span>{format(new Date(reservation.date), "dd/MM/yyyy")}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FiUsers className="mr-2" />
                            <span>{reservation.seats} {reservation.seats === 1 ? 'persona' : 'persone'}</span>
                          </div>
                          {reservation.specialRequests && (
                            <div className="mt-2 text-gray-600 bg-white p-2 rounded-md border">
                              <span className="block font-medium">Note speciali:</span>
                              <span>{reservation.specialRequests}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {filteredReservations.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <FiCalendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nessuna prenotazione</h3>
              <p>Non ci sono prenotazioni per il {format(new Date(selectedDate + 'T00:00:00'), 'dd/MM/yyyy')}.</p>
            </div>
          )}
        </div>

        {/* Modal per modifica, usando ReservationModal */}
        {isEditModalOpen && selectedReservation && (
          <ReservationModalEdit
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            reservation={selectedReservation}
            onSubmit={async (updatedReservation) => {
              if (selectedReservation.id) {
                await updateReservation(selectedReservation.id, updatedReservation);
                toast.success("Prenotazione aggiornata con successo");
              }
              setIsEditModalOpen(false);
            }}
          />
        )}

        {/* Modal per conferma eliminazione */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Conferma eliminazione</h2>
              <p className="text-gray-600 mb-6">
                Sei sicuro di voler eliminare questa prenotazione?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Annulla
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Elimina
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default ReservationPage;