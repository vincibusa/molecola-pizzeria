import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import ReservationModal from './ReservationModal';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const location = useLocation();

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/fermento2.0cefalu/' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/fermento2.0cefalu/' },
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
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <motion.img
                src={logo}
                alt={t("navbar.logoAlt")}
                className="h-32 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="text-md">{t("footer.tagline")}</p>
              <p className="text-md mt-2">{t("footer.description")}</p>
              <div className="flex justify-center space-x-8 mt-10">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-white hover:text-secondary transition-colors duration-300"
                  >
                    <motion.div
                      className="bg-primary hover:bg-secondary rounded-full p-3"
                      whileHover={{ rotate: 15 }}
                    >
                      {React.cloneElement(link.icon, { size: 24 })}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">{t("footer.quickLinksHeader")}</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.key}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {link.key === "navbar.reservation" ? (
                      <button
                        onClick={() => setIsReservationModalOpen(true)}
                        className="hover:text-secondary transition-colors duration-300"
                      >
                        {t(link.key)}
                      </button>
                    ) : link.key === "navbar.press" ? (
                      <Link
                        to={link.path}
                        onClick={(e) => {
                          if (location.pathname === '/') {
                            e.preventDefault();
                            const pressSection = document.getElementById('press');
                            if (pressSection) {
                              pressSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                        className="hover:text-secondary transition-colors duration-300"
                      >
                        {t(link.key)}
                      </Link>
                    ) : (
                      <Link
                        to={link.path}
                        className="hover:text-secondary transition-colors duration-300"
                      >
                        {t(link.key)}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-4">{t("footer.contactHeader")}</h3>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-white" />
                <p>{t("footer.address.line1")}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4"></div>
                <p>{t("footer.address.line2")}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-white transform scale-x-[-1]" />
                <p>{t("footer.phone")}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-white" />
                <p>{t("footer.email")}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-white" />
                <p>{t("footer.hours.weekdays")}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4"></div>
                <p>{t("footer.hours.monday")}</p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-white border-opacity-20"
          ></motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center text-sm text-white text-opacity-60"
          >
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </motion.div>
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