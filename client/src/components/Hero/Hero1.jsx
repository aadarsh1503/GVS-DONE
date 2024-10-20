import React, { useEffect, useRef, useState } from 'react';
import { MdCalendarToday, MdCode, MdSettings, MdShoppingCart, MdLaunch } from 'react-icons/md'; // Import relevant icons
import './flipcard.css'; // Import the CSS file
import { FaJsSquare } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Hero1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll); // Remove the event listener once visible
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden"> {/* Prevent overflow */}
      {/* Main Heading */}
      <h2 className="text-center font-bold font-poppins text-5xl text-black mt-6">
        Our only goal:<span className='text-blue-700'>help you reach yours</span> 
      </h2>

      {/* Background Image Section */}
      <div
        className="bg-cover bg-center py-12 lg:py-20"
        style={{ backgroundImage: 'url("https://example.com/your-background-image.jpg")' }}
      >
        {/* First Section */}
        <section id="section1" data-navbar-color="bg-white text-black" className={`bg-white bg-opacity-75 px-6 py-12 lg:py-2 lg:px-16 flex flex-col lg:flex-row rounded-lg`}>
          {/* Left Section with Image */}
          <div className={`lg:w-1/2 flex items-center justify-start mb-10 lg:mb-0 ${isVisible ? 'slide-in-left is-visible' : 'slide-in-left'}`}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://img.freepik.com/premium-photo/hotel-reservation-department-sending-personalized-prearrival-emails-guests_1271419-24051.jpg?w=1060"
                alt="Customer Communication"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Section with Icon and Text */}
          <div className={`lg:w-1/2 flex font-serif flex-col items-start lg:pl-32 mb-10 lg:mb-0 ${isVisible ? 'slide-in-right is-visible' : 'slide-in-right'}`}>
  <div className="bg-black p-3 rounded-full shadow-md transition-shadow duration-300 hover:shadow-lg">
    <MdCode className="text-white text-4xl " /> {/* Code Icon */}
  </div>
  <h2 className="text-3xl font-bold text-blue-700 mt-4">Software <span className='text-black'>Development</span></h2>
  <ul className="mt-4 text-lg text-gray-600 space-y-2">
              <li className="flex items-center">
                <MdCode className="text-blue-700 mr-2" /> Custom application development
              </li>
              <li className="flex items-center">
                <MdSettings className="text-blue-500 mr-2" /> Agile development methodologies
              </li>
              <li className="flex items-center">
                <MdLaunch className="text-blue-500 mr-2" /> API integration services
              </li>
              <li className="flex items-center">
                <MdShoppingCart className="text-blue-500 mr-2" /> Ongoing support and maintenance
              </li>
            </ul>
            <a
  href="#"
  className="mt-4 bg-black text-white font-semibold py-2 px-4 rounded-xl transition duration-300 hover:bg-white hover:text-black border-2 border-black"
>
  Learn More
</a>
          </div>
        </section>

        {/* Second Section */}
        <section className={`bg-white bg-opacity-75 px-6 py-12 lg:py-20 lg:px-40 flex flex-col lg:flex-row rounded-lg`}>
          {/* Left Section with Icon and Text */}
          <div className={`lg:w-1/2 flex font-serif flex-col items-start mb-10 lg:mb-0 ${isVisible ? 'slide-in-right is-visible' : 'slide-in-right'}`}>
            <div className="bg-black p-4 rounded-full shadow-md transition-shadow duration-300 hover:shadow-lg">
              <FaJsSquare className="text-white text-4xl" /> {/* Calendar Icon */}
            </div>
            <h2 className="text-3xl font-bold mt-6 text-blue-700">Web & eCommerce <span className='text-black'>Solutions</span></h2>
            <ul className="mt-4 text-lg text-gray-600 space-y-2">
              <li className="flex items-center">
                <MdCode className="text-blue-500 mr-2" /> Responsive web design
              </li>
              <li className="flex items-center">
                <MdSettings className="text-blue-500 mr-2" /> Secure payment gateway integration
              </li>
              <li className="flex items-center">
                <MdLaunch className="text-blue-500 mr-2" /> Inventory management solutions
              </li>
              <li className="flex items-center">
                <MdShoppingCart className="text-blue-500 mr-2" /> User-friendly interface design
              </li>
            </ul>
            <a
  href="#"
  className="mt-4 bg-black text-white font-semibold py-2 px-4 rounded-xl transition duration-300 hover:bg-white hover:text-black border-2 border-black"
>
  Learn More
</a>
          </div>

          {/* Right Section with Image */}
          <div className={`lg:w-1/2 flex items-center justify-end ${isVisible ? 'slide-in-left is-visible' : 'slide-in-left'}`}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://img.freepik.com/free-vector/realistic-responsive-website-design-collection_23-2149500087.jpg?t=st=1729313362~exp=1729316962~hmac=8878ce3a4862ea95b9438754019f0dc0afaf9b0dd69947c4e6035daccd519563&w=996"
                alt="Customer Communication"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className={`bg-white bg-opacity-75 px-6 py-12 lg:py-2 lg:px-16 flex flex-col lg:flex-row rounded-lg`}>
          {/* Left Section with Image */}
          <div className={`lg:w-1/2 flex items-center justify-start mb-10 lg:mb-0 ${isVisible ? 'slide-in-left is-visible' : 'slide-in-left'}`}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://www.gniotgroup.edu.in/blog/wp-content/uploads/2024/07/core-components-digital-marketing.webp"
                alt="Customer Communication"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Section with Icon and Text */}
          <div className={`lg:w-1/2 flex font-serif flex-col items-start lg:pl-32 mb-10 lg:mb-0 ${isVisible ? 'slide-in-right is-visible' : 'slide-in-right'}`}>
            <div className="bg-black p-4 rounded-full shadow-md transition-shadow duration-300 hover:shadow-lg">
              <AiOutlineMail className="text-white text-4xl" /> {/* Calendar Icon */}
            </div>
            <h2 className="text-3xl font-bold mt-6 text-blue-700">Digital Marketing <span className='text-black'>Services</span></h2>
            <ul className="mt-4 text-lg text-gray-600 space-y-2">
              <li className="flex items-center">
                <MdCode className="text-blue-500 mr-2" /> Search engine optimization (SEO)
              </li>
              <li className="flex items-center">
                <MdSettings className="text-blue-500 mr-2" /> Social media management
              </li>
              <li className="flex items-center">
                <MdLaunch className="text-blue-500 mr-2" /> Content marketing solutions
              </li>
              <li className="flex items-center">
                <MdShoppingCart className="text-blue-500 mr-2" /> Performance analytics and reporting
              </li>
            </ul>
            <a
  href="#"
  className="mt-4 bg-black text-white font-semibold rounded-xl py-2 px-4  transition duration-300 hover:bg-white hover:text-black border-2 border-black"
>
  Learn More
</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero1;
