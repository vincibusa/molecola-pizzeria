import React from "react";
import { GiCook, GiWheat } from "react-icons/gi";
import { FaPizzaSlice, FaUtensils } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CulinaryPhilosophySection: React.FC = () => {
  const { t } = useTranslation();
  
  // Animazioni
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6 } 
    }
  };
  
  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5 } 
    }
  };
  
  const line = {
    hidden: { 
      scaleX: 0 
    },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.7 } 
    }
  };
  
  // Items per la filosofia culinaria
  const philosophyItems = [
    {
      titleKey: "culinaryPhilosophy.item1.title",
      descriptionKey: "culinaryPhilosophy.item1.description",
      color: "text-green-600",
      bgColor: "bg-green-100",
      icon: <FaUtensils size={32} className="text-green-600" />
    },
    {
      titleKey: "culinaryPhilosophy.item2.title",
      descriptionKey: "culinaryPhilosophy.item2.description",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      icon: <GiWheat size={32} className="text-amber-600" />
    },
    {
      titleKey: "culinaryPhilosophy.item3.title",
      descriptionKey: "culinaryPhilosophy.item3.description",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      icon: <FaPizzaSlice size={32} className="text-blue-600" />
    }
  ];

  return (
    <section id="philosophy" className="pizza-section bg-white relative overflow-hidden py-24">
      {/* Pattern di sfondo */}
      <div
        className="absolute inset-0 bg-white"
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Intestazione della sezione */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span 
            variants={scaleIn}
            className="inline-block bg-white text-pizza-brown p-3 rounded-full mb-4 hover:scale-110 hover:rotate-5 transition-all duration-500"
          >
            <GiCook size={30} />
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="pizza-title text-3xl md:text-4xl"
          >
            {t("culinaryPhilosophy.title")}
          </motion.h2>
          <motion.div 
            variants={line}
            className="h-1 w-24 bg-pizza-red mx-auto mt-6 mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 max-w-3xl mx-auto font-montserrat text-base md:text-lg"
          >
            {t("culinaryPhilosophy.subtitle")}
          </motion.p>
        </motion.div>
        
        {/* Griglia dei principi culinari in layout orizzontale (3 colonne) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.titleKey}
              className="text-center px-4 py-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`${item.bgColor} p-5 rounded-full mx-auto mb-6 w-24 h-24 flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className={`text-xl md:text-2xl font-playfair mb-4 ${item.color}`}>
                {t(item.titleKey)}
              </h3>
              <p className="text-gray-600 font-montserrat max-w-xs mx-auto">
                {t(item.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Citazione in evidenza */}
        <motion.div 
          className="max-w-3xl mx-auto py-10 px-10 bg-pizza-background rounded-lg mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="text-5xl text-pizza-red opacity-20 font-serif leading-none absolute -top-2 left-4">"</div>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-700 font-montserrat mb-6 italic text-center relative z-10"
          >
            {t("culinaryPhilosophy.quote")}
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-right text-pizza-red font-medium"
          >
            {t("culinaryPhilosophy.quoteAuthor")}
          </motion.p>
          <div className="text-5xl text-pizza-red opacity-20 font-serif leading-none absolute -bottom-6 right-4">"</div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <motion.a 
            href="https://molecola.dwmenu.it/le-pizze/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pizza-btn bg-pizza-red text-white px-8 py-4 text-lg hover:bg-pizza-brown transition-colors duration-300"
            variants={scaleIn}
          >
            <span className="flex items-center">
              <FaUtensils className="mr-2" />
              {t("viewMenuButton")}
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CulinaryPhilosophySection;