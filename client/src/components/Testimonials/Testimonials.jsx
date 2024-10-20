import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Updated testimonials data
const testimonials = [
  {
    imgSrc: "https://t3.ftcdn.net/jpg/08/55/27/12/360_F_855271283_jnI9si4M9Ev89YUk8W7UcjblQDoy3JcI.jpg",
    title: "Seamless Web Development",
    quote: "GSV helped us build a responsive and user-friendly website that boosted our online presence and improved customer engagement.",
    author: "Jane Doe (CEO of Tech Innovations)"
  },
  {
    imgSrc: "https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg",
    title: "Software Solutions",
    quote: "The custom software developed by GSV streamlined our operations and significantly improved productivity across all departments.",
    author: "John Smith (CTO of InnovateCorp)"
  },
  {
    imgSrc: "https://images.squarespace-cdn.com/content/v1/54fe35d8e4b034b7a7fa38d8/1507669782910-YHONCM7NO368K174V5GF/linx-dating-testimonial-7.jpg",
    title: "Marketing Campaigns",
    quote: "Thanks to GSV's marketing strategies, our brand visibility skyrocketed, leading to a 40% increase in sales in just 3 months.",
    author: "Sarah Lee (CMO of BrandBoost)"
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=500&h=500",
    title: "Outstanding Mobile App",
    quote: "The mobile app they developed is incredibly user-friendly and helped us engage a wider audience. Their support was top-notch!",
    author: "Michael Ray (AppWave)"
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=faces&fit=crop&w=500&h=500",
    title: "Efficient CRM Integration",
    quote: "GSV integrated a CRM system that revolutionized our workflow. It improved customer retention and made our processes more efficient.",
    author: "Emily Clarke (SwiftConnect)"
  },
  {
    imgSrc: "https://media.istockphoto.com/id/1202062761/photo/outdoor-portrait-of-mixed-race-indian-woman.jpg?s=612x612&w=0&k=20&c=cRIhAkDCfqtyudXXibPVYwECeuDzXZKvBh5RqO9Lf2s=",
    title: "E-commerce Platform",
    quote: "Our sales doubled thanks to the new e-commerce platform GSV built. The UX/UI design is incredible, and it’s very fast.",
    author: "David Wilson (ShopEase)"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < testimonials.length ? prevIndex + 3 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen py-32 flex flex-col items-center justify-center bg-[url('https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?cs=srgb&dl=pexels-joshsorenson-1714205.jpg&fm=jpg')]">
      {/* Dark overlay using inset */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-pulse">
          OVER 10,000 SATISFIED CUSTOMERS TRUST GSV
        </h2>
        <p className="text-white text-lg mb-10 opacity-90">
          What do REAL customers have to say about GSV's services?
        </p>

        <div className="relative w-full max-w-6xl flex items-center">
          <button
            onClick={prevSlide}
            className="absolute -left-32 p-6 bg-gradient-to-r  from-gray-900 to-transparent text-white rounded-full z-10 hover:bg-gray-800 shadow-lg transition transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-12 h-12 text-white" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-12">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <div key={index} className="p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="relative mb-4">
                  <img
                    src={testimonial.imgSrc}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-56 object-cover rounded-lg opacity-90 hover:opacity-100 transition duration-500"
                  />
                </div>
                <h3 className="text-lg bg-gradient-to-r bg-blue-700 to-white text-white py-2 px-4 rounded-2xl font-extrabold text-center">
                  {testimonial.title}
                </h3>
                <p className="italic text-white text-center my-3">{testimonial.quote}</p>
                <p className="text-sm font-semibold text-gray-300 text-center">{testimonial.author}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-32  p-6 bg-gradient-to-l from-gray-900 to-transparent text-white rounded-full z-10 hover:bg-gray-800 shadow-lg transition transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-12 h-12 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
