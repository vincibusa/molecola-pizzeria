// src/components/VideoBackground.tsx
import React, { useState, useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
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
  const [, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Funzioni per la navigazione del carosello
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carosello di immagini di sfondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
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
        </div>
        
        {/* Indicatori del carosello */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleUserInteraction();
                setDirection(index > currentImage ? 1 : -1);
                setCurrentImage(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={t("carousel.goToImage", { number: index + 1 })}
            />
          ))}
        </div>
      </div>

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenitore del contenuto */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-playfair mb-6 leading-tight text-white drop-shadow-lg">
          {t("heroSection.title")}
        </h1>

        <div className="w-32 h-1 bg-pizza-red mx-auto mb-8"></div>

        <p className="text-xl md:text-2xl mb-12 max-w-2xl font-montserrat text-gray-100 drop-shadow-md">
          {t("heroSection.subtitle")}
        </p>

        <div>
          <CallToActionButtons onReservationClick={onReservationClick} />
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;