import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6 sm:px-12 lg:px-24 bg-white text-black min-h-screen">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-600 text-center mt-32 mb-8">Privacy Policy</h1>
        <p className="text-center text-gray-600 mb-4">Last updated: [25/10/2024]</p>

        <p className="leading-7 text-lg mb-6">
          At Global Vision Solutions (GSV), we are committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use it, and your rights regarding that information.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Information We Collect</h2>
        <p className="leading-7 text-lg mb-4">
          We may collect personal information that you provide to us when you use our services, including:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Payment information</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">How We Use Your Information</h2>
        <p className="leading-7 text-lg mb-4">
          We may use the information we collect in the following ways:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>To provide and maintain our services</li>
          <li>To improve, personalize, and expand our services</li>
          <li>To process transactions and send you related information</li>
          <li>To communicate with you, including customer service</li>
          <li>To send you marketing communications</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Data Retention</h2>
        <p className="leading-7 text-lg mb-6">
          We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal information to the extent necessary to comply with our legal obligations.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Your Rights</h2>
        <p className="leading-7 text-lg mb-4">
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>The right to access</li>
          <li>The right to rectification</li>
          <li>The right to erasure</li>
          <li>The right to restrict processing</li>
          <li>The right to data portability</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes to This Privacy Policy</h2>
        <p className="leading-7 text-lg mb-6">
          We may update our Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
        <p className="leading-7 text-lg mb-2">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <p className="leading-7 text-lg mb-2">
          Email: info@gvs-bh.com
        </p>
        <p className="leading-7 text-lg mb-2">
          Email: riyadh.shaheen@gmail.com
        </p>
        <p className="leading-7 text-lg mb-2">
          Phone: +973 17491222
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Locations</h2>
        <p className="leading-7 text-lg mb-2">
          HEAD OFFICE - Bahrain Location: 
          <br /> #22, Building 661, Road no 1208, Block 712 Salmabad, 973, Bahrain
        </p>
        <p className="leading-7 text-lg mb-2">
          Hyderabad Location: 
          <br /> 7-18, 1st Floor, Road no: 1, Banjara Hills, Hyderabad - 500060
        </p>
        <p className="leading-7 text-lg mb-2">
          Saudi Arabia Location: 
          <br /> Firas Ibn Al Nudur St, Al Khobar 34447, Saudi Arabia
        </p>
        <p className="leading-7 text-lg mb-2">
          UAE Location: 
          <br /> 227-219 Salah Al Din St - Deira - Dubai - United Arab Emirates
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
