import React from "react";
import { useTranslation } from "react-i18next";
import { FaUtensils } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Importa immagini rappresentative del locale e dei piatti
import image1 from "../assets/molecola/DSCF8189.png"; // Preparazione pizza
import image2 from "../assets/molecola/DSCF8058.png"; // Dettaglio locale
import image3 from "../assets/molecola/DSCF8035.png"; // Forno
import image4 from "../assets/molecola/DSCF8097.png"; // Pizza finita

const TeamGallerySection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Funzione per navigare alla pagina galleria
  const handleNavigateToGallery = () => {
    navigate('/galleria');
  };

  // Dati delle immagini della galleria
  const galleryImages = [
    {
      name: t("gallery.preparation"),
      role: t("gallery.preparation.description"),
      image: image1,
    },
    {
      name: t("gallery.ambiance"),
      role: t("gallery.ambiance.description"),
      image: image2,
    },
    {
      name: t("gallery.oven"),
      role: t("gallery.oven.description"),
      image: image3,
    },
    {
      name: t("gallery.pizza"),
      role: t("gallery.pizza.description"),
      image: image4,
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Pattern di sfondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'44\' height=\'44\' viewBox=\'0 0 44 44\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg id=\'Page-1\' fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg id=\'brick-wall\' fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M0 0h22v22H0V0zm22 22h22v22H22V22z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Intestazione sezione con animazioni */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span 
            variants={scaleIn}
            className="inline-block bg-pizza-red text-white p-3 rounded-full mb-4"
          >
            <FaUtensils size={30} />
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="pizza-title"
          >
            {t("teamGallerySection.heading")}
          </motion.h2>
          <motion.div 
            variants={line}
            className="h-1 bg-pizza-red mx-auto mt-6 mb-6 w-24"
          ></motion.div>
        </motion.div>

        {/* Griglia galleria con animazioni */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
              variants={fadeInUp}
              onClick={handleNavigateToGallery}
            >
              {/* Immagine */}
              <motion.div 
                className="h-80 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <OptimizedImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
                  width={350}
                  height={320}
                />
              </motion.div>
              
              {/* Overlay con informazioni */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-playfair mb-1 transition-transform duration-300 group-hover:translate-y-[-5px]">{item.name}</h3>
                <p className="text-pizza-red font-medium transition-transform duration-300 group-hover:translate-y-[-5px]">{item.role}</p>
                {/* Visualizza icona o testo per indicare che è cliccabile */}
                <div className="absolute bottom-6 right-6 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/galleria"
            className="inline-block pizza-btn bg-pizza-red text-white px-8 py-3 hover:bg-pizza-brown transition-colors duration-300"
          >
            {t("teamGallerySection.viewGallery")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGallerySection;