import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaTripadvisor } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPizzaSlice } from 'react-icons/fa';
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
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/' },
    { icon: <FaTripadvisor />, url: 'https://www.tripadvisor.it/' },
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
          {/* Logo con forma a fetta di pizza */}
          <div className="flex justify-center mb-10">
            <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl transform rotate-12 hover:rotate-0 transition-all duration-300">
              <img
                src={logo}
                alt={t("navbar.logoAlt")}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

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
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white bg-opacity-20 hover:bg-pizza-red text-white p-3 rounded-full transition-all duration-300"
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
                  <li key={link.key} className="transition-transform hover:translate-x-2">
                    {link.key === "navbar.reservation" ? (
                      <button
                        onClick={() => setIsReservationModalOpen(true)}
                        className="text-gray-200 hover:text-white hover:underline flex items-center justify-center md:justify-start"
                      >
                        <FaPizzaSlice className="mr-2 text-pizza-red" />
                        {t(link.key)}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-200 hover:text-white hover:underline flex items-center justify-center md:justify-start"
                        onClick={(e) => {
                          if (link.key === "navbar.press" && location.pathname === "/") {
                            e.preventDefault();
                            const pressSection = document.getElementById("press");
                            if (pressSection) {
                              pressSection.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                      >
                        <FaPizzaSlice className="mr-2 text-pizza-red" />
                        {t(link.key)}
                      </Link>
                    )}
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
              
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <FaMapMarkerAlt className="text-pizza-red" />
                  <p className="text-gray-200">{t("footer.address.line1")}</p>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <FaPhone className="text-pizza-red transform rotate-90" />
                  <p className="text-gray-200">{t("footer.phone")}</p>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <FaEnvelope className="text-pizza-red" />
                  <p className="text-gray-200">{t("footer.email")}</p>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <FaClock className="text-pizza-red" />
                  <div>
                    <p className="text-gray-200">{t("footer.hours.weekdays")}</p>
                    <p className="text-gray-200">{t("footer.hours.monday")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div className="mb-12 bg-white bg-opacity-10 rounded-xl p-6">
            <div className="text-center">
              <h3 className="text-xl font-playfair mb-4">{t("footer.newsletter.title")}</h3>
              <p className="text-gray-200 mb-6">{t("footer.newsletter.description")}</p>
              <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
                <input 
                  type="email" 
                  placeholder={t("footer.newsletter.placeholder")}
                  className="px-4 py-2 rounded-full flex-1 text-pizza-brown focus:outline-none" 
                />
                <button 
                  type="submit" 
                  className="pizza-btn bg-pizza-red text-white px-6 py-2"
                >
                  {t("footer.newsletter.button")}
                </button>
              </form>
            </div>
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