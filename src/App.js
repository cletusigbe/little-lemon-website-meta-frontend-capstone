import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Order from './pages/Order';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
