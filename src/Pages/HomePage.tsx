// src/pages/HomePage.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ReservationModal from "../components/ReservationModal";
import AboutPage from "./AboutPage";
import VideoBackground from "../components/VideoBackground";
import useScrollToHash from "../hooks/useScrollToHash";


const HomePage: React.FC = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  // Utilizza il custom hook per lo scroll basato sull'hash
  useScrollToHash();

  const handleReservationClick = (): void => {
    setIsReservationModalOpen(true);
  };

  // Animazione per le sezioni
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="overflow-x-hidden"
    >
      {/* Hero Section con video */}
      <motion.section
        variants={sectionVariants}
        className="relative"
      >
        <VideoBackground onReservationClick={handleReservationClick} />
      </motion.section>

      {/* Modale di prenotazione */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
      
  
      
      {/* About Page Components */}
      <AboutPage />
      
      {/* Social Posts */}
      <motion.section
        variants={sectionVariants}
        className="py-16 bg-pizza-background"
      >

      </motion.section>
    </motion.div>
  );
};

export default HomePage;
