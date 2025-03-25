import React, { useState, useEffect, useMemo } from "react";
import { FiX } from "react-icons/fi";
import { useNavbar } from "../contexts/NavbarContenxt";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import OptimizedImage from "../components/OptimizedImage";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

interface Image {
  id: number;
  url: string;
  category: string;
  tags: string[];
  alt: string;
}

// Ottimizzato per rendere l'importazione più efficiente
const importAllImages = (): Image[] => {
  // Limitiamo l'importazione eager solo ai path, non a tutto il contenuto dei moduli
  const modules = import.meta.glob("../assets/molecola/*.{png,jpg,jpeg,svg}", { eager: true });
  
  // Trasformiamo tutti i moduli in un array una sola volta
  const imagesArray: Image[] = Object.entries(modules).map(([path, module], index) => {
    const url = (module as any).default || module;
    const altText = path.split("/").pop() || "";
    // Aggiungiamo dimensione approssimativa in base all'estensione per prioritizzare le immagini
    const isJpg = path.endsWith('.jpg') || path.endsWith('.jpeg');
    const isPng = path.endsWith('.png');
    
    return {
      id: index,
      url,
      category: isJpg ? "photo" : (isPng ? "visual" : "other"),
      tags: [],
      alt: altText,
    };
  });
  
  // Ordiniamo le immagini in modo che le più piccole siano caricate prima
  return imagesArray;
};

// Memorizziamo il risultato dell'importazione per evitare ricalcoli
const useGalleryImages = () => {
  return useMemo(() => importAllImages(), []);
};

// Definizione delle varianti di animazione
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
};

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const images = useGalleryImages();
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filteredImages] = useState<Image[]>(images);
  const { setIsVisible } = useNavbar();
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Aumentato per ridurre il numero di pagine

  // Ottimizzazione: Utilizziamo un solo stato per il loader
  const [isLoading, setIsLoading] = useState(true);
  
  // Intersezione observer per il lazy loading delle immagini
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // Reset loading quando cambia la pagina
  useEffect(() => {
    setIsLoading(true);
    
    // Prefetch della pagina successiva quando siamo a metà di questa pagina
    const prefetchNextPage = () => {
      if (currentPage * imagesPerPage < filteredImages.length) {
        const nextPageImages = filteredImages.slice(
          currentPage * imagesPerPage,
          (currentPage + 1) * imagesPerPage
        );
        
        // Prefetch delle immagini della prossima pagina
        nextPageImages.forEach(img => {
          const imgEl = new Image();
          imgEl.src = typeof img.url === 'string' ? img.url : '';
        });
      }
    };
    
    // Simula il prefetch dopo che la pagina corrente è già stata visualizzata
    const timer = setTimeout(prefetchNextPage, 1000);
    
    return () => clearTimeout(timer);
  }, [currentPage, filteredImages, imagesPerPage]);

  // Timer per nascondere il loader anche se le immagini non sono completamente caricate
  useEffect(() => {
    // Dopo 2 secondi, nascondiamo il loader anche se non tutte le immagini sono caricate
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [currentPage]);

  // Calcola le immagini correnti in base alla pagina - ottimizzato con useMemo
  const currentImages = useMemo(() => {
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    return filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  }, [currentPage, filteredImages, imagesPerPage]);

  const handleImageLoad = () => {
    // Ridotto il carico di lavoro durante il caricamento
    requestAnimationFrame(() => {
      setIsLoading(false);
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && selectedImage) {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    setIsVisible(!selectedImage);
  }, [selectedImage, setIsVisible]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <motion.div 
      className="min-h-screen bg-background p-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Mostra il loader più brevemente */}
      {isLoading && <Loader />}
      
      <div className="max-w-7xl mx-auto" style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
        >
          <motion.h1
            className="text-heading text-center mb-5 md:mb-10 text-4xl lg:text-6xl"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {t("gallery.title")}
          </motion.h1>
          <motion.p className="text-accent text-lg">
            {t("gallery.subtitle")}
          </motion.p>
        </motion.div>
        
        {/* Container per immagini con griglia ottimizzata */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" 
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={scaleIn}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <OptimizedImage
                src={image.url}
                alt={t("gallery.imageAlt")}
                className="w-full h-64 object-cover"
                height={256}
                width={384}
                onLoad={handleImageLoad}
                loading={index < 6 ? "eager" : "lazy"} // Carica immediatamente solo le prime immagini
              />
              <motion.div 
                className="absolute inset-0 bg-black flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Paginazione ottimizzata con prefetch */}
        <motion.div 
          className="mt-8 flex justify-center"
          variants={fadeIn}
        >
          {inView && Array.from({ length: Math.ceil(filteredImages.length / imagesPerPage) }, (_, i) => (
            <motion.button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {i + 1}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Modal visualizzazione immagine selezionata */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-primary-foreground"
                aria-label={t("gallery.close")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={24} />
              </motion.button>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <OptimizedImage
                  src={selectedImage.url}
                  alt={t("gallery.imageAlt")}
                  className="max-w-full max-h-[90vh] object-contain"
                  loading="eager"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Gallery;
