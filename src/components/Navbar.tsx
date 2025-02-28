import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReservationModal from "./ReservationModal";
import logo from "../assets/logo.png";
import { useNavbar } from "../contexts/NavbarContenxt";
import { useTranslation } from "react-i18next";

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
        ? "bg-transparent"
        : "bg-primary"
      : "bg-primary";

  const mobileMenuBg = navbarBg;
  const hoverClass =
    location.pathname === "/" ? "hover:text-black" : "hover:text-black";

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
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-[100] transition-all duration-300 md:px-10 ${navbarBg} ${
              isMobileMenuOpen && location.pathname === "/" ? "!bg-primary" : ""
            }`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to="/">
                    <img
                      src={logo}
                      alt={t("navbar.logoAlt")}
                      className="h-12"
                    />
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-white"
                  aria-label={t("navbar.toggleMenu")}
                >
                  <FaBars size={24} />
                </motion.button>
                <AnimatePresence>
                  {(isMobileMenuOpen || window.innerWidth >= 1024) && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`lg:flex ${
                        isMobileMenuOpen ? "block" : "hidden"
                      } absolute lg:relative top-full left-0 w-full lg:w-auto ${
                        location.pathname === "/" && isMobileMenuOpen
                          ? "bg-primary"
                          : mobileMenuBg
                      }`}
                    >
                      <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
                        {navItems.map((item, index) => (
                          <motion.li
                            key={item.key}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Link
                              to={item.route}
                              className={`text-white ${hoverClass} transition-colors`}
                            >
                              {item.label}
                            </Link>
                          </motion.li>
                        ))}
                        <motion.li
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <Link
                            to="/#press"
                            className={`text-white ${hoverClass} transition-colors`}
                            onClick={(e) => {
                              if (location.pathname === "/") {
                                e.preventDefault();
                                const pressSection = document.getElementById("press");
                                if (pressSection) {
                                  pressSection.scrollIntoView({ behavior: "smooth" });
                                }
                              }
                            }}
                          >
                            {t("navbar.press")}
                          </Link>
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <button
                            onClick={() => setIsReservationModalOpen(true)}
                            className={`text-white ${hoverClass} transition-colors`}
                          >
                            {t("navbar.reservation")}
                          </button>
                        </motion.li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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