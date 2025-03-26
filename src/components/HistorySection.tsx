import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation, Trans } from "react-i18next";
import molecolaAbout from "../assets/molecolaAbout.jpeg";
import { FaPizzaSlice, FaHistory } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";

const HistorySection: React.FC = () => {
  // Modifica della configurazione di useInView per dispositivi mobili
  const { ref, inView } = useInView({ 
    threshold: 0.05, // Ridotto per attivarsi prima su mobile
    triggerOnce: true,
    initialInView: false,
    rootMargin: "0px 0px -10% 0px" // Margine negativo per attivare prima dell'entrata completa
  });
  const { t } = useTranslation();

  // Classe base per tutte le animazioni - durata ridotta per mobile
  const baseAnimation = "transition-all duration-500";
  
  // Classi per animazioni di fade-in (semplificate)
  const fadeIn = `${baseAnimation} ${inView ? "opacity-100" : "opacity-0"}`;
  
  // Classi per animazioni con movimento (semplificate per mobile)
  const fadeInUp = `${baseAnimation} ${inView ? "translate-y-0" : "translate-y-5"}`;
  const fadeInRight = `${fadeIn} ${inView ? "translate-x-0" : "translate-x-5"}`;
  const fadeInLeft = `${fadeIn} ${inView ? "translate-x-0" : "-translate-x-5"}`;
  
  // Animazioni con scale e rotazione (semplificate)
  const popIn = `${baseAnimation} ${inView ? "scale-100 rotate-0" : "scale-0 rotate-6"}`;
 

  // Effetto di animazione a cascata per paragrafi
  const staggerDelay = (index: number) => ({
    transitionDelay: `${150 + (index * 100)}ms`,
  });

  return (
    <section id="about" ref={ref} className="pizza-section bg-pizza-background relative overflow-hidden">
      {/* Pattern di sfondo con animazione */}
      <div
        className={`absolute inset-0 bg-fixed ${inView ? "opacity-5" : "opacity-0"} transition-opacity duration-700`}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%235D4037\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titolo con decorazione e animazione migliorata */}
        <div className={`text-center mb-16 ${fadeInUp}`}>
          <span className={`inline-block bg-pizza-red text-white p-3 rounded-full mb-4 ${popIn}`} style={{ transitionDelay: "100ms" }}>
            <FaHistory size={30} className="animate-pulse-subtle-mobile" />
          </span>
          <h2 className={`pizza-title font-playfair text-5xl md:text-6xl ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`} style={{ transitionDelay: "150ms" }}>
            {t("historySection.title")}
          </h2>
          <div className={`h-1 bg-pizza-red mx-auto mt-6 ${baseAnimation} ${inView ? "w-24 opacity-100" : "w-0 opacity-0"}`} style={{ transitionDelay: "200ms" }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenuto testuale con animazioni a cascata */}
          <div 
            className={`space-y-6 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg ${fadeInLeft}`}
            style={{ transitionDelay: "100ms" }}
          >
            {/* Testi lunghi per desktop con animazioni a cascata */}
            <div className="hidden lg:block space-y-6">
              <p className={`text-gray-700 text-lg font-montserrat leading-relaxed ${fadeIn}`} style={staggerDelay(0)}>
                <Trans
                  i18nKey="historySection.paragraph1"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </p>
              <p className={`text-gray-700 text-lg font-montserrat leading-relaxed ${fadeIn}`} style={staggerDelay(1)}>
                <Trans
                  i18nKey="historySection.paragraph2"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </p>
              <p className={`text-gray-700 text-lg font-montserrat leading-relaxed ${fadeIn}`} style={staggerDelay(2)}>
                <Trans
                  i18nKey="historySection.paragraph3"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </p>
            </div>

            {/* Testi brevi per mobile con animazioni a cascata */}
            <div className="block lg:hidden space-y-4">
              <p className={`text-gray-700 text-base font-montserrat leading-relaxed ${fadeIn}`} style={staggerDelay(0)}>
                <Trans
                  i18nKey="historySection.shortParagraph1"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </p>
              <p className={`text-gray-700 text-base font-montserrat leading-relaxed ${fadeIn}`} style={staggerDelay(1)}>
                <Trans
                  i18nKey="historySection.shortParagraph2"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </p>
            </div>
          </div>

          {/* Immagine con animazioni potenziate e ottimizzate per mobile */}
          <div 
            className={`relative h-[300px] md:h-[500px] w-full ${fadeInRight}`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Effetti con stratificazione animati semplificati */}
            <div className={`absolute inset-0 bg-pizza-red rounded-2xl transform ${inView ? "-rotate-2" : "rotate-6"} shadow-xl hover:rotate-[-1deg] transition-all duration-500`}></div>
            <div className={`absolute inset-0 bg-white rounded-2xl transform ${inView ? "rotate-2" : "-rotate-6"} shadow-xl overflow-hidden hover:rotate-0 transition-all duration-500`}>
              <OptimizedImage
                src={molecolaAbout}
                alt={t("historySection.image.alt")}
                className={`w-full h-full object-cover transition-transform duration-700 ${inView ? "scale-100" : "scale-105"}`}
                loading="eager"
              />
            </div>
            
            {/* Didascalia con animazione potenziata */}
            <div 
              className={`absolute -bottom-6 right-8 bg-white p-4 rounded-lg shadow-lg transform ${inView ? "opacity-100 rotate-2 translate-y-0" : "opacity-0 rotate-6 translate-y-10"} max-w-[250px] hover:rotate-0 hover:translate-y-[-4px] transition-all duration-500`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-pizza-brown font-medium font-montserrat flex items-center">
                <span>
                  <FaPizzaSlice className={`mr-2 text-pizza-red ${inView ? "animate-spin-slow-mobile" : ""}`} />
                </span>
                <Trans
                  i18nKey="historySection.image.caption"
                  components={{ b: <span className="text-pizza-red" /> }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS per le animazioni ottimizzate per mobile */}
      <style>{`
        @keyframes pulse-subtle-mobile {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-pulse-subtle-mobile {
          animation: pulse-subtle-mobile 3s ease-in-out infinite;
        }
        
        .animate-spin-slow-mobile {
          animation: spin-mobile 12s linear infinite;
        }
        
        @keyframes spin-mobile {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Applica animazioni più leggere su dispositivi mobili */
        @media (max-width: 768px) {
          .animate-pulse-subtle-mobile {
            animation-duration: 4s;
          }
          
          .animate-spin-slow-mobile {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
};

export default HistorySection;