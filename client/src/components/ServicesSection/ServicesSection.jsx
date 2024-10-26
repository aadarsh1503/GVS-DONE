import React from 'react';
import VariousServices from './VariousServices';
import ProductManagementSection from './ProductManagement'; // Fixed typo in import
import ProductDesign from './ProductDesign';
import MobileDevelopment from './MobileDevelopment';
import WebDevelopment from './WebDevelopment';

// ServiceSection Component
const ServiceSection = () => {
  return (
    <div className="relative bg-white text-black min-h-screen flex flex-col items-center">
      {/* Full-Height Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen bg-white text-black text-center md:text-left">
        <div className="flex flex-col items-center md:items-start md:w-1/2 p-4">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-4">WE BUILD</h1>
          <h2 className="text-4xl md:text-6xl font-semibold mb-8">SOFTWARE SOLUTIONS</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-3">
            Crafting innovative and tailored software solutions to elevate your business.
          </p>

          {/* Service Descriptions */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-700 text-md font-poppins text-left">
              Our innovative product design process focuses on transforming ideas into impactful products. 
              We ensure that each design resonates with users while meeting business objectives effectively.
            </p>
          </div>

          {/* Scroll Instruction */}
          <div className="mt-6 text-lg text-gray-600">↓ SCROLL TO LEARN HOW</div>
        </div>
        
        {/* Video Section for Desktop, Image for Mobile */}
        <div className="flex-shrink-0 md:w-1/2 md:h-2/3 flex justify-center p-4">
          {/* Video for larger screens */}
          
          {/* Image for mobile screens */}
          <img
            src="https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?t=st=1729915847~exp=1729919447~hmac=185c7c3264a193fbd012eec8e2c0d129c9f395f84a2e9476b30c352f69477b45&w=1380" // Replace this with your image URL
            alt="Service Illustration" // Alternative text for accessibility
            className="block  w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Footer Section */}
    
      {/* Service Components */}
      <VariousServices />
      <ProductManagementSection />
      <ProductDesign />
      <MobileDevelopment />
      <WebDevelopment />
    </div>
  );
};

export default ServiceSection;
