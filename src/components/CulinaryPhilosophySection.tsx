// src/components/CulinaryPhilosophySection.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaLeaf, FaWineGlass } from "react-icons/fa";

const philosophyItems = [
  {
    icon: <FaUtensils className="text-5xl mb-4" />,
    title: "Servizio e accoglienza",
    description: "Amiamo prenderci cura dei nostri clienti"
  },
  {
    icon: <FaLeaf className="text-5xl mb-4" />,
    title: "Ingredienti di qualità",
    description: "Selezioniamo con cura le farine e scegliamo i migliori prodotti di stagione"
  },
  {
    icon: <FaWineGlass className="text-5xl mb-4" />,
    title: "Abbinamenti perfetti",
    description: "La nostra carta di vini è ricca di proposte, non solo territoriali"
  }
];

const CulinaryPhilosophySection: React.FC = () => {
  return (
    <section className="py-10 bg-background relative">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
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
                {item.title}
              </h3>
              <p
                className="text-foreground md:text-lg"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulinaryPhilosophySection;
