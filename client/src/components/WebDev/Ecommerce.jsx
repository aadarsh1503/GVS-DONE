import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMapMarkedAlt, faPaperPlane,  faTaxi } from '@fortawesome/free-solid-svg-icons';














const Web = () => {
  return (
    <div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    <div className="bg-white min-h-screen py-8 lg:py-20">
      {/* First Section (taxiservices App Development) */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    {/* Left Section */}
    <div className="max-w-lg space-y-5 mb-6 md:mb-0 md:mr-6">
      <h1 className="text-4xl font-bold text-gray-800">
        Discover the Ultimate Online Shopping Experience!
      </h1>
      <p className="text-gray-600">
        Our e-commerce platform offers a wide range of products tailored to your needs. Enjoy seamless browsing, exclusive deals, and a user-friendly checkout process that makes shopping a breeze!
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
        src="https://unlimitedexposure.com/images/articles/e-commerce-solutions-toronto.jpg" // Update with your e-commerce image path
        alt="Online Shopping Experience"
      />
    </div>         
  </div>
</section>






      {/* Second Section (taxiservices Clone for Your Riding app) */}
      <section className="bg-white">
  <div className="container mx-auto text-center py-12 px-4">
    <h1 className="text-2xl font-bold text-gray-800">
      Transform Your Business with Our <span className="text-blue-500">E-Commerce Solutions</span>
    </h1>

    <p className="text-gray-600 mb-10 px-0 md:px-20 leading-8">
      Our comprehensive e-commerce platform is designed to elevate your online presence, streamline operations, and enhance customer experience. At GVS, we focus on creating tailored solutions for:
    </p>

    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mb-4 w-full">
        {/* Image 1: Magento */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#magento" className="flex flex-col h-full">
            <img src="https://cdn.worldvectorlogo.com/logos/magento.svg" alt="Magento" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Magento Implementations
            </h2>
          </a>
        </div>

        {/* Image 2: Shopify */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#shopify" className="flex flex-col h-full">
            <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Shopify Solutions
            </h2>
          </a>
        </div>

        {/* Image 3: Big Commerce */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#bigcommerce" className="flex flex-col h-full">
            <img src="https://logowik.com/content/uploads/images/bigcommerce5665.jpg" alt="Big Commerce" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Big Commerce Solutions
            </h2>
          </a>
        </div>

        {/* Image 4: Custom Development */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#custom" className="flex flex-col h-full">
            <img src="https://media.licdn.com/dms/image/C4E12AQHkPazHGrnVXA/article-cover_image-shrink_720_1280/0/1638015102558?e=2147483647&v=beta&t=8X5oAfaca9UH3WRLPzoyvFPWOss1AF4gZO6ZW6LnrVs" alt="Custom Development" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Custom E-Commerce Platforms
            </h2>
          </a>
        </div>

        {/* Image 5: Payment Gateway */}
        <div className="relative group rounded-lg overflow-hidden border border-black transform transition-transform duration-300 hover:scale-105">
          <a href="#payment" className="flex flex-col h-full">
            <img src="https://inai.io/hubfs/Header%20-%20Top%20Payment%20Gateways%20in%20Bahrain.png" alt="Payment Gateway" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Payment Gateway Integration
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
      <h1 className="text-3xl font-bold text-gray-800">
        Why Choose Our <span className="text-blue-500">E-Commerce Solutions</span>
      </h1>
      <p className="text-gray-600 mb-10 leading-10">
        Our advanced e-commerce platform offers a wide range of features designed to enhance your online business and customer experience.
      </p>
    </div>

    <div className="mt-10 flex flex-col lg:flex-row items-center">
      {/* Image */}
      <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2020/11/UW/BV/NB/6065925/ecommerce-solution-service-500x500.jpg"
          alt="E-Commerce"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Feature List */}
      <div className="space-y-6 lg:w-1/2 lg:pl-8">
        {/* Feature 1 */}
        <div className="flex items-start border-b border-gray-200 pb-5">
          <i className="fas fa-shopping-cart w-8 h-8 mr-4 mt-3 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Seamless Shopping Experience</h3>
            <p className="text-gray-600 text-sm">Our user-friendly interface ensures a smooth shopping experience, allowing customers to browse and purchase products effortlessly.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-tags w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Dynamic Pricing Strategies</h3>
            <p className="text-gray-600 text-sm">Implement dynamic pricing strategies to maximize sales, offering discounts and promotions tailored to customer behavior.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-comments w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Customer Support & Chat</h3>
            <p className="text-gray-600 text-sm">Provide real-time support through chat functionality, ensuring your customers receive assistance when they need it the most.</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-credit-card w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Flexible Payment Options</h3>
            <p className="text-gray-600 text-sm">Offer multiple payment gateways including credit/debit cards, PayPal, and more for a seamless checkout experience.</p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-shipping-fast w-8 h-8 mr-4 text-gray-600 mt-3 "></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Fast and Reliable Shipping</h3>
            <p className="text-gray-600 text-sm">Our integrated logistics solutions ensure fast and reliable delivery of products, keeping customers satisfied.</p>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="flex items-start">
          <i className="fas fa-chart-line w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Analytics & Insights</h3>
            <p className="text-gray-600 text-sm">Gain valuable insights into your business performance and customer behavior with our comprehensive analytics tools.</p>
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
    <h1 className="text-2xl font-bold text-gray-800">
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




{/* Fifth  Section */}
<section className="bg-white max-full mx-auto py-12 px-4 md:px-20">
  <div className="rounded-lg p-8">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 leading-9">
        Exploring the Benefits of Our <span className="text-blue-500">E-Commerce Solutions</span><br /> at GVS
      </h1>
      <p className="text-gray-600 mb-5 text-sm leading-9 text-center">
        We offer a comprehensive range of top-notch e-commerce software solutions, including consulting, development, and ongoing support.
      </p>
    </div>
    
    <div className="flex flex-wrap justify-center gap-6">
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3xIBF13zxQaZs3pjnW5iAJjn1TMxGmk6dg&s" alt="E-Commerce App" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Multi-Platform App Development</h3>
        <p className="text-gray-600 mb-2 text-sm">Our team ensures your e-commerce app is optimized for both Android and iOS, providing a seamless shopping experience across devices.</p>
        
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://cdn.dribbble.com/userupload/3937585/file/original-8aef13480c47241f1865f26c05c65f7d.png?resize=400x0" alt="Easy Registration" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">User-Friendly Registration</h3>
        <p className="text-gray-600 mb-2 text-sm">Our app is designed for quick and easy registration, allowing users to start shopping without any hassle or additional fees.</p>
        
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://lh7-us.googleusercontent.com/REhq_lfu2DwI5W1CzCVz3ULd96vMk20jZUTiZp1hAOWRRGz7PPBDSFXGBTj2PQTftD1jaBq9CN1pJ4d5WxUVqvm8eNyuMnnYKghujKE-2ZyTxviaO-orwx99OXlpAM_lXorzhb_Hudk7t2gL3n045gY=w640-h360" alt="Security Features" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Robust Security Measures</h3>
        <p className="text-gray-600 mb-2 text-sm">We implement strong security protocols, including SSL encryption, to ensure your transactions and data remain secure.</p>
        
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://agroup.lv/wp-content/uploads/2013/06/AdobeStock_75164586-1024x683.jpeg.optimal.jpeg" alt="User-Friendly Interface" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Intuitive User Interface</h3>
        <p className="text-gray-600 mb-2 text-sm">Our e-commerce apps are designed with the user in mind, ensuring a smooth and enjoyable shopping experience.</p>
        
      </div>
    </div>
  </div>
</section>

{/* Sixth Section */}
<section className="bg-white max-full mx-auto py-12 px-4 md:px-20">
  <div className="rounded-lg p-8">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-2xl font-bold text-gray-800 leading-9">
        <span className="lg:text-5xl text-blue-500">Next-Level Technology</span><br /> for E-Commerce Solutions
      </h1>
      <p className="text-gray-600 mb-5 text-sm leading-9 text-center">
        At ValueAppz, we utilize a modern technology stack, extensive customization options, and powerful integrations to elevate your e-commerce experience.
      </p>
    </div>
    <img src="https://mrccdigital.com/wp-content/uploads/2021/05/about_bg_1-1-1.jpg" alt="Technology Stack" className="rounded-lg mb-2 w-full h-full object-cover"/>
  </div>
</section>










     

{/* Frequently ask section */}
<section>
  <div className="bg-white mt-20 p-20">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      Frequently <span className="text-red-500">Asked Questions</span>
    </h2>
    <div className="space-y-4">
      {/* FAQ 1 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq1" className="peer hidden" />
        <label htmlFor="faq1" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">Is there a limit to the number of products I can list?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: No, our e-commerce platform allows you to list an unlimited number of products. You can showcase as many items as you like, giving your customers a vast selection to choose from.
        </p>
      </div>

      {/* FAQ 2 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq2" className="peer hidden" />
        <label htmlFor="faq2" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">How long does it take to set up my e-commerce store?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: The setup time can vary depending on your specific requirements, but typically, it takes 1 to 2 weeks to get your e-commerce store up and running with our team’s assistance.
        </p>
      </div>

      {/* FAQ 3 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq3" className="peer hidden" />
        <label htmlFor="faq3" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">What payment methods can I integrate into my store?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: Our platform supports a wide range of payment methods, including credit/debit cards, PayPal, Stripe, and other popular payment gateways, ensuring your customers have a seamless checkout experience.
        </p>
      </div>

      {/* FAQ 4 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq4" className="peer hidden" />
        <label htmlFor="faq4" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">Can I manage my inventory through the app?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: Yes, our e-commerce app includes a robust inventory management system, allowing you to track stock levels, manage product listings, and receive notifications when items are running low.
        </p>
      </div>

      {/* FAQ 5 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq5" className="peer hidden" />
        <label htmlFor="faq5" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">What kind of support do you offer after the store is launched?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: We offer ongoing support and maintenance services to ensure your store runs smoothly. Our team is available via phone, email, or chat to assist you with any issues or questions.
        </p>
      </div>
    </div>
   
  </div>
</section>



      

    
    </div>
    </div>
  );
};

export default Web;
