import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaUtensils, FaCalendarAlt } from "react-icons/fa";

interface CallToActionButtonsProps {
  onReservationClick: () => void;
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({ onReservationClick }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#e03e52" }}
        whileTap={{ scale: 0.98 }}
        onClick={onReservationClick}
        className="pizza-btn bg-pizza-red text-white px-8 py-3 flex items-center justify-center space-x-2 min-w-[180px]"
      >
        <FaCalendarAlt className="mr-2" />
        <span className="font-montserrat font-medium">{t("reservationButton")}</span>
      </motion.button>

      <Link to="/menu" className="min-w-[180px]">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#FFB74D" }}
          whileTap={{ scale: 0.98 }}
          className="pizza-btn bg-pizza-yellow text-white px-8 py-3 w-full flex items-center justify-center"
        >
          <FaUtensils className="mr-2" />
          <span className="font-montserrat font-medium">{t("viewMenuButton")}</span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CallToActionButtons;