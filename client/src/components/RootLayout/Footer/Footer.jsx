// src/components/Footer.jsx
import React from 'react';
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMedium, AiOutlineInstagram, AiOutlineYoutube, AiOutlineDribbble } from 'react-icons/ai'; // Icons from react-icons
import { FaBehance, FaFacebook } from 'react-icons/fa'; // For icons like Behance and Facebook

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Address */}
        <div>
          <div className="mb-4">
            {/* Logo Section */}
            <img src="/path/to/logo.png" alt="Miquido Logo" className="w-16" />
          </div>
          <address className="not-italic">
            <p>Global Vision Solution Sp. z o.o. Sp. k.</p>
            <p>Zablocie 43a</p>
            <p>30-701 Krakow</p>
            <p>VAT-UE: 9452138173</p>
          </address>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Custom app development</li>
            <li>Web app development</li>
            <li>Mobile app development</li>
            <li>Product strategy</li>
            <li>Product design</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
          </ul>
        </div>

        {/* Technologies Column */}
        <div>
          <h3 className="font-semibold text-white mb-4">Technologies</h3>
          <ul className="space-y-2">
            <li>Flutter</li>
            <li>Golang</li>
            <li>iOS</li>
            <li>Android</li>
            <li>Frontend</li>
            <li>Backend</li>
          </ul>
        </div>

        {/* Industries Column */}
        <div>
          <h3 className="font-semibold text-white mb-4">Industries</h3>
          <ul className="space-y-2">
            <li>eCommerce</li>
            <li>Fintech</li>
            <li>Banking</li>
            <li>Healthcare</li>
            <li>Entertainment</li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h3 className="font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>The ultimate guide to fintech</li>
            <li>The future of app development</li>
            <li>How to validate an idea</li>
            <li>Legacy modernisation guide</li>
          </ul>
        </div>
      </div>

      {/* Contact and Social Media Links */}
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <p>hello@GlobalVisionSolution.com</p>
            <p>PL: +48 536 083 559</p>
            <p>UK: +44 2045 771752</p>
          </div>

          <div className="flex justify-center md:justify-end space-x-6 mt-4">
            {/* Social Icons */}
            <AiOutlineLinkedin className="text-white text-2xl hover:text-gray-300" />
            <AiOutlineTwitter className="text-white text-2xl hover:text-gray-300" />
            <FaFacebook className="text-white text-2xl hover:text-gray-300" />
            <AiOutlineMedium className="text-white text-2xl hover:text-gray-300" />
            <FaBehance className="text-white text-2xl hover:text-gray-300" />
            <AiOutlineDribbble className="text-white text-2xl hover:text-gray-300" />
            <AiOutlineInstagram className="text-white text-2xl hover:text-gray-300" />
            <AiOutlineYoutube className="text-white text-2xl hover:text-gray-300" />
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center md:text-left">
          <p className="text-sm text-gray-500">&copy; 2024 Global Vision Solution. All rights reserved.</p>
          <p className="text-sm text-gray-500">Privacy Policy | Whistleblowing Procedure</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
