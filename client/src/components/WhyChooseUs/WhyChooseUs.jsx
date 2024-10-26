import React from 'react';
import { FaLaptopCode, FaBullhorn, FaUsersCog, FaClipboardList, FaRocket, FaChartLine } from 'react-icons/fa';

const features = [
    {
        icon: <FaLaptopCode className="text-teal-500 text-5xl mb-4" />,
        title: 'Innovative Web Solutions',
        description: 'We deliver cutting-edge web applications tailored to your business needs, enhancing user engagement and functionality.'
    },
    {
        icon: <FaBullhorn className="text-teal-500 text-5xl mb-4" />,
        title: 'Strategic Marketing Expertise',
        description: 'Our marketing strategies focus on reaching your target audience effectively, driving traffic and conversions.'
    },
    {
        icon: <FaUsersCog className="text-teal-500 text-5xl mb-4" />,
        title: 'Customer-Centric Approach',
        description: 'We prioritize customer feedback and insights to create solutions that resonate with your audience and drive loyalty.'
    },
    {
        icon: <FaClipboardList className="text-teal-500 text-5xl mb-4" />,
        title: 'Comprehensive Analytics',
        description: 'Utilize our advanced analytics tools to gain valuable insights into user behavior and campaign performance.'
    },
    {
        icon: <FaRocket className="text-teal-500 text-5xl mb-4" />,
        title: 'Rapid Prototyping',
        description: 'We offer fast prototyping services to bring your ideas to life quickly and efficiently, minimizing time to market.'
    },
    {
        icon: <FaChartLine className="text-teal-500 text-5xl mb-4" />,
        title: 'Growth-Driven Strategies',
        description: 'Our data-driven strategies are designed to scale your business, focusing on sustainable growth and performance.'
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-12 bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="text-center px-4 sm:px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
                <p className="text-lg md:text-xl text-gray-800 mx-auto max-w-2xl mb-8">
                    We are dedicated to helping businesses grow through innovative web solutions and strategic marketing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
                            {feature.icon}
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-base text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
