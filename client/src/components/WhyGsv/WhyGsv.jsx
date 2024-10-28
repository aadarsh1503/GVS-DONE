import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const WhyGsv = () => {
  return (
    <section className="bg-white font-poppins text-black mt-12 py-16 px-8 md:px-16">
        <h1 className='text-center lg:text-8xl lg:mt-32 lg:mb-32 font-bold '>WHY GVS ?</h1>
<div class="bg-white py-16 px-8">
  <div class="border-b border-gray-300 py-6">
    <div class="flex items-center space-x-4">
      <span class="text-blue-500 font-bold text-lg">01</span>
      <span class="text-black font-bold uppercase text-lg">The Reputation</span>
    </div>
  </div>
  <div class="border-b border-gray-300 py-6">
    <div class="flex items-center space-x-4">
      <span class="text-blue-500 font-bold text-lg">02</span>
      <span class="text-black font-bold uppercase text-lg">The A+ Team</span>
    </div>
  </div>
</div>


      <h1 className="text-5xl font-bold text-center">THE REPUTATION</h1>
      <div className="mt-8 text-start">
        <p className="text-lg font-light">
          <span className="uppercase text-sm tracking-wider">THE STARS ✶</span>
        </p>
        <p className="text-2xl font-medium mt-4">
          Since 2004, we’ve delivered solutions to hundreds of clients in{' '}
          <span className="underline">too many industries to count.</span>
        </p>
        <p className="text-2xl font-medium mt-4">
          While those numbers matter, the greatest value is found in feedback.
        </p>
      </div>

      <p className="mt-8 text-lg font-light text-start">
        We remain dedicated to listening, to asking our partners what they appreciate and how we can improve. B2B or not, there is always a person on the other end. We aim to treat our partners and their dreams accordingly.
      </p>

      <div className="mt-8 text-lg font-light text-start">
        <p>— We’re a <span className="underline text-blue-500">Clutch Global Leader</span> found in the Top 1% of B2B Companies</p>
        <p>— Almost 50% of our new partnerships come to us from referrals</p>
        <p>— Our clients have raised over <span className="font-bold">$12 billion in funding</span></p>
      </div>

      <div className="flex justify-center mt-8">
        <a href='/ourWork'>
        <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-800 transition">
          OUR WORK →
        </button>
        </a>
      </div>

      {/* New Division for Images */}
      <div className="flex justify-center mt-8">
        <img 
          src="https://www.strv.com/_next/static/media/reputation-2.e39611de.jpg" 
          alt="Description 1" 
          className="w-1/2 lg:mt-32 h-auto mx-2 rounded-lg" 
        />
        <img 
          src="https://www.strv.com/_next/static/media/reputation-1.11c4b643.jpg" 
          alt="Description 2" 
          className="lg:w-[600px] ml-32 lg:h-[600px] h-auto mx-2 rounded-lg" 
        />
      </div>

      {/* Testimonial Section */}
      <div className="mt-32 text-start">
        <p className="text-lg font-light italic">
          "The initial apps that they created were successful and enabled us to raise $100 million."
        </p>
        <div className="flex items-center justify-start mt-4">
          <img 
            src="https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg" // Replace with the actual image URL
            alt="Alex Mather" 
            className="w-12 h-12 rounded-full mr-3" 
          />
          <div className="text-left">
            <p className="font-semibold">Alex Mather</p>
            <p className="text-sm text-gray-500">Founder, The Athletic</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-start">
        <h2 className="text-5xl font-bold text-center mt-6">The A+ Team</h2>
        <p className="mt-10 text-xl font-semibold ">
          Humble Brag: We’re proud to be able to say GVS is good people. We look for intelligent minds rooted in strong character and kindness. Our greatest success is that this remains true no matter our size (200+), goals (BIG) or success (not complaining). You’ll find a lot more about the team if you click around below. Get to know us a little.
        </p>
        <p className="mt-4 text-lg font-light">
          <span className='text-blue-600'>- GVS’s ★4.9 Glassdoor rating</span> comes with a 97% CEO approval. 
        </p>
        <p>
        - Our rigorous hiring process helps us find people that make us better.
        </p>
        <p>
        - In the last 3 years alone, we’ve spoken at 56 conferences worldwide.
        </p>
        <div className="flex flex-col items-center mt-8">
  <a href='/company'>
    <button className="bg-blue-500 text-white font-bold px-6 py-4 rounded-full hover:bg-blue-800 transition">
      About Us →
    </button>
  </a>
  
  <div className="flex justify-center mt-8 lg:mt-32">
    <img 
      src="https://www.strv.com/_next/static/media/a-team-1.f5637646.jpg" 
      alt="Description 1" 
      className="lg:w-[700px] lg:h-[600px] -au mx-2  rounded-lg" 
    />
    <img 
      src="https://www.strv.com/_next/static/media/a-team-2.cba2d382.jpg" 
      alt="Description 2" 
      className="lg:w-[1100px] h-auto mx-2 lg:h-[1100px] rounded-lg" 
    />
  </div>
</div>


      </div>
      <div className="bg-white text-black flex flex-col items-center justify-center h-screen">
  <h1 className="lg:text-8xl text-4xl font-bold uppercase text-center">
    Got a Project?
  </h1>
  <div className="flex items-center mt-4">
    <AiOutlineArrowRight className="text-4xl text-blue-600 mr-2" />
    <a href="/contactUs">
  <h2 className="lg:text-8xl text-4xl font-bold text-blue-600 underline">
    Let’s Talk
  </h2>
</a>

  </div>
  <p className="text-sm italic text-gray-500 mt-2">(We’re ready!)</p>
</div>
      

    </section>
  );
};

export default WhyGsv;
