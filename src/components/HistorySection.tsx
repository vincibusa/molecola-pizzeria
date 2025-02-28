import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation, Trans } from "react-i18next";
import FotoFratelli from "../assets/FotoFratelli.jpeg";

const HistorySection: React.FC = () => {
  const { ref } = useInView({ threshold: 0.5 });
  const { t } = useTranslation();

  return (
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
          className="text-heading text-center mb-10 md:mb-16 text-4xl lg:text-6xl"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          {t("historySection.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-opacity-80 p-6"
          >
            {/* Testi lunghi per desktop */}
            <p
              className="text-foreground md:text-lg hidden lg:block"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              <Trans
                i18nKey="historySection.paragraph1"
                components={{ b: <b /> }}
              />
            </p>
            <p
              className="text-foreground md:text-lg hidden lg:block"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              <Trans
                i18nKey="historySection.paragraph2"
                components={{ b: <b /> }}
              />
            </p>
            <p
              className="text-foreground md:text-lg hidden lg:block"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              <Trans
                i18nKey="historySection.paragraph3"
                components={{ b: <b /> }}
              />
            </p>

            {/* Testi brevi per mobile */}
            <p
              className="text-foreground text-lg block lg:hidden"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              <Trans
                i18nKey="historySection.shortParagraph1"
                components={{ b: <b /> }}
              />
            </p>
            <p
              className="text-foreground text-lg block lg:hidden"
              style={{ fontFamily: '"Gambetta", Sans-serif' }}
            >
              <Trans
                i18nKey="historySection.shortParagraph2"
                components={{ b: <b /> }}
              />
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
                alt={t("historySection.image.alt")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg transform rotate-3">
              <p
                className="text-primary font-bold"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                <Trans
                  i18nKey="historySection.image.caption"
                  components={{ b: <b /> }}
                />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;