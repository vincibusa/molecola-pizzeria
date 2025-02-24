import { motion } from "framer-motion";

interface CallToActionButtonsProps {
  onReservationClick: () => void;
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({ onReservationClick }) => {
  const buttonClasses =
    "w-full sm:w-auto px-4 sm:px-8 py-3 rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg text-base sm:text-lg whitespace-nowrap max-w-[180px] sm:max-w-none";

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
      className="flex flex-col sm:flex-row gap-4 lg:gap-10 mt-8 lg:mt-16 mb-[120px] items-center sm:items-stretch"
    >
      <button
        onClick={onReservationClick}
        className={`${buttonClasses} bg-primary text-white`}
        style={{ fontFamily: '"Gambetta", Sans-serif' }}
        aria-label="Prenota il tavolo"
      >
        Prenota il tavolo
      </button>
      <a
        href="/Menu_FEB2025_STMP.pdf" // Assicurati che il file sia presente nella cartella public
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto max-w-[180px] sm:max-w-none"
      >
        <button
          className={`${buttonClasses} bg-white text-primary`}
          style={{ fontFamily: '"Gambetta", Sans-serif' }}
          aria-label="Visualizza il Menù"
        >
          Visualizza il Menù
        </button>
      </a>
    </motion.div>
  );
};

export default CallToActionButtons;