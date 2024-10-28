import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-all bg- duration-300 transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-40 lg:h-64 object-cover mb-4 rounded-md border-2 border-gray-300 shadow-md" />
      <h3 className="text-2xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-black text-base leading-relaxed">{description}</p>
    </div>
  );
};

const FoodCarts = () => {
  const cards = [
    { title: "White-label Solution",  image: "https://img.freepik.com/premium-photo/innovative-solutions-message-written-ripped-paper-piece-with-red-background-conceptual-innovative-solutions-symbol-copy-space_648871-6919.jpg?w=996" },
    { title: "Native iOS and Android Apps",  image: "https://img.freepik.com/free-vector/mobile-app-development_24908-58343.jpg?t=st=1727696550~exp=1727700150~hmac=aa22bdd6d7fb2228f0a73bc8274e9e78c825423445d5fa31ae026b88d8e85567&w=740" },
    { title: "Powerful Admin Panel",  image: "https://img.freepik.com/free-vector/colorful-app-dashboard-with-flat-design_23-2147895249.jpg?t=st=1727696623~exp=1727700223~hmac=2cf078a3467e2765d31106e716c9fd94b815e65ca6380e92dd8c05b59dacf058&w=740" },
    { title: "Mobile-First User Experience",  image: "https://img.freepik.com/free-vector/mobile-apps-concept-landing-page_52683-22683.jpg?t=st=1727696648~exp=1727700248~hmac=5f43509ff797ba9a8c907bfe39a4da0b2710fcc41a894e8d9aecbe3613d2fcc3&w=740" },
    { title: "Robust & Scalable",  image: "https://img.freepik.com/free-vector/process-concept-illustration_114360-4229.jpg?t=st=1727696705~exp=1727700305~hmac=4266a129c2fe876e2cadfb4e82bbe29940efa59f660507094d7d65b479471d7e&w=996" },
    { title: "Secure Cloud Hosted Architecture", image: "https://img.freepik.com/free-vector/businessman-cloud_23-2147513519.jpg?t=st=1727696740~exp=1727700340~hmac=41ac0a1948e00d562bed86d408c198687320f3f8a277f5844a5348c67b5078c3&w=740" },
  ];

  return (
    <div className=" py-16 px-4 bg-white sm:px-6 lg:px-8">
      <h2 className="text-4xl mx-auto max-w-4xl  font-bold text-center text-black mb-2">
      Start, Scale and Grow your Food Business <span className="text-blue-500">With GVS</span> 
      </h2>
      <p className='mt-4 lg:ml-72 mb-12 font-serif text-white'>Whether you own a small bakery or a 5-star restaurant, our food delivery applications are designed for all kinds of businesses in the food industry.

</p>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
     
    </div>
  );
};

export default FoodCarts;
