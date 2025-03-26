import React from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import molecolaAbout from "../assets/molecolaAbout.jpeg";
import { FaPizzaSlice, FaHistory } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";

const HistorySection: React.FC = () => {
  const { t } = useTranslation();
  

  
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
  
  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7 } 
    }
  };
  
  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7 } 
    }
  };
  
  const textParaLeft = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5 } 
    }
  };
  
  const rotateCard = {
    hidden: { 
      rotate: 6 
    },
    visible: { 
      rotate: -2, 
      transition: { duration: 0.7 } 
    }
  };
  
  const rotateCardInner = {
    hidden: { 
      rotate: -6 
    },
    visible: { 
      rotate: 2, 
      transition: { duration: 0.7 } 
    }
  };
  
  const scaleInImage = {
    hidden: { 
      scale: 1.1 
    },
    visible: { 
      scale: 1, 
      transition: { duration: 0.8 } 
    }
  };
  
  const captionVariant = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      rotate: 8 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 2, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="about" className="pizza-section bg-pizza-background relative overflow-hidden">
      {/* Pattern di sfondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%235D4037\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titolo con decorazione e animazione migliorata */}
        <div className="text-center mb-16">
          <motion.span 
            variants={scaleIn}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            className="inline-block bg-pizza-red text-white p-3 rounded-full mb-4"
          >
            <FaHistory size={30} />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="pizza-title font-playfair text-5xl md:text-6xl"
          >
            {t("historySection.title")}
          </motion.h2>
          <motion.div
            variants={line}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.4 }}
            className="h-1 w-24 bg-pizza-red mx-auto mt-6 mb-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenuto testuale con animazioni a cascata e movimento orizzontale */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg"
          >
            {/* Testi lunghi per desktop con animazioni a cascata */}
            <div className="hidden lg:block space-y-6">
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-lg font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.paragraph1"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.5 }}
                className="text-gray-700 text-lg font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.paragraph2"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.7 }}
                className="text-gray-700 text-lg font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.paragraph3"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </motion.p>
            </div>

            {/* Testi brevi per mobile con animazioni a cascata */}
            <div className="block lg:hidden space-y-4">
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-base font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.shortParagraph1"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.5 }}
                className="text-gray-700 text-base font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.shortParagraph2"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </motion.p>
            </div>
          </motion.div>

          {/* Immagine con animazioni potenziate e ottimizzate per mobile - entrata da destra */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.3 }}
            className="relative h-[300px] md:h-[500px] w-full"
          >
            {/* Effetti con stratificazione animati */}
            <motion.div 
              variants={rotateCard}
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="absolute inset-0 bg-pizza-red rounded-2xl shadow-xl hover:rotate-[-1deg] transition-all duration-500"
            ></motion.div>
            <motion.div 
              variants={rotateCardInner}
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              transition={{ delay: 0.5 }}
              className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden hover:rotate-0 transition-all duration-500"
            >
              <motion.div
                variants={scaleInImage}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                className="w-full h-full"
              >
                <OptimizedImage
                  src={molecolaAbout}
                  alt={t("historySection.image.alt")}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
            </motion.div>
            
            {/* Didascalia con animazione potenziata */}
            <motion.div 
              variants={captionVariant}
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 right-8 bg-white p-4 rounded-lg shadow-lg max-w-[250px] hover:rotate-0 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-pizza-brown font-medium font-montserrat flex items-center">
                <span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <FaPizzaSlice className="mr-2 text-pizza-red" />
                  </motion.div>
                </span>
                <Trans
                  i18nKey="historySection.image.caption"
                  components={{ b: <span className="text-pizza-red" /> }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;