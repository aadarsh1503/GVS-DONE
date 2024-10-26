import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiCalendar, FiHome, FiSettings, FiUser, FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons

const AsideBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const [selectedMenu, setSelectedMenu] = useState(location.pathname); // Set default path based on current location
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleMenuClick = (path) => {
    setSelectedMenu(path);
    navigate(path);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close mobile menu on item click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { path: "/dashboard/homeAdmin", label: "Home", icon: <FiHome /> },
    { path: "/dashboard/contactAdmin", label: "Contacts", icon: <FiCalendar /> },
    { path: "/dashboard/AdminSettings", label: "Settings", icon: <FiSettings /> },
    { path: "/dashboard/profileAdmin", label: "Profile", icon: <FiUser /> },
    { path: "/dashboard/AdminTestimonials", label: "Testimonials", icon: <FiUser /> },
    { path: "/dashboard/blogEdit", label: "Blogs", icon: <FiUser /> },
    // Add more menu items as needed
  ];

  // Update selectedMenu when the location changes
  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-white shadow-md fixed top-0 lg:mt-20 mt-20 left-0 right-0 z-50"> {/* Increased z-index */}
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold">Admin Panel</h1>
        
        {/* Mobile toggle button */}
        <button
          className="lg:hidden p-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* Toggle icon */}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          {menuItems.map(({ path, label, icon }) => (
            <button
              key={path}
              onClick={() => handleMenuClick(path)}
              className={`flex items-center p-2 rounded transition-colors duration-200 hover:bg-blue-600 ${
                selectedMenu === path ? "bg-blue-700 text-white" : "text-black"
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span className="ml-2">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          {menuItems.map(({ path, label, icon }) => (
            <button
              key={path}
              onClick={() => handleMenuClick(path)}
              className={`flex items-center p-2 mb-2 rounded transition-colors duration-200 w-full text-left hover:bg-blue-600 ${
                selectedMenu === path ? "bg-blue-700 text-white" : "bg-white"
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span className="ml-2">{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AsideBar;
