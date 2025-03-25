import React from "react";
import { motion } from "framer-motion";
import { FaPizzaSlice, FaLeaf, FaUtensils } from "react-icons/fa";
import { GiCook, GiWheat } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const CulinaryPhilosophySection: React.FC = () => {
  const { t } = useTranslation();

  // Definiamo gli item utilizzando le chiavi di traduzione
  const philosophyItems = [
    {
      icon: <FaUtensils className="text-white text-4xl" />,
      titleKey: "culinaryPhilosophy.item1.title",
      descriptionKey: "culinaryPhilosophy.item1.description",
      color: "bg-pizza-red",
    },
    {
      icon: <FaLeaf className="text-white text-4xl" />,
      titleKey: "culinaryPhilosophy.item2.title",
      descriptionKey: "culinaryPhilosophy.item2.description",
      color: "bg-pizza-green",
    },
    {
      icon: <GiWheat className="text-white text-4xl" />,
      titleKey: "culinaryPhilosophy.item3.title",
      descriptionKey: "culinaryPhilosophy.item3.description",
      color: "bg-pizza-yellow",
    },
  ];

  return (
    <section className="pizza-section bg-pizza-brown relative text-white overflow-hidden">
      {/* Pattern di sfondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Intestazione sezione */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white text-pizza-brown p-3 rounded-full mb-4"
          >
            <GiCook size={30} />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-playfair text-5xl md:text-6xl mb-6"
          >
            {t("culinaryPhilosophy.title")}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-1 w-24 bg-white mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-200 max-w-2xl mx-auto mb-12 font-montserrat"
          >
            {t("culinaryPhilosophy.subtitle")}
          </motion.p>
        </div>
        
        {/* Cards di filosofia culinaria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Elemento decorativo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -right-20 -top-20 text-white"
          >
            <FaPizzaSlice size={200} />
          </motion.div>
          
          {/* Le cards */}
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pizza-card overflow-hidden bg-white text-gray-800 group"
            >
              {/* Colorful top section */}
              <div className={`${item.color} p-8 flex justify-center items-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="z-10 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-playfair mb-3 text-pizza-brown group-hover:text-pizza-red transition-colors">
                  {t(item.titleKey)}
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  {t(item.descriptionKey)}
                </p>
              </div>
              
              {/* Decorative number */}
              <div className="absolute top-4 right-4 border border-white/50 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-sm font-medium">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <blockquote className="italic text-xl md:text-2xl font-playfair max-w-3xl mx-auto px-6 relative">
            <div className="absolute -top-6 left-0 text-5xl text-white opacity-20">"</div>
            {t("culinaryPhilosophy.quote")}
            <div className="absolute -bottom-6 right-0 text-5xl text-white opacity-20">"</div>
          </blockquote>
          <p className="mt-6 text-gray-200 font-montserrat">— {t("culinaryPhilosophy.quoteAuthor")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CulinaryPhilosophySection;