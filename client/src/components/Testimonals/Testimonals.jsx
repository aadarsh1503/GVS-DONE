import React, { useState } from 'react';

const Testimonals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mansi',
      role: 'Founder - Aaqya, India',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'I am happy to have chosen GVS to launch my Hyperlocal Food and Grocery Delivery Business. We got all the necessary features of Zomato, BlinkIt into a single platform in less than 3 months and at a fraction of the cost...',
    },
    {
      name: 'John Doe',
      role: 'CEO - ExampleCorp, USA',
      image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      text: 'Choosing GVS was a game-changer for our company. Their innovative solutions and dedication helped us surpass our goals and achieve great results.',
    },
    {
      name: 'Jane Smith',
      role: 'Founder - InnovateX, UK',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKhO81lwBpTySRIn6KqSSLNbiUA5s99aqWg&s',
      text: 'The team at GVS delivered outstanding results for our project. Their attention to detail and expertise in the field were exceptional.',
    },
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-6">
          Hear What Our Clients Say
        </h2>
        <p className="text-base md:text-lg text-gray-800 mb-10 max-w-2xl mx-auto">
          Discover the positive impacts that GVS has made on our clients' businesses.
        </p>

        {/* Testimonial Display */}
        <div className="flex justify-center px-4">
          <div
            key={currentIndex}
            className="relative p-8 bg-white shadow-lg rounded-xl w-full md:w-3/4 lg:w-1/2 transition-opacity duration-500 ease-in-out opacity-100"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-100 opacity-30 rounded-xl"></div>
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <img
                src={testimonials[currentIndex].image}
                alt={`Client ${currentIndex + 1}`}
                className="w-24 h-24 rounded-full border-4 border-blue-600"
              />
              <div className="text-center">
                <p className="text-lg font-bold text-blue-700">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                <p className="mt-4 text-gray-800 font-medium text-sm md:text-base">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
