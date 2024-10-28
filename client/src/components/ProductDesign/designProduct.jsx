import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMapMarkedAlt,faUsers,faDraftingCompass,faMobileAlt ,faPaintBrush , faBullhorn, faShareAlt, faChartBar, faEnvelope,faPaperPlane,  faTaxi } from '@fortawesome/free-solid-svg-icons';

const Design = () => {
  return (
    <div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    <div className="bg-white min-h-screen py-8 lg:py-20">
      {/* First Section (taxiservices App Development) */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    {/* Left Section */}
    <div className="max-w-lg space-y-5 mb-6 md:mb-0 md:mr-6">
      <h1 className="text-4xl font-bold text-gray-800">
        Transform Your Business with Our Product Design Solutions!
      </h1>
      <p className="text-gray-600">
        Our comprehensive product design services are crafted to create innovative and user-friendly products. From concept to prototype, we help bring your ideas to life with a focus on functionality and aesthetics.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-center">
          <i className="fas fa-cogs text-blue-500 mr-3"></i>
          Custom Product Designs Tailored to Your Brand
        </li>
        <li className="flex items-center">
          <i className="fas fa-users text-blue-500 mr-3"></i>
          User-Centered Design Approach
        </li>
        <li className="flex items-center">
          <i className="fas fa-drafting-compass text-blue-500 mr-3"></i>
          Prototyping and Iterative Development
        </li>
        <li className="flex items-center">
          <i className="fas fa-chart-bar text-blue-500 mr-3"></i>
          Data-Driven Design Enhancements
        </li>
        <li className="flex items-center">
          <i className="fas fa-headset text-blue-500 mr-3"></i>
          Dedicated Design Support
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
        className="absolute w-full h-full object-contain rounded-lg"
        src="https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104479.jpg?t=st=1730001596~exp=1730005196~hmac=6ae09abce84d53d75654cfdf7ffc3096ea3f1b5c1d2993c0f216426696d0d979&w=900"
        alt="Product Design Solutions"
      />
    </div>
  </div>
</section>

{/* Section to Scroll to */}
<section id="demo-section" className="bg-white py-11">
  <div className="max-w-7xl mx-auto px-4">
    {/* Add your form or any content for the demo booking here */}
  </div>
</section>









      {/* Second Section (taxiservices Clone for Your Riding app) */}
      <section className="bg-white">
  <div className="container mx-auto text-center py-12 px-4">
    <h1 className="text-2xl font-bold text-gray-800">
      Elevate Your Brand with Our <span className="text-blue-500">Product Design Solutions</span>
    </h1>

    <p className="text-gray-600 mb-10 px-0 md:px-20 leading-8">
      Our expert product design services help you craft seamless, intuitive, and beautiful products that meet user needs. At GVS, we provide innovative design solutions for:
    </p>

    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mb-4 w-full">
    
        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#ux" className="flex flex-col lg:h[500px] h-full">
            <img src="https://www.keenesystems.com/hs-fs/hubfs/blog-images/ux-design.jpg?width=900&name=ux-design.jpg" alt="UX Design" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              User Experience (UX) Design
            </h2>
          </a>
        </div>

     
        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#ui" className="flex flex-col lg:h[500px] h-full">
            <img src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/04/101_ux_vs_ui_illustration_blog.png" alt="UI Design" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              User Interface (UI) Design
            </h2>
          </a>
        </div>

   
        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#prototyping" className="flex flex-col h-full">
            <img src="https://theproductmanager.com/wp-content/uploads/sites/4/2022/02/PRD-%E2%80%93-Keyword-%E2%80%93-prototyping-vs-wireframing-1200x630.png" alt="Prototyping" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Prototyping & Wireframing
            </h2>
          </a>
        </div>


        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#research" className="flex flex-col h-full">
            <img src="https://www.innertrends.com/wp-content/uploads/2022/07/Frame20533-1024x614.png" alt="Product Research" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Product Research & Analysis
            </h2>
          </a>
        </div>

        <div className="relative group rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105">
          <a href="#designsystems" className="flex flex-col h-full">
            <img src="https://cdn.prod.website-files.com/61826e16a7bbc9deb3c691c2/6392a1568df82b8ff7d4a60f_blog-img-1.2.jpeg" alt="Design Systems" className="w-full h-full object-contain p-4" />
            <h2 className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-2 font-bold transition-colors duration-300 group-hover:text-blue-500">
              Design Systems & Guidelines
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
        Why Choose Our <span className="text-blue-500">Product Design Solutions</span>
      </h1>
      <p className="text-gray-600 mb-10 leading-10">
        Our cutting-edge product design strategies help transform your ideas into user-centered designs that captivate your target audience.
      </p>
    </div>

    <div className="mt-10 flex flex-col lg:flex-row items-center">
     
      <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
        <img
          src="https://img.freepik.com/free-vector/creating-online-platforms-isometric-concept_52683-33746.jpg?t=st=1729521291~exp=1729524891~hmac=98e593e6161e962f1db654c636a2357914d2049ac02dcc8659a92919a04a7975&w=740" 
          alt="Product Design"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

    
      <div className="space-y-6 lg:w-1/2 lg:pl-8">
       
        <div className="flex items-start border-b border-gray-200 pb-5">
          <i className="fas fa-drafting-compass w-8 h-8 mr-4 mt-3 text-gray-600"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">User-Centered Design</h3>
            <p className="text-gray-600 text-sm">
              We prioritize user needs and experiences, ensuring your product is intuitive and user-friendly.
            </p>
          </div>
        </div>

      
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-layer-group w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Prototyping & Iteration</h3>
            <p className="text-gray-600 text-sm">
              Our iterative process of prototyping and testing ensures your design evolves with user feedback.
            </p>
          </div>
        </div>

      
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-rocket w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Innovative Technology</h3>
            <p className="text-gray-600 text-sm">
              We incorporate the latest design tools and technology to create cutting-edge product designs.
            </p>
          </div>
        </div>

        
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-palette w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Aesthetic Appeal</h3>
            <p className="text-gray-600 text-sm">
              Our designs are not only functional but also visually appealing, setting your brand apart.
            </p>
          </div>
        </div>

       
        <div className="flex items-start border-b border-gray-200 pb-4">
          <i className="fas fa-sync w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Agile Design Process</h3>
            <p className="text-gray-600 text-sm">
              We adapt our design process to ensure flexibility, speed, and responsiveness to market changes.
            </p>
          </div>
        </div>

     
        <div className="flex items-start">
          <i className="fas fa-cube w-8 h-8 mr-4 text-gray-600 mt-3"></i>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">3D Modeling & Simulation</h3>
            <p className="text-gray-600 text-sm">
              Experience your product in 3D before it’s even built, ensuring every detail is refined to perfection.
            </p>
          </div>
        </div>
      </div>
    </div>


  </div>
</section>







{/* Fourth Section  */}
<section className="bg-white">
  <div className="container mx-auto text-center py-12 px-4">
    <h1 className="text-5xl font-bold text-gray-800">
      Innovate with <span className="text-blue-500">Key Product Design Features</span>
    </h1>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-8">
      {/* User-Centered Design */}
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faUsers} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">User-Centered Design</h2>
        <p className="text-gray-600 text-sm">
          Focus on crafting intuitive and seamless experiences by putting users' needs at the forefront of your product design process.
        </p>
      </div>

      {/* Prototyping and Wireframing */}
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faDraftingCompass} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Prototyping & Wireframing</h2>
        <p className="text-gray-600 text-sm">
          Bring ideas to life quickly with interactive prototypes and wireframes, ensuring the final design meets user expectations.
        </p>
      </div>

      {/* Responsive Design */}
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faMobileAlt} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Responsive Design</h2>
        <p className="text-gray-600 text-sm">
          Ensure your product looks and functions perfectly across all devices and screen sizes with responsive design techniques.
        </p>
      </div>

      {/* Visual Consistency */}
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 text-left">
        <div className="text-5xl mb-4 text-center">
          <FontAwesomeIcon icon={faPaintBrush} className="text-blue-500 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Visual Consistency</h2>
        <p className="text-gray-600 text-sm">
          Maintain a cohesive and attractive visual identity across all product interfaces to ensure brand recognition and user satisfaction.
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
        Elevate Your Creations with <span className="text-blue-500">Product Design Solutions</span><br /> at GVS
      </h1>
      <p className="text-gray-600 mb-5 text-sm leading-9 text-center">
        We offer cutting-edge product design strategies that inspire innovation, enhance functionality, and improve user experiences.
      </p>
    </div>
    
    <div className="flex flex-wrap justify-center gap-6">
      {/* User-Centered Design */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://media.licdn.com/dms/image/C5612AQHkxMJQ8_1Xcg/article-cover_image-shrink_600_2000/0/1520178935624?e=2147483647&v=beta&t=u4eid3j8YcGxe5OdSmxxaMUALOBSdU0Vv9O1FFwZzNs" alt="User-Centered Design" className="rounded-lg mb-2 w-full h-40 object-fill"/>
        <h3 className="text-lg font-semibold mb-1">User-Centered Design</h3>
        <p className="text-gray-600 mb-2 text-sm">Craft intuitive and seamless experiences by focusing on users' needs throughout the design process.</p>
      </div>

      {/* Prototyping and Wireframing */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230925175451/Wireframing-vs-Prototyping-copy.webp" alt="Prototyping and Wireframing" className="rounded-lg mb-2 w-full h-40 object-fill"/>
        <h3 className="text-lg font-semibold mb-1">Prototyping & Wireframing</h3>
        <p className="text-gray-600 mb-2 text-sm">Quickly visualize and iterate on designs with prototypes and wireframes before moving to development.</p>
      </div>

      {/* Visual Design and Consistency */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://cdn.sanity.io/images/599r6htc/regionalized/a668a954ac7c48f0f911c1cdd10043dc132bd352-2400x1256.png?w=2400&h=1256&q=75&fit=max&auto=format" alt="Visual Design" className="rounded-lg mb-2 w-full h-40 object-fill"/>
        <h3 className="text-lg font-semibold mb-1">Visual Design & Consistency</h3>
        <p className="text-gray-600 mb-2 text-sm">Ensure visual consistency across your product with a cohesive design system that enhances user experience.</p>
      </div>

      {/* Usability Testing */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/4 md:w-1/5 flex flex-col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9Ip_4GMvsvCpA8-BYiEufMe6XC_q6g3diw&s" alt="Usability Testing" className="rounded-lg mb-2 w-full h-40 object-fill"/>
        <h3 className="text-lg font-semibold mb-1">Usability Testing</h3>
        <p className="text-gray-600 mb-2 text-sm">Conduct usability testing to gather feedback, ensuring the product is user-friendly and intuitive.</p>
      </div>
    </div>
  </div>
</section>


{/* Second Section */}
<section className="bg-white max-full mx-auto py-12 px-4 md:px-20">
  <div className="rounded-lg p-8">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-2xl font-bold text-gray-800 leading-9">
        <span className="lg:text-5xl text-blue-500">Innovative Technology</span><br /> for Cutting-Edge Product Design
      </h1>
      <p className="text-gray-600 mb-5 text-sm leading-9 text-center">
        At ValueAppz, we utilize the latest design technologies and tools to craft seamless, user-friendly, and visually stunning products.
      </p>
    </div>
    <img src="https://images.ctfassets.net/lh3zuq09vnm2/6w8rqV4VHINAc5sUPfT8fO/65d6fdbd22802b0eb6f074ae7e0d8405/01_product_design_team.png" alt="Innovative Product Design" className="rounded-lg mb-2 w-full h-full object-cover"/>
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
          <span className="font-semibold">What is product design?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: Product design encompasses the process of creating and developing a product, focusing on functionality, usability, and aesthetics to meet user needs.
        </p>
      </div>

      {/* FAQ 2 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq2" className="peer hidden" />
        <label htmlFor="faq2" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">How long does the product design process take?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: The product design timeline can vary based on complexity, but it generally takes 4 to 12 weeks to complete the design phase, including iterations and feedback.
        </p>
      </div>

      {/* FAQ 3 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq3" className="peer hidden" />
        <label htmlFor="faq3" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">What tools do you use for product design?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: We utilize a range of design tools including Sketch, Figma, Adobe XD, and InVision to create high-fidelity prototypes and collaborative designs.
        </p>
      </div>

      {/* FAQ 4 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq4" className="peer hidden" />
        <label htmlFor="faq4" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">Can I provide input during the design process?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: Absolutely! We encourage client involvement throughout the design process to ensure the final product meets your vision and expectations.
        </p>
      </div>

      {/* FAQ 5 */}
      <div className="border border-gray-300 rounded-lg">
        <input type="checkbox" id="faq5" className="peer hidden" />
        <label htmlFor="faq5" className="flex justify-between items-center p-4 cursor-pointer">
          <span className="font-semibold">What industries do you cater to?</span>
          <svg className="w-5 h-5 transition-transform transform peer-checked:rotate-180" viewBox="0 0 20 20">
            <path d="M7 10l5-5v10L7 10z" fill="currentColor" />
          </svg>
        </label>
        <p className="p-4 text-gray-700 bg-gray-50 hidden peer-checked:block">
          Answer: We work with a variety of industries, including tech, healthcare, retail, and consumer products, tailoring our design services to fit your specific needs.
        </p>
      </div>
    </div>
   
  </div>
</section>


    </div>
    </div>
  );
};

export default Design;
