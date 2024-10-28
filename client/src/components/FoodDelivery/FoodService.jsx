import { useState } from "react";

const FoodService = () => {
  // Data for each tab
  const services = [
    {
      title: "Delivery",
      description: "We provide success-driven solutions tailored for entrepreneurs.",
      points: ["Quick Turnaround Time", "Launch in 2 Weeks", "Pre-built Workflows and Integrations"],
      image: "https://img.freepik.com/free-vector/home-delivery-worker-pack_23-2148521845.jpg?t=st=1727690183~exp=1727693783~hmac=9dddf31c5ec9364e79e721a227e243de84edafea724cbbb483f3c18d45721969&w=740",
    },
    {
      title: "Pricing",
      description: "Our pricing model is flexible and designed to scale with your business.",
      points: ["Affordable Pricing", "No Hidden Charges", "Pay as you Grow"],
      image: "https://img.freepik.com/free-vector/profitable-pricing-strategy-price-formation-promo-action-clearance-shopping-idea-design-element-cheap-products-advertisement-customers-attraction_335657-1627.jpg?t=st=1727690434~exp=1727694034~hmac=e07fde579770129509a5990ddae684244a0ec1ab077799831d90f1cbcc7d90fc&w=740",
    },
    {
      title: "Tech-stack",
      description: "Cutting-edge technology stack to ensure scalability and security.",
      points: ["Latest Frameworks", "High Security", "Cross-platform Compatibility"],
      image: "https://img.freepik.com/free-photo/3d-render-robot-with-books_1048-6043.jpg?t=st=1727690757~exp=1727694357~hmac=e6094b32c7761d0c8f4aade9397a3ae8017d320805f7526f4ef66d17d3e7b2d2&w=826",
    },
    {
      title: "Integration",
      description: "Seamless integration with third-party services for better functionality.",
      points: ["API Integrations", "Payment Gateways", "CRM Tools"],
      image: "https://img.freepik.com/free-vector/fitting-piece-concept-illustration_114360-5536.jpg?t=st=1727690785~exp=1727694385~hmac=04f4d84549866dd0fe7093ac78550a135c76c9f04d3aee8272611564c9515504&w=740",
    },
    {
      title: "Customization",
      description: "Fully customizable solutions to meet your specific needs.",
      points: ["White-label Solutions", "Tailored Features", "Branded Experience"],
      image: "https://img.freepik.com/free-vector/app-development-illustration_52683-47902.jpg?t=st=1727690786~exp=1727694386~hmac=b3d53a0391ede3eaa4ff1e5948af7c2e2d445a58c1e2491cefea3dd68993f077&w=740",
    },
    {
      title: "Support",
      description: "24/7 customer support team to help you at every stage.",
      points: ["Round-the-clock Support", "Dedicated Account Managers", "Comprehensive Documentation"],
      image: "https://img.freepik.com/premium-vector/tech-support-specialist-assisting-user-vector-illustration-cartoon_969863-307928.jpg?w=740",
    },
  ];

  // State to manage the currently selected service
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="py-10 bg-white rounded-xl ">
      {/* Heading for the section */}
      <h2 className="text-3xl font-bold text-center rounded-xl text-black mb-2">
        Why Choose <span className="text-blue-500">GVS </span>?
      </h2>
  
      {/* Subheading line */}
      <p className="text-lg text-center text-black rounded-xl mb-8">
      We are a leading on demand food delivery app development company and believe in “Delivering Value for Money” <br />and hence our Solutions are best suited for Entrepreneurs , Small Businesses and young Startups.


      </p>
  
      <div className="flex flex-col md:flex-row justify-center rounded-xl items-start">
        <div className="max-w-4xl w-full flex flex-col rounded-xl md:flex-row mx-auto">
          {/* Left-side Menu */}
          <div className="w-full md:w-1/4 bg-blue-200 rounded-xl p-5">
            <ul>
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`p-4 cursor-pointer hover:bg-blue-500 hover:text-white font-serif transition-colors ${
                    selectedService.title === service.title ? "bg-blue-500 text-white" : ""
                  }`}
                  onMouseEnter={() => setSelectedService(service)}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right-side Content */}
          <div className="w-full md:w-3/4 p-5 md:p-10 rounded-xl bg-white shadow-lg flex flex-col md:flex-row">
            {/* Title and Description */}
            <div className="flex flex-col justify-center w-full md:w-2/3 mr-4 mb-6 md:mb-0">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-serif font-bold">{selectedService.title}</h2>
                <p className="mt-2 font-serif text-gray-600">{selectedService.description}</p>
              </div>
              {/* Points */}
              <ul className="list-disc list-inside text-gray-800 mb-6">
                {selectedService.points.map((point, index) => (
                  <li key={index} className="my-2 font-serif font-semibold">
                    {point}
                  </li>
                ))}
              </ul>
              {/* Button */}
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
                Book a Free Demo
              </button>
            </div>
  
            {/* Image */}
            <div className="w-full md:w-2/5">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
};

export default FoodService;
