import  { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ReservationModal from "./ReservationModal";

const Navbar = () => {
  const location = useLocation();
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  useEffect(() => {
    // Per le rotte diverse da "/" imposto sempre bg-primary
    if (location.pathname !== "/") {
      setIsNavbarTransparent(false);
      return;
    }
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setIsNavbarTransparent(isTop);
    };
    window.addEventListener("scroll", handleScroll);
    // Check posizione scroll al mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Se siamo nella home ("/") utilizziamo bg-transparent o bg-black/80
  // altrimenti sempre bg-primary
  const navbarBg =
    location.pathname === "/"
      ? isNavbarTransparent
        ? "bg-transparent"
        : "bg-black/80"
      : "bg-primary";

  // Stessa logica per il menu mobile
  const mobileMenuBg = navbarBg;

  // Classe hover da applicare in base alla rotta attuale
  const hoverClass = location.pathname === "/" ? "hover:text-primary" : "hover:text-black";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 md:px-10 ${navbarBg} ${
          isMobileMenuOpen && location.pathname === "/" ? "!bg-black/80" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">Fermento 2.0</div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
              aria-label="Toggle menu"
            >
              <FaBars size={24} />
            </button>
            <div
              className={`lg:flex ${isMobileMenuOpen ? "block" : "hidden"} absolute lg:relative top-full left-0 w-full lg:w-auto ${
                location.pathname === "/" && isMobileMenuOpen ? "bg-black/80" : mobileMenuBg
              }`}
            >
              <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
                <li>
                  <Link
                    to="/"
                    className={`text-white ${hoverClass} transition-colors`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className={`text-white ${hoverClass} transition-colors`}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsReservationModalOpen(true)}
                    className={`text-white ${hoverClass} transition-colors`}
                  >
                    Prenotazioni
                  </button>
                </li>
                <li>
                  <Link
                    to="/contatti"
                    className={`text-white ${hoverClass} transition-colors`}
                  >
                    Contatti
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
};

export default Navbar;