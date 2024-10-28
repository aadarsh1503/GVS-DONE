import React from 'react';
import Picture4 from "./Picture4.png";
import Picture3 from "./Picture3.png";
import Picture2 from "./Picture2.png";
import Fe from "./Fe.jpg"

const ProjectsComponent = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-start p-10 space-y-10">
      {/* Top Row: Porsche and Barry's */}
      <div className="flex flex-col md:flex-row md:space-x-10 w-full">
        
        {/* Porsche Section */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src={Picture4}
            alt="Porsche"
            className="w-full h-80 object-cover lg:h-[700px] rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold uppercase tracking-widest">Food Delivery</p>
            <p className="text-xs text-gray-500 mt-1">Paul Ekman HQ, BAHRAIN</p>
          </div>
        </div>

        {/* Barry's Section */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src="https://cyberkit.in/wp-content/uploads/2024/09/Digital-Products.jpg"
            alt="Barry's"
            className="w-full h-80 lg:mt-96 lg:ml-44 lg:w-[500px] lg:h-[700px] object-cover rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold uppercase lg:ml-44 tracking-widest">Digital Products</p>
            <p className="text-xs text-gray-500 mt-1 lg:ml-44">Paul Ekman HQ, BAHRAIN</p>
          </div>
        </div>
      </div>

      {/* Bottom Row: New Image Sections */}
      <div className="flex flex-col md:flex-row md:space-x-10 w-full mt-10">
        
        {/* New Section 1 */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src={Picture2}
            alt="Tech Background"
            className="w-full h-80 lg:h-[300px] object-cover rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold uppercase tracking-widest">MARKETING</p>
            <p className="text-xs text-gray-500 mt-1">Innovation Hub, BAHRAIN</p>
          </div>
        </div>

        {/* New Section 2 */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src={Picture3}
            alt="Cybersecurity"
            className="w-full h-80 lg:mt-32 lg:h-[600px] object-fill rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold uppercase tracking-widest">MobileApp</p>
            <p className="text-xs text-gray-500 mt-1">Data Center, BAHRAIN</p>
          </div>
        </div>
      </div>

      {/* Single Section Below Existing Rows */}
      <div className="flex flex-col items-start w-full mt-10">
        <img
          src={Fe}
          alt="Single Project"
          className="w-full h-80 lg:w-[1200px] lg:h-[800px] object-fill rounded-md shadow-lg"
        />
        <div className="mt-4">
          <p className="text-gray-800 font-bold uppercase tracking-widest">Single Project</p>
          <p className="text-xs text-gray-500 mt-1">Exclusive Venue, BAHRAIN</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
