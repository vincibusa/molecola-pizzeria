import { useState } from "react";
import { Link } from "react-router-dom";
import ReservationModal from "../components/ReservationModal";
import AboutPage from "./AboutPage";
import { motion } from "framer-motion";
import Sfondo from "../assets/sfondo.jpg";

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
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 lg:px-16 text-center lg:text-left">
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mb-8 lg:mb-0 lg:mt-[200px]">
            <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl text-nowrap md:text-7xl lg:text-[150px] font-bold text-white mb-4 lg:mb-0 lg:w-1/2 lg:-mt-20 leading-none"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
          >
              Fermento 2.0
            </motion.h1>
            <div className="lg:w-fit flex flex-col items-center lg:items-end">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
                className="text-2xl md:text-4xl lg:text-5xl text-white lg:mt-40"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              Autenticità in ogni morso
            </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 lg:justify-around mt-8 w-full lg:mt-16"
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
