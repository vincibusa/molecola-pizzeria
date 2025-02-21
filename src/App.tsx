
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import Menu from "./Pages/Menu";
import ReservationPage from "./Pages/ReservationPage";
import ContactPage from "./Pages/ContactPage";
import Gallery from "./Pages/Gallery";
import Footer from "./components/Footer";
import ContentWrapper from "./components/ContentWrapper";
import { NavbarProvider } from "./contexts/NavbarContenxt";
import RestaurantBlog from "./Pages/RestaurantBlog";


function App() {
  return (
    <NavbarProvider>
      <Navbar  />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="/galleria" element={<Gallery />} />
<Route path="/blog" element={<RestaurantBlog />} />
        </Routes>
      </ContentWrapper>
      <Footer />
    </NavbarProvider>
  );
}

export default App;
