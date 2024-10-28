import React, { useState, useEffect, useRef } from 'react';

const services = [
  { id: 1, name: 'PRODUCT MARKETING', video: 'https://videos.pexels.com/video-files/7287517/7287517-sd_640_360_25fps.mp4' },
  { id: 2, name: 'PRODUCT DESIGN', video: 'https://videos.pexels.com/video-files/4973184/4973184-sd_640_360_30fps.mp4' },
  { id: 3, name: 'MOBILE DEVELOPMENT (iOS + ANDROID)', video: 'https://videos.pexels.com/video-files/5925291/5925291-sd_640_360_24fps.mp4' },
  { id: 4, name: 'WEB DEVELOPMENT', video: 'https://videos.pexels.com/video-files/7308108/7308108-sd_640_360_24fps.mp4' },
];

const VariousServices = () => {
  const [selectedVideo, setSelectedVideo] = useState(''); // Start with no video selected
  const [hoveredServiceId, setHoveredServiceId] = useState(null); // Track hovered service ID
  const [isVisible, setIsVisible] = useState(false); // Track visibility for animation
  const ref = useRef(null); // Ref to the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the component is in view
          observer.unobserve(ref.current); // Stop observing after visibility is set
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current); // Start observing the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up observer on component unmount
      }
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`bg-white text-black font-bebas min-h-screen flex flex-col md:flex-row ${isVisible ? 'animate-slide-in' : ''}`}
    >
      {/* Left side: Video Section */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        {selectedVideo ? ( // Show video only if selected
          <video
            src={selectedVideo}
            className="w-full h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
          />
        ) : (
          <div className="text-center text-3xl">
            <p>Please choose a service to see the demo</p>
          </div>
        )}
      </div>

      {/* Right side: Service List */}
      <div className="flex flex-col justify-center cursor-pointer space-y-10 p-4 md:p-8 w-full md:w-1/2">
        {services.map((service) => (
          <div
            key={service.id}
            onMouseEnter={() => {
              setSelectedVideo(service.video); // Change video on hover
              setHoveredServiceId(service.id); // Set hovered service ID
            }}
            onMouseLeave={() => {
              setSelectedVideo(''); // Clear video on mouse leave
              setHoveredServiceId(null); // Clear hovered service ID
            }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center w-full">
              {/* Blue number aligned to the left */}
              <span className="text-blue-600 font-bold text-lg mr-4">{`0${service.id}`}</span>
              {/* Service name aligned next to the number with hover effect */}
              <span 
                className={`text-3xl font-bold transition duration-300 ${hoveredServiceId === service.id ? 'underline text-blue-400' : 'text-black'}`}
              >
                {service.name}
              </span>
            </div>
            {/* Bottom border line */}
            <div className="border-b border-gray-300 w-full mt-8" />
          </div>
        ))}
      </div>

      {/* Mobile View Adjustments */}

    </div>
  );
};

export default VariousServices;
