import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6 sm:px-12 mt-32 lg:px-24 bg-white text-black min-h-screen">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Terms and Conditions</h1>
        <p className="text-center text-gray-600 mb-4">Last updated: [25/10/2024]</p>

        <p className="leading-7 text-lg mb-6">
          These terms and conditions outline the rules and regulations for the use of Global Vision Solutions (GSV)'s services. By accessing this website, we assume you accept these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Intellectual Property</h2>
        <p className="leading-7 text-lg mb-6">
          Unless otherwise stated, Global Vision Solutions and/or its licensors own the intellectual property rights for all material on GSV. All intellectual property rights are reserved. You may access this for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">User Responsibilities</h2>
        <p className="leading-7 text-lg mb-4">
          As a user of our services, you agree to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Provide accurate and complete information when creating an account.</li>
          <li>Not engage in any illegal activity while using our services.</li>
          <li>Not attempt to gain unauthorized access to our systems or networks.</li>
          <li>Comply with all applicable laws and regulations.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Limitation of Liability</h2>
        <p className="leading-7 text-lg mb-6">
          In no event shall Global Vision Solutions, nor any of its officers, directors, employees, partners, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, resulting from:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Your access to or use of our services;</li>
          <li>Any conduct or content of any third party on our services;</li>
          <li>Unauthorized access or use of your information.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Governing Law</h2>
        <p className="leading-7 text-lg mb-6">
          These terms and conditions shall be governed by and construed in accordance with the laws of Bahrain. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bahrain.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes to Terms</h2>
        <p className="leading-7 text-lg mb-6">
          We may revise these terms from time to time. By using this website, you agree to be bound by the then current version of these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
        <p className="leading-7 text-lg mb-4">
          If you have any questions about these Terms and Conditions, please contact us:
        </p>
        
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Head Office - Bahrain</h3>
        <p className="leading-7 text-lg mb-4">
          Global Vision Solutions<br />
          #22, Building 661, Road no 1208, Block 712 Salmabad، 973, Bahrain<br />
          Phone: +973 17491222<br />
          Email: <a href="mailto:info@gvs-bh.com" className="text-blue-600 underline">info@gvs-bh.com</a><br />
          Alternate Email: <a href="mailto:riyadh.shaheen@gmail.com" className="text-blue-600 underline">riyadh.shaheen@gmail.com</a>
        </p>

        <h3 className="text-xl font-semibold text-blue-600 mb-2">Other Offices</h3>
        <p className="leading-7 text-lg mb-4">
          **Hyderabad Location**<br />
          7-18, 1st Floor, Road no: 1, Banjara Hills, Hyderabad - 500060
        </p>
        <p className="leading-7 text-lg mb-4">
          **Saudi Arabia Location**<br />
          Firas Ibn Al Nudur St, Al Khobar 34447, Saudi Arabia
        </p>
        <p className="leading-7 text-lg mb-4">
          **UAE Location**<br />
          227-219 Salah Al Din St - Deira - Dubai - United Arab Emirates
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
