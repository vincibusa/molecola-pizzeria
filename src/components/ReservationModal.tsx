import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiCalendar, FiClock, FiUsers, FiCheck, FiX } from "react-icons/fi";
import { format } from "date-fns";

interface FormData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  seats: number;
  specialRequests: string;
}

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    seats: 1,
    specialRequests: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const timeSlots: string[] = [
    "12:00", "12:30", "13:00", "13:30", "14:00",
    "19:00", "19:30", "20:00", "20:30", "21:00"
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nome completo richiesto";
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
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setShowSuccess(true);
      } catch (error) {
        console.error("Error:", error);
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
     className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-[200] overflow-y-hidden ">
      <div 
            onClick={(e) => e.stopPropagation()}
      className="relative max-w-md w-full bg-card rounded-lg shadow-lg p-8 my-10">
       

        <div className="text-center mb-8 flex items-center justify-between">    
  
          <p className="text-xl font-heading text-accent">Prenota il tuo tavolo</p>
          <button
          onClick={onClose}
          className=" text-accent hover:text-foreground transition-colors"
        >
          <FiX size={24} />
        </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-body text-foreground mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.fullName ? "border-destructive" : "border-input"
              } focus:outline-none focus:ring-2 focus:ring-ring`}
              placeholder="Nome e Cognome"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>

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
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              {errors.date && (
                <p className="mt-1 text-sm text-destructive">{errors.date}</p>
              )}
            </div>

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
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              {errors.time && (
                <p className="mt-1 text-sm text-destructive">{errors.time}</p>
              )}
            </div>
          </div>

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
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "persona" : "persone"}
                  </option>
                ))}
              </select>
            </div>
          </div>

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

      {showSuccess && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-card p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="mb-4 text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FiCheck className="text-primary text-xl" />
              </div>
              <h2 className="text-xl font-heading text-foreground mb-2">
                Prenotazione Confermata!
              </h2>
              <p className="text-accent text-sm">
                Grazie per aver scelto Pizzeria Fermento 2.0
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-sm">
                <strong>Nome:</strong> {formData.fullName}
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
    </div>
  );
};

export default ReservationModal;