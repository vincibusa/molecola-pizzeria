import React, { useState, useCallback, useEffect, ChangeEvent } from "react";
import { FiEdit2, FiTrash2, FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import {
  Reservation,
  subscribeToReservations,
  updateReservation,
  deleteReservation
} from "../services/Reservation";

interface ReservationFormData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  seats: number;
  specialRequests?: string;
}

const ReservationPage: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    seats: 1
  });

  // Sottoscrizione realtime alle prenotazioni
  useEffect(() => {
    const unsubscribe = subscribeToReservations((reservationsData) => {
      setReservations(reservationsData);
      console.log(reservationsData);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleEdit = useCallback((reservation: Reservation) => {
    setSelectedReservation(reservation);
    setFormData({
      fullName: reservation.fullName,
      phone: reservation.phone,
      // Conversione della stringa in Date per formattarla correttamente
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
        // La data viene salvata come stringa, quindi la usiamo così com'è
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Errore nell'aggiornamento della prenotazione");
      }
    }
  }, [formData, selectedReservation]);

  const handleConfirmDelete = useCallback(async () => {
    if (selectedReservation && selectedReservation.id) {
      try {
        await deleteReservation(selectedReservation.id.toString());
        setReservations((prev) =>
          prev.filter((res) => res.id !== selectedReservation.id)
        );
        toast.success("Reservation deleted successfully");
        setIsDeleteModalOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <h1 className="text-2xl font-heading text-foreground mb-8">Prenotazioni</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reservations.map((reservation) => (
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

        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-card p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
              <p className="text-accent mb-6">
                Are you sure you want to delete this reservation?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-destructive text-white rounded hover:bg-opacity-90 transition-colors"
                >
                  Delete
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