// src/pages/AboutPage.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import HistorySection from "../components/HistorySection";
import TeamGallerySection from "../components/TeamGallerySection";
import CulinaryPhilosophySection from "../components/CulinaryPhilosophySection";
import PressSection from "../components/PressSection";
import BackToTopButton from "../components/BackToTopButton";
import { FaPizzaSlice } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animazione per le sezioni
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="bg-pizza-background min-h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Contenuto principale */}
      <HistorySection />
      <TeamGallerySection />
      <CulinaryPhilosophySection />
      <PressSection />
      
      {/* Separatore decorativo */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-pizza-brown font-playfair text-3xl italic">
              {t("aboutPage.quote")}
            </p>
            <div className="w-16 h-1 bg-pizza-red mx-auto my-6" />
            <p className="text-gray-600 font-montserrat">
              Molecola Pizzeria ~ {t("aboutPage.since")} 2020
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Pulsante torna su */}
      {showTopBtn && <BackToTopButton onClick={goToTop} />}
    </motion.div>
  );
};

export default AboutPage;
