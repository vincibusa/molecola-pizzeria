// src/components/VideoBackground.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import VideoBack from "../assets/videoDef.mp4";
import CallToActionButtons from "./CallToActionButtons";
import { useTranslation } from "react-i18next";

interface VideoBackgroundProps {
  onReservationClick: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ onReservationClick }) => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <>
      {!videoLoaded && <Loader />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full overflow-hidden"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-pizza-red opacity-5 mix-blend-multiply" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'44\' height=\'44\' viewBox=\'0 0 44 44\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg id=\'Page-1\' fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg id=\'brick-wall\' fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M0 0h22v22H0V0zm22 22h22v22H22V22z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
          {/* Animated Pizza Logo */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center p-3 shadow-2xl">
              <img src="/logo-icon.svg" alt="Pizza Logo" className="w-16 h-16 md:w-20 md:h-20" />
            </div>
          </motion.div>
          
          {/* Hero Text */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-4 drop-shadow-lg"
          >
            {t("heroTitle")}
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl drop-shadow-md font-montserrat"
          >
            {t("heroSubtitle")}
          </motion.p>
          
          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-24 h-1 bg-pizza-red rounded-full mb-10"
          />
          
          {/* Call to action */}
          <CallToActionButtons onReservationClick={onReservationClick} />
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              delay: 1.5, 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute bottom-8 left-0 right-0 flex justify-center"
          >
            <div className="flex flex-col items-center">
              <p className="text-white text-sm mb-2">{t("scrollDown")}</p>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path 
                  d="M12 5V19M12 19L19 12M12 19L5 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default VideoBackground;