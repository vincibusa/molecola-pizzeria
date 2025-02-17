import { useState } from "react";
import { Link } from "react-router-dom";
import ReservationModal from "../components/ReservationModal";
import AboutPage from "./AboutPage";
import { motion } from "framer-motion"; // Add this import
import Sfondo from "../assets/sfondo.jpg"; // Add this import

const HomePage = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full"
      >
        <div className="absolute inset-0">
          <img
            src={Sfondo}
            alt="Pizza background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Fermento 2.0
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            Autenticità in ogni morso
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setIsReservationModalOpen(true)}
              className="px-8 py-3 bg-primary text-white rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              aria-label="Prenota il tavolo"
            >
              Prenota il tavolo
            </button>
            <Link to="/menu">
              <button
                className="px-8 py-3 bg-white text-primary rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                aria-label="Visualizza il Menù"
              >
                Visualizza il Menù
              </button>
            </Link>
          </motion.div>
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
