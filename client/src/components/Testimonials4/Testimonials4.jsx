import React, { useState, useRef, useEffect } from 'react';

const Testimonials4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  const testimonials = [
    "https://www.strv.com/_next/static/media/carousel-01.7b06c55f.jpg",
    "https://www.strv.com/_next/static/media/carousel-02.46e4223f.jpg",
    "https://www.strv.com/_next/static/media/carousel-03.370ed10d.jpg",
    "https://www.strv.com/_next/static/media/carousel-04.b1703a27.jpg",
    "https://www.strv.com/_next/static/media/carousel-05.b6c1063c.jpg",
  ];

  // Set the width of each image based on the first image's actual width
  useEffect(() => {
    if (carouselRef.current) {
      const firstImage = carouselRef.current.querySelector('img');
      if (firstImage) {
        setImageWidth(firstImage.clientWidth + 16); // adding margin
      }
    }
  }, []);

  const handleNext = () => {
    // Cycle back to the first image after the last one
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first image
    }
  };

  const handlePrev = () => {
    // Optional: Add a previous button to navigate back
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 1); // Go to the last image
    }
  };

  return (
    <div className="bg-white py-16 px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="lg:text-7xl text-4xl font-bold text-gray-900"><span className='text-blue-500'>CLIENTS</span> SAY</h1>
        <p className="text-gray-600 uppercase text-sm mb-10 tracking-widest mt-2">
          [Selected testimonials from Clutch and our work]
        </p>
        <h1 className='font-poppins text-start text-xl break-words'><span className='text-gray-600'>Mar 6, 2014 -</span> "Look no further than GVS. I always refer people to them because they’re great. Don’t look at them as a normal agency;< br /> look at them as an extended team and trust their engineers. Roll up your sleeves and engage them because they will be able to get you wherever you want to go."</h1>
      </div>

      {/* Testimonial Images */}
      <div className="max-w-2xl mx-auto overflow-hidden relative">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * imageWidth}px)` }}
        >
          {testimonials.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Testimonial Image ${index + 1}`}
              className="object-cover lg:h-[400px] mx-2"
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          ➔
        </button>

        {/* Left Arrow Button (optional) */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          ➔
        </button>
      </div>
    </div>
  );
};

export default Testimonials4;
