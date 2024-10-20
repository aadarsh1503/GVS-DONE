import React from 'react';
import { AiOutlineMobile, AiOutlineCode, AiOutlineShoppingCart, AiOutlineDatabase, AiOutlineCheckCircle, AiOutlineBulb, AiOutlineLineChart, AiOutlineUser, AiOutlineRocket } from 'react-icons/ai';

const PortfolioSection = () => {
  return (
    <div className="bg-black min-h-screen text-white py-12">
      {/* Top Heading */}
      <div className="text-center max-w-5xl mx-auto mb-12">
        <h1 className="text-5xl mt-28 font-bold">Building Digital Experiences</h1>
        <p className="text-lg mt-4">
          Welcome to <span className="text-blue-500">GSV's</span> Portfolio, where innovative design meets cutting-edge technology to create powerful digital solutions.
        </p>
      </div>

      {/* Content Section with white outline */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row bg-black rounded-lg overflow-hidden outline outline-1 outline-white">
        {/* Left side (Text + Icons + Stats) */}
        <div className="flex-1 p-8 space-y-8 bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          <h2 className="text-2xl font-bold mb-4 font-serif">Crafting Responsive Websites</h2>
          <p className="text-gray-400 text-sm font-serif mb-6">
            From sleek portfolios to robust e-commerce platforms, we create responsive websites that adapt to every device and user need.
          </p>

          {/* Features Section with Icons */}
          <div className="space-y-6">
            <div className="flex items-center">
              <AiOutlineMobile className="text-red-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">Mobile-First Approach</h3>
                <p className="text-gray-400 text-sm font-serif">Every design is optimized for mobile users.</p>
              </div>
            </div>

            <div className="flex items-center">
              <AiOutlineShoppingCart className="text-green-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">E-Commerce Solutions</h3>
                <p className="text-gray-400 text-sm font-serif">We build robust platforms that drive sales and engagement.</p>
              </div>
            </div>

            <div className="flex items-center">
              <AiOutlineRocket className="text-blue-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">Fast Performance</h3>
                <p className="text-gray-400 text-sm font-serif">Speed is at the core of our designs to ensure better user experiences.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (Image) */}
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/736x/09/8a/f4/098af471922c5e293df4fa27d960a2cf.jpg"
            alt="Web Development"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-7xl mt-10 mx-auto flex flex-col md:flex-row bg-black rounded-lg overflow-hidden outline outline-1 outline-white">
        {/* Right side (Image) */}
        <div className="flex-1">
          <img
            src="https://cdn.flames.design/project-media/289ca200-0306-4b13-9411-9881da624adf/original-71c42456-fc7c-4afa-a222-abf665554757.png?aspect_ratio=4:3&width=900&height=600&quality=60"
            alt="Software Development"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left side (Text + Icons + Stats) */}
        <div className="flex-1 p-8 space-y-8 bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-t-lg md:rounded-t-none md:rounded-r-lg">
          <h2 className="text-2xl font-bold mb-4 font-serif">Building Robust Software Solutions</h2>
          <p className="text-gray-400 text-sm font-serif mb-6">
            We develop scalable software solutions tailored to meet your business needs and drive innovation.
          </p>

          {/* Features Section with Icons */}
          <div className="space-y-6">
            <div className="flex items-center">
              <AiOutlineCode className="text-red-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">Agile Development</h3>
                <p className="text-gray-400 text-sm font-serif">Our iterative process ensures quick delivery and adaptability.</p>
              </div>
            </div>

            <div className="flex items-center">
              <AiOutlineDatabase className="text-green-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">Database Management</h3>
                <p className="text-gray-400 text-sm font-serif">We design and manage databases for seamless data operations.</p>
              </div>
            </div>

            <div className="flex items-center">
              <AiOutlineCheckCircle className="text-blue-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">Quality Assurance</h3>
                <p className="text-gray-400 text-sm font-serif">Our rigorous testing guarantees high-quality software.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mt-10 mx-auto flex flex-col md:flex-row bg-black rounded-lg overflow-hidden outline outline-1 outline-white">
        {/* Left side (Text + Icons + Stats) */}
        <div className="flex-1 p-8 space-y-8 bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          <h2 className="text-2xl font-bold mb-4 font-serif">Mastering Marketing Strategies</h2>
          <p className="text-gray-400 text-sm font-serif mb-6">
            From targeted campaigns to data-driven insights, we craft marketing strategies that resonate with your audience.
          </p>

          {/* Features Section with Icons */}
          <div className="space-y-6">
            <div className="flex items-center">
              <AiOutlineBulb className="text-red-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">Targeted Campaigns</h3>
                <p className="text-gray-400 text-sm font-serif">Reach your audience effectively with tailored marketing campaigns.</p>
              </div>
            </div>

            <div className="flex items-center">
              <AiOutlineLineChart className="text-green-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">Data-Driven Insights</h3>
                <p className="text-gray-400 text-sm font-serif">Utilize analytics to optimize your marketing efforts and maximize ROI.</p>
              </div>
            </div>

            <div className="flex items-center">
              <AiOutlineUser className="text-blue-500 text-2xl mr-4" /> {/* Decreased size */}
              <div>
                <h3 className="text-lg font-semibold font-serif">Engagement Strategies</h3>
                <p className="text-gray-400 text-sm font-serif">Build lasting relationships with your audience through effective engagement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (Image) */}
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/736x/f6/70/53/f6705305b130c383f20cd49675d2d58b.jpg"
            alt="Marketing Strategies"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
