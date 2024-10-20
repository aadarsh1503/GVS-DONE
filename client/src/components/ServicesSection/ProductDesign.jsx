import React, { useEffect, useRef, useState } from 'react';
import "./Product.css";

const ProductDesign = () => {
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
          PRODUCT <span className='outline-text'>DESIGN</span>
        </h1>
      </div>

      {/* Subtext area */}
      <div className="flex justify-center text-center mt-8">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xl">
            At GSV, we excel in crafting innovative product designs that resonate with users and elevate brand identity. 
            Our approach combines user-centered design principles with cutting-edge technology to deliver outstanding products.
            <span className="text-gray-400 text-sm ml-2">(DESIGNING FOR IMPACT)</span>
          </p>
        </div>
      </div>

      {/* Video with profile and information */}
      <div className="flex justify-center items-center mt-12 space-x-12">
        {/* Video element */}
        <div className="flex flex-col items-center">
          <div className="relative w-96 h-56">
            <video
              src="https://videos.pexels.com/video-files/27668091/12198946_640_360_25fps.mp4" // Replace with your video source related to product design
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <span className="font-bold">JESSICA SMITH</span>, Head of Product Design
          </div>
        </div>

        {/* Information Section */}
        <div className="text-left space-y-6">
          {/* Left column */}
          <div>
            <h3 className="text-gray-400 text-sm mb-2">OUR DESIGN PRINCIPLES</h3>
            <ul className="space-y-1 text-lg">
              <li>— User-Centered Design</li>
              <li>— Iterative Prototyping</li>
              <li>— Aesthetic and Functional Balance</li>
              <li>— Sustainability and Accessibility</li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-gray-400 text-sm mb-2">DESIGN AT GSV</h3>
            <ul className="space-y-1 text-lg">
              <li>
                — Collaborating closely with clients: <a href="#" className="text-blue-600">Tailored Solutions</a>
              </li>
              <li>
                — Enhancing user experience <a href="#" className="text-blue-600">through innovative designs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
