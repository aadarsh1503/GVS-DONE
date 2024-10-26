import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import './App.css';
import Home from './components/Home/Home';
import RootLayout from './components/RootLayout/Rootlayout';
import PortfolioSection from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import ServiceSection from './components/ServicesSection/ServicesSection';
import FoodDelivery from './components/FoodDelivery/FoodDelivery';
import Blog from './components/Blogs/Blogs';
import ContactForm from './components/Contactus/Contactus';
import Taxiservices from './TaxiServices/TaxiServices';
import MobileAppDevSection from './components/MobileAppDev/MobileAppDev';
import WebDevSection from './components/WebDev/WebDev';
import Web from './components/WebDev/Ecommerce';
import Marketing from './components/ProductMarketing/ProductMarketing';
import Design from './components/ProductDesign/designProduct';
import Login from './components/AdminLogin/AdminLogin';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './components/AuthContext/AuthContext';
import Company from './components/Company/Company';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';

function App() {
  const isAuthenticated = localStorage.getItem('token'); // Check if token exists

  return (
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioSection />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/services" element={<ServiceSection />} />
            <Route path="/foodDelivery" element={<FoodDelivery />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contactUs" element={<ContactForm />} />
            <Route path="/taxiServices" element={<Taxiservices />} />
            <Route path="/mobileApp" element={<MobileAppDevSection />} />
            <Route path="/webDev" element={<WebDevSection />} />
            <Route path="/ecommerce" element={<Web />} />
            <Route path="/productMarketing" element={<Marketing />} />
            <Route path="/designProduct" element={<Design />} />
            <Route path="/company" element={<Company />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/termsConditions" element={<TermsAndConditions />} />
            <Route
              path="/admin"
              element={isAuthenticated ? <Navigate to="/dashboard/homeAdmin" replace /> : <Login />} // Redirect to dashboard if authenticated
            />
            {/* Protect the Dashboard route */}
            <Route path="/dashboard/*" element={<PrivateRoute element={<Dashboard />} />} />
          </Routes>
        </RootLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
