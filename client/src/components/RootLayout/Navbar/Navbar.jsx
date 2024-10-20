import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineTool, AiOutlineFolderOpen, AiOutlineTeam, AiOutlineBulb, AiOutlineBook, AiOutlineContacts } from 'react-icons/ai'; // Import Icons

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-black text-white'); // Default to black navbar

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

  return (
    <nav className={`fixed top-0 w-full z-50 p-5 transition-colors duration-500 ${navbarColor}`}>
      <div className="container font-serif mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <AiOutlineHome className="text-3xl" />
          <span class="text-2xl font-semibold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-transparent bg-clip-text">Global Vision Solution</span>

        </div>

        {/* Links */}
        <div className="space-x-6 flex items-center">
        <a href="/" className="flex items-center hover:text-gray-300">
            <AiOutlineHome className="mr-2" />
            Home
          </a>
          <a href="/services" className="flex items-center hover:text-gray-300">
            <AiOutlineTool className="mr-2" />
            Services
          </a>
          <a href="/portfolio" className="flex items-center hover:text-gray-300">
            <AiOutlineFolderOpen className="mr-2" />
            Portfolio
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <AiOutlineTeam className="mr-2" />
            Company
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <AiOutlineBulb className="mr-2" />
            Blog
          </a>
          <a href="/testimonials" className="flex items-center hover:text-gray-300">
            <AiOutlineBook className="mr-2" />
            Testimonials
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <AiOutlineContacts className="mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
