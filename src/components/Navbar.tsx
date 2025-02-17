import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReservationModal from "./ReservationModal";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  useEffect(() => {
    // Se non siamo nella home, forzo sempre lo stile "non trasparente"
    if (location.pathname !== "/") {
      setIsNavbarTransparent(false);
      return;
    }

    const handleScroll = () => {
      // Imposta la soglia al 80% dell'altezza della viewport
      const threshold = window.innerHeight * 0.8;
      setIsNavbarTransparent(window.scrollY < threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // controllo iniziale
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Chiude il menu mobile al cambio di rotta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Se siamo nella home: se siamo in cima (scroll inferiore alla soglia) la navbar è trasparente,
  // altrimenti usa "bg-primary". Su altre pagine è sempre "bg-primary".
  const navbarBg =
    location.pathname === "/"
      ? isNavbarTransparent
        ? "bg-transparent"
        : "bg-primary"
      : "bg-primary";

  // Per il menu mobile usiamo lo stesso background
  const mobileMenuBg = navbarBg;
  const hoverClass = location.pathname === "/" ? "hover:text-primary" : "hover:text-black";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-300 md:px-10 ${navbarBg} ${
          isMobileMenuOpen && location.pathname === "/" ? "!bg-primary" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/">
                <img src={logo} alt="Pizzeria Fermento 2.0" className="h-12" />
              </Link>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
              aria-label="Toggle menu"
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
                  className={`lg:flex ${isMobileMenuOpen ? "block" : "hidden"} absolute lg:relative top-full left-0 w-full lg:w-auto ${
                    location.pathname === "/" && isMobileMenuOpen ? "bg-primary" : mobileMenuBg
                  }`}
                >
                  <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
                    {["Home", "Menu",].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                          className={`text-white ${hoverClass} transition-colors`}
                        >
                          {item}
                        </Link>
                      </motion.li>
                    ))}
                    <motion.li
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <button
                        onClick={() => setIsReservationModalOpen(true)}
                        className={`text-white ${hoverClass} transition-colors`}
                      >
                        Prenotazioni
                      </button>
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
      <ReservationModal isOpen={isReservationModalOpen} onClose={() => setIsReservationModalOpen(false)} />
    </>
  );
};

export default Navbar;
