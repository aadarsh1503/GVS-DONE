import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch testimonials from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials"); // Adjust the URL to your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    if (currentIndex + 3 < testimonials.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen py-24 lg:py-32 flex flex-col items-center justify-center bg-[url('https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?cs=srgb&dl=pexels-joshsorenson-1714205.jpg&fm=jpg')]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white lg:mt-0 mt-10 mb-4 lg:mb-6 animate-pulse text-center">
          OVER 10,000 SATISFIED CUSTOMERS TRUST GSV
        </h2>
        <p className="text-white text-sm md:text-lg mb-6 lg:mb-10 opacity-90 text-center">
          What do REAL customers have to say about GSV's services?
        </p>

        {/* Navigation buttons for mobile view, centered above the testimonials */}
        <div className="block lg:hidden flex justify-between items-center mb-4 w-full max-w-xs">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full shadow-lg transform transition ${
              currentIndex === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-gray-900 to-transparent hover:bg-gray-800 hover:scale-110"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + 3 >= testimonials.length}
            className={`p-3 rounded-full shadow-lg transform transition ${
              currentIndex + 3 >= testimonials.length ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-l from-gray-900 to-transparent hover:bg-gray-800 hover:scale-110"
            }`}
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="relative w-full max-w-full lg:max-w-6xl flex flex-col lg:flex-row items-center justify-center">
          {/* Testimonials grid for mobile and desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-2 sm:px-6 lg:px-12">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <div key={index} className="p-4 lg:p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="relative mb-4">
                  <img
                    src={testimonial.imgSrc}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-48 lg:h-56 object-cover rounded-lg opacity-90 hover:opacity-100 transition duration-500"
                  />
                </div>
                <h3 className="text-base lg:text-lg bg-gradient-to-r bg-blue-700 to-white text-white py-2 px-3 lg:px-4 rounded-2xl font-extrabold text-center">
                  {testimonial.title}
                </h3>
                <p className="italic text-white text-sm lg:text-base text-center my-3">{testimonial.quote}</p>
                <p className="text-xs lg:text-sm font-semibold text-gray-300 text-center">{testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Previous and Next buttons for large screens */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`hidden lg:block absolute left-0 lg:-left-32 p-6 rounded-full z-10 shadow-lg transform transition ${
              currentIndex === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-gray-900 to-transparent hover:bg-gray-800 hover:scale-110"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-12 h-12 text-white" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + 3 >= testimonials.length}
            className={`hidden lg:block absolute right-0 lg:-right-32 p-6 rounded-full z-10 shadow-lg transform transition ${
              currentIndex + 3 >= testimonials.length ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-l from-gray-900 to-transparent hover:bg-gray-800 hover:scale-110"
            }`}
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-12 h-12 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
