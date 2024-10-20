import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import RootLayout from './components/RootLayout/Rootlayout';
import PortfolioSection from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import ServiceSection from './components/ServicesSection/ServicesSection';
import FoodDelivery from './components/FoodDelivery/FoodDelivery';

function App() {
  return (
    <Router>
      <RootLayout>
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/foodDelivery" element={<FoodDelivery />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
