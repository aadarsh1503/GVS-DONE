import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll event to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <nav
        className={`bg-white text-black fixed top-0 left-0 w-full flex font-bold items-center justify-between p-4 shadow-md z-10 transition-transform duration-300 ${
          showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        {/* Left section with links */}
        <div className="flex items-center space-x-8">
          <a href="ourWork" className="hover:text-blue-700 transition-colors">
            Our Work
          </a>
          <a href="/services" className="hover:text-blue-700 transition-colors">
            Services
          </a>
          <a href="/whyGvs" className="hover:text-blue-700 transition-colors">
            Why GVS?
          </a>
          <a href="/blogs" className="hover:text-blue-700 transition-colors">
            Blog
          </a>
        </div>

        {/* Center logo with bouncing animation */}
        <span
          className="text-2xl font-bold animate-bounce" // Tailwind built-in bounce animation
          style={{ color: '#1388c2' }}
        >
          Global Vision Solution
        </span>

        {/* Right section with email, button, and menu icon */}
        <div className="flex items-center space-x-7">
          <a href="mailto:info@gvscargo.com" className="hover:text-blue-700 transition-colors hidden md:inline">
            info@gvscargo.com
          </a>
          <a href="/contactUs">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Let’s Talk
            </button>
          </a>

          {/* Menu icon */}
          <div onClick={toggleMenu} className="text-2xl cursor-pointer">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-20 p-8 transform transition-all duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Close icon */}
        <div className="absolute top-6 right-6 text-2xl cursor-pointer" onClick={toggleMenu}>
          <AiOutlineClose />
        </div>

        {/* Overlay content with 3 rows and 2 columns */}
        <div className="grid grid-cols-1 gap-y-12 text-4xl font-bold text-gray-800 max-w-3xl w-full">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-x-20 items-center">
            <div className="flex flex-col items-center">
              <a href='/ourWork'>
              <span>OUR WORK</span>
              </a>
              <span className="text-sm font-normal">(200+)</span>
              <div className="w-20 h-px bg-gray-400 mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <a href='/services'>
              <span>SERVICES</span>
              </a>
              <div className="w-20 h-px bg-gray-400 mt-2"></div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-x-10 items-center">
            <div className="flex flex-col items-center">
            <a href='/company'>
              <span>ABOUT</span>
              </a>
              <span className="text-sm font-normal">(© 200+)</span>
              <div className="w-20 h-px bg-gray-400 mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <a href='blogs'>
              <span>BLOG</span>
              </a>
              <div className="w-20 h-px bg-gray-400 mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <a href='/whyGvs'>
              <span>WHY GVS?</span>
              </a>
              <div className="w-20 h-px bg-gray-400 mt-2"></div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-x-20 items-center">
            <div className="flex flex-col items-center">
              <a href='/testimonials'>
              <span>TESTIMONIALS</span>
              </a>
              <div className="w-20 h-px bg-gray-400 mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <a href='/contactUs'>
              <span>CONTACT</span>
              </a>
              <div className="w-20 h-px bg-gray-400 mt-2"></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-sm font-light text-gray-500 flex space-x-4">
          <span>© 2024 GVS, INC. ALL RIGHTS RESERVED.</span>
          <span>/</span>
          <a href="#security" className="hover:text-blue-700">SECURITY</a>
          <span>/</span>
          <a href="#privacy" className="hover:text-blue-700">PRIVACY POLICY</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
