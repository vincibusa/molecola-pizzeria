// src/components/VideoBackground.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import VideoBack from "../assets/PIZZE_SPOT_NOLOGO_1-ott.mp4";
import CallToActionButtons from "./CallToActionButtons";
import logo from "../assets/logo.png";

interface VideoBackgroundProps {
  onReservationClick: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ onReservationClick }) => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  return (
    <>
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
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-between">
          <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
              className="flex  items-center opacity-70"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={logo}
              alt="Fermento 2.0 Logo"
                className="w-40 md:w-52 lg:w-64 mb-4 opacity-70"
            />
              <div className="opacity-70 text-gray-300 text-6xl md:text-7xl lg:text-8xl font-bold text-center" style={{ fontFamily: '"Gambetta", Sans-serif' }}>
              <div className="flex">Fer</div>
              <div className="flex">Mento2.0</div>
            </div>
          </motion.div>
        </div>
          <div className="absolute bottom-20 lg:bottom-0 left-0 right-0 flex justify-center">
            <CallToActionButtons onReservationClick={onReservationClick} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default VideoBackground;
