import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaNewspaper, FaQuoteLeft, FaQuoteRight, FaExternalLinkAlt } from "react-icons/fa";
import Bollino from "../assets/web gambero-02.png";

interface PressArticle {
  title: string;
  preview: string;
  image: string;
  link: string;
  source?: string;
  date?: string;
}

const pressArticles: PressArticle[] = [
  {
    title:
      "Fermento 2.0: La pizzeria dei fratelli Mirenda a Cefalù conquista il Gambero Rosso",
    preview:
      "I fratelli Salvatore e Rosario Mirenda hanno conquistato il prestigioso riconoscimento del Gambero Rosso con la loro pizzeria Fermento 2.0 a Cefalù. La guida 'Pizzerie d'Italia 2024' ha assegnato loro 'Uno Spicchio', premiando la loro dedizione all'arte della pizza e l'utilizzo di ingredienti di alta qualità.",
    image:
      "https://www.allfoodsicily.it/wp-content/uploads/2024/10/Fermento-1-e1727942311536.jpeg",
    link: "https://www.allfoodsicily.it/fermento-2-0-la-pizzeria-dei-fratelli-mirenda-a-cefalu-conquista-il-gambero-rosso-pronti-ad-alzare-lasticella/",
    source: "AllFoodSicily",
    date: "Ottobre 2024"
  },
  // altri articoli...
];

const PressSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="press" className="pizza-section bg-pizza-background relative overflow-hidden">
      {/* Pattern di sfondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'44\' height=\'44\' viewBox=\'0 0 44 44\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg id=\'Page-1\' fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg id=\'brick-wall\' fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M0 0h22v22H0V0zm22 22h22v22H22V22z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Intestazione sezione */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-pizza-red text-white p-3 rounded-full mb-4"
          >
            <FaNewspaper size={30} />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pizza-title"
          >
            {t("pressSection.heading")}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-1 w-24 bg-pizza-red mx-auto mt-6 mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto font-montserrat"
          >
            {t("pressSection.subtitle")}
          </motion.p>
        </div>

        {/* Layout a due colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
          {/* Sezione riconoscimento Gambero Rosso */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pizza-card p-8 relative overflow-hidden"
          >
            {/* Ribbon */}
            <div className="absolute top-5 -left-12 bg-pizza-red text-white py-1 px-12 transform -rotate-45 text-sm font-bold shadow-md">
              {t("pressSection.award")}
            </div>
            
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3
                }}
                className="w-48 h-48 mb-6 relative"
              >
                <img
                  src={Bollino}
                  alt={t("pressSection.leftArticle.imageAlt")}
                  className="w-full h-full object-contain"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-pizza-red opacity-10 rounded-full blur-xl"></div>
              </motion.div>
              
              <FaQuoteLeft className="text-pizza-red opacity-30 text-3xl mb-4" />
              
              <h3 className="text-2xl font-playfair text-pizza-brown text-center mb-4">
                {t("pressSection.leftArticle.title")}
              </h3>
              
              <p className="italic text-gray-600 text-center font-montserrat mb-8 leading-relaxed">
                {t("pressSection.leftArticle.preview")}
              </p>
              
              <FaQuoteRight className="text-pizza-red opacity-30 text-3xl mb-6" />
              
              <div className="border-t border-gray-200 pt-6 w-full">
                <p className="text-center text-gray-500 font-montserrat text-sm">
                  {t("pressSection.leftArticle.source")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sezione articoli */}
          <div className="space-y-8">
            {pressArticles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pizza-card flex flex-col md:flex-row overflow-hidden group transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="w-full md:w-2/5 h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Source badge */}
                  {article.source && (
                    <div className="absolute top-3 left-3 bg-pizza-red text-white text-xs py-1 px-3 rounded-full">
                      {article.source}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 w-full md:w-3/5">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-playfair text-pizza-brown group-hover:text-pizza-red transition-colors duration-300 mb-3 pr-6">
                      {article.title}
                    </h4>
                    <FaExternalLinkAlt className="text-pizza-red opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <p className="text-gray-600 font-montserrat text-sm mb-4 line-clamp-3">
                    {article.preview}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-pizza-red font-medium text-sm">
                      {t("pressSection.article.readMore")}
                    </span>
                    
                    {article.date && (
                      <span className="text-gray-400 text-xs">
                        {article.date}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-12"
            >
              <Link to="/blog" className="pizza-btn bg-pizza-brown text-white px-8 py-3">
                {t("pressSection.readMoreArticles")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;