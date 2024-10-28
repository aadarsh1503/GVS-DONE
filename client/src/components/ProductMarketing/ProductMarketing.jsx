import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMapMarkedAlt, faBullhorn, faShareAlt, faChartBar, faEnvelope,faPaperPlane,  faTaxi } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineBulb, AiOutlineSearch, AiOutlineShareAlt, AiOutlineBarChart, AiOutlinePhone } from 'react-icons/ai';














const Marketing = () => {
  return (
    <div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    <div className="bg-white min-h-screen py-8 lg:py-20">
      {/* First Section (taxiservices App Development) */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    {/* Left Section */}
    <div className="max-w-lg space-y-5 mb-6 md:mb-0 md:mr-6">
      <h1 className="text-4xl font-bold text-gray-800">
        Elevate Your Business with Our Product Marketing Solutions!
      </h1>
      <p className="text-gray-600">
        Our comprehensive product marketing services are designed to maximize your brand's visibility and drive sales. From targeted advertising to social media strategies, we ensure your products reach the right audience.
      </p>
      <ul className="list-none pl-5 text-gray-600">
  <li className="flex items-center mb-2">
    <AiOutlineBulb className="text-blue-500 mr-2" />
    Tailored Marketing Strategies
  </li>
  <li className="flex items-center mb-2">
    <AiOutlineSearch className="text-blue-500 mr-2" />
    Expert SEO Optimization
  </li>
  <li className="flex items-center mb-2">
    <AiOutlineShareAlt className="text-blue-500 mr-2" />
    Engaging Social Media Campaigns
  </li>
  <li className="flex items-center mb-2">
    <AiOutlineBarChart className="text-blue-500 mr-2" />
    Detailed Analytics and Reporting
  </li>
  <li className="flex items-center mb-2">
    <AiOutlinePhone className="text-blue-500 mr-2" />
    Dedicated Customer Support
  </li>
</ul>
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
        className="absolute w-full h-full lg:h[800px]  object-contain rounded-lg"
        src="https://media.licdn.com/dms/image/C4E12AQENjIokDdTHLQ/article-cover_image-shrink_600_2000/0/1586547285648?e=2147483647&v=beta&t=DTp89912W9vmXd9X-mzobX0WY3_ErP-va9zzSiUvc9g" // Update with your product marketing image path
        alt="Product Marketing Solutions"
      />
    </div>
  </div>
</section>







      {/* Second Section (taxiservices Clone for Your Riding app) */}
      <section className="bg-white">
  <div className="container mx-auto text-center py-12 px-4">
    <h1 className="text-2xl font-bold text-gray-800">
      Elevate Your Brand with Our <span className="text-blue-500">Product Marketing Solutions</span>
    </h1>

    <p className="text-gray-600 mb-10 px-0 md:px-20 leading-8">
      Our expert product marketing strategies are designed to enhance your brand visibility, engage customers, and drive sales. At GVS, we provide tailored solutions for:
    </p>

    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mb-4 w-full">
        {/* Image 1: SEO Optimization */}
        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#seo" className="flex flex-col h-full">
            <img src="https://cdn.botpenguin.com/assets/website/Search_Engine_Optimization_d547319792.webp" alt="SEO Optimization" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              SEO Optimization
            </h2>
          </a>
        </div>

        {/* Image 2: Social Media Marketing */}
        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#socialmedia" className="flex flex-col h-full">
            <img src="https://www.startupurban.com/wp-content/uploads/2024/04/social-media.png" alt="Social Media Marketing" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Social Media Marketing
            </h2>
          </a>
        </div>

        {/* Image 3: Email Marketing */}
        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#email" className="flex flex-col h-full">
            <img src="https://www.sender.net/wp-content/uploads/2022/02/Email-Campaigns-smaller.png" alt="Email Marketing" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Email Marketing Campaigns
            </h2>
          </a>
        </div>

        {/* Image 4: Content Marketing */}
        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#content" className="flex flex-col h-full">
            <img src="https://cdn.taggbox.com/v7/taggbox.com/blog/wp-content/uploads/2020/01/Content-marketing-cycle.jpg" alt="Content Marketing" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Content Marketing Strategies
            </h2>
          </a>
        </div>

        {/* Image 5: Influencer Marketing */}
        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#influencer" className="flex flex-col h-full">
            <img src="https://recursos.audiense.com/hubfs/design/solutions/02_Influencer_Marketing-2.svg" alt="Influencer Marketing" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Influencer Marketing
            </h2>
          </a>
        </div>
      </div>
    </div>


    
  </div>
</section>







    {/*Third section app section*/}
    <section className="bg-white max-full mx-auto py-12 px-4 md:px-20">
  <div className="border border-gray-300 rounded-lg p-8">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-3xl font-bold text-gray-800">
        Why Choose Our <span className="text-blue-500">Product Marketing Solutions</span>
      </h1>
      <p className="text-gray-600 mb-10 leading-10">
        Our innovative product marketing strategies are designed to boost your brand visibility, engage your audience, and drive sales.
      </p>
    </div>

    <div className="mt-10 flex flex-col lg:flex-row items-center">
      {/* Image */}
      <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
        <img
          src="https://5.imimg.com/data5/MU/ID/MY-1509478/product-marketing.jpg" // Replace with a relevant product marketing image
          alt="Product Marketing"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Feature List */}
      <div className="space-y-6 lg:w-1/2 lg:pl-8">
        {/* Feature 1 */}
        <div className="flex items-start border-b border-gray-200 pb-5">
          <i className="fas fa-bullhorn w-8 h-8 mr-4 mt-3 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Targeted Campaigns</h3>
            <p className="text-gray-600 text-sm">
              Reach your ideal audience with precision targeting strategies that maximize your marketing ROI.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-chart-line w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Performance Analytics</h3>
            <p className="text-gray-600 text-sm">
              Leverage data-driven insights to track campaign performance and refine your strategies for better results.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-users w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Customer Engagement</h3>
            <p className="text-gray-600 text-sm">
              Foster strong relationships with your customers through personalized marketing and effective communication.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-basketball-ball w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Competitive Positioning</h3>
            <p className="text-gray-600 text-sm">
              Stand out in the marketplace with unique value propositions and strategic positioning of your products.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-sync-alt w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Adaptable Strategies</h3>
            <p className="text-gray-600 text-sm">
              Stay agile and adjust your marketing strategies based on real-time market feedback and trends.
            </p>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="flex items-start">
          <i className="fas fa-lightbulb w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Innovative Solutions</h3>
            <p className="text-gray-600 text-sm">
              Utilize cutting-edge marketing techniques, including influencer partnerships and content marketing, to enhance brand awareness.
            </p>
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
    <h1 className="text-5xl font-bold text-gray-800">
      Elevate Your Brand - <span className="text-blue-500">Key Marketing Features</span>
    </h1>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-8">
      {/* Targeted Advertising */}
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faBullhorn} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Targeted Advertising</h2>
        <p className="text-gray-600 text-sm">
          Utilize data-driven insights to create personalized marketing campaigns that reach your ideal customers.
        </p>
      </div>

      {/* Social Media Integration */}
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faShareAlt} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Social Media Integration</h2>
        <p className="text-gray-600 text-sm">
          Seamlessly connect your e-commerce platform with social media to expand your reach and drive sales.
        </p>
      </div>

      {/* Analytics and Reporting */}
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faChartBar} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Analytics and Reporting</h2>
        <p className="text-gray-600 text-sm">
          Gain valuable insights into customer behavior and campaign performance with comprehensive analytics tools.
        </p>
      </div>

      {/* Email Marketing Automation */}
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Email Marketing Automation</h2>
        <p className="text-gray-600 text-sm">
          Automate your email campaigns to engage customers at every stage of the buying journey.
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
        Unlock Your Brand's Potential with <span className="text-blue-500">Product Marketing Solutions</span><br /> at GVS
      </h1>
      <p className="text-gray-600 mb-5 text-sm leading-9 text-center">
        We offer tailored product marketing strategies that drive engagement, increase sales, and enhance brand visibility.
      </p>
    </div>
    
    <div className="flex flex-wrap justify-center gap-6">
      {/* Target Audience Analysis */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://www.laudco.com/wp-content/uploads/2022/10/image-1-800x425.jpeg" alt="Target Audience" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Target Audience Analysis</h3>
        <p className="text-gray-600 mb-2 text-sm">Identify and understand your ideal customers to tailor marketing strategies that resonate with their needs.</p>
      </div>

      {/* Compelling Content Creation */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://yelaket.am/resized/720%C3%97576/1675857183152.jpg" alt="Content Creation" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Compelling Content Creation</h3>
        <p className="text-gray-600 mb-2 text-sm">Develop engaging and informative content that showcases your products and connects with your audience.</p>
      </div>

      {/* Strategic Marketing Campaigns */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanvYZwFLfkKrzcIaW994FWYejM59ZCmT6cw&s" alt="Marketing Campaigns" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Strategic Marketing Campaigns</h3>
        <p className="text-gray-600 mb-2 text-sm">Execute data-driven marketing campaigns to effectively reach your target audience and maximize ROI.</p>
      </div>

      {/* Performance Analytics */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://static1.squarespace.com/static/5a09abcb90bcce4bd5518c91/5a0a01c9c83025174d4beb9b/5f9c352d83c6e057b12be5ef/1725057645300/iStock-1134862734+%5BConverted%5D.png?format=1500w" alt="Performance Analytics" className="rounded-lg mb-2 w-full h-40 object-cover"/>
        <h3 className="text-lg font-semibold mb-1">Performance Analytics</h3>
        <p className="text-gray-600 mb-2 text-sm">Monitor and analyze campaign performance to optimize strategies and achieve better results over time.</p>
      </div>
    </div>
  </div>
</section>

{/* Second Section */}
<section className="bg-white max-full mx-auto py-5 px-4 md:px-20">
  <div className="rounded-lg p-8">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-2xl font-bold text-gray-800 leading-9">
        <span className="lg:text-5xl text-blue-500">Innovative Technology</span><br /> for Effective Product Marketing
      </h1>
      <p className="text-gray-600 mb-5 text-sm leading-9 text-center">
        At ValueAppz, we leverage cutting-edge technology and tools to create impactful marketing strategies that drive results.
      </p>
    </div>
    <img src="https://img.freepik.com/free-photo/online-marketing_53876-176744.jpg?t=st=1729523835~exp=1729527435~hmac=c219cb2289b9929843c0b79b3fdee0b83f97b0627c04415e7ea10fd59c4bc1a9&w=996" alt="Innovative Technology" className="rounded-lg mb-2 w-full h-full object-fill"/>
  </div>
</section>
 

{/* Frequently ask section */}
<section>
  <div className="bg-white mt-20 p-20">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      Frequently <span className="text-blue-500">Asked Questions</span>
    </h2>
    <div className="space-y-4">
      {/* FAQ 1 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq1" className="peer hidden" />
        <label htmlFor="faq1" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">What is product marketing?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: Product marketing involves promoting and selling a product to a target audience. It encompasses market research, product positioning, and defining key messaging that resonates with consumers.
        </p>
      </div>

      {/* FAQ 2 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq2" className="peer hidden" />
        <label htmlFor="faq2" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">How can product marketing benefit my business?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: Effective product marketing helps increase brand awareness, drives customer engagement, and ultimately boosts sales. It allows businesses to better understand their customers' needs and adapt strategies accordingly.
        </p>
      </div>

      {/* FAQ 3 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq3" className="peer hidden" />
        <label htmlFor="faq3" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">What marketing strategies do you recommend?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: We recommend a combination of digital marketing, content marketing, social media campaigns, and targeted advertising to reach your audience effectively. Tailoring strategies to your specific market is key.
        </p>
      </div>

      {/* FAQ 4 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq4" className="peer hidden" />
        <label htmlFor="faq4" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">How do I measure the success of my product marketing?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: Success can be measured through various metrics, including sales growth, customer engagement rates, and brand awareness. Analytics tools can provide insights into customer behavior and campaign effectiveness.
        </p>
      </div>

      {/* FAQ 5 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq5" className="peer hidden" />
        <label htmlFor="faq5" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">What support do you offer for product marketing?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: We provide comprehensive support, including strategy development, execution, and ongoing analysis. Our team is here to assist you every step of the way to ensure your marketing efforts are successful.
        </p>
      </div>
    </div>
  
  </div>
</section>

    </div>
    </div>
  );
};

export default Marketing;
