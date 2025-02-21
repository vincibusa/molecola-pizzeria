import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReservationModal from "../components/ReservationModal";
import AboutPage from "./AboutPage";
import { motion } from "framer-motion";
import VideoBack from "../assets/videoOtt.mp4";
import Loader from "../components/Loader";

const HomePage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Rimuoviamo il carattere "#" per ottenere l'id
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Un piccolo timeout può aiutare se l'elemento non è subito disponibile
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <>
      {/* Mostra il Loader finché il video non è caricato */}
      {!videoLoaded && <Loader />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full"
        style={{ display: videoLoaded ? "block" : "none" }}
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoLoaded(true)}
            className="w-full h-full object-cover"
          >
            <source src={VideoBack} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 lg:px-16 text-center lg:text-left">
          <div className="w-full h-full flex flex-col items-center justify-end lg:mt-[200px]">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-16 mb-[120px]"
            >
              <button
                onClick={() => setIsReservationModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg text-lg whitespace-nowrap"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
                aria-label="Prenota il tavolo"
              >
                Prenota il tavolo
              </button>
              <Link to="/menu" className="w-full sm:w-auto">
                <button
                  className="w-full px-8 py-3 bg-white text-primary rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg text-lg whitespace-nowrap"
                  style={{ fontFamily: '"Gambetta", Sans-serif' }}
                  aria-label="Visualizza il Menù"
                >
                  Visualizza il Menù
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
      <AboutPage />
    </>
  );
};

export default HomePage;
