import React, { useState, useEffect } from 'react';

const Company = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?t=st=1729797916~exp=1729801516~hmac=ba89c72dd2a8330775feca1a8bb0eeb6e5868bdeb4f211006b8604df510da960&w=996",
    "https://img.freepik.com/free-photo/people-writing-new-project_23-2147656739.jpg?t=st=1729797936~exp=1729801536~hmac=ef96fc81788484f572a4f4730f7b4fd254563de86abaa088525245034821eb72&w=996",
    "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://img.freepik.com/free-photo/community-entrepreneurs-working-together_23-2148499850.jpg?ga=GA1.1.474795014.1720813348",
    "https://images.pexels.com/photos/3182758/pexels-photo-3182758.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184426/pexels-photo-3184426.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184427/pexels-photo-3184427.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  // Function to cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative w-full bg-white flex flex-col items-center justify-center">
      {/* Main Heading Section */}
      <div className="text-center max-w-4xl mb-10 mx-auto mt-10 md:mt-32 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
          We help businesses grow in the digital world
          <span className="text-blue-700">.</span>
        </h1>
        {/* Supporting Text */}
        <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0 md:space-x-10">
          <p className="text-gray-600 text-base md:text-lg max-w-xs md:max-w-sm">
            With over 10 years of experience, GSV delivers solutions in Product Marketing, E-commerce Website, and App Development.
          </p>
          <p className="text-gray-600 text-base md:text-lg max-w-xs md:max-w-sm">
            Our expertise helps businesses of all sizes grow and succeed online with strategies tailored to their needs.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full h-64 md:h-[400px] max-w-5xl mx-auto mb-16">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/5725960/5725960-sd_640_360_30fps.mp4"
          muted
          loop
          autoPlay
          playsInline
          controls={false}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="mt-1 flex justify-center w-full">
        <span className="text-gray-400 text-3xl animate-bounce">&#x25BC;</span>
      </div>

      {/* Section 1 */}
      <section className="bg-white w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
            Our worldwide network of experts has helped businesses thrive globally.
          </h2>
          <p className="mt-4 text-lg font-bold text-center text-gray-500">
            GSV offers expert services in marketing, e-commerce, and app development to over 2.5 million customers worldwide.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">The GSV Advantage</h3>
              <p className="mt-4 font-bold text-gray-500">
                We believe in giving businesses the best resources for growth, flexibility, and success. Our marketing solutions are tailored to unique brand identities, delivering bright, inspiring strategies customized to individual needs.
              </p>
            </div>

            <div className="text-left">
              <p className="mt-4 font-bold text-gray-500">
                Our e-commerce and app development services provide all-in-one solutions to help brands expand their digital presence, with the highest attention to detail and customer satisfaction. Our experienced teams ensure clients can focus on what matters most: their business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image Section with Fading Effect */}
            <div className="relative w-full h-64 lg:h-96 overflow-hidden">
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  src={image}
                  alt={`GVS Team ${index + 1}`}
                />
              ))}
            </div>

            {/* Text Section */}
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900">Who We Are?</h2>
              <p className="mt-4 text-lg text-gray-600">
                We are a next-generation technology company that brings the latest digital solutions tailored to your business needs. At GVS-BH, we offer a wide array of services ranging from Simple Static Sites to full-blown Content Managed Enterprise Solutions.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                A team of experienced developers, programmers, testers, and designers work tirelessly to deliver quality business products that cater to the client’s demands. We focus on each client and work dedicatedly to provide innovative and dynamic solutions using cutting-edge tools and modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image Section */}
            <div className="relative">
              <img className="w-full h-auto rounded-lg shadow-lg object-cover" src="https://img.freepik.com/premium-photo/our-vision-concept-business-technology-internet_220873-13795.jpg?w=360" alt="Vision Image" />
            </div>

            {/* Vision Text */}
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our vision is to provide strategic state-of-the-art IT solutions that align with the aspirations of our business and meet the complex requirements of large enterprises. We aim to do this in a way that promotes growth, increases efficiency, and maximizes success for our clients.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our goal is to foster a culture of innovation and continuous improvement, ensuring we stay ahead of the curve in technology and service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-center py-16">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Are you ready to take your business to the next level?</h2>
          <p className="mt-4 mb-4 text-lg text-gray-600">Get in touch with us today to discuss your project!</p>
        </div>
        <a href="/contactUs" className="bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-600 transition duration-300">Contact Us</a>
      </section>
    </div>
  );
};

export default Company;
