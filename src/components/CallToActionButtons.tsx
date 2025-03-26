import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { FaUtensils, FaCalendarAlt } from "react-icons/fa";

interface CallToActionButtonsProps {
  onReservationClick: () => void;
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({ onReservationClick }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
      <motion.button
        onClick={onReservationClick}
        className="pizza-btn bg-pizza-red text-white px-8 py-3 active:scale-95 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FaCalendarAlt className="mr-2" />
        <span className="font-montserrat font-medium">{t("reservationButton")}</span>
      </motion.button>
      
      <motion.a
        href="#menu"
        className="pizza-btn bg-pizza-yellow text-pizza-brown px-8 py-3 active:scale-95 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <FaUtensils className="mr-2" />
        <span className="font-montserrat font-medium">{t("viewMenuButton")}</span>
      </motion.a>
    </div>
  );
};

export default CallToActionButtons;