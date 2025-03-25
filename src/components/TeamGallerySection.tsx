import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaUserFriends } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";
import foto1 from "../assets/molecola/DSCF8120.jpg";
import foto2 from "../assets/molecola/DSCF8063.jpg";
import foto3 from "../assets/molecola/DSCF8076.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Salvatore Capizzi", role: "Chef e Fondatore", image: foto1 },
  { name: "Team Molecola", role: "Laboratorio Molecolare", image: foto2 },
  { name: "Pizza Lab", role: "Innovazione Culinaria", image: foto3 }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const TeamGallerySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="pizza-section bg-white relative overflow-hidden">
      {/* Pattern di sfondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FF5A5F\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Intestazione sezione */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-pizza-yellow text-white p-3 rounded-full mb-4"
          >
            <FaUserFriends size={30} />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pizza-title text-5xl md:text-6xl"
          >
            {t("teamGallerySection.heading")}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-1 w-24 bg-pizza-yellow mx-auto mt-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto mt-6 font-montserrat"
          >
            {t("teamGallerySection.description")}
          </motion.p>
        </div>
        
        {/* Team members grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name} 
              variants={cardVariants}
              className="group"
            >
              <Link to="/galleria" className="block">
                <div className="pizza-card overflow-hidden group relative">
                  {/* Image */}
                  <div className="relative overflow-hidden h-[350px]">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-full w-full"
                    >
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        height={350}
                      />
                    </motion.div>
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-playfair">
                          {member.name}
                        </h3>
                        <p className="font-montserrat text-gray-200 mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-playfair text-pizza-brown group-hover:text-pizza-red transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-montserrat mt-1">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 bg-pizza-red text-white rounded-full w-10 h-10 flex items-center justify-center transform rotate-12 opacity-80">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <div className="text-center">
          <Link to="/galleria">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#5D4037" }}
              whileTap={{ scale: 0.98 }}
              className="pizza-btn bg-pizza-brown text-white px-8 py-3"
            >
              {t("teamGallerySection.viewGallery")}
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamGallerySection;