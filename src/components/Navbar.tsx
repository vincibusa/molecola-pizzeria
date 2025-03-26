import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaUtensils, FaImages, FaNewspaper, FaCalendarAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReservationModal from "./ReservationModal";
import logo from "../assets/logo.png";
import { useNavbar } from "../contexts/NavbarContenxt";
import { useTranslation } from "react-i18next";
import OptimizedImage from "./OptimizedImage";

const Navbar = () => {
  const { t } = useTranslation();
  const { isVisible } = useNavbar();
  const location = useLocation();
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsNavbarTransparent(false);
      return;
    }
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setIsNavbarTransparent(window.scrollY < threshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Blocca lo scroll quando il menu mobile è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // La navbar principale può essere trasparente nella home page
  const navbarBg =
    location.pathname === "/"
      ? isNavbarTransparent && !isMobileMenuOpen // Non rendere trasparente quando il menu mobile è aperto
        ? "bg-transparent backdrop-blur-sm bg-opacity-0"
        : "bg-white shadow-md"
      : "bg-white shadow-md";

  // Anche il colore del testo cambia solo quando il menu mobile è chiuso
  const textColor = 
    location.pathname === "/" && isNavbarTransparent && !isMobileMenuOpen
      ? "text-white"
      : "text-pizza-brown";

  const hoverClass =
    location.pathname === "/" && isNavbarTransparent && !isMobileMenuOpen
      ? "hover:text-pizza-yellow"
      : "hover:text-pizza-red";

  // Definisci gli elementi della navbar con le rispettive chiavi di traduzione e rotte
  const navItems = [
    { key: "home", label: t("navbar.home"), route: "/", icon: <FaHome /> },
    { 
      key: "menu", 
      label: t("navbar.menu"), 
      route: "https://molecola.dwmenu.it/le-pizze/", 
      external: true, 
      icon: <FaUtensils /> 
    },
    { key: "gallery", label: t("navbar.gallery"), route: "/galleria", icon: <FaImages /> },
  ];

  // Varianti per le animazioni dei link della navbar
  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Varianti per il menu mobile a tutto schermo da destra verso sinistra
  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeIn",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  // Variante per gli elementi del menu mobile
  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-[100] transition-all duration-300 ${navbarBg}`}
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center"
                >
                  <Link to="/" className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <OptimizedImage
                        src={logo}
                        alt={t("navbar.logoAlt")}
                        className="w-auto h-[45px] object-contain mr-1"
                        height={45}
                        width={160}
                        loading="eager"
                      />
                    </motion.div>
                  </Link>
                </motion.div>
                
                {/* Menu hamburger per mobile */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden rounded-full p-2 bg-pizza-red text-white focus:outline-none z-[200]"
                  aria-label={t("navbar.toggleMenu")}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </motion.button>
                
                {/* Menu desktop */}
                <div className="hidden lg:flex items-center space-x-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.key}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={navLinkVariants}
                    >
                      {item.external ? (
                        <a
                          href={item.route}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${textColor} ${hoverClass} transition-colors font-medium relative group overflow-hidden`}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pizza-red group-hover:w-full transition-all duration-300 ease-out"></span>
                        </a>
                      ) : (
                        <Link
                          to={item.route}
                          className={`${textColor} ${hoverClass} transition-colors font-medium relative group overflow-hidden`}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pizza-red group-hover:w-full transition-all duration-300 ease-out"></span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    custom={navItems.length}
                    initial="hidden"
                    animate="visible"
                    variants={navLinkVariants}
                  >
                    <Link
                      to="/#press"
                      className={`${textColor} ${hoverClass} transition-colors font-medium relative group overflow-hidden`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname === "/") {
                          const pressSection = document.getElementById("press");
                          if (pressSection) {
                            pressSection.scrollIntoView({ 
                              behavior: "smooth",
                              block: "start"
                            });
                          }
                        } else {
                          window.location.href = "/#press";
                        }
                      }}
                    >
                      <span className="relative z-10">{t("navbar.press")}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pizza-red group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </motion.div>
                  
                  {/* Bottoni CTA */}
                  <motion.div
                    className="flex items-center"
                    custom={navItems.length + 1}
                    initial="hidden"
                    animate="visible"
                    variants={navLinkVariants}
                  >
                    <motion.button
                      onClick={() => setIsReservationModalOpen(true)}
                      className="pizza-btn bg-pizza-red text-white px-5 py-2 rounded-lg shadow-lg hover:shadow-xl active:shadow-md active:translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaCalendarAlt className="mr-2" />
                      <span className="font-montserrat font-medium">{t("reservationButton")}</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      
      {/* Menu mobile come dropdown che appare sotto la navbar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-[61px] inset-x-0 bottom-0 bg-white z-[90] lg:hidden flex flex-col"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-6 py-10 flex flex-col flex-grow overflow-y-auto">
              <div className="flex flex-col space-y-8 flex-grow">
                {/* Elementi di navigazione principale con icone */}
                {navItems.map((item) => (
                  <motion.div
                    key={item.key}
                    variants={mobileNavItemVariants}
                    className="border-b border-gray-100 pb-6"
                  >
                    {item.external ? (
                      <a
                        href={item.route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pizza-brown hover:text-pizza-red transition-all duration-300 text-2xl font-medium flex items-center group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-pizza-red mr-4 text-xl">
                          {item.icon}
                        </span>
                        <span className="relative overflow-hidden">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pizza-red group-hover:w-full transition-all duration-300 ease-out"></span>
                        </span>
                        <motion.span 
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: -10 }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </a>
                    ) : (
                      <Link
                        to={item.route}
                        className="text-pizza-brown hover:text-pizza-red transition-all duration-300 text-2xl font-medium flex items-center group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-pizza-red mr-4 text-xl">
                          {item.icon}
                        </span>
                        <span className="relative overflow-hidden">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pizza-red group-hover:w-full transition-all duration-300 ease-out"></span>
                        </span>
                        <motion.span 
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: -10 }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                {/* Link alla sezione Press */}
                <motion.div 
                  variants={mobileNavItemVariants}
                  className="border-b border-gray-100 pb-6"
                >
                  <Link
                    to="/#press"
                    className="text-pizza-brown hover:text-pizza-red transition-all duration-300 text-2xl font-medium flex items-center group"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      
                      if (location.pathname === "/") {
                        setTimeout(() => {
                          const pressSection = document.getElementById("press");
                          if (pressSection) {
                            pressSection.scrollIntoView({ 
                              behavior: "smooth",
                              block: "start"
                            });
                          }
                        }, 100);
                      } else {
                        window.location.href = "/#press";
                      }
                    }}
                  >
                    <span className="text-pizza-red mr-4 text-xl">
                      <FaNewspaper />
                    </span>
                    <span className="relative overflow-hidden">
                      {t("navbar.press")}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pizza-red group-hover:w-full transition-all duration-300 ease-out"></span>
                    </span>
                    <motion.span 
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
              
              {/* Bottone prenotazione */}
              <motion.div 
                variants={mobileNavItemVariants}
                className="mt-auto py-8"
              >
                <button
                  onClick={() => {
                    setIsReservationModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="pizza-btn bg-pizza-red text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl active:shadow-md active:translate-y-0.5 transition-all duration-200 flex items-center justify-center w-full touch-manipulation"
                >
                  <FaCalendarAlt className="mr-2" />
                  <span className="font-montserrat font-medium">{t("reservationButton")}</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
};

export default Navbar;