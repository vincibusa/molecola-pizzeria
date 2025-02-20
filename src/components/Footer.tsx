import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import ReservationModal from './ReservationModal'; // Assicurati che il percorso sia corretto

const Footer: React.FC = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const location = useLocation();

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaYoutube />, url: 'https://youtube.com' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Area Press', path: '/#press' },
    { name: 'Prenotazioni', path: '/prenotazioni' },
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
            >
              <h2 className="text-2xl font-bold mb-4">Fermento 2.0</h2>
              <p className="text-sm">
                Autenticità in ogni morso. La nostra passione per la pizza si riflette in ogni piatto che serviamo.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Link Rapidi</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {link.name === 'Prenotazioni' ? (
                      <button
                        onClick={() => setIsReservationModalOpen(true)}
                        className="hover:text-secondary transition-colors duration-300"
                      >
                        {link.name}
                      </button>
                    ) : link.name === 'Area Press' ? (
                      <Link
                        to={link.path}
                        onClick={(e) => {
                          // Se siamo già sulla home, scrolla manualmente alla sezione "press"
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
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        to={link.path}
                        className="hover:text-secondary transition-colors duration-300"
                      >
                        {link.name}
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
            >
              <h3 className="text-xl font-semibold mb-4">Contatti</h3>
              <p className="mb-2">Via Giacomo Matteotti,29,90015,Cefalù,PA</p>
              <p className="mb-2">+39 331 872 7612</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-white border-opacity-20"
          >
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-white hover:text-secondary transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 text-center text-sm text-white text-opacity-60"
          >
            © {new Date().getFullYear()} Fermento 2.0. Tutti i diritti riservati.
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
