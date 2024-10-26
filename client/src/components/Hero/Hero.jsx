import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa'; // Importing Font Awesome arrow down icon

const Hero = () => {
    const countRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
    const controls = useAnimation();
    const textControls = useAnimation();

    const animateCounter = (ref, endValue) => {
        let startValue = 0;
        const duration = 1000;
        const increment = endValue / (duration / 50);
        const interval = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
                ref.current.textContent = Math.round(endValue) + '+';
                clearInterval(interval);
            } else {
                ref.current.textContent = Math.round(startValue) + '+';
            }
        }, 50);
    };

    const handleIntersect = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.fade-in').classList.add('opacity-100');
                controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
                textControls.start({ y: 0, opacity: 1, transition: { duration: 1.2 } });
                animateCounter(countRefs.current[0], 5);
                animateCounter(countRefs.current[1], 200);
                animateCounter(countRefs.current[2], 500);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect);
        const target = document.querySelector('.stats-section');

        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [controls, textControls]);

    return (
        <div className="min-h-screen lg:-32">
            <section className="hero-container text-center py-32 mb-10 bg-black bg-opacity-80 text-white relative">
                <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
                    <source src="https://videos.pexels.com/video-files/8865697/8865697-sd_640_360_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-10 px-4 md:px-8 fade-in opacity-0 transition-opacity duration-1000 ease-in-out">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={textControls}
                        className="text-4xl text-white md:text-5xl font-serif font-extrabold"
                    >
                        Transform Your Business With
                    </motion.h1>
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        animate={textControls}
                        className="text-4xl md:text-5xl mt-4 font-serif font-bold"
                    >
                        Our Highly Ranked <span className="text-blue-300">GVS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={textControls}
                        className="text-lg md:text-xl text-center mt-8"
                    >
                        Team GVS is a workaholic group of professionals,
                    </motion.p>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={textControls}
                        className="text-lg md:text-xl mt-1"
                    >
                        technology experts aware of the latest trends in the market.
                    </motion.p>

                    {/* Stats Section */}
                    <section className="stats-section mt-14">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                            <motion.div initial={{ y: -50, opacity: 0 }} animate={controls}>
                                <h2
                                    ref={countRefs.current[0]}
                                    className="text-4xl md:text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500"
                                >
                                    0
                                </h2>
                                <p className="mt-2 text-lg md:text-2xl text-gray-300">Successful Years</p>
                            </motion.div>
                            <motion.div initial={{ y: -50, opacity: 0 }} animate={controls}>
                                <h2
                                    ref={countRefs.current[1]}
                                    className="text-4xl md:text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500"
                                >
                                    0
                                </h2>
                                <p className="mt-2 text-lg md:text-2xl text-gray-300">Certified Developers</p>
                            </motion.div>
                            <motion.div initial={{ y: -50, opacity: 0 }} animate={controls}>
                                <h2
                                    ref={countRefs.current[2]}
                                    className="text-4xl md:text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500"
                                >
                                    0
                                </h2>
                                <p className="mt-2 text-lg md:text-2xl text-gray-300">Delighted Clients</p>
                            </motion.div>
                        </div>

                        {/* Animated Arrow for Scrolling */}
                        <div className="text-center px-6 py-10 mt-8">
                            <div className="flex flex-col items-center space-y-1">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.2 * index,
                                        }}
                                        className="text-blue-500 hover:text-teal-500 cursor-pointer"
                                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`${
                                                index === 0 ? 'h-12 w-12' : index === 1 ? 'h-6 w-6' : 'h-5 w-5'
                                            }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Hero;
