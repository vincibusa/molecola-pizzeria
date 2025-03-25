// src/components/ReservationModal.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FiCalendar, FiClock, FiUsers, FiCheck, FiX, FiAlertCircle } from "react-icons/fi";
import { format } from "date-fns";
import { getShiftsForDate, Reservation } from "../services/Reservation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
  reservation?: Reservation; // Se presente, modalità modifica
  onSubmit: (updatedReservation: Reservation) => Promise<void>;
}

const ReservationModalEdit: React.FC<ReservationModalProps> = ({ isOpen, onClose, reservation, onSubmit }) => {
  const { t } = useTranslation();

  // Imposta i dati iniziali in base alla prenotazione (se presente)
  const initialFormData: FormData = reservation
    ? {
        firstName: reservation.fullName.split(" ")[0],
        lastName: reservation.fullName.split(" ").slice(1).join(" "),
        phone: reservation.phone,
        date: reservation.date,
        time: reservation.time,
        seats: reservation.seats,
        specialRequests: reservation.specialRequests || ""
      }
    : {
        firstName: "",
        lastName: "",
        phone: "",
        date: "",
        time: "",
        seats: 1,
        specialRequests: ""
      };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  // Stato per le fasce orarie disponibili in base alla data selezionata
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  useEffect(() => {
    // Se la prenotazione cambia, aggiorna i dati del form
    setFormData(initialFormData);
  }, [reservation]);

  useEffect(() => {
    const loadAvailableTimes = async () => {
      if (formData.date) {
        try {
          const shifts = await getShiftsForDate(formData.date);
          // Considera solo gli shift abilitati
          const available = shifts.filter((shift) => shift.enabled).map((shift) => shift.time);
          setAvailableTimeSlots(available);
          // Se l'orario corrente non è disponibile, resetta il campo
          if (!available.includes(formData.time)) {
            setFormData((prev) => ({ ...prev, time: "" }));
          }
        } catch (error) {
          console.error("Error loading available times", error);
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
      newErrors.firstName = t("reservationModal.error.firstNameRequired");
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t("reservationModal.error.lastNameRequired");
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t("reservationModal.error.phoneRequired");
    }
    if (!formData.date) {
      newErrors.date = t("reservationModal.error.dateRequired");
    }
    if (!formData.time) {
      newErrors.time = t("reservationModal.error.timeRequired");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Combina firstName e lastName in fullName
        const fullName = `${formData.firstName} ${formData.lastName}`;
        const updatedReservation: Reservation = {
          fullName,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          seats: formData.seats,
          specialRequests: formData.specialRequests,
          id: reservation?.id, // mantieni l'ID se in modalità modifica
          status: reservation?.status || 'pending',
          email: reservation?.email || ''
        };
        await onSubmit(updatedReservation);
        setShowSuccess(true);
      } catch (error: any) {
        console.error("Error:", error);
        setErrorMessage(error.message || t("reservationModal.error.general"));
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 z-[200] overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 my-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg sm:text-xl font-heading text-pizza-red">
            {t("reservationModal.title")}
          </p>
          <button onClick={onClose} className="text-pizza-red hover:text-pizza-brown">
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <div>
            <label className="block text-sm font-body text-gray-800 mb-2">
              {t("reservationModal.firstNameLabel")}
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-md border ${errors.firstName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-pizza-red`}
              placeholder={t("reservationModal.firstNamePlaceholder")}
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>

          {/* Campo Cognome */}
          <div>
            <label className="block text-sm font-body text-gray-800 mb-2">
              {t("reservationModal.lastNameLabel")}
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-md border ${errors.lastName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-pizza-red`}
              placeholder={t("reservationModal.lastNamePlaceholder")}
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>

          {/* Numero di Telefono */}
          <div>
            <label className="block text-sm font-body text-gray-800 mb-2">
              {t("reservationModal.phoneLabel")}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-md border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-pizza-red`}
              placeholder={t("reservationModal.phonePlaceholder")}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Campo Data */}
            <div>
              <label className="block text-sm font-body text-gray-800 mb-2">
                {t("reservationModal.dateLabel")}
              </label>
              <div className="relative">
                <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pizza-red" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={format(new Date(), "yyyy-MM-dd")}
                  className={`w-full pl-10 pr-4 py-2 rounded-md border ${errors.date ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-pizza-red`}
                />
              </div>
              {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
            </div>

            {/* Campo Ora */}
            <div>
              <label className="block text-sm font-body text-gray-800 mb-2">
                {t("reservationModal.timeLabel")}
              </label>
              <div className="relative">
                <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pizza-red" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-md border ${errors.time ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-pizza-red appearance-none`}
                >
                  <option value="">{t("reservationModal.timePlaceholder")}</option>
                  {availableTimeSlots.length > 0 ? (
                    availableTimeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))
                  ) : (
                    <option value="">{t("reservationModal.noTimeSlots")}</option>
                  )}
                </select>
              </div>
              {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time}</p>}
            </div>
          </div>

          {/* Numero di Persone */}
          <div>
            <label className="block text-sm font-body text-gray-800 mb-2">
              {t("reservationModal.peopleLabel")}
            </label>
            <div className="relative">
              <FiUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pizza-red" />
              <select
                name="seats"
                value={formData.seats}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pizza-red appearance-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? t("reservationModal.personSingular") : t("reservationModal.personPlural")}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Richieste Speciali */}
          <div>
            <label className="block text-sm font-body text-gray-800 mb-2">
              {t("reservationModal.specialRequestsLabel")}
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pizza-red h-24"
              placeholder={t("reservationModal.specialRequestsPlaceholder")}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pizza-red text-white py-2 rounded-md font-body hover:bg-pizza-red/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t("reservationModal.submitting") : t("reservationModal.submitButton")}
          </button>
        </form>
      </motion.div>

      {/* Modal di Successo */}
      {showSuccess && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 z-50"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="transform scale-90 sm:scale-100 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-sm w-full"
          >
            <div className="mb-4 text-center">
              <div className="mx-auto w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center mb-4">
                <FiCheck className="text-pizza-red text-xl" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading text-gray-800 mb-2">
                {t("reservationModal.successTitle")}
              </h2>
              <p className="text-pizza-red text-sm">
                {t("reservationModal.successMessage")}
              </p>
              <p className="text-pizza-red text-sm">
                {t("reservationModal.holdTimeMessage")}
              </p>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-sm">
                <strong>{t("reservationModal.firstNameLabel")}:</strong> {formData.firstName} {formData.lastName}
              </p>
              <p className="text-sm">
                <strong>{t("reservationModal.dateLabel")}:</strong> {formData.date}
              </p>
              <p className="text-sm">
                <strong>{t("reservationModal.timeLabel")}:</strong> {formData.time}
              </p>
              <p className="text-sm">
                <strong>{t("reservationModal.peopleLabel")}:</strong> {formData.seats}
              </p>
            </div>
            <button
              onClick={() => {
                setShowSuccess(false);
                onClose();
              }}
              className="w-full bg-pizza-red text-white py-2 rounded-md font-body hover:bg-pizza-red/90"
            >
              {t("reservationModal.closeButton")}
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Modal di Errore */}
      {showError && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 z-50"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="transform scale-90 sm:scale-100 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-sm w-full border border-red-500"
          >
            <div className="mb-4 text-center">
              <div className="mx-auto w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <FiAlertCircle className="text-red-500 text-xl" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading text-gray-800 mb-2">
                {t("reservationModal.errorTitle")}
              </h2>
              <p className="text-red-500 text-sm">
                {errorMessage}
              </p>
              <p className="text-pizza-red text-sm">
                {t("reservationModal.contactInfo")}
              </p>
            </div>
            <button
              onClick={() => setShowError(false)}
              className="w-full bg-red-500 text-white py-2 rounded-md font-body hover:bg-red-500/90"
            >
              {t("reservationModal.closeButton")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ReservationModalEdit;