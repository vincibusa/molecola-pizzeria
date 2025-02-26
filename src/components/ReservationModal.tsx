import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FiCalendar, FiClock, FiUsers, FiCheck, FiX, FiAlertCircle } from "react-icons/fi";
import { format } from "date-fns";
import { addReservation, getShiftsForDate } from "../services/Reservation";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  date: string;
  time: string;
  seats: number;
  specialRequests?: string;
}

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    date: "",
    time: "",
    seats: 1,
    specialRequests: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  // Nuovi stati per la gestione dell'errore
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Stato per memorizzare solo gli orari disponibili (enabled true) per la data selezionata
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  // Quando la data cambia, carichiamo gli shift e filtriamo quelli abilitati
  useEffect(() => {
    const loadAvailableTimes = async () => {
      if (formData.date) {
        try {
          const shifts = await getShiftsForDate(formData.date);
          // Filtriamo solo quelli con enabled true
          const available = shifts.filter((shift) => shift.enabled).map((shift) => shift.time);
          setAvailableTimeSlots(available);
          // Se l'orario selezionato non è più disponibile, resettiamo il campo
          if (!available.includes(formData.time)) {
            setFormData((prev) => ({ ...prev, time: "" }));
          }
        } catch (error) {
          console.error("Errore nel caricamento degli orari disponibili", error);
          setAvailableTimeSlots([]);
        }
      } else {
        setAvailableTimeSlots([]);
      }
    };

    loadAvailableTimes();
  }, [formData.date, formData.time]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Nome richiesto";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Cognome richiesto";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Numero di telefono richiesto";
    }
    if (!formData.date) {
      newErrors.date = "Data richiesta";
    }
    if (!formData.time) {
      newErrors.time = "Ora richiesta";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const fullName = `${formData.firstName} ${formData.lastName}`;
        const reservation = {
          fullName,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          seats: formData.seats,
          specialRequests: formData.specialRequests
        };
        await addReservation(reservation);
        setShowSuccess(true);
      } catch (error: any) {
        console.error("Error:", error);
        // In caso di errore, impostiamo il messaggio e mostriamo la modal d'errore
        setErrorMessage(error.message || "Errore durante la prenotazione");
        setShowError(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "seats" ? Number(value) : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-2 z-[200]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="transform scale-90 sm:scale-100 relative w-full max-w-md bg-card rounded-lg shadow-lg p-4 sm:p-8 my-2 sm:my-10"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg sm:text-xl font-heading text-accent">
            Prenota il tuo tavolo
          </p>
          <button onClick={onClose} className="text-accent hover:text-foreground transition-colors">
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <div>
            <label className="block text-sm font-body text-foreground mb-2">
              Nome
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.firstName ? "border-destructive" : "border-input"
              } focus:outline-none focus:ring-2 focus:ring-ring`}
              placeholder="Inserisci il nome"
            />
            {errors.firstName && <p className="mt-1 text-sm text-destructive">{errors.firstName}</p>}
          </div>

          {/* Campo Cognome */}
          <div>
            <label className="block text-sm font-body text-foreground mb-2">
              Cognome
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.lastName ? "border-destructive" : "border-input"
              } focus:outline-none focus:ring-2 focus:ring-ring`}
              placeholder="Inserisci il cognome"
            />
            {errors.lastName && <p className="mt-1 text-sm text-destructive">{errors.lastName}</p>}
          </div>

          {/* Numero di Telefono */}
          <div>
            <label className="block text-sm font-body text-foreground mb-2">
              Numero di Telefono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.phone ? "border-destructive" : "border-input"
              } focus:outline-none focus:ring-2 focus:ring-ring`}
              placeholder="+39 123 456 7890"
            />
            {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Campo Data */}
            <div>
              <label className="block text-sm font-body text-foreground mb-2">
                Data
              </label>
              <div className="relative">
                <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={format(new Date(), "yyyy-MM-dd")}
                  className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                    errors.date ? "border-destructive" : "border-input"
                  } focus:outline-none focus:ring-2 focus:ring-ring`}
                />
              </div>
              {errors.date && <p className="mt-1 text-sm text-destructive">{errors.date}</p>}
            </div>

            {/* Campo Ora */}
            <div>
              <label className="block text-sm font-body text-foreground mb-2">
                Ora
              </label>
              <div className="relative">
                <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                    errors.time ? "border-destructive" : "border-input"
                  } focus:outline-none focus:ring-2 focus:ring-ring appearance-none`}
                >
                  <option value="">Seleziona ora</option>
                  {availableTimeSlots.length > 0 ? (
                    availableTimeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))
                  ) : (
                    <option value="">Nessuna fascia disponibile</option>
                  )}
                </select>
              </div>
              {errors.time && <p className="mt-1 text-sm text-destructive">{errors.time}</p>}
            </div>
          </div>

          {/* Numero di Persone */}
          <div>
            <label className="block text-sm font-body text-foreground mb-2">
              Numero di Persone
            </label>
            <div className="relative">
              <FiUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
              <select
                name="seats"
                value={formData.seats}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "persona" : "persone"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Richieste Speciali */}
          <div>
            <label className="block text-sm font-body text-foreground mb-2">
              Richieste Speciali
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring h-24"
              placeholder="Eventuali richieste speciali..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground py-2 rounded-md font-body hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Prenotazione in corso..." : "Prenota Ora"}
          </button>
        </form>
      </div>

      {/* Modal di Successo */}
      {showSuccess && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-2 z-50">
          <div className="transform scale-90 sm:scale-100 bg-card p-4 sm:p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="mb-4 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FiCheck className="text-primary text-xl" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading text-foreground mb-2">
                Prenotazione Confermata!
              </h2>
              <p className="text-accent text-sm">
                Grazie per aver scelto Pizzeria Fermento 2.0
              </p>
              <p className="text-accent text-sm">
                Il tavolo rimarrà riservato per 15 minuti oltre l'orario di prenotazione
              </p>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-sm">
                <strong>Nome:</strong> {formData.firstName} {formData.lastName}
              </p>
              <p className="text-sm">
                <strong>Data:</strong> {formData.date}
              </p>
              <p className="text-sm">
                <strong>Ora:</strong> {formData.time}
              </p>
              <p className="text-sm">
                <strong>Persone:</strong> {formData.seats}
              </p>
            </div>
            <button
              onClick={() => {
                setShowSuccess(false);
                onClose();
              }}
              className="w-full bg-primary text-primary-foreground py-2 rounded-md font-body hover:bg-primary/90 transition-colors"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

      {/* Modal di Errore */}
      {showError && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-2 z-50">
          <div className="transform scale-90 sm:scale-100 bg-card p-4 sm:p-6 rounded-lg shadow-lg max-w-sm w-full border border-destructive">
            <div className="mb-4 text-center">
              <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <FiAlertCircle className="text-destructive text-xl" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading text-foreground mb-2">
                Errore nella Prenotazione
              </h2>
              <p className="text-destructive text-sm">
                {errorMessage}
              </p>
              <p className="text-primary text-sm">
                Contattaci telefonicamente: +39 331 872 7612
              </p>
            </div>
            <button
              onClick={() => setShowError(false)}
              className="w-full bg-destructive text-white py-2 rounded-md font-body hover:bg-destructive/90 transition-colors"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationModal;