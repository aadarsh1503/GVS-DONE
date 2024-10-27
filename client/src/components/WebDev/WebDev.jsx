import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShoppingCart, faCloud, faShieldAlt, faChartBar,
    
     
    faClipboardList, 
    faMobileAlt, 
    faFileAlt  ,faChartLine, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const WebDevSection = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

            <div className="bg-white min-h-screen py-20">
                {/* First Section (Web Development) */}
                <section className="flex flex-col md:flex-row items-center justify-center py-10">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                        {/* Left Section */}
                        <div className="max-w-lg space-y-5 mb-6 md:mb-0 md:mr-6">
                            <h1 className="text-4xl font-bold text-gray-800">
                                Web Development
                            </h1>
                            <h2 className="text-lg text-gray-600 font-bold">
                                Transforming Ideas into Digital Solutions
                            </h2>
                            <p className="text-gray-600">
                                Build feature-rich websites with our expertise in various platforms. From eCommerce to custom solutions, we've got you covered!
                            </p>
                            <a
                                href="/contactUs"
                                className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-500/90"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Right Section: Slider */}
                        <div className="relative w-full lg:w-[600px] md:w-[600px] h-[400px] overflow-hidden rounded-lg">
                            <img
                                className="absolute w-full h-full object-cover rounded-lg"
                                src="https://jessup.edu/wp-content/uploads/2024/01/Is-Web-Development-Oversaturated.jpg" // Placeholder image URL
                                alt="Web Development"
                            />
                        </div>
                    </div>
                </section>

                {/* Second Section (Feature-Rich Web Solutions) */}
                <section className="flex flex-col items-center justify-center py-10 bg-white">
                    <div className="text-center py-10">
                        <h2 className="text-xl font-bold">
                            Feature-Rich Web Solutions for Your Business
                        </h2>
                        <p className="font-serif">
                            Comprehensive Web Development Services Tailored to Your Needs.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                        {/* Left Section: App Image */}
                        <div className="relative w-full lg:h-96 lg:w-[500px] lg:mr-20 h-64 overflow-hidden mb-6 lg:mb-0">
                            <img
                                className="absolute w-full h-full object-fill rounded-lg"
                                src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1730001476~exp=1730005076~hmac=582f2b21d97ef6a159854f65a82acfce404a99da83f26582c7a9f27bae08a8c2&w=826" // Replace with your image URL
                                alt="Web Development Example"
                            />
                        </div>

                        {/* Right Section: Text + Buttons */}
                        <div className="grid grid-cols-2 gap-4 max-w-lg w-full">
                            {/* Text Section */}
                            <div className="col-span-2 mb-4 text-center lg:text-left">
                                <h3 className="text-lg font-bold text-blue-500">eCommerce Solutions</h3>
                                <p className="font-serif text-sm">
                                    Enhance your online presence with our robust eCommerce platforms and custom solutions.
                                </p>
                            </div>

                            {/* Buttons Section */}
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faShoppingCart} className="text-blue-500 mr-2" />
                                <span>Magento, Shopify</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faCode} className="text-green-500 mr-2" />
                                <span>Custom eCommerce Development</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faCloud} className="text-yellow-500 mr-2" />
                                <span>Cloud Hosting Solutions</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 mr-2" />
                                <span>eCommerce Security</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faCreditCard} className="text-purple-500 mr-2" />
                                <span>Payment Gateway Integration</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faChartLine} className="text-teal-500 mr-2" />
                                <span>Performance Optimization</span>
                            </button>
                            <a
                                href="/ecommerce"
                                className="mt-4 col-span-2 bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center font-semibold"
                            >
                                Click to Learn More
                            </a>
                        </div>
                    </div>
                </section>

                {/* Additional Services Section */}
                

            </div>
        </div>
    );
};

export default WebDevSection;
