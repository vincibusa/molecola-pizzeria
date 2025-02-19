import { useState } from "react";
import { Link } from "react-router-dom";
import ReservationModal from "../components/ReservationModal";
import AboutPage from "./AboutPage";
import { motion } from "framer-motion";
import VideoBack from "../assets/PIZZE_SPOT_2.mp4";

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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={VideoBack} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 lg:px-16 text-center lg:text-left">
          <div className="w-full h-full mb-20 flex flex-col items-center  justify-end mb-8  lg:mt-[200px]">

            <div className="lg:w-fit flex flex-col items-center lg:items-end ">

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 lg:justify-around mt-8 w-full lg:mt-16 mb-[120px] lg:mb-0"
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
