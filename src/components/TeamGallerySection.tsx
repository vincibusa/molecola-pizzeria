import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import foto1 from "../assets/fermento 2.0 FOTO/DSC_0346.jpg";
import foto2 from "../assets/fermento 2.0 FOTO/DSC_0418.jpg";
import foto3 from "../assets/fermento 2.0 FOTO/DSC_0567.jpg";

interface TeamMember {
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Chef John Doe", image: foto1 },
  { name: "Sarah Smith", image: foto2 },
  { name: "Mike Johnson", image: foto3 }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const TeamGallerySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-heading text-center mb-10 md:mb-16 text-4xl lg:text-6xl"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          {t("teamGallerySection.heading")}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={cardVariants}>
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
  );
};

export default TeamGallerySection;