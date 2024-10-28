import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

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
    <div ref={sectionRef} className="bg-white text-black min-h-screen flex flex-col justify-center px-4 lg:px-12">
      {/* Main heading */}
      <div className="text-center">
        <h1 className={`lg:text-7xl text-4xl font-bold lg:mt-32 mt-12 font-bebas ${isVisible ? 'animate-slide-in' : ''}`}>
          <span className='outline-text'>WEB</span> DEVELOPMENT
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

      {/* Downward Arrow */}
      <div className="flex justify-center mt-6">
        <div className="bounce-arrow">
          <div className="arrow arrow-large" style={arrowStyle(20, 0)}></div>
          <div className="arrow arrow-medium" style={arrowStyle(15, 0.1)}></div>
          <div className="arrow arrow-small" style={arrowStyle(10, 0.2)}></div>
        </div>
      </div>

      {/* Video with profile and information */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-12 mb-12 space-y-6 lg:space-x-12 lg:space-y-0">
        {/* Video element */}
        <div className="flex flex-col items-center">
          <div className="relative w-80 lg:w-96 h-56">
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

      <div className="max-w-xl lg:mr-8 mx-auto bg-white p-6 rounded-lg mb-32">
        <h2 className="text-black font-bebas text-4xl text-center mb-6">
          Explore Our Web Development Services
        </h2>
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
          <a href="/ecommerce" className="flex flex-col items-center outline-2 border outline transition duration-300 ease-in-out transform hover:bg-blue-500 hover:text-black rounded-md p-4">
            <FaLaptopCode className="text-black text-3xl mb-2" />
            <span className="text-black hover:text-black text-center">E Commerce</span>
          </a>
          <a href="/webDev" className="flex flex-col items-center outline-2 border outline transition duration-300 ease-in-out transform hover:bg-blue-500 hover:text-black rounded-md p-4">
            <FaServer className="text-black text-3xl mb-2" />
            <span className="text-black hover:text-black text-center">Web Services</span>
          </a>
        </div>
      </div>


      {/* Inline CSS for Downward Bouncing Arrows */}
      <style jsx>{`
        .bounce-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .arrow {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          margin: 5px 0;
          animation: bounce 1s infinite;
        }

        .arrow-large {
          border-top: 20px solid black; /* Change to top border for downward arrow */
        }
        .arrow-medium {
          border-top: 15px solid black;
        }
        .arrow-small {
          border-top: 10px solid black;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(10px); /* Move downward for bounce effect */
          }
          60% {
            transform: translateY(5px);
          }
        }
      `}</style>

<div className="lg:pr-10 lg:-mt-72 lg:mb-10 flex justify-start">
  <img
    src="https://www.datocms-assets.com/57452/1642288715-ttl-1x1.jpeg?fm=webp"
    alt="Marketing Visual"
    className="w-[400px] h-auto rounded-md shadow-lg"
  />
</div>

    </div>
  );
};

// Helper function to create inline style for arrow size and animation delay
const arrowStyle = (size, delay) => ({
  animationDelay: `${delay}s`
});

export default WebDevelopment;
