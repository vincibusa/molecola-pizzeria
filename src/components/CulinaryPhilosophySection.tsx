import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaLeaf, FaWineGlass } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CulinaryPhilosophySection: React.FC = () => {
  const { t } = useTranslation();

  // Definiamo gli item utilizzando le chiavi di traduzione
  const philosophyItems = [
    {
      icon: <FaUtensils className="text-5xl mb-4" />,
      titleKey: "culinaryPhilosophy.item1.title",
      descriptionKey: "culinaryPhilosophy.item1.description",
    },
    {
      icon: <FaLeaf className="text-5xl mb-4" />,
      titleKey: "culinaryPhilosophy.item2.title",
      descriptionKey: "culinaryPhilosophy.item2.description",
    },
    {
      icon: <FaWineGlass className="text-5xl mb-4" />,
      titleKey: "culinaryPhilosophy.item3.title",
      descriptionKey: "culinaryPhilosophy.item3.description",
    },
  ];

  return (
    <section className="py-10 bg-background relative">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 flex flex-col items-center text-center bg-opacity-80"
            >
              <div className="text-accent flex justify-center items-center">
                {item.icon}
              </div>
              <h3
                className="text-xl md:text-2xl font-semibold mb-2"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                {t(item.titleKey)}
              </h3>
              <p
                className="text-foreground md:text-lg"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                {t(item.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulinaryPhilosophySection;