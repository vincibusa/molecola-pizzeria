import { useState } from "react";
import { Link } from "react-router-dom";
import ReservationModal from "../components/ReservationModal";

const HomePage = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          {/* Usa un normale tag <img> al posto di Image di Next.js */}
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Pizza background"
            className="w-full h-full object-cover" // Usa classi Tailwind per object-fit
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Fermento 2.0
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Autenticità in ogni morso
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      </div>
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
};

export default HomePage;