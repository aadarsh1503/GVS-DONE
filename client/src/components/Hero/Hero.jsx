import React, { useEffect, useRef } from 'react';
import './Hero.css';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = heroRef.current;
      const rect = heroElement.getBoundingClientRect();

      // Ensure we're within the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollPos = window.scrollY;
        const offset = Math.min(scrollPos / 2, 400); // Move upwards, capped at 200px
        const opacity = Math.max(0, 1 - scrollPos / 500); // Fade out as you scroll

        // Apply vertical movement (translateY) only, keeping horizontal centered (translateX)
        heroElement.style.transform = `translate(-50%, -${offset}px)`;
        heroElement.style.opacity = opacity; 
      }

      // Reset to default when scrolling back to the top
      if (window.scrollY === 0) {
        heroElement.style.transform = 'translate(-50%, -50%)'; // Reset to initial position
        heroElement.style.opacity = '1'; // Full opacity
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="section2" data-navbar-color="bg-black text-white" className="relative bg-black w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="https://videos.pexels.com/video-files/4990317/4990317-sd_640_360_30fps.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Centered Heading with scroll effect */}
      <div
        ref={heroRef}
        className="hero-content absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 transition-all duration-500 ease-out"
      >
        <h10 className="text-white text-5xl md:text-6xl lg:text-10xl flex items-center justify-center font-bebas">
          <span>GLOBAL</span>
          <video
            src="https://videos.pexels.com/video-files/19470340/19470340-sd_640_360_25fps.mp4"
            autoPlay
            muted
            loop
            className="mx-5 w-16 md:w-20 lg:w-32"
          ></video>
          <span>VISION</span>
        </h10>

        <h10 className="block text-white text-5xl md:text-6xl lg:text-10xl  animate-powerhouse font-bebas">
          SOLUTIONS
        </h10>

        {/* Example Link Underline Usage */}
        <span className="link-underline mt-4">Learn More</span>
      </div>
    </section>
  );
};

export default HeroSection;
