// src/components/VideoBackground.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import CallToActionButtons from "./CallToActionButtons";
import { useTranslation } from "react-i18next";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import OptimizedImage from "./OptimizedImage";

// Importazione delle immagini per il carosello
import pizza1 from "../assets/molecola/DSCF8191.png";
import ingredients from "../assets/molecola/DSCF8147.png";
import restaurant1 from "../assets/molecola/DSCF7915.jpg";
import pizza2 from "../assets/molecola/DSCF8076.jpg";
import restaurant2 from "../assets/molecola/DSCF8158.png";

interface VideoBackgroundProps {
  onReservationClick: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ onReservationClick }) => {
  const { t } = useTranslation();
  const progressControls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const SLIDE_DURATION = 5000; // Durata di ogni slide in millisecondi
  
  // Immagini per il carosello dalle foto di Molecola Pizzeria
  const carouselImages = [
    { 
      id: 1, 
      src: pizza1, // Pizza di alta qualità
      alt: t("carousel.pizzaAlt")
    },
    { 
      id: 2, 
      src: ingredients, // Ingredienti
      alt: t("carousel.ingredientsAlt")
    },
    { 
      id: 3, 
      src: restaurant1, // Interno del ristorante
      alt: t("carousel.restaurantAlt")
    },
    { 
      id: 4, 
      src: pizza2, // Altra pizza
      alt: t("carousel.pizzaAlt")
    },
    { 
      id: 5, 
      src: restaurant2, // Dettaglio interno ristorante
      alt: t("carousel.restaurantAlt")
    }
  ];
  
  // Stato per tenere traccia dell'immagine corrente
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Funzioni per la navigazione del carosello
  const goToPrevious = () => {
    resetProgressBar();
    setDirection(-1);
    setCurrentImage((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    resetProgressBar();
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const resetProgressBar = () => {
    // Resetta l'animazione della barra di progresso
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    progressControls.set({ scaleX: 0 });
    
    if (isAutoPlaying) {
      // Avvia una nuova animazione di progresso
      progressControls.start({
        scaleX: 1,
        transition: { 
          duration: SLIDE_DURATION / 1000, 
          ease: "linear" 
        }
      });
      
      // Imposta un nuovo intervallo per il cambio automatico
      intervalRef.current = setInterval(() => {
        goToNext();
      }, SLIDE_DURATION);
    }
  };
  
  // Pausa l'autoplay quando l'utente interagisce con il carosello
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    progressControls.stop();
  };
  
  // Riprendi l'autoplay dopo un po' di inattività
  const resumeAutoplay = () => {
    if (!isAutoPlaying) {
      setIsAutoPlaying(true);
      resetProgressBar();
    }
  };
  
  // Effetto per il cambio automatico delle immagini
  useEffect(() => {
    // Inizializza la barra di progresso
    resetProgressBar();
    
    // Pulisci l'intervallo quando il componente viene smontato
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);
  
  // Imposta un timer per riprendere l'autoplay dopo 10 secondi di inattività
  useEffect(() => {
    if (!isAutoPlaying) {
      const resumeTimer = setTimeout(() => {
        resumeAutoplay();
      }, 10000); // 10 secondi
      
      return () => clearTimeout(resumeTimer);
    }
  }, [isAutoPlaying]);
  
  // Varianti di animazione per il carosello
  const slideVariants = {
    enter: () => ({
      opacity: 0,
      scale: 1.03,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1.2, ease: "easeInOut" },
        scale: { duration: 1.5, ease: "easeOut" },
      }
    },
    exit: () => ({
      opacity: 0,
      scale: 1.05,
      transition: {
        opacity: { duration: 0.8, ease: "easeInOut" },
        scale: { duration: 1, ease: "easeIn" },
      }
    }),
  };

  // Varianti per i pulsanti di navigazione del carosello
  const navButtonVariants = {
    initial: { opacity: 0.7 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carosello di immagini di sfondo */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            className="absolute inset-0 will-change-transform"
          >
            <div className="relative w-full h-full">
              <OptimizedImage 
                src={carouselImages[currentImage].src} 
                alt={carouselImages[currentImage].alt}
                className="w-full h-full object-cover"
                loading="eager"
                onLoad={() => {
                  // Forzare il reflow per migliorare la qualità del rendering
                  window.dispatchEvent(new Event('resize'));
                }}
              />
              {/* Sfumatura per migliorare la leggibilità del testo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10"></div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Controlli del carosello - ora visibili anche su mobile */}
        <>
          {/* Pulsante precedente */}
          <motion.button
            onClick={() => {
              handleUserInteraction();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 shadow-lg"
            initial="initial"
            whileTap="tap"
            variants={navButtonVariants}
            aria-label={t("carousel.prevImage")}
          >
            <IoArrowBack size={24} />
          </motion.button>
          
          {/* Pulsante successivo */}
          <motion.button
            onClick={() => {
              handleUserInteraction();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 shadow-lg"
            initial="initial"
            whileTap="tap"
            variants={navButtonVariants}
            aria-label={t("carousel.nextImage")}
          >
            <IoArrowForward size={24} />
          </motion.button>
          
          {/* Indicatori del carosello */}
          <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-3 z-10">
            <div className="flex justify-center gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleUserInteraction();
                    setDirection(index > currentImage ? 1 : -1);
                    setCurrentImage(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-white ${
                    currentImage === index 
                      ? "bg-white w-8" 
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={t("carousel.goToImage", { number: index + 1 })}
                />
              ))}
            </div>
            
            {/* Barra di progresso - sempre visibile */}
            <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-pizza-red rounded-full origin-left"
                animate={progressControls}
                initial={{ scaleX: 0 }}
              />
            </div>
          </div>
        </>
      </div>

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenitore del contenuto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-playfair mb-4 leading-tight text-white drop-shadow-lg will-change-transform"
        >
          {t("heroSection.title")}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-32 h-1 bg-pizza-red mx-auto mb-8 will-change-transform"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl mb-12 max-w-2xl font-montserrat text-gray-100 drop-shadow-md will-change-transform"
        >
          {t("heroSection.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="will-change-transform"
        >
          <CallToActionButtons onReservationClick={onReservationClick} />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoBackground;