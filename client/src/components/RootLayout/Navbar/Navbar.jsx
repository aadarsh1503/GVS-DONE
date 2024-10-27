import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineTool, AiOutlineFolderOpen, AiOutlineTeam, AiOutlineBulb, AiOutlineBook, AiOutlineContacts, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import Icons

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-white text-black'); // Default to white navbar
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    // Function to handle intersection of sections
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set navbar color based on the section in the viewport
          const bgColor = entry.target.getAttribute('data-navbar-color');
          if (bgColor) {
            console.log("Changing navbar color to:", bgColor); // Debugging line
            setNavbarColor(bgColor);
          }
        }
      });
    };

    // Options for the observer (root null means it observes based on viewport)
    const observerOptions = {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each section
    const sections = document.querySelectorAll('[data-navbar-color]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup the observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 p-5 transition-colors duration-500 ${navbarColor}`}>
      <div className="container font-serif mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <AiOutlineHome className="text-3xl text-black" />
          <span 
        className="text-2xl font-semibold" 
        style={{ color: '#1388c2' }} // Set the new color here
      >
        Global Vision Solution
      </span>
        </div>

        {/* Mobile Menu Button */}
        <button className="block lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <AiOutlineClose className="text-3xl text-black" /> : <AiOutlineMenu className="text-3xl mr-3 text-black" />}
        </button>

        {/* Mobile Menu Links */}
        <div className={`fixed inset-0 z-40 transition-transform duration-300 transform bg-white text-black ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full p-5 space-y-4">
            <button onClick={toggleMobileMenu} className="self-end">
              <AiOutlineClose className="text-3xl mt-32 text-black" />
            </button>
            <a href="/" className="flex items-center hover:text-gray-300 text-lg">
              <AiOutlineHome className="mr-2" />
              Home
            </a>
            <a href="/services" className="flex items-center hover:text-gray-300 text-lg">
              <AiOutlineTool className="mr-2" />
              Services
            </a>
            <a href="/portfolio" className="flex items-center hover:text-gray-300 text-lg">
              <AiOutlineFolderOpen className="mr-2" />
              Portfolio
            </a>
            <a href="/company" className="flex items-center hover:text-gray-300 text-lg">
              <AiOutlineTeam className="mr-2" />
              Company
            </a>
            <a href="/blogs" className="flex items-center hover:text-gray-300 text-lg">
              <AiOutlineBulb className="mr-2" />
              Blog
            </a>
            <a href="/testimonials" className="flex items-center hover:text-gray-300 text-lg">
              <AiOutlineBook className="mr-2" />
              Testimonials
            </a>
            <a href="/contactUs" className="flex items-center hover:text-gray-300 text-lg">
              <AiOutlineContacts className="mr-2" />
              Contact Us
            </a>
          </div>
        </div>

        {/* Main Links (Desktop) */}
        <div className={`hidden lg:flex space-x-6 text-black`}>
          <a href="/" className="flex items-center hover:text-gray-300 p-2">
            <AiOutlineHome className="mr-2" />
            Home
          </a>
          <a href="/services" className="flex items-center hover:text-gray-300 p-2">
            <AiOutlineTool className="mr-2" />
            Services
          </a>
          <a href="/portfolio" className="flex items-center hover:text-gray-300 p-2">
            <AiOutlineFolderOpen className="mr-2" />
            Portfolio
          </a>
          <a href="/company" className="flex items-center hover:text-gray-300 p-2">
            <AiOutlineTeam className="mr-2" />
            Company
          </a>
          <a href="/blogs" className="flex items-center hover:text-gray-300 p-2">
            <AiOutlineBulb className="mr-2" />
            Blog
          </a>
          <a href="/testimonials" className="flex items-center hover:text-gray-300 p-2">
            <AiOutlineBook className="mr-2" />
            Testimonials
          </a>
          <a href="/contactUs" className="flex items-center hover:text-gray-300 p-2">
            <AiOutlineContacts className="mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
