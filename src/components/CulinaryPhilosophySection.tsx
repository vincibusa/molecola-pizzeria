import React from "react";
import { GiCook, GiWheat } from "react-icons/gi";
import { FaPizzaSlice, FaLeaf, FaUtensils } from "react-icons/fa";
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
      color: "bg-gradient-to-br from-green-400 to-green-600",
      icon: <FaLeaf size={40} className="text-white" />
    },
    {
      titleKey: "culinaryPhilosophy.item2.title",
      descriptionKey: "culinaryPhilosophy.item2.description",
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      icon: <GiWheat size={40} className="text-white" />
    },
    {
      titleKey: "culinaryPhilosophy.item3.title",
      descriptionKey: "culinaryPhilosophy.item3.description",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      icon: <FaPizzaSlice size={40} className="text-white" />
    }
  ];

  return (
    <section id="philosophy" className="pizza-section bg-white relative overflow-hidden">
      {/* Pattern di sfondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'44\' height=\'44\' viewBox=\'0 0 44 44\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg id=\'Page-1\' fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg id=\'brick-wall\' fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M0 0h22v22H0V0zm22 22h22v22H22V22z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>
      
      <div className="container mx-auto px-4  relative z-10">
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
            className="pizza-title"
          >
            {t("culinaryPhilosophy.title")}
          </motion.h2>
          <motion.div 
            variants={line}
            className="h-1 w-24 bg-pizza-red mx-auto mt-6 mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto font-montserrat"
          >
            {t("culinaryPhilosophy.subtitle")}
          </motion.p>
        </motion.div>
        
        {/* Griglia di carte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.titleKey}
              className="relative pizza-card overflow-hidden bg-white text-gray-800 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              {/* Colorful top section */}
              <div className={`${item.color} p-8 flex justify-center items-center relative overflow-hidden`}>
                {/* Overlay con opacità che cambia al passaggio del mouse */}
                <div 
                  className="absolute inset-0 bg-white opacity-5 group-hover:opacity-20 transition-opacity duration-500"
                />
                <motion.div 
                  className="z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" 
                  variants={scaleIn}
                >
                  {item.icon}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl md:text-2xl font-playfair mb-3 text-pizza-brown group-hover:text-pizza-red transition-colors duration-500"
                >
                  {t(item.titleKey)}
                </h3>
                <p 
                  className="text-gray-600 font-montserrat leading-relaxed"
                >
                  {t(item.descriptionKey)}
                </p>
              </div>
              
              {/* Decorative number */}
              <motion.div 
                variants={scaleIn}
                className="absolute top-4 right-4 border border-white/50 text-white rounded-full w-8 h-8 flex items-center justify-center rotate-10 hover:scale-120 hover:rotate-0 transition-all duration-500"
              >
                <span className="text-sm font-medium">{index + 1}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-700 font-montserrat mb-6"
          >
            {t("culinaryPhilosophy.quote")}
          </motion.p>
          <motion.a 
            href="https://molecola.dwmenu.it/le-pizze/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pizza-btn bg-pizza-red text-white px-8 py-3 hover:bg-pizza-brown transition-colors duration-300"
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