// src/components/CallToActionButtons.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CallToActionButtonsProps {
  onReservationClick: () => void;
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({ onReservationClick }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
      className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-16 mb-[120px]"
    >
      <button
        onClick={onReservationClick}
        className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg text-lg whitespace-nowrap"
        style={{ fontFamily: '"Gambetta", Sans-serif' }}
        aria-label="Prenota il tavolo"
      >
        Prenota il tavolo
      </button>
      <Link to="/menu" className="w-full sm:w-auto">
        <button
          className="w-full px-8 py-3 bg-white text-primary rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg text-lg whitespace-nowrap"
          style={{ fontFamily: '"Gambetta", Sans-serif' }}
          aria-label="Visualizza il Menù"
        >
          Visualizza il Menù
        </button>
      </Link>
    </motion.div>
  );
};

export default CallToActionButtons;
