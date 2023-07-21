import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Order from './pages/Order';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/thankyou" element={ <BookingConfirmation /> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
