// src/components/VideoBackground.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import CallToActionButtons from "./CallToActionButtons";
import { useTranslation } from "react-i18next";
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
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const dividerControls = useAnimation();
  const buttonControls = useAnimation();
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
  const goToNext = () => {
    resetProgressBar();
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  // Animazione degli elementi al caricamento
  useEffect(() => {
    const sequence = async () => {
      await titleControls.start({ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.7, 
          ease: "easeOut" 
        }
      });
      
      await dividerControls.start({ 
        width: "8rem", 
        opacity: 1,
        transition: { 
          duration: 0.4, 
          ease: "easeOut" 
        }
      });
      
      await subtitleControls.start({ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.7, 
          ease: "easeOut" 
        }
      });
      
      await buttonControls.start({ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.7, 
          ease: "easeOut" 
        }
      });
    };
    
    sequence();
  }, []);

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

  // Varianti per le animazioni delle immagini
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carosello di immagini di sfondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentImage}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Indicatori del carosello con barra di progresso */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleUserInteraction();
                setDirection(index > currentImage ? 1 : -1);
                setCurrentImage(index);
              }}
              className="relative group"
              aria-label={t("carousel.goToImage", { number: index + 1 })}
            >
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === index 
                    ? "bg-white w-8" 
                    : "bg-white/50 hover:bg-white/70"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              {currentImage === index && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-pizza-red rounded-full"
                  style={{ width: "100%", originX: 0 }}
                  initial={{ scaleX: 0 }}
                  animate={progressControls}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenitore del contenuto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-playfair mb-6 leading-tight text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
        >
          {t("heroSection.title")}
        </motion.h1>

        <motion.div 
          className="h-1 bg-pizza-red mx-auto mb-8"
          initial={{ width: 0, opacity: 0 }}
          animate={dividerControls}
        ></motion.div>

        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-2xl font-montserrat text-gray-100 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={subtitleControls}
        >
          {t("heroSection.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={buttonControls}
        >
          <CallToActionButtons onReservationClick={onReservationClick} />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoBackground;