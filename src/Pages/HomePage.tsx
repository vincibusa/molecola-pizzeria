// src/pages/HomePage.tsx
import { useState } from "react";
import ReservationModal from "../components/ReservationModal";
import AboutPage from "./AboutPage";
import VideoBackground from "../components/VideoBackground";
import useScrollToHash from "../hooks/useScrollToHash";
import SocialPosts from "../components/SocialPosts";

const HomePage: React.FC = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState<boolean>(false);

  // Utilizza il custom hook per lo scroll basato sull'hash
  useScrollToHash();

  const handleReservationClick = (): void => {
    setIsReservationModalOpen(true);
  };

  return (
    <>
      <VideoBackground onReservationClick={handleReservationClick} />
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
      <AboutPage />
      <SocialPosts/>
    </>
  );
};

export default HomePage;
