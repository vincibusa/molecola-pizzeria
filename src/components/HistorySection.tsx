import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation, Trans } from "react-i18next";
import molecolaAbout from "../assets/molecolaAbout.jpeg";
import { FaPizzaSlice, FaHistory } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";

const HistorySection: React.FC = () => {
  const { ref } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });
  const { t } = useTranslation();

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
          <span className="inline-block bg-pizza-red text-white p-3 rounded-full mb-4">
            <FaHistory size={30} />
          </span>
          <h2 className="pizza-title font-playfair text-5xl md:text-6xl">
            {t("historySection.title")}
          </h2>
          <div className="h-1 w-24 bg-pizza-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenuto testuale */}
          <div className="space-y-6 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg hover:translate-y-[-8px] transition-transform duration-500">
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
          </div>

          {/* Immagine */}
          <div className="relative h-[500px] w-full">
            {/* Effetti con stratificazione */}
            <div className="absolute inset-0 bg-pizza-red rounded-2xl transform -rotate-3 shadow-xl hover:rotate-[-1deg] hover:scale-[1.02] transition-all duration-500"></div>
            <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3 shadow-xl overflow-hidden hover:scale-[1.03] hover:rotate-0 transition-all duration-600">
              <OptimizedImage
                src={molecolaAbout}
                alt={t("historySection.image.alt")}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            {/* Didascalia */}
            <div className="absolute -bottom-6 right-8 bg-white p-4 rounded-lg shadow-lg transform rotate-3 max-w-[250px] hover:rotate-0 hover:translate-y-[-8px] transition-all duration-400">
              <p className="text-pizza-brown font-medium font-montserrat flex items-center">
                <span>
                  <FaPizzaSlice className="mr-2 text-pizza-red" />
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
    </section>
  );
};

export default HistorySection;