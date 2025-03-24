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
      {/* Header della pagina */}
      <motion.div 
        className="relative h-64 md:h-80 bg-pizza-brown flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Pattern di sfondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-repeat" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
      
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-playfair text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            La Nostra Storia
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-1 w-24 bg-pizza-red mx-auto"
          />
        </div>
        
        {/* Elementi decorativi */}
        <motion.div 
          className="absolute -bottom-5 left-1/4 text-pizza-red opacity-20 transform rotate-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 12 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5M7.5,10.5A1.5,1.5 0 0,0 6,12A1.5,1.5 0 0,0 7.5,13.5A1.5,1.5 0 0,0 9,12A1.5,1.5 0 0,0 7.5,10.5M16.5,10.5A1.5,1.5 0 0,0 15,12A1.5,1.5 0 0,0 16.5,13.5A1.5,1.5 0 0,0 18,12A1.5,1.5 0 0,0 16.5,10.5Z" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-5 right-1/4 text-pizza-yellow opacity-20 transform -rotate-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1, rotate: -12 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C7.4,22 3.55,18.92 2.36,14.73L6.19,9.13L9.92,13.14L13.95,7.2L14.88,13.47L18.38,12.24L21.64,14.73C20.45,18.92 16.6,22 12,22M12,4C14.74,4 17.17,5.34 18.78,7.44L16.29,9.19L12.75,10.33L11.59,3.34C11.73,3.12 11.87,2.92 12,2.74V4M7.95,5.09L9.92,7.35L6.94,10.5L3.71,16.26C3.24,14.97 3,13.53 3,12C3,9.27 4.22,6.81 6.05,5.09L7.95,5.09Z" />
          </svg>
        </motion.div>
      </motion.div>
      
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
              "La tradizione è il segreto del gusto"
            </p>
            <div className="w-16 h-1 bg-pizza-red mx-auto my-6" />
            <p className="text-gray-600 font-montserrat">
              Molecola Pizzeria ~ Dal 2020
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
