// src/components/PressSection.tsx
import React from "react";
import { motion } from "framer-motion";
import Bollino from "../assets/web gambero-02.png";
import { Link } from "react-router-dom";

interface PressArticle {
  title: string;
  preview: string;
  image: string;
  link: string;
}

const pressArticles: PressArticle[] = [
  {
    title:
      "Fermento 2.0: La pizzeria dei fratelli Mirenda a Cefalù conquista il Gambero Rosso",
    preview:
      "I fratelli Salvatore e Rosario Mirenda hanno conquistato il prestigioso riconoscimento del Gambero Rosso con la loro pizzeria Fermento 2.0 a Cefalù. La guida 'Pizzerie d'Italia 2024' ha assegnato loro 'Uno Spicchio', premiando la loro dedizione all'arte della pizza e l'utilizzo di ingredienti di alta qualità.",
    image:
      "https://www.allfoodsicily.it/wp-content/uploads/2024/10/Fermento-1-e1727942311536.jpeg",
    link: "https://www.allfoodsicily.it/fermento-2-0-la-pizzeria-dei-fratelli-mirenda-a-cefalu-conquista-il-gambero-rosso-pronti-ad-alzare-lasticella/"
  }
  // altri articoli...
];

const PressSection: React.FC = () => {
  return (
    <section id="press" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-heading text-center mb-10 md:mb-16 text-4xl lg:text-6xl"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
           RICONOSCIMENTI E PRESS 
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden flex items-center justify-center">
              <motion.img
                src={Bollino}
                alt="Riconoscimento Gambero Rosso"
                className="w-full h-full object-contain"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 10,
                  duration: 5
                }}
              />
            </div>
            <div className="px-6">
              <p
                className="text-foreground md:text-lg"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                Un prestigioso riconoscimento, quello del Gambero Rosso che ci ha inseriti nella Guida Pizzerie d'Italia 2025 con "Uno Spicchio".
              </p>
              <p
                className="italic text-foreground md:text-lg mt-3"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                “I fratelli Salvatore e Rosario Mirenda entrano nel filone della pizza contemporanea di qualità, che ha già da tempo, in Sicilia alzato l’asticella. E lo fanno con uno stile e identità del tutto personali"
              </p>
            </div>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {pressArticles.map((article, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: '"Gambetta", Sans-serif' }}
                  >
                    {article.title}
                  </h4>
                  <p
                    className="text-foreground md:text-lg mb-4 line-clamp-3"
                    style={{ fontFamily: '"Gambetta", Sans-serif' }}
                  >
                    {article.preview}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors duration-300 inline-block mt-2"
                    style={{ fontFamily: '"Gambetta", Sans-serif' }}
                  >
                    Leggi l'articolo completo
                  </a>
                </div>
              </motion.div>
            ))}
                      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-start"
          >
            <Link to="/blog"
          
            
              className="bg-primary text-white px-8 py-3 rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg text-lg"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              Leggi altri articoli
            </Link>
          </motion.div>
          </motion.div>

          <div></div>

        </div>
      </div>
    </section>
  );
};

export default PressSection;
