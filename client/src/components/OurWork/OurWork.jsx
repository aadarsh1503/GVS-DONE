// Import React
import React from 'react';
import Picture4 from "./Picture4.png";
import Picture3 from "./Picture3.png";
import Picture2 from "./Picture2.png";
import { AiOutlineArrowRight } from 'react-icons/ai';

const WorkSection = () => {
  return (
    <div className="bg-white text-black text-center lg:mt-32 py-10">
      <h1 className="text-4xl lg:text-8xl lg:mb-60 font-bold uppercase">
        OUR WORK <span className="font-light"></span> <br />
        <span className="text-outline"> <span className='text-blue-600'>&</span> Ideas </span>
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-10 w-full">
        
        {/* Porsche Section */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src={Picture4}
            alt="Porsche"
            className="w-full h-80 object-cover lg:h-[700px] rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold uppercase tracking-widest">Food Application</p>
            <p className="text-xs text-gray-500 mt-1">Paul Ekman HQ, BAHRAIN</p>
          </div>
        </div>

        {/* Barry's Section */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src="https://www.indidigital.in/wp-content/uploads/2024/02/mobile_app_promotion_services_packages_indidigital.png"
            alt="Barry's"
            className="w-full h-80 lg:mt-96 lg:ml-44 lg:w-[500px] lg:h-[700px] object-fill rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold uppercase tracking-widest lg:ml-44">Digital Marketing App</p>
            <p className="text-xs text-gray-500 mt-1 lg:ml-44">Paul Ekman HQ, BAHRAIN</p>
          </div>
        </div>
      </div>

      {/* Bottom Row: New Image Sections */}
      <div className="flex flex-col md:flex-row md:space-x-10 w-full mt-10">
        
        {/* New Section 1 */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/digital-marketing-mobile-app-screens-template-social-networks-stories_9209-4255.jpg"
            alt="Tech Background"
            className="w-full h-80 lg:h-[400px] ml-2 object-cover rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold ml-2  uppercase tracking-widest"> Marketing App</p>
            <p className="text-xs text-gray-500 ml-2  mt-2">Innovation Hub, BAHRAIN</p>
          </div>
        </div>

        {/* New Section 2 */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src={Picture3}
            alt="Cybersecurity"
            className="w-full h-80 lg:mt-32 lg:h-[700px] object-fill rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold uppercase tracking-widest">App Services</p>
            <p className="text-xs text-gray-500 mt-1">Data Center, BAHRAIN</p>
          </div>
        </div>
      </div>

      {/* Single Section Below Existing Rows */}
      <div className="flex flex-col items-start w-full mt-10">
        <img
          src="https://www.tgconnectmediaservices.com/images/services/website.svg"
          alt="Single Project"
          className="w-full h-80 lg:ml-12 lg:w-[1200px] lg:h-[800px] object-fill rounded-md shadow-lg"
        />
        <div className="mt-4">
          <p className="text-gray-800 font-bold uppercase lg:ml-20 tracking-widest">Web Project</p>
          <p className="text-xs text-gray-500 lg:mb-8 lg:ml-20  mt-1">Exclusive Venue, Bahrain</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-10 w-full">
        
        {/* Porsche Section */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src="https://www.cio.com/wp-content/uploads/2023/05/digital-marketing-ts-100598676-orig-4.jpg?quality=50&strip=all"
            alt="Porsche"
            className="w-full h-80 object-cover lg:ml-32 lg:h-[700px] rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold lg:ml-32 uppercase tracking-widest">Marketing</p>
            <p className="text-xs text-gray-500 lg:ml-32 mt-1">Paul Ekman HQ, BAHRAIN</p>
          </div>
        </div>

        {/* Barry's Section */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <img
            src="https://new.mobitouch.pl/wp-content/uploads/2023/09/UI-Designera_-Blog-Main.jpg"
            alt="Barry's"
            className="w-full h-80 lg:mt-96 lg:ml-44 lg:w-[500px] lg:h-[700px] object-cover rounded-md shadow-lg"
          />
          <div className="mt-4">
            <p className="text-gray-800 font-bold ml-44  uppercase tracking-widest">App Services</p>
            <p className="text-xs text-gray-500 ml-44 mt-1">Paul Ekman HQ, BAHRAIN</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full mt-10">
        <img
          src="https://www.datocms-assets.com/57452/1642288573-stilllife-16x9.jpg?fm=webp"
          alt="Single Project"
          className="w-full h-80 lg:ml-12 lg:w-[1200px] lg:h-[800px] object-fill rounded-md shadow-lg"
        />
        <div className="mt-4">
          <p className="text-gray-800 font-bold uppercase lg:ml-12 tracking-widest">APP Application</p>
          <p className="text-xs text-gray-500 lg:mb-8  mt-1">Exclusive Venue, BAHRAIN</p>
        </div>
      </div>
      <div className="bg-white text-black flex flex-col items-center justify-center h-screen">
  <h1 className="lg:text-8xl text-4xl font-bold uppercase text-center">
    Got a Project?
  </h1>
  <div className="flex items-center mt-4">
    <AiOutlineArrowRight className="text-4xl text-blue-600 mr-2" />
    <a href="/contactUs">
  <h2 className="lg:text-8xl text-4xl font-bold text-blue-600 underline">
    Let’s Talk
  </h2>
</a>

  </div>
  <p className="text-sm italic text-gray-500 mt-2">(We’re ready!)</p>
</div>
    </div>
  );
};

export default WorkSection;
