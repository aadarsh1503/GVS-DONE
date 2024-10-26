import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMapMarkedAlt, faPaperPlane,  faTaxi } from '@fortawesome/free-solid-svg-icons';



import ride from "../../src/assets/Images/ride.png";
import app from "../../src/assets/Images/app3.jpg";
import Taxi from "../../src/assets/Images/taxiservice.jpg";
import chauffer from "../../src/assets/Images/chauffer.jpg";
import pay from "../../src/assets/Images/paydriver.jpg";
import cab from "../../src/assets/Images/cabprovider.jpg";
import del from "../../src/assets/Images/deliveryprovider.jpg";
import aptax from "../../src/assets/Images/apptaxi.jpg";
import ssl from "../../src/assets/Images/ssl.jpg";
import reg from "../../src/assets/Images/register.png";
import car from "../../src/assets/Images/car.png";
import diagram from "../../src/assets/Images/diagram1.png";





const Taxiservices = () => {
  return (
    <div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    <div className="bg-white min-h-screen py-8 lg:py-20">
      {/* First Section (taxiservices App Development) */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="max-w-lg space-y-5 mb-6 md:mb-0 md:mr-6">
            <h1 className="text-4xl font-bold text-gray-800">
            Access a Dedicated On-Demand Taxi Service Platform.
            </h1>
            <p className="text-gray-600">
            Our on-demand taxi application is focused on boosting your business by streamlining your operations. It also helps you develop a strong user base that prefers your services over competitors.
            </p>
            <a
              href="/contactUs"
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-[#ff5e3a]/90"
            >
              Contact Us 
            </a>
          </div>

          {/* Right Section: Slider */}
          <div className="relative w-full lg:w-[600px] md:w-[600px] h-[400px] overflow-hidden rounded-lg">
          <img
              className="absolute w-full h-full object-contain rounded-lg"
              src={ride} 
              alt="blablacar Clone App"  
            />
          </div>         
        </div>
      </section>





      {/* Second Section (taxiservices Clone for Your Riding app) */}
      <section className="bg-white">
  <div className="container mx-auto text-center py-12 px-4">
    <h1 className="text-2xl font-bold text-gray-800">Our Mobile App For on-Demand Taxi Bookings,  <span class="text-blue-500">Tailored to Your Industry Needs</span></h1>

  

    <p className="text-gray-600 mb-10 px-0 md:px-20 leading-8">A highly efficient app transforms your business and builds a strong user base, giving you a competitive edge. At GVS, our team focuses on creating industry-specific apps for:</p>
    
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3  grid-col-1 lg:grid-cols-5 mb-4 w-full">
        {/* Image 1 */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#link1" className="flex flex-col h-full">
            <img src={Taxi} alt="Image 1" className="w-full h-full object-contain" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Taxi Drivers
            </h2>
          </a>
        </div>

        {/* Image 2 */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#link2" className="flex flex-col h-full">
            <img src={chauffer} alt="Chauffer" className="w-full h-full object-contain" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Chauffeur
            </h2>
          </a>
        </div>

        {/* Image 3 */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#link3" className="flex flex-col h-full">
            <img src={pay} alt="Pay" className="w-full h-full object-contain" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Pay Drivers
            </h2>
          </a>
        </div>

        {/* Image 4 */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#link4" className="flex flex-col h-full">
            <img src={cab} alt="Cab" className="w-full h-full object-contain" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Taxi Service Providers
            </h2>
          </a>
        </div>

        {/* Image 5 */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#link5" className="flex flex-col h-full">
            <img src={del} alt="Delivery" className="w-full h-full object-contain" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Courier Services Provider
            </h2>
          </a>
        </div>
      </div>
    </div>

    {/* Button Section */}
   
  </div>
</section>





    {/*Third section app section*/}
    <section className="bg-white max-full mx-auto py-12 px-4 md:px-20">
  <div className="border border-gray-300 rounded-lg p-8">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800">Why Choose Our Taxi <span class="text-blue-500"> Mobile App</span></h1>
      <p className="text-gray-600 mb-10 leading-10">Our on-demand taxi booking app provides an innovative tech solution with various modules aimed at elevating your taxi-hailing services.</p>
    </div>
    
    <div className="mt-10 flex flex-col lg:flex-row items-center">
      {/* Image */}
      <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
        <img src={app} className="w-full h-full object-contain rounded-lg" />
      </div>

      {/* Feature List */}
      <div className="space-y-6 lg:w-1/2 lg:pl-8">
        {/* Feature 1 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-arrow-right w-8 h-8 mr-4 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Essential Taxi-Hailing Feature</h3>
            <p className="text-gray-600 text-sm">Users can plan their rides to match their preferences. Additionally, they can make fast bookings and choose from multiple services tailored to their requirements.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-arrow-right w-8 h-8 mr-4 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Simple Communication via VoIP Calling</h3>
            <p className="text-gray-600 text-sm">This Voice-Over calling feature lets riders and drivers talk to each other through the app without sharing their phone numbers.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-arrow-right w-8 h-8 mr-4 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">In-App Chat Functionality</h3>
            <p className="text-gray-600 text-sm">After booking a ride, users can communicate with the chauffeur directly. If a customer is waiting and cannot spot the driver, they can quickly send a message to connect.</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start">
          <i className="fas fa-arrow-right w-8 h-8 mr-4 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Highlight Favorite Location</h3>
            <p className="text-gray-600 text-sm">Frequent travelers can highlight their favorite locations, making bookings quicker and eliminating the need to repeatedly enter the same address.</p>
          </div>
        </div>

         {/* Feature 5 */}
 <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-arrow-right w-8 h-8 mr-4 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Simple Payment and Checkout</h3>
            <p className="text-gray-600 text-sm">Users can pay with their debit or credit card, whether they are professionals or individuals. They can also change their payment details later, making the payment process faster and improving the booking experience.</p>
          </div>
        </div>

         {/* Feature 6 */}
         <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-arrow-right w-8 h-8 mr-4 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Managing Fare Rates</h3>
            <p className="text-gray-600 text-sm">This feature allows admins or business owners to adjust prices as needed. They can increase fares during peak hours to maximize their return on investment.</p>
</div>        
</div>        
</div>      
      
    </div>

    {/* Button */}
    
  </div>
</section>




{/* Fourth Section  */}
<section className="bg-white">
  <div className="container mx-auto text-center py-12 px-4">
    <h1 className="text-4xl font-bold text-gray-800">
      What Else Is There? -<span className="text-blue-500"> Additional Functions</span>
    </h1>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faPaperPlane} className=" text-blue-500 mx-auto" />
        </div>
        <h2 className="text-l font-semibold text-gray-800 text-left">Unique Request</h2>
        <p className="text-gray-600 text-sm text-left">
          Users can submit a specific request for individuals with disabilities and new parents.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faTaxi} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-left text-l font-semibold text-gray-800 text-center">Pickup and Drop</h2>
        <p className="text-left text-gray-600 text-sm">
          Users can select multiple pickup options and invite their friends to join for a ride.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-l font-semibold text-left text-gray-800 ">Managing Geo-Fence and Location</h2>
        <p className="text-gray-600 text-left text-sm">
          Geofencing allows business owners to limit services by sketching a polygon on the Map.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-center">
        <div className="text-5xl mb-4">
          <FontAwesomeIcon icon={faDollarSign} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-l font-semibold text-gray-800 text-center">Real-time Currency Exchange</h2>
        <p className="text-gray-600 text-left text-sm">
          Here, your users can see live currency exchanges and rates, and they can pay using an easy-to-use currency converter.
        </p>
      </div>
    </div>

   
  </div>
</section>


<hr></hr>

{/* Fifth  Section */}
<section className="bg-white max-full mx-auto py-12 px-4 md:px-20">
  <div className="rounded-lg p-8">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 leading-9">
        Exploring the Benefits of a <span className="text-blue-500">Taxi Booking Mobile App</span><br /> at Gvs
      </h1>
      <p className="text-gray-600 mb-5 text-sm leading-9 text-center">
        We offer a complete range of high-quality software solutions, including advice, app development, and ongoing support and maintenance.
      </p>
    </div>
    
    <div className="flex flex-wrap justify-center gap-6">
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src={aptax} alt="Image 1" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Release Your Android and iOS App</h3>
        <p className="text-gray-600 mb-2 text-sm">Our team helps upload and install your mobile app, making sure it gets approved on the App Store (iOS) and Google Play Store (Android).</p>
       
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src={reg} alt="Image 2" className="rounded-lg mb-2 w-full h-32 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Limitless Registrations</h3>
        <p className="text-gray-600 mb-2 text-sm">The mobile app is designed for easy registration for both drivers and customers. It’s simple to use, with no extra fees for installations or registrations.</p>
      
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src={ssl} alt="Image 3" className="rounded-lg mb-2 w-full h-32 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Strong Security and Data Protection</h3>
        <p className="text-gray-600 mb-2 text-sm">To ensure secure transactions, our team configures SSL certificates and integrates all essential security features directly into the application code.</p>
    
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src={car} alt="Image 4" className="rounded-lg mb-2 w-full h-32 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Simple to Use App</h3>
        <p className="text-gray-600 mb-2 text-sm">At GVS, we develop user-friendly taxi booking software. Our expert team is dedicated to resolving your needs quickly and efficiently, allowing you to solve issues with just a few clicks.</p>
       
      </div>
    </div>
  </div>
</section>


{/* Sixth Section */}
<section className="bg-white max-full mx-auto py-12 px-4 md:px-20">
  <div className=" rounded-lg p-8">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800  leading-9 "> <span class="text-blue-500 "> Technology and Solution  </span><br/>Design</h1>
      <p className="text-gray-600 mb-5 text-s leading-9 text-center">ValueAppz utilizes a state-of-the-art technology stack, extensive customization options, and strong third-party integrations to enhance your next-gen home services app solutions..</p>
    </div>
    <img src={diagram} alt="Image 4" class="rounded-lg mb-2 w-full h-full object-cover"/>
</div>
</section>









     

{/* Frequently ask section */}
<section>
<div class="bg-white mt-20 p-20">
   <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Frequently <span className="text-red-500">Asked Questions </span>
          </h2>
    <div class="space-y-4">
         {/* FAQ 1  */}
        <div class="border border-gray-300 rounded-lg">
            <input type="checkbox" id="faq1" class="peer hidden" />
            <label for="faq1" class="flex justify-between items-center p-4 cursor-pointer">
                <span class="font-semibold">Does the Taxi Booking app have a limit on users and drivers?</span>
                <svg class="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
                    <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
                </svg>
            </label>
            <p class="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">Answer: Well, No, our taxi booking mobile app has no limit for the customers as well as the drivers. As we mentioned above there are unlimited registration features for everyone. So, your users and drivers can freely register themselves at their convenience.</p>
        </div>

         {/* FAQ 2  */}
        <div class="border border-gray-300 rounded-lg">
            <input type="checkbox" id="faq2" class="peer hidden" />
            <label for="faq2" class="flex justify-between items-center p-4 cursor-pointer">
                <span class="font-semibold">How long does it take to develop a customized taxi booking app?</span>
                <svg class="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
                    <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
                </svg>
            </label>
            <p class="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">Answer:At GVS, our taxi booking mobile app development team works dedicatedly for you on strict deadlines to achieve the milestones. Therefore, we always start by asking about your requirements and then deliver you the product as soon as possible.</p>
        </div>

         {/* FAQ 3 */}
        <div class="border border-gray-300 rounded-lg">
            <input type="checkbox" id="faq3" class="peer hidden" />
            <label for="faq3" class="flex justify-between items-center p-4 cursor-pointer">
                <span class="font-semibold">What if there is an error in my taxi booking app at midnight, how will that be resolved and How much time will it take?</span>
                <svg class="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
                    <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
                </svg>
            </label>
            <p class="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">Answer:We value you and your users! And, we will never let you go through a critical situation alone. You can always connect with us through mobile, email, and skype. Our experts will make sure that you always have someone to resolve your issues.</p>
        </div>

         {/* FAQ 4  */}
        <div class="border border-gray-300 rounded-lg">
            <input type="checkbox" id="faq4" class="peer hidden" />
            <label for="faq4" class="flex justify-between items-center p-4 cursor-pointer">
                <span class="font-semibold">Does your application have fleet management? Will it maintain my drivers under fleet?</span>
                <svg class="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
                    <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
                </svg>
            </label>
            <p class="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">Answer:Yes, we do provide fleet management system solutions and your drivers are maintained under fleet. We would be happy to add features according to your needs. If you have more doubts or want to share your requirements Contact us and let us help you in the best way possible.</p>
        </div>

        {/* FAQ 5  */}
        <div class="border border-gray-300 rounded-lg">
            <input type="checkbox" id="faq5" class="peer hidden" />
            <label for="faq5" class="flex justify-between items-center p-4 cursor-pointer">
                <span class="font-semibold">Can I benefit from my taxi booking mobile app, if I have only a few drivers working for me?</span>
                <svg class="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
                    <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
                </svg>
            </label>
            <p class="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">Answer:Yes, sure. You can start with us whenever you feel right. Also, you can start by managing your mobile app with fewer employees at the start and update the same when expanding your business.</p>
        </div>

    </div>
   
</div>


</section>


      

    
    </div>
    </div>
  );
};

export default Taxiservices;
