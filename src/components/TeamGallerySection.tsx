import React from "react";
import { useTranslation } from "react-i18next";
import { FaUtensils } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";
import { useInView } from "react-intersection-observer";

// Importa immagini dello staff
import chef1 from "../assets/molecola/DSCF7889.jpg";
import chef2 from "../assets/molecola/DSCF7913.jpg";
import chef3 from "../assets/molecola/DSCF7936.jpg";
import chef4 from "../assets/molecola/DSCF8118.jpg";

const TeamGallerySection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    initialInView: false
  });

  // Dati del team
  const teamMembers = [
    {
      name: t("team.chef1.name"),
      role: t("team.chef1.role"),
      image: chef1,
    },
    {
      name: t("team.chef2.name"),
      role: t("team.chef2.role"),
      image: chef2,
    },
    {
      name: t("team.chef3.name"),
      role: t("team.chef3.role"),
      image: chef3,
    },
    {
      name: t("team.chef4.name"),
      role: t("team.chef4.role"),
      image: chef4,
    }
  ];

  // Classe base per le animazioni
  const baseAnimation = "transition-all duration-700";
  const fadeIn = `${baseAnimation} ${inView ? "opacity-100" : "opacity-0"}`;
  const fadeInUp = `${fadeIn} ${inView ? "translate-y-0" : "translate-y-10"}`;

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Pattern di sfondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'44\' height=\'44\' viewBox=\'0 0 44 44\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg id=\'Page-1\' fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg id=\'brick-wall\' fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M0 0h22v22H0V0zm22 22h22v22H22V22z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Intestazione sezione con animazioni */}
        <div className={`text-center mb-16 ${fadeInUp}`}>
          <span className={`inline-block bg-pizza-red text-white p-3 rounded-full mb-4 ${baseAnimation} ${inView ? "scale-100" : "scale-0"}`}>
            <FaUtensils size={30} />
          </span>
          <h2 className="pizza-title">
            {t("teamGallerySection.heading")}
          </h2>
          <div className={`h-1 bg-pizza-red mx-auto mt-6 mb-6 ${baseAnimation} ${inView ? "w-24 opacity-100" : "w-0 opacity-0"}`}></div>
          <p className={`text-gray-600 max-w-2xl mx-auto font-montserrat ${fadeIn}`} style={{ transitionDelay: "250ms" }}>
            {t("teamGallerySection.description")}
          </p>
        </div>

        {/* Griglia team con animazioni semplificate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl ${baseAnimation} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Immagine */}
              <div className="h-80 overflow-hidden">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
                  width={350}
                  height={320}
                />
              </div>
              
              {/* Overlay con informazioni */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-playfair mb-1 transition-transform duration-300 group-hover:translate-y-[-5px]">{member.name}</h3>
                <p className="text-pizza-red font-medium transition-transform duration-300 group-hover:translate-y-[-5px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 ${fadeInUp}`} style={{ transitionDelay: "700ms" }}>
          <a 
            href="#contact" 
            className="inline-block pizza-btn bg-pizza-red text-white px-8 py-3 hover:bg-pizza-brown transition-colors duration-300"
          >
            {t("teamGallerySection.viewGallery")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamGallerySection;