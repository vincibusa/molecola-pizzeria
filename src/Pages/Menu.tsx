import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaPizzaSlice } from "react-icons/fa";
import Loader from "../components/Loader";

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const externalMenuUrl = "https://molecola.dwmenu.it/le-pizze/";

  useEffect(() => {
    // Reindirizza all'URL esterno appena il componente viene montato
    window.location.href = externalMenuUrl;
  }, [externalMenuUrl]);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-pizza-background p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 15 }}
        className="bg-white p-8 md:p-12 rounded-lg shadow-xl text-center max-w-md"
      >
        <motion.div 
          className="mx-auto w-16 h-16 bg-pizza-red rounded-full flex items-center justify-center mb-4"
          animate={{ 
            rotate: [0, 360], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <FaPizzaSlice className="text-white text-2xl" />
        </motion.div>
        
        <h1 className="text-2xl font-bold text-pizza-brown mb-2">
          {t("loading")}
        </h1>
        
        <p className="text-gray-600 mb-4">
          Ti stiamo reindirizzando al nostro menu...
        </p>
        
        <Loader />
        
        <p className="text-sm text-gray-500 mt-6">
          Se non vieni reindirizzato automaticamente, 
          <a 
            href={externalMenuUrl}
            className="text-pizza-red hover:underline ml-1"
          >
            clicca qui
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Menu; 