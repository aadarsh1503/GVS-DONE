import React from 'react';

const ExpertiseComponent = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row justify-between items-start p-10 lg:space-x-10 max-w-screen-xl mx-auto">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <img
          src="https://www.strv.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-strv.fde2d87a.jpg&w=1920&q=75"  // replace with the actual image path
          alt="Team meeting"
          className="rounded-md shadow-lg object-cover h-full lg:mr-64 w-full lg:mt-20 lg:h-[600px] lg:w-[800px]"
        />
      </div>
      
      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 text-black">
        <h2 className="text-4xl font-bold uppercase mb-8 tracking-tight">Our <span className="text-blue-600">Expertise</span></h2>
        
        <p className="text-lg font-semibold text-gray-800 mb-6">
          Our expertise lies in award-winning design and cross-functional engineering. <span className="font-bold">Led by strong vision and product strategy. All under one roof.</span>
        </p>
        
        <ul className="space-y-4 text-gray-700 font-poppins text-base">
          <li><span className="font-bold  text-black">— Proven track record:</span> Since 2004, we've shipped digital products for the hottest startups, global brands, and high-profile individuals.</li>
          <li><span className="font-bold text-black">— All-around industry experience:</span> We've worked with 400+ clients, creating partnerships that have left a lasting footprint in nearly every industry.</li>
          <li><span className="font-bold text-black">— Award-winning design:</span> Our product design team turns early ideas into beautiful interfaces and flawless experiences recognized by Apps and Webby design awards.</li>
          <li><span className="font-bold text-black">— Best-in-class engineering:</span> We attract top talent that delivers unparalleled code quality and resolves complex tech challenges when the stakes are high.</li>
          <li><span className="font-bold text-black">— Emerging tech practitioners:</span> From AI to AR, we proactively integrate emerging tech into our products and constantly expand our in-house capabilities with the best talent to stay ahead of the curve.</li>
        </ul>
        
        <a href='/services'>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-800 focus:outline-none transition">
          Services
        </button>
        </a>
      </div>
      
    </div>
  );
};

export default ExpertiseComponent;
