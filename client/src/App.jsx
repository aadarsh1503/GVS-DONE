import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import ServiceDifferentiators from './components/ServiceDifferentiators/ServiceDifferentiators';

function App() {
  return (
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <Router>
        <RootLayout>
          <Routes>
            {/* Public Routes */}
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
            <Route path="/serviceDifferentiators" element={<ServiceDifferentiators />} />

            {/* Redirect to Dashboard or Admin */}
            <Route
              path="/admin"
              element={!localStorage.getItem('token') ? <Login /> : <Navigate to="/dashboard" replace />}
            />

            {/* Protected Route for Dashboard */}
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </RootLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
