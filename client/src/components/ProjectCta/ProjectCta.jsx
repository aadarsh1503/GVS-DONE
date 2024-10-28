import React from 'react';
import { FaArrowRight, FaLinkedin  } from 'react-icons/fa'; // Import the necessary icons

const ProjectCTA = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center text-center relative">
      
      {/* Main Text */}
      <h2 className="text-4xl  lg:text-6xl font-bold uppercase tracking-tight text-black mb-4">
        Got a Project?
      </h2>
      
      {/* Call-to-Action Text */}
      <a href="/contactUs" className="text-blue-600 lg:mb-32 text-3xl lg:text-5xl font-bold uppercase tracking-widest underline flex items-center mb-10">
        <FaArrowRight className="mr-2" /> Let's Talk
      </a>
      
      {/* Vertical Line */}
      <div className=" inset-0 flex justify-center">
        <div className="w-px h-64 bg-black opacity-30"></div>
      </div>
      
      {/* Bottom Links */}
      <div className="absolute bottom-64 w-full flex justify-between px-8 text-xs lg:text-sm text-gray-700">
  <span className="flex lg:ml-96 text-4xl items-center">
    Follow <a href="https://www.linkedin.com/company/global-vision-solutions" target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-1"><FaLinkedin /></a>
  </span>
  <span className="flex text-4xl lg:mr-64 items-center">
    Go Next: <a href="/ourWork" className="text-blue-600 ml-1">OUR WORK</a>
  </span>
</div>
      
    </div>
  );
};

export default ProjectCTA;
