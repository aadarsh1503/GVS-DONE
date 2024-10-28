import React from 'react';
import { AiOutlineClockCircle, AiOutlineShake, AiOutlineLaptop, AiOutlineUser, AiOutlinePhone, AiOutlineFileText } from 'react-icons/ai';

const ServiceDifferentiators = () => {
  return (
    <div className="text-center min-h-screen py-32 p-8 space-y-10 font-sans">
      <h1 className="text-4xl font-bold text-black mb-32">eCOMMERCE MANAGED SERVICES - <span className='text-blue-500'>OUR DIFFERENTIATORS</span></h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="flex flex-col items-center text-gray-700">
          <AiOutlineClockCircle className='text-blue-800' size={50} />
          <p className="mt-4 text-lg text-center max-w-xs">Flexible / Fixed monthly support hours based on your preference</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <AiOutlineShake className='text-blue-800' size={50} />
          <p className="mt-4 text-lg text-center max-w-xs">Short/Mid/Long term engagement models</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <AiOutlineLaptop className='text-blue-800' size={50} />
          <p className="mt-4 text-lg text-center max-w-xs">SLA driven support model</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <AiOutlineUser className='text-blue-800' size={50} />
          <p className="mt-4 text-lg text-center max-w-xs">Dedicated Project Manager</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <AiOutlinePhone className='text-blue-800' size={50} />
          <p className="mt-4 text-lg text-center max-w-xs">Telephone support / email support</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <AiOutlineFileText className='text-blue-800' size={50} />
          <p className="mt-4 text-lg text-center max-w-xs">Detailed scheduled reports (hourly, weekly, monthly breakdown)</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDifferentiators;
