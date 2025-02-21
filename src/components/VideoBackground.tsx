// src/components/VideoBackground.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import VideoBack from "../assets/videoOtt.mp4";
import CallToActionButtons from "./CallToActionButtons";

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
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 lg:px-16 text-center lg:text-left">
          <div className="w-full h-full flex flex-col items-center justify-end lg:mt-[220px]">
            <CallToActionButtons onReservationClick={onReservationClick} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default VideoBackground;
