import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUtensils, faMobileAlt, faUsers, faShieldAlt, faSyncAlt, faChartBar, faClipboardList, faCheckCircle, faFileAlt, faThLarge, faCreditCard, faDollarSign, faMapMarkerAlt, faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import App2 from "./App2.jpg"
import taxi from "./taxi.jpg"

const MobileAppDevSection = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

            <div className="bg-white min-h-screen py-20">
                {/* First Section (Mobile App Development) */}
                <section className="flex flex-col md:flex-row items-center justify-center py-10">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                        {/* Left Section */}
                        <div className="max-w-lg space-y-5 mb-6 md:mb-0 md:mr-6">
                            <h1 className="text-4xl font-bold text-gray-800">
                                Mobile App Development
                            </h1>
                            <h2 className="text-lg text-gray-600 font-bold">
                                Innovative Solutions for Mobile Platforms
                            </h2>
                            <p className="text-gray-600">
                                Build powerful and user-friendly mobile applications with our expertise in cross-platform development. Get your app to market swiftly!
                            </p>
                            <a
                                href="#"
                                className="inline-block  bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-500/90"
                            >
                                Scroll For Apps
                            </a>
                        </div>

                        {/* Right Section: Slider */}
                        <div className="relative w-full lg:w-[600px] md:w-[600px] h-[400px] overflow-hidden rounded-lg">
                            <img
                                className="absolute w-full h-full object-cover rounded-lg"
                                src={App2} // Placeholder image URL
                                alt="Mobile App Development"
                            />
                        </div>
                    </div>
                </section>

                {/* Second Section (Feature-Rich Mobile App) */}
                <section className="flex flex-col items-center justify-center py-10 bg-white">
                    <div className="text-center py-10">
                        <h2 className="text-xl font-bold">
                            Feature-Rich Mobile App for Your Business
                        </h2>
                        <p className="font-serif">
                            A Versatile Mobile App to Elevate Your Business.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                        {/* Left Section: App Image */}
                        <div className="relative w-full lg:h-96 lg:w-[500px] lg:mr-20 h-64 overflow-hidden mb-6 lg:mb-0">
                            <img
                                className="absolute w-full h-full object-fill rounded-lg"
                                src={taxi} // Placeholder image URL
                                alt="Mobile App Example"
                            />
                        </div>

                        {/* Right Section: Text + Buttons */}
                        <div className="grid grid-cols-2 gap-4 max-w-lg w-full">
                            {/* Text Section */}
                            <div className="col-span-2 mb-4 text-center lg:text-left">
                                <h3 className="text-lg font-bold text-blue-500">Taxi Service App</h3>
                                <p className="font-serif text-sm">
                                    Enhance user experience with our intuitive mobile applications that connect customers to your services seamlessly.
                                </p>
                            </div>

                            {/* Buttons Section */}
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faMobileAlt} className="text-blue-500 mr-3" />
                                <span>Mobile Optimized</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faUsers} className="text-green-500 mr-3" />
                                <span>Team Collaboration</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faShieldAlt} className="text-yellow-500 mr-3" />
                                <span>Secure Transactions</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faSyncAlt} className="text-blue-500 mr-3" />
                                <span>Real-Time Updates</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faBell} className="text-purple-500 mr-3" />
                                <span>Push Notifications</span>
                            </button>
                            <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
                                <FontAwesomeIcon icon={faShoppingCart} className="text-teal-500 mr-3" />
                                <span>In-App Purchases</span>
                            </button>
                            <a
                                href="/taxiservices"
                                className="mt-4 col-span-2 bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center font-semibold"
                            >
                                Click to View the App
                            </a>
                        </div>
                    </div>
                </section>

                {/* Merchant App Section */}
<section className="flex flex-col items-center justify-center py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
    {/* Left Section: Text + Buttons */}
    <div className="grid grid-cols-2 gap-4 max-w-lg w-full lg:mr-20">
      {/* Text Section */}
      <div className="col-span-2 mb-4 text-center lg:text-left">
        <h3 className="text-lg font-bold text-blue-500">Food Delivery App</h3>
        <p className="font-serif text-sm">Empower service providers to manage their offerings seamlessly.</p>
      </div>

      {/* Buttons Section */}
      <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
        <FontAwesomeIcon icon={faUserCircle} className="text-blue-500 mr-3" />
        <span>Restaurant Profile</span>
      </button>
      <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
        <FontAwesomeIcon icon={faUtensils} className="text-green-500 mr-3" />
        <span>Menu Management</span>
      </button>
      <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
        <FontAwesomeIcon icon={faChartBar} className="text-blue-500 mr-3" />
        <span>Sales Dashboard</span>
      </button>
      <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
        <FontAwesomeIcon icon={faClipboardList} className="text-yellow-500 mr-3" />
        <span>Order Management</span>
      </button>
      <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
        <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500 mr-3" />
        <span>Accept/Reject Orders</span>
      </button>
      <button className="flex items-center justify-center bg-gray-200 text-black py-2 pl-4 pr-6 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
        <FontAwesomeIcon icon={faFileAlt} className="text-teal-500 mr-3" />
        <span>Reports & Analytics</span>
      </button>
      <a href="/foodDelivery" className="mt-4 col-span-2 bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center font-semibold">Click to View the App</a>
    </div>

    {/* Right Section: App Image */}
    <div className="relative w-full lg:w-96 lg:h-96 lg:mr-20 h-64 overflow-hidden mb-6 lg:mb-0">
      <img className="absolute w-full h-full object-cover rounded-lg" src="https://img.freepik.com/premium-photo/smartphone-screen-food-delivery-selective-focus_472916-43314.jpg?w=360" alt="GVS Marketplace App" />
    </div>
  </div>
</section>

            </div>
        </div>
    );
};

export default MobileAppDevSection;
