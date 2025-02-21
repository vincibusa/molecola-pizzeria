// src/pages/AboutPage.tsx
import React, { useState, useEffect } from "react";
import HistorySection from "../components/HistorySection";
import TeamGallerySection from "../components/TeamGallerySection";
import CulinaryPhilosophySection from "../components/CulinaryPhilosophySection";
import PressSection from "../components/PressSection";
import BackToTopButton from "../components/BackToTopButton";

const AboutPage: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      <HistorySection />
      <TeamGallerySection />
      <CulinaryPhilosophySection />
      <PressSection />
      {showTopBtn && <BackToTopButton onClick={goToTop} />}
    </div>
  );
};

export default AboutPage;
