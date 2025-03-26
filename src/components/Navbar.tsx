import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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

  const navbarBg =
    location.pathname === "/"
      ? isNavbarTransparent
        ? "bg-transparent backdrop-blur-sm bg-opacity-0"
        : "bg-white shadow-md"
      : "bg-white shadow-md";

  const textColor = 
    location.pathname === "/" && isNavbarTransparent
      ? "text-white"
      : "text-pizza-brown";

  const hoverClass =
    location.pathname === "/" && isNavbarTransparent
      ? "hover:text-pizza-yellow"
      : "hover:text-pizza-red";

  // Definisci gli elementi della navbar con le rispettive chiavi di traduzione e rotte
  const navItems = [
    { key: "home", label: t("navbar.home"), route: "/" },
    { key: "menu", label: t("navbar.menu"), route: "/menu" },
    { key: "gallery", label: t("navbar.gallery"), route: "/galleria" },
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

  // Varianti semplificate per il menu mobile
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
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
                  className="lg:hidden rounded-full p-2 bg-pizza-red text-white focus:outline-none"
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
                      <Link
                        to={item.route}
                        className={`${textColor} ${hoverClass} transition-colors font-medium relative group overflow-hidden`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pizza-red group-hover:w-full transition-all duration-300 ease-out"></span>
                      </Link>
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
                      className="pizza-btn bg-pizza-red text-white px-5 py-2 text-sm relative overflow-hidden group"
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10">{t("navbar.reservation")}</span>
                      <span className="absolute inset-0 bg-pizza-brown transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
              
              {/* Menu mobile con animazioni semplificate */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    className="lg:hidden mt-4 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={mobileMenuVariants}
                  >
                    <div className="flex flex-col py-4 space-y-3 bg-white rounded-xl shadow-lg p-4">
                      {/* Elementi di navigazione principale con CSS Transitions invece di framer-motion */}
                      {navItems.map((item, i) => (
                        <div
                          key={item.key}
                          className={`transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <Link
                            to={item.route}
                            className="text-pizza-brown hover:text-pizza-red transition-colors font-medium px-3 py-2 rounded-lg active:bg-gray-200 touch-manipulation flex items-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="relative overflow-hidden">
                              {item.label}
                              <span className="absolute bottom-0 left-0 w-0 bg-pizza-red h-0.5 transition-all duration-300 ease-out group-hover:w-full"></span>
                            </span>
                          </Link>
                        </div>
                      ))}
                      
                      {/* Link alla sezione Press */}
                      <div 
                        className={`transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                        style={{ transitionDelay: `${navItems.length * 50}ms` }}
                      >
                        <Link
                          to="/#press"
                          className="text-pizza-brown hover:text-pizza-red transition-colors font-medium px-3 py-2 rounded-lg active:bg-gray-200 touch-manipulation block"
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
                          {t("navbar.press")}
                        </Link>
                      </div>
                      
                      {/* Bottone prenotazione */}
                      <div 
                        className={`transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                        style={{ transitionDelay: `${(navItems.length + 1) * 50}ms` }}
                      >
                        <button
                          onClick={() => {
                            setIsReservationModalOpen(true);
                            setIsMobileMenuOpen(false);
                          }}
                          className="pizza-btn bg-pizza-red text-white px-5 py-3 text-sm w-full mt-2 touch-manipulation active:opacity-90 relative overflow-hidden group transition-transform duration-200 active:scale-[0.98]"
                        >
                          <span className="relative z-10">{t("navbar.reservation")}</span>
                          <span className="absolute inset-0 bg-pizza-brown transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
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