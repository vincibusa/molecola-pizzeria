import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPizzaSlice, FaLeaf, FaUtensils } from "react-icons/fa";
import { GiCook, GiWheat, } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";



const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const quoteVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 1.2, 
      delay: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const CulinaryPhilosophySection: React.FC = () => {
  const { t } = useTranslation();


  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    <section ref={ref} className="pizza-section bg-pizza-brown relative text-white overflow-hidden">
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-white text-pizza-brown p-3 rounded-full mb-4 hover:scale-110 hover:rotate-5 transition-all duration-500"
          >
            <GiCook size={30} />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-playfair text-5xl md:text-6xl mb-6"
          >
            {t("culinaryPhilosophy.title")}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-1 w-24 bg-white mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
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
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute -right-20 -top-20 text-white"
          >
            <FaPizzaSlice size={200} />
          </motion.div>
          
          {/* Le cards */}
          <AnimatePresence>
            {inView && philosophyItems.map((item, index) => (
              <motion.div
                key={item.titleKey}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.3 }}
                className="relative pizza-card overflow-hidden bg-white text-gray-800 group"
              >
                {/* Colorful top section */}
                <div className={`${item.color} p-8 flex justify-center items-center relative overflow-hidden`}>
                  {/* Overlay con opacità che cambia al passaggio del mouse */}
                  <div 
                    className="absolute inset-0 bg-white opacity-5 group-hover:opacity-20 transition-opacity duration-500"
                  />
                  <div 
                    className="z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" 
                  >
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl md:text-2xl font-playfair mb-3 text-pizza-brown group-hover:text-pizza-red transition-colors duration-500"
                  >
                    {t(item.titleKey)}
                  </h3>
                  <motion.p 
                    className="text-gray-600 font-montserrat leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  >
                    {t(item.descriptionKey)}
                  </motion.p>
                </div>
                
                {/* Decorative number */}
                <div 
                  className="absolute top-4 right-4 border border-white/50 text-white rounded-full w-8 h-8 flex items-center justify-center rotate-10 hover:scale-120 hover:rotate-0 transition-all duration-500"
                >
                  <span className="text-sm font-medium">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Quote */}
        <motion.div 
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="italic text-xl md:text-2xl font-playfair max-w-3xl mx-auto px-6 relative">
            <motion.div 
              className="absolute -top-6 left-0 text-5xl text-white opacity-20"
              animate={{ y: [0, -5, 0], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              "
            </motion.div>
            {t("culinaryPhilosophy.quote")}
            <motion.div 
              className="absolute -bottom-6 right-0 text-5xl text-white opacity-20"
              animate={{ y: [0, 5, 0], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              "
            </motion.div>
          </blockquote>
          <p className="mt-6 text-gray-200 font-montserrat">— {t("culinaryPhilosophy.quoteAuthor")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CulinaryPhilosophySection;