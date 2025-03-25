// src/pages/AboutPage.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import HistorySection from "../components/HistorySection";
import TeamGallerySection from "../components/TeamGallerySection";
import CulinaryPhilosophySection from "../components/CulinaryPhilosophySection";
import PressSection from "../components/PressSection";
import BackToTopButton from "../components/BackToTopButton";


const AboutPage: React.FC = () => {

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
      
  
      
      {/* Pulsante torna su */}
      {showTopBtn && <BackToTopButton onClick={goToTop} />}
    </motion.div>
  );
};

export default AboutPage;
