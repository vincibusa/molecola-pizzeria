import React, { useState, useEffect } from "react";
import { motion,  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUtensils, FaLeaf, FaWineGlass } from "react-icons/fa";
import { IoArrowUp } from "react-icons/io5";
import { Link } from "react-router-dom";

import FotoFratelli from "../assets/FotoFratelli.jpeg";
import foto1 from "../assets/fermento 2.0 FOTO/DSC_0346.jpg"
import foto2 from "../assets/fermento 2.0 FOTO/DSC_0418.jpg"
import foto3 from "../assets/fermento 2.0 FOTO/DSC_0567.jpg"
const AboutPage: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);



  useEffect(() => {
    const handleScroll = (): void => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const teamMembers = [
    {
      name: "Chef John Doe",
      image: foto1,
    },
    {
      name: "Sarah Smith",
      image: foto2,
    },
    {
      name: "Mike Johnson",
      image: foto3,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref } = useInView({ threshold: 0.5 });

  return (
    <div className="overflow-hidden">
      {/* La nostra storia Section */}
      <section id="about" ref={ref} className="py-20 bg-background relative">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-heading font-serif text-center mb-10 md:mb-16 text-4xl lg:text-6xl"
            style={{ fontFamily: '"Gambetta", Sans-serif' }}
          >
            LA NOSTRA STORIA
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg-opacity-80 p-6"
            >
              {/* <h3 className="text-2xl lg:text-4xl font-serif mb-4" style={{ fontFamily: '"Gambetta", Sans-serif' }}>La passione per la pizza</h3> */}
             
                <p
                
                  className="text-foreground md:text-lg"
                  style={{ fontFamily: '"Gambetta", Sans-serif' }}
                >
                 Nel cuore del centro storico di Cefalù, a pochissimi passi dal Duomo, Fermento 2.0 è il progetto 
                 dei due fratelli <b>Salvatore e Rosario Mirenda</b> che nasce nel 2021 con 
                 l’intento di far vivere un’esperienza di gusto e sperimentazione. 
                
                </p>
                <p
                
                className="text-foreground md:text-lg"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                 In un locale dallo stile industrial e dal carattere personale, la pizza proposta è una napoletana che parla contemporaneo. L’<b>impasto unico</b> e leggero dalla trama rustica conquista anche i palati più esigenti, rendendo giustizia alle materie prime del territorio. 
                 Non una pizza ma un racconto gustativo che porta in tavola tutti i sapori della Sicilia.
                </p>
            
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full"
            >
              <div className="absolute inset-0 bg-primary/60 rounded-lg transform -rotate-3 shadow-xl"></div>
              <div className="absolute inset-0 bg-white rounded-lg transform rotate-3 shadow-xl overflow-hidden">
                <img
                  src={FotoFratelli}
                  alt="Salvatore e Rosario Mirenda"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg transform rotate-3">
                <p className="text-primary font-bold" style={{ fontFamily: '"Gambetta", Sans-serif' }}>Salvatore e Rosario Mirenda</p>
                <p className="text-sm text-gray-600" style={{ fontFamily: '"Gambetta", Sans-serif' }}>Fondatori di Fermento 2.0</p>
              </div>
                </motion.div>
          </div>
        </div>
      </section>

      {/* La nostra squadra Section */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
             className="text-heading font-serif text-center mb-10 md:mb-16 text-4xl lg:text-6xl"
            style={{ fontFamily: '"Gambetta", Sans-serif' }}
          >
           GALLERIA
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
              >
                <Link to="/galleria">
                  <motion.div
                    className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Culinary Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          className="text-heading font-serif text-center mb-10 md:mb-16 text-4xl lg:text-6xl"
            style={{ fontFamily: '"Gambetta", Sans-serif' }}
          >
            La nostra filosofia culinaria
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <FaUtensils className="text-5xl mb-4" />,
                title: "Tecniche Tradizionali",
                description: "Preserviamo i sapori autentici"
              },
              {
                icon: <FaLeaf className="text-5xl mb-4" />,
                title: "Ingredienti Freschi",
                description: "Prodotti locali di stagione"
              },
              {
                icon: <FaWineGlass className="text-5xl mb-4" />,
                title: "Abbinamenti Perfetti",
                description: "Selezione curata di vini"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 flex flex-col items-center text-center"
            >
                <div className="text-accent flex justify-center items-center">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ fontFamily: '"Gambetta", Sans-serif' }}>{item.title}</h3>
                <p  className="text-foreground md:text-lg" style={{ fontFamily: '"Gambetta", Sans-serif' }}>{item.description}</p>
            </motion.div>
            ))}
        </div>
    </div>
      </section>

      {/* Back to Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={goToTop}
          className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent transition-colors duration-300"
        >
          <IoArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default AboutPage;
