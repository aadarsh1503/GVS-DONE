import React from 'react';
import "./service.css";
import VariousServices from './VariousServices';
import ProductManagementSection from './ProductManagemnet';
import ProductDesign from './ProductDesign';
import MobileDevelopment from './MobileDevelopment';
import WebDevelopment from './WebDevelopment';

const ServiceSection = () => {
  return (
    <div>
    <div className="bg-black text-white min-h-screen flex font-bebas flex-col items-center justify-center">
      {/* Top Text */}
      <div className="flex items-center space-x-4 text-xl sm:text-6xl md:text-8xl lg:text-11xl font-bold">
        <span className="outline-text">WE BUILD</span>
        <span className='pl-3' >SOFTWARE</span>
      </div>
      
      {/* Middle Section with Video and Solutions Text */}
      <div className="flex items-center justify-center my-8">
        <div className=" p-4 rounded-full">
          <video
            src="https://videos.pexels.com/video-files/8087013/8087013-sd_360_640_25fps.mp4" // Replace this with your video URL
            autoPlay
            muted
            loop
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="sm:text-6xl lg:text-11xl md:text-8xl font-bold ml-4"> {/* Added margin-left for spacing */}
          <span>SOLUTIONS</span>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 left-5 text-xl">
        <span>↓ SCROLL TO LEARN HOW</span>
      </div>
      <div className="absolute bottom-5 right-5 text-xl">
        <span>✱ 4 SERVICES AVAILABLE</span>
      </div>
      
    </div>
    <VariousServices />
    <ProductManagementSection />
    <ProductDesign />
    <MobileDevelopment />
    <WebDevelopment />
    </div>
  );
};

export default ServiceSection;
