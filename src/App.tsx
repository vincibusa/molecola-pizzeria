import './App.css';
import ContentWrapper from './components/ContentWrapper';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import Menu from './Pages/Menu';
import ReservationPage from './Pages/ReservationPage';


function App() {
  return (
    <><Navbar /><ContentWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
<Route path="/menu" element={<Menu />} />
<Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </ContentWrapper></>
  );
}

export default App;