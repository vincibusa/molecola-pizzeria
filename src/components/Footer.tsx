import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import ReservationModal from './ReservationModal';


const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);


  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/share/14kBCbDmg3/?mibextid=wwXIfr' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/molecolapizzeria?igsh=MThyeW1qOGQzZzlsZg==' },
  ];

  // Utilizziamo le stesse chiavi della Navbar per i link rapidi
  const quickLinks = [
    { key: "navbar.home", path: '/' },
    { key: "navbar.menu", path: '/menu' },
    { key: "navbar.gallery", path: '/galleria' },
    { key: "navbar.press", path: '/#press' },
    { key: "navbar.reservation", path: '/prenotazioni' },
  ];

  return (
    <>
      <footer className="bg-pizza-brown text-white relative overflow-hidden">
        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-32 bg-repeat-x" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 pt-16 pb-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-playfair mb-6 text-white relative inline-block">
                <span className="relative z-10">{t("footer.about")}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-pizza-red"></span>
              </h3>
              <p className="text-gray-200 mb-4">{t("footer.tagline")}</p>
              <p className="text-gray-200">{t("footer.description")}</p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-pizza-red p-2 rounded-full text-white transition-colors"
                    initial={{ y: 0, scale: 1, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${t("footer.followUs")} ${index + 1}`}
                  >
                    {React.cloneElement(link.icon, { size: 18 })}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-playfair mb-6 text-white relative inline-block">
                <span className="relative z-10">{t("footer.quickLinksHeader")}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-pizza-red"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-white group flex items-center transition-colors"
                    >
                      <motion.span
                        className="mr-2 text-pizza-red opacity-70 group-hover:opacity-100"
                        initial={{ x: 0 }}
                      >
                        <FaChevronRight size={12} />
                      </motion.span>
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <h3 className="text-2xl font-playfair mb-6 text-white relative inline-block">
                <span className="relative z-10">{t("footer.contactHeader")}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-pizza-red"></span>
              </h3>
              
              <ul className="space-y-4 flex flex-col">
                <li 
                  className="flex items-center md:justify-end"
                >
                  <span className="inline-block w-6 text-center mr-2">
                    <FaMapMarkerAlt className="text-pizza-red inline-block" />
                  </span>
                  <span className="text-gray-200">{t("footer.address.line1")}</span>
                </li>
                <li 
                  className="flex items-center md:justify-end"
                >
                  <span className="inline-block w-6 text-center mr-2">
                    <FaPhone className="text-pizza-red transform rotate-90 inline-block" />
                  </span>
                  <span className="text-gray-200">{t("footer.phone")}</span>
                </li>
                <li 
                  className="flex items-center md:justify-end"
                >
                  <span className="inline-block w-6 text-center mr-2">
                    <FaEnvelope className="text-pizza-red inline-block" />
                  </span>
                  <span className="text-gray-200">{t("footer.email")}</span>
                </li>
                <li 
                  className="flex items-center md:justify-end"
                >
                  <span className="inline-block w-6 text-center mr-2">
                    <FaClock className="text-pizza-red inline-block" />
                  </span>
                  <div className="text-left md:text-right">
                    <p className="text-gray-200">{t("footer.hours.weekdays")}</p>
                    <p className="text-gray-200">{t("footer.hours.monday")}</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white border-opacity-20">
            <p className="text-sm text-gray-300">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>
      {isReservationModalOpen && (
        <ReservationModal
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
        />
      )}
    </>
  );
};

export default Footer;