import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
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
                    <OptimizedImage
                      src={logo}
                      alt={t("navbar.logoAlt")}
                      className="w-auto h-[45px] object-contain mr-1"
                      height={45}
                      width={160}
                      loading="eager"
                    />
                  </Link>
                </motion.div>
                
                {/* Menu hamburger per mobile */}
                <motion.button
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden rounded-full p-2 bg-pizza-red text-white focus:outline-none"
                  aria-label={t("navbar.toggleMenu")}
                >
                  <FaBars size={20} />
                </motion.button>
                
                {/* Menu desktop */}
                <div className="hidden lg:flex items-center space-x-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      to={item.route}
                      className={`${textColor} ${hoverClass} transition-colors font-medium`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/#press"
                    className={`${textColor} ${hoverClass} transition-colors font-medium`}
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
                    {t("navbar.press")}
                  </Link>
                  
                  {/* Bottoni CTA */}
                  <div className="flex items-center">
                    <button
                      onClick={() => setIsReservationModalOpen(true)}
                      className="pizza-btn bg-pizza-red text-white px-5 py-2 text-sm"
                    >
                      {t("navbar.reservation")}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Menu mobile */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ 
                      duration: 0.25, 
                      ease: "easeInOut" 
                    }}
                    className="lg:hidden mt-4 overflow-hidden"
                  >
                    <div className="flex flex-col py-4 space-y-3 bg-white rounded-xl shadow-lg p-4">
                      {/* Elementi di navigazione principale */}
                      {navItems.map((item) => (
                        <Link
                          key={item.key}
                          to={item.route}
                          className="text-pizza-brown hover:text-pizza-red transition-colors font-medium px-3 py-2 rounded-lg active:bg-gray-200 touch-manipulation"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      
                      {/* Link alla sezione Press */}
                      <Link
                        to="/#press"
                        className="text-pizza-brown hover:text-pizza-red transition-colors font-medium px-3 py-2 rounded-lg active:bg-gray-200 touch-manipulation"
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
                      
                      {/* Bottone prenotazione */}
                      <button
                        onClick={() => {
                          setIsReservationModalOpen(true);
                          setIsMobileMenuOpen(false);
                        }}
                        className="pizza-btn bg-pizza-red text-white px-5 py-3 text-sm w-full mt-2 touch-manipulation active:opacity-90"
                      >
                        {t("navbar.reservation")}
                      </button>
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