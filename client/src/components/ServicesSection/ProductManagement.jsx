import React, { useEffect, useRef, useState } from 'react';
import { FaChartLine } from 'react-icons/fa';
import "./Product.css"

const ProjectMarketingSection = () => {
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
    <div ref={sectionRef} className="bg-white text-black min-h-screen flex flex-col justify-center px-12">
      {/* Main heading */}
      <div className="text-center">
        <h1 className={`lg:text-7xl text-5xl font-bold lg:mt-32 font-bebas ${isVisible ? 'animate-slide-in' : ''}`}>
          PROJECT <span className='outline-text'>MARKETING</span>
        </h1>
      </div>

      {/* Subtext area */}
      <div className="flex justify-center text-center mt-8">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xl">
            At GSV, we specialize in creating dynamic marketing strategies that drive engagement and growth.
            Our commitment to understanding market trends ensures that we effectively position our projects 
            for success. 
            <span className="text-gray-400 text-sm ml-2">(DRIVING SUCCESS THROUGH INNOVATION)</span>
          </p>
        </div>
      </div>

      {/* Video with profile and information */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 space-x-12 md:space-x-8">
        {/* Video element */}
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <div className="relative w-full md:w-96 h-56">
            <video
              src="https://videos.pexels.com/video-files/6561186/6561186-sd_640_360_25fps.mp4" // Replace with your video source
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="text-center mt-4">
            <span className="font-bold text-black">ALEX JOHNSON</span>, Head of Marketing
          </div>
        </div>

        {/* Information Section */}
        <div className="text-left space-y-6">
          {/* Left column */}
          <div>
            <h3 className="text-gray-400 text-sm mb-2">OUR STRATEGIES</h3>
            <ul className="space-y-1 text-lg">
              <li>— Digital Marketing Campaigns</li>
              <li>— Brand Positioning</li>
              <li>— Social Media Engagement</li>
              <li>— Market Analysis & Insights</li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-gray-400 text-sm mb-2">MARKETING AT GSV</h3>
            <ul className="space-y-1 text-lg">
              <li>
                — Launching targeted campaigns: <a href="#" className="text-blue-600">Market Penetration</a>
              </li>
              <li>
                — Optimizing ROI <a href="#" className="text-blue-600">through data-driven strategies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Explore Services Section */}
      <div className="mt-12 max-w-xl mx-auto bg-white p-6 rounded-lg">
        <h2 className="text-black text-4xl font-bebas text-center mb-6">
          Explore Our Project Marketing Services
        </h2>
        <div className="flex justify-center space-x-4">
          <a href="/productMarketing" className="flex flex-col outline-2 border outline items-center transition duration-300 ease-in-out transform hover:bg-teal-400 hover:text-black rounded-md p-4">
            <FaChartLine className="text-black text-3xl mb-2" />
            <span className="text-black hover:text-black text-center">Marketing Services</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectMarketingSection;
