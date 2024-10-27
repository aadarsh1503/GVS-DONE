import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMedium, AiOutlineInstagram, AiOutlineYoutube, AiOutlineDribbble } from 'react-icons/ai';
import { FaBehance, FaFacebook } from 'react-icons/fa';
import Picture1 from "./Picture1.png";
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai';

const Footer = () => {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="bg-gray-800 p-4 pr-1 text-gray-300 py-8 md:py-16">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">

        {/* Logo and Address */}
        <div className="flex-1 mb-6 md:mb-0">
          <div className="bg-white p-2 rounded-lg shadow-md inline-flex items-center justify-center">
            <img src={Picture1} alt="Global Vision Solutions Logo" className="w-32 md:w-40" />
          </div>
          <address className="not-italic mt-4 lg:text-lg text-xs md:text-sm">
            <p>Global Vision Solutions</p>
            <p>HEAD OFFICE - Bahrain Location</p>
            <p>#22, Building 661, Road no 1208, Block 712 Salmabad, 973, Bahrain</p>
          </address>
        </div>

        {/* Navigation Sections */}
        <div className="flex flex-wrap justify-between flex-1">
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Company</h3>
            <ul className="space-y-1 lg:text-lg text-xs md:text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
              <li><Link to="/company">About Us</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold lg:text-lg text-white mb-2 text-sm md:text-base">Services</h3>
            <ul className="space-y-1 lg:text-lg text-xs md:text-sm">
              <li><Link to="/foodDelivery">Food Delivery</Link></li>
              <li><Link to="/mobileApp">Mobile App Development</Link></li>
              <li><Link to="/webDev">Web Development</Link></li>
              <li><Link to="/ecommerce">E-commerce</Link></li>
              <li><Link to="/designProduct">Product Design</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4  mb-4">
            <h3 className="font-semibold text-white lg:text-lg mb-2 text-sm md:text-base">Resources</h3>
            <ul className="space-y-1 lg:text-lg text-xs md:text-sm">
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/productMarketing">Product Marketing</Link></li>
              <li><Link to="/taxiServices">Taxi Services</Link></li>
              <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
              <li><Link to="/termsConditions">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 w-full md:w-1/3">
            <h3 className="font-semibold lg:text-lg text-white mb-2 text-sm md:text-base">Contact Us</h3>
            <div className="flex items-center mb-1 lg:text-lg text-xs md:text-sm">
              <AiOutlinePhone className="text-white text-lg mr-2" />
              <p>+973 17491222</p>
            </div>
            <div className="flex items-center mb-1 lg:text-lg text-xs md:text-sm">
              <AiOutlineMail className="text-white lg:text-lg text-lg mr-2" />
              <p>info@gvs-bh.com</p>
            </div>
            <div className="flex items-center mb-1 lg:text-lg text-xs md:text-sm">
              <AiOutlineMail className="text-white lg:text-lg text-lg mr-2" />
              <p>riyadh.shaheen@gmail.com</p>
            </div>
            <h3 className="font-semibold text-white mt-4 mb-2 lg:text-lg text-sm md:text-base">Other Offices</h3>
            <div className="flex flex-col">
              <div className="flex items-center mb-1 text-xs lg:text-lg md:text-sm">
                <AiOutlineEnvironment className="text-white lg:text-lg text-lg mr-2" />
                <p>Hyderabad Location: 7-18, 1st Floor, Road no: 1, Banjara Hills, Hyderabad - 500060</p>
              </div>
              <div className="flex items-center mb-1 text-xs lg:text-lg md:text-sm">
                <AiOutlineEnvironment className="text-white lg:text-lg text-lg mr-2" />
                <p>Saudi Arabia Location: Firas Ibn Al Nudur St, Al Khobar 34447, Saudi Arabia</p>
              </div>
              <div className="flex items-center text-xs lg:text-lg md:text-sm">
                <AiOutlineEnvironment className="text-white lg:text-lg text-lg mr-2" />
                <p>UAE Location: 227-219 Salah Al Din St - Deira - Dubai - United Arab Emirates</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/company/global-vision-solutions" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://medium.com/@globalvision" target="_blank" rel="noopener noreferrer">
              <AiOutlineMedium className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://www.behance.net/globalvision" target="_blank" rel="noopener noreferrer">
              <FaBehance className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://dribbble.com/globalvision" target="_blank" rel="noopener noreferrer">
              <AiOutlineDribbble className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://www.youtube.com/globalvision" target="_blank" rel="noopener noreferrer">
              <AiOutlineYoutube className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 md:mt-12 border-t border-gray-600 pt-4 text-center">
          <p className="text-xs md:text-sm text-gray-500">&copy; 2024 Global Vision Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
