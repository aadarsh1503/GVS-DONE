import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faTag, faCreditCard, faMapMarkerAlt, faStar, faBoxOpen, faList, faChartBar, faMoneyBill, faExchangeAlt, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

const FoodFeature = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sections = [
    {
      name: "Customer App",
      icon: faUser,
      features: [
        { name: "Restaurant Profiles", image:"https://img.freepik.com/free-vector/design-stats-concept-illustration_114360-4680.jpg?t=st=1727695703~exp=1727699303~hmac=cfcf8cad5a709e7179e12d7ba17450eb3bdc415c8a6288fab44ac483a1dab382&w=740" , icon: faSearch },
        { name: "Search By Category", image: "https://img.freepik.com/free-vector/flat-cartoon-character-customer-50-percent-discount-with-coupon_1150-34875.jpg?t=st=1727695598~exp=1727699198~hmac=1cf22f3ad1b17fa68687a1c595bc5b5311868df501581d35904fbadaeb969c59&w=740", icon: faTag },
        { name: "Discounts & Coupons", image: "https://www.freepik.com/premium-vector/phone-that-has-word-mountain-it_334622893.htm#fromView=search&page=1&position=12&uuid=1c345ecf-ae5c-4f76-a27d-1aec83040200", icon: faCreditCard },
        { name: "Seamless Payment", image: "order-tracking.png", icon: faMapMarkerAlt },
        { name: "Order Tracking", image: "reviews-ratings.png", icon: faStar },
        { name: "Reviews & Ratings", image: "reviews-ratings.png", icon: faStar },
      ],
    },
    {
      name: "Merchant App",
      icon: faBoxOpen,
      features: [
        { name: "Profile Update", image:"https://img.freepik.com/premium-vector/office-related-3d-rendering-plastic_938045-7057.jpg?w=740" , icon: faBoxOpen },
        { name: "Manage Orders", image: "product-listing.png", icon: faList },
        { name: "Product Management", image: "order-management.png", icon: faChartBar },
        { name: "Delivery Tracking", image: "revenue-tracking.png", icon: faMoneyBill },
        { name: "Sales Report Analysis", image: "discount-management.png", icon: faExchangeAlt },
      ],
    },
    {
      name: "Delivery App",
      icon: faMapMarkerAlt,
      features: [
        { name: "Agent Profile Update", image:"https://img.freepik.com/free-vector/checking-boxes-concept-illustration_114360-3428.jpg?t=st=1727695838~exp=1727699438~hmac=a9755f2320fbdac9bd46eb052fd2b32dfa4c1abde537936708a75522bd3e3c10&w=740", icon: faMapMarkerAlt },
        { name: "Instant Notifications", image: "route-optimization.png", icon: faPuzzlePiece },
        { name: "Order Accept/Reject Requests", image: "order-details.png", icon: faBoxOpen },
        { name: "Route Optimization", image: "notifications.png", icon: faStar },
        { name: "Monthly Earning Report", image: "payment-settlement.png", icon: faCreditCard },
      ],
    },
    {
      name: "Admin Panel",
      icon: faChartBar,
      features: [
        { name: "Manage Restaurant List", image:"https://img.freepik.com/free-vector/qa-engineer-concept-with-software-programming-symbols-flat-vector-illustration_1284-78160.jpg?t=st=1727693036~exp=1727696636~hmac=9440cef376a508a9f4871c4619e29fc45eea18c28164d2b06e4b217e2a205062&w=740" , icon: faChartBar },
        { name: "categories Management", image: "user-management.png", icon: faUser },
        { name: "App Updates", image: "order-analytics.png", icon: faChartBar },
        { name: "Revenue Management", image: "revenue-management.png", icon: faMoneyBill },
        { name: "Marketing and Promotion", image: "third-party.png", icon: faPuzzlePiece },
      ],
    },
  ];

  const currentSection = activeSection || sections[0];
  const imageToShow = hoveredFeature ? hoveredFeature.image : currentSection.features[0].image;

  return (
    <div className="flex flex-col  bg-white mx-auto py-12 px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold  mb-9 text-center text-black">
        Features Of Our  <span className="text-blue-500">On-demand Food Delivery</span> Solution
      </h2>
      {/* Subtitle */}
      
      
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row w-full items-stretch">
  {/* Sidebar */}
  <div className="md:w-1/3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-l-lg py-8 px-6 text-black shadow-lg">
  <div className="table w-full">
    <div className="table-header-group">
      <div className="table-row">
        <div className="table-cell font-bold text-lg text-center py-2">Sections</div>
      </div>
    </div>
    <div className="table-row-group">
      {sections.map((section) => (
        <div
          key={section.name}
          onMouseEnter={() => {
            setActiveSection(section);
            setHoveredFeature(null);
          }}
          className={`table-row cursor-pointer transition-all duration-300 transform mb-4`}
        >
          <div
            className={`table-cell  items-center py-6 border-b border-white/30 transition-all duration-300 ${
              activeSection?.name === section.name
                ? "bg-gradient-to-r from-blue-600 to-blue-800 text-black shadow-lg scale-105"
                : "text-white hover:text-white hover:bg-opacity-70 hover:bg-gradient-to-r from-orange-300 to-red-300"
            }`}
          >
            <FontAwesomeIcon icon={section.icon} className=" ml-3 mr-2 text-xl" /> {/* Adjusted margin-right */}
            <span>{section.name}</span> {/* Wrapped text in a span for better structure */}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




        {/* Main Content */}
        <div className="md:w-2/3 bg-white rounded-r-lg shadow-md flex flex-col md:flex-row p-10">
          <div className="md:w-1/2">
            {/* Dynamic Heading */}
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Features of the {currentSection.name}
            </h3>

            {/* List of Features */}
            <ul className="space-y-4">
              {currentSection.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-600 flex items-center space-x-2 cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(feature)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <FontAwesomeIcon icon={feature.icon} className="text-black w-5 h-5" />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Image */}
          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
  <img
    src={imageToShow}
    alt={hoveredFeature ? hoveredFeature.name : currentSection.name}
    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-lg transition-transform transform duration-500 ease-in-out hover:scale-105"
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default FoodFeature;
