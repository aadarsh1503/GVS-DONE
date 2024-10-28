import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import one from "./one.png";
import Picture1 from "./Picture1.png";

const Hero = () => {
    // Get the scroll position
    const { scrollY } = useScroll();

    // Define the scroll-based transformations
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const textY = useTransform(scrollY, [0, 400], [0, -100]);

    return (
        <div className="min-h-screen">
            <motion.section
                className="hero-container h-[80vh] min-h-screen w-full text-center py-32 -translate-x-44 mb-10 bg-center bg-white bg-opacity-80 text-white relative"
                style={{
                    backgroundImage: `url(${one})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: opacity, // Apply the opacity transformation
                }}
            >
                {/* Big Circle with Image Inside */}
                <motion.div 
                    className="absolute inset-0 flex justify-center items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }} // Maintain bouncing effect on load
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="rounded-full bg-white lg:w-96 lg:h-96 w-72 h-72 translate-x-44 lg:-translate-x-7 border-customBlue lg:border-40 border-20 flex items-center justify-center" style={{ zIndex: 5 }}>
                        {/* Image Inside the Circle */}
                        <img src={Picture1} alt="Center Image" className="lg:w-48 w-44 h-44 lg:h-48 object-fill" />
                    </div>
                </motion.div>

                {/* Main content without numbers or icons (Visible only on medium and larger screens) */}
                <motion.div 
                    className="absolute font-semibold text-4xl text-left bg-opacity-80 hidden md:block"
                    style={{ bottom: '32%', color: '#1388c2', left: '70%', transform: 'translateX(50%)', y: textY }} // Apply the Y transformation
                >
                    <p>Software Development |</p>
                    <p>Web & eCommerce Solutions |</p>
                    <p>Digital Marketing Services |</p>
                </motion.div>

                {/* Mobile Specific Styles (Visible only on small screens) */}
                <motion.div 
                    className="absolute font-semibold text-xl text-left ml-44 bg-opacity-80 md:hidden flex flex-col items-center"
                    style={{ bottom: '4%', color: '#1388c2', left: '50%', transform: 'translateX(-50%)', y: textY }} // Apply the Y transformation
                >
                    <p className="whitespace-nowrap">Software Development |</p>
                    <p className="whitespace-nowrap">Web & eCommerce Solutions |</p>
                    <p className="whitespace-nowrap">Digital Marketing Services |</p>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default Hero;
