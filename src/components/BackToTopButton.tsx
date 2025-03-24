// src/components/BackToTopButton.tsx
import React from "react";
import { motion } from "framer-motion";
import { IoArrowUp } from "react-icons/io5";

interface BackToTopButtonProps {
  onClick: () => void;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-pizza-red text-white p-3 rounded-full shadow-lg hover:bg-pizza-brown hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center w-12 h-12"
      aria-label="Torna in cima"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <IoArrowUp size={24} />
    </motion.button>
  );
};

export default BackToTopButton;
