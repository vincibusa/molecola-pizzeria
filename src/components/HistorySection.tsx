// src/components/HistorySection.tsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FotoFratelli from "../assets/FotoFratelli.jpeg";

const HistorySection: React.FC = () => {
  const { ref } = useInView({ threshold: 0.5 });

  return (
    <section id="about" ref={ref} className="py-20 bg-background relative">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-heading text-center mb-10 md:mb-16 text-4xl lg:text-6xl"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
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
            <p
              className="text-foreground md:text-lg"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              Nel cuore del centro storico di Cefalù, a pochissimi passi dal Duomo,
              Fermento 2.0 è il progetto dei due fratelli <b>Salvatore e Rosario Mirenda</b> che nasce nel 2021 con
              l’intento di far vivere un’esperienza di gusto e sperimentazione.
            </p>
            <p
              className="text-foreground md:text-lg"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              In un locale dallo stile industrial e dal carattere personale, la <b>pizza</b> proposta è una napoletana che parla contemporaneo. Da un <b>blend di farina di tipo 1 e integrale</b>, con una lievitazione tra le sedici e le venti ore, prende vita un impasto leggero dalla trama rustica, in grado di conquistare anche i palati più esigenti. Non una semplice pizza ma un <b>racconto gustativo</b> che porta in tavola tutti i sapori della Sicilia.
            </p>
            <p
              className="text-foreground md:text-lg"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              Non mancano opzioni alternative come la <b>pizza in doppia cottura</b>, prima fritta e poi passata al forno per una maggiore croccantezza, o il <b>padellino</b> che prevede l’utilizzo di un impasto pre-fermentato e rimpastato per poi essere cotto e farcito, rendendo giustizia alle <b>materie prime</b> del territorio.
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
              <p
                className="text-primary font-bold"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                Salvatore e Rosario Mirenda
              </p>
              <p
                className="text-sm text-gray-600"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                Fondatori di Fermento 2.0
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
