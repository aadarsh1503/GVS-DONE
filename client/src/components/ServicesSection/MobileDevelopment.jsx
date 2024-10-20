
import React, { useEffect, useRef, useState } from 'react';
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
    <div ref={sectionRef} className="bg-black text-white min-h-screen flex flex-col justify-center px-12">
      {/* Main heading */}
      <div className="text-center">
        <h1 className={`lg:text-10xl font-extrabold font-bebas ${isVisible ? 'animate-slide-in' : ''}`}>
          MOBILE <span className='outline-text'>(APP DEV)</span>
        </h1>
      </div>

      {/* Subtext area */}
      <div className="flex justify-center text-center mt-8">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xl">
            At GSV, we specialize in developing high-performance mobile applications for both iOS and Android platforms. 
            Our dedicated team utilizes the latest technologies to create seamless and engaging user experiences.
            <span className="text-gray-400 text-sm ml-2">(EMPOWERING BUSINESSES THROUGH MOBILE INNOVATION)</span>
          </p>
        </div>
      </div>

      {/* Video with profile and information */}
      <div className="flex justify-center items-center mt-12 space-x-12">
        {/* Video element */}
        <div className="flex flex-col items-center">
          <div className="relative w-96 h-56">
            <video
              src="https://videos.pexels.com/video-files/4232959/4232959-sd_640_360_24fps.mp4" // Replace with your video source related to mobile development
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <span className="font-bold">DAVID BROWN</span>, Head of Mobile Development
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
    </div>
  );
};

export default MobileDevelopment;
