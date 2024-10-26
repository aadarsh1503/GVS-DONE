import React, { useEffect, useRef, useState } from 'react';
import { FaRocket, FaTaxi, FaUtensils } from 'react-icons/fa'; // Importing icons from react-icons
import "./Product.css";

const MobileDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true); // Trigger animation when in view
    } else {
      setIsVisible(false); // Reset animation when out of view
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white text-black min-h-screen flex flex-col justify-center px-4 lg:px-12">
      {/* Main heading */}
      <div className="text-center">
        <h1 className={`lg:text-7xl text-4xl font-bold lg:mt-32 font-bebas ${isVisible ? 'animate-slide-in' : ''}`}>
          MOBILE <span className='outline-text'>(APP DEV)</span>
        </h1>
      </div>

      {/* Subtext area */}
      <div className="flex justify-center text-center mt-8">
        <div className="space-y-4 max-w-3xl">
          <p className="text-lg lg:text-xl">
            At GSV, we specialize in developing high-performance mobile applications for both iOS and Android platforms. 
            Our dedicated team utilizes the latest technologies to create seamless and engaging user experiences.
            <span className="text-gray-400 text-sm ml-2">(EMPOWERING BUSINESSES THROUGH MOBILE INNOVATION)</span>
          </p>
        </div>
      </div>

      {/* Video with profile and information */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-12 lg:space-x-12">
        {/* Video element */}
        <div className="flex flex-col items-center mb-6 lg:mb-0">
          <div className="relative w-full lg:w-96 h-56">
            <video
              src="https://videos.pexels.com/video-files/4232959/4232959-sd_640_360_24fps.mp4" // Replace with your video source related to mobile development
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <span className="font-bold text-black">DAVID BROWN</span>, Head of Mobile Development
          </div>
        </div>

        {/* Information Section */}
        <div className="text-left space-y-6">
          {/* Left column */}
          <div>
            <h3 className="text-gray-400 text-sm mb-2">OUR MOBILE SOLUTIONS</h3>
            <ul className="space-y-1 text-lg">
              <li>— Cross-Platform Development</li>
              <li>— Native App Development</li>
              <li>— UI/UX Design</li>
              <li>— App Maintenance & Support</li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-gray-400 text-sm mb-2">DEVELOPMENT AT GSV</h3>
            <ul className="space-y-1 text-lg">
              <li>
                — Creating user-friendly apps: <a href="#" className="text-blue-600">Enhanced User Engagement</a>
              </li>
              <li>
                — Ensuring performance optimization <a href="#" className="text-blue-600">for seamless experiences</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Explore Our Apps and Services Section */}
      <div className="mt-12 max-w-xl mx-auto bg-white p-6 rounded-lg">
        <h2 className="text-black text-3xl lg:text-4xl text-center font-bebas mb-6">
          <a href="#" className="hover:text-teal-400">Explore Our Apps and Services</a>
        </h2>
        <div className="flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-4">
          <a href="/mobileApp" className="flex flex-col items-center outline-2 border outline transition duration-300 ease-in-out transform hover:bg-teal-400 hover:text-black rounded-md p-4 mb-4 lg:mb-0">
            <FaRocket className="text-black  hover:text-black text-3xl mb-2" />
            <span className="text-black hover:text-black">Explore Service</span>
          </a>
          <a href="/taxiServices" className="flex flex-col items-center outline-2 border outline transition duration-300 ease-in-out transform hover:bg-teal-400 hover:text-black rounded-md p-4 mb-4 lg:mb-0">
            <FaTaxi className="text-black text-3xl hover:text-black mb-2" />
            <span className="text-black hover:text-black">Taxi Service App</span>
          </a>
          <a href="/foodDelivery" className="flex flex-col items-center outline-2 border outline transition duration-300 ease-in-out transform hover:bg-teal-400 hover:text-black rounded-md p-4 mb-4 lg:mb-0">
            <FaUtensils className="text-black text-3xl hover:text-black mb-2" />
            <span className="text-black hover:text-black">Food Delivery App</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default MobileDevelopment;
