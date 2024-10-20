import React, { useEffect, useRef, useState } from 'react';
import "./Product.css";

const WebDevelopment = () => {
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
    <div ref={sectionRef} className="bg-black text-white min-h-screen flex flex-col justify-center  px-12">
      {/* Main heading */}
      <div className="text-center">
        <h1 className={`lg:text-10xl font-extrabold font-bebas ${isVisible ? 'animate-slide-in' : ''}`}>
        <span className='outline-text'>WEB</span>    DEVELOPMENT
        </h1>
      </div>

      {/* Subtext area */}
      <div className="flex justify-center text-center mt-8">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xl">
            At GSV, we excel in building robust and scalable web applications tailored to meet our clients' needs. 
            Our focus on user experience and modern design ensures that your online presence stands out.
            <span className="text-gray-400 text-sm ml-2">(TRANSFORMING IDEAS INTO DIGITAL REALITIES)</span>
          </p>
        </div>
      </div>

      {/* Video with profile and information */}
      <div className="flex justify-center items-center mt-12 mb-32 space-x-12">
        {/* Video element */}
        <div className="flex flex-col items-center">
          <div className="relative w-96 h-56">
            <video
              src="https://videos.pexels.com/video-files/7989701/7989701-sd_640_360_25fps.mp4" // Replace with your video source related to web development
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <span className="font-bold">EMMA WHITE</span>, Head of Web Development
          </div>
        </div>

        {/* Information Section */}
        <div className="text-left mb-32 space-y-6">
          {/* Left column */}
          <div>
            <h3 className="text-gray-400 text-sm mb-2">OUR WEB SOLUTIONS</h3>
            <ul className="space-y-1 text-lg">
              <li>— Custom Web Application Development</li>
              <li>— E-commerce Solutions</li>
              <li>— Responsive Design</li>
              <li>— Content Management Systems (CMS)</li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-gray-400 text-sm mb-2">DEVELOPMENT AT GSV</h3>
            <ul className="space-y-1 text-lg">
              <li>
                — Implementing innovative solutions: <a href="#" className="text-blue-600">Enhancing User Interaction</a>
              </li>
              <li>
                — Delivering high-quality code <a href="#" className="text-blue-600">with best practices</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
