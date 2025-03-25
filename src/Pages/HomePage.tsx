// src/pages/HomePage.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ReservationModal from "../components/ReservationModal";
import AboutPage from "./AboutPage";
import VideoBackground from "../components/VideoBackground";
import useScrollToHash from "../hooks/useScrollToHash";
import SocialPosts from "../components/SocialPosts";

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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl text-pizza-brown mb-4">
              {t("homePage.socialTitle")}
            </h2>
            <div className="h-1 w-24 bg-pizza-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-montserrat">
              {t("homePage.socialSubtitle")}
            </p>
          </motion.div>
          
          <SocialPosts />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
