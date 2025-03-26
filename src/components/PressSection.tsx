import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaNewspaper, FaQuoteLeft, FaQuoteRight, FaExternalLinkAlt } from "react-icons/fa";

import Bollino from "../assets/web gambero-02.png";
import OptimizedImage from "./OptimizedImage";

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
      "Molecola: L'innovazione gastronomica nel cuore di Palermo conquista i foodie siciliani",
    preview:
      "Nel centro di Palermo, a pochi passi da Piazza Politeama, Molecola si distingue per il suo approccio rivoluzionario alla pizza. Lo chef Salvatore Capizzi ha creato un menu che esplora tecniche molecolari avanzate, trasformando la tradizionale pizza siciliana in un'esperienza gastronomica multisensoriale che sta conquistando appassionati e critici.",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=2070&auto=format&fit=crop",
    link: "https://molecolapizzeria.it/blog/innovazione-gastronomica-palermo",
    source: "FoodBlogSicilia",
    date: "Marzo 2024"
  },
  {
    title:
      "Le nuove frontiere della pizza: Molecola Pizzeria presenta 'La Fluorescente'",
    preview:
      "Un'esperienza culinaria che va oltre il gusto: Molecola Pizzeria ha lanciato 'La Fluorescente', una pizza che utilizza ingredienti naturali con proprietà bioluminescenti che creano un effetto visivo sorprendente. Questo piatto rappresenta perfettamente la filosofia dello chef Capizzi di creare esperienze gastronomiche che coinvolgono tutti i sensi.",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=2070&auto=format&fit=crop",
    link: "https://molecolapizzeria.it/blog/pizza-fluorescente",
    source: "Palermo Today",
    date: "Febbraio 2024"
  },
  {
    title:
      "Molecola Pizzeria: Quando la scienza incontra la tradizione siciliana",
    preview:
      "Dalla fermentazione controllata agli impasti arricchiti con ingredienti inaspettati, dalla cottura perfettamente calibrata alle presentazioni scenografiche, Molecola Pizzeria a Palermo sta ridefinendo cosa significhi essere una pizzeria in Sicilia. Con piatti che sembrano usciti da un laboratorio scientifico ma che mantengono saldo il legame con i sapori autentici dell'isola.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    link: "https://molecolapizzeria.it/blog/scienza-incontra-tradizione",
    source: "Sicilia Gourmet",
    date: "Gennaio 2024"
  }
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
                <OptimizedImage
                  src={Bollino}
                  alt={t("pressSection.leftArticle.imageAlt")}
                  className="w-full h-full object-contain"
                  width={192}
                  height={192}
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
                  <OptimizedImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    height={192}
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