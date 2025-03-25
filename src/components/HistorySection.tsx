import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation, Trans } from "react-i18next";
import molecolaAbout from "../assets/molecolaAbout.jpeg";
import { FaPizzaSlice, FaHistory } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";

const HistorySection: React.FC = () => {
  const { ref } = useInView({ threshold: 0.5 });
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  // Non animare se l'utente preferisce animazioni ridotte
  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 }
      };

  return (
    <section id="about" ref={ref} className="pizza-section bg-pizza-background relative overflow-hidden">
      {/* Pattern di sfondo */}
      <div
        className="absolute inset-0 bg-fixed opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%235D4037\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titolo con decorazione */}
        <div className="text-center mb-16">
          <motion.span 
            {...animationProps}
            className="inline-block bg-pizza-red text-white p-3 rounded-full mb-4"
          >
            <FaHistory size={30} />
          </motion.span>
          <motion.h2
            {...(prefersReducedMotion ? {} : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 }
            })}
            className="pizza-title font-playfair text-5xl md:text-6xl"
          >
            {t("historySection.title")}
          </motion.h2>
          <motion.div
            {...(prefersReducedMotion ? {} : {
              initial: { scaleX: 0 },
              whileInView: { scaleX: 1 },
              transition: { duration: 0.7, delay: 0.4 }
            })}
            className="h-1 w-24 bg-pizza-red mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenuto testuale */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg"
          >
            {/* Testi lunghi per desktop */}
            <div className="hidden lg:block space-y-6">
              <p className="text-gray-700 text-lg font-montserrat leading-relaxed">
                <Trans
                  i18nKey="historySection.paragraph1"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </p>
              <p className="text-gray-700 text-lg font-montserrat leading-relaxed">
                <Trans
                  i18nKey="historySection.paragraph2"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </p>
              <p className="text-gray-700 text-lg font-montserrat leading-relaxed">
                <Trans
                  i18nKey="historySection.paragraph3"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </p>
            </div>

            {/* Testi brevi per mobile */}
            <div className="block lg:hidden space-y-4">
              <p className="text-gray-700 text-base font-montserrat leading-relaxed">
                <Trans
                  i18nKey="historySection.shortParagraph1"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </p>
              <p className="text-gray-700 text-base font-montserrat leading-relaxed">
                <Trans
                  i18nKey="historySection.shortParagraph2"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </p>
            </div>
            
            {/* Dettaglio decorativo */}
            <div className="absolute -bottom-3 -left-3 text-pizza-yellow opacity-20">
              <FaPizzaSlice size={60} />
            </div>
          </motion.div>

          {/* Immagine */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative h-[500px] w-full"
          >
            {/* Effetti con stratificazione */}
            <div className="absolute inset-0 bg-pizza-red rounded-2xl transform -rotate-3 shadow-xl"></div>
            <motion.div 
              className="absolute inset-0 bg-white rounded-2xl transform rotate-3 shadow-xl overflow-hidden"
              whileHover={{ scale: 1.03, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <OptimizedImage
                src={molecolaAbout}
                alt={t("historySection.image.alt")}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
            
            {/* Didascalia */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 right-8 bg-white p-4 rounded-lg shadow-lg transform rotate-3 max-w-[250px]"
            >
              <p className="text-pizza-brown font-medium font-montserrat flex items-center">
                <FaPizzaSlice className="mr-2 text-pizza-red" />
                <Trans
                  i18nKey="historySection.image.caption"
                  components={{ b: <span className="text-pizza-red" /> }}
                />
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;