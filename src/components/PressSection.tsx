import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaNewspaper, FaQuoteLeft,  FaExternalLinkAlt } from "react-icons/fa";


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
    title: "A Palermo c'é una nuova Molecola, ma è la pizzeria del pizzaiolo Salvo Capizzi",
    preview: "Nel 2023 una nuova pizzeria ha aperto nel centro storico di Palermo, in via Velasquez a due passi dal Teatro Politeama, e fin qui nulla di strano, ma la sua inconsueta formula ha catalizzato la nostra attenzione, sia per il nome che per il suo ideatore e conduttore, essa si chiama Molecola Pizzeria e lui è Salvo Capizzi.",
    image: "https://www.allfoodsicily.it/wp-content/uploads/2024/03/pizzeria_molecola_2024_001.jpg",
    link: "https://www.allfoodsicily.it/a-palermo-ce-una-nuova-molecola-ma-e-la-pizzeria-del-pizzaiolo-salvo-capizzi/",
    source: "All Food Sicily",
    date: "Aprile 2024"
  },
  {
    title: "Da Molecola a Palermo la sperimentazione approda in un menù tutto vegan",
    preview: "La passione per la chimica sta alla base della cucina molecolare e Salvatore Capizzi, patron di Molecola Pizzeria e istruttore dell'Accademia Pizza DOC, la chimica continua a studiarla in cucina attraverso lo studio delle materie prime.",
    image: "https://www.allfoodsicily.it/wp-content/uploads/2025/02/Salvo-Capizzi.jpg",
    link: "https://www.allfoodsicily.it/da-molecola-il-nuovo-menu-vegan-salvo-capizzi-sperimentazione-sulle-materie-prime/",
    source: "All Food Sicily",
    date: "Febbraio 2025"
  },
  {
    title: "Pizza molecolare in Sicilia? Il pizzaiolo Salvo Capizzi apre Molecola",
    preview: "Salvatore Capizzi, patron e pizzaiolo di Molecola, ha intrapreso il percorso della cucina dopo gli studi in ingegneria, seguendo la sua passione per il mondo dei lievitati e della gastronomia in generale, come dimostra il suo ruolo di istruttore presso l'Accademia Pizza DOC e uno studio approfondito sulle metodologie, che gli ha consentito di diventare tecnico di un noto molino nazionale.",
    image: "https://www.allfoodsicily.it/wp-content/uploads/2024/01/Molecola.jpeg",
    link: "https://www.allfoodsicily.it/pizza-molecolare-in-sicilia-il-pizzaiolo-salvo-capizzi-apre-molecola/",
    source: "All Food Sicily",
    date: "Febbraio 2024"
  }
];

const PressSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="press" className="pizza-section bg-pizza-background relative overflow-hidden">
      {/* Pattern di sfondo */}
      <div className="absolute inset-0 bg-pizza-background"></div>
      
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
          {/* Sezione citazioni in evidenza */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Citazione principale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pizza-card p-8 bg-gradient-to-br from-pizza-red/10 to-transparent"
            >
              <div className="flex flex-col items-center">
                <FaQuoteLeft className="text-pizza-red text-4xl mb-6" />
                <p className="text-2xl font-playfair text-pizza-brown text-center mb-6 leading-relaxed">
                  "La passione per la chimica sta alla base della cucina molecolare"
                </p>
                <div className="text-gray-600 italic text-center">
                  - All Food Sicily
                </div>
              </div>
            </motion.div>

            {/* Stats e highlights */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="pizza-card p-6 text-center"
              >
                <div className="text-4xl font-playfair text-pizza-red mb-2">2024</div>
                <div className="text-gray-600 font-montserrat text-sm">Anno di apertura</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="pizza-card p-6 text-center"
              >
                <div className="text-4xl font-playfair text-pizza-red mb-2">100%</div>
                <div className="text-gray-600 font-montserrat text-sm">Impasti artigianali</div>
              </motion.div>
            </div>

            {/* Citazione secondaria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pizza-card p-8 bg-gradient-to-br from-pizza-brown/10 to-transparent"
            >
              <div className="flex flex-col items-center">
                <FaQuoteLeft className="text-pizza-brown text-3xl mb-4" />
                <p className="text-xl font-playfair text-pizza-brown text-center mb-4 leading-relaxed">
                  "Uno studio approfondito sulle metodologie e le tecniche innovative"
                </p>
                <div className="text-gray-600 italic text-center">
                  - Dalla stampa specializzata
                </div>
              </div>
            </motion.div>
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