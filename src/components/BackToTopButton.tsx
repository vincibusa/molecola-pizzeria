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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent transition-colors duration-300"
    >
      <IoArrowUp size={24} />
    </motion.button>
  );
};

export default BackToTopButton;
