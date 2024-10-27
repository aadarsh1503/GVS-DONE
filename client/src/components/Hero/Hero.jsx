import React from 'react';
import one from "./one.png";
import Picture1 from "./Picture1.png";

const Hero = () => {
    return (
        <div className="min-h-screen">
            <section
                className="hero-container h-[80vh] min-h-screen w-full text-center py-32 -translate-x-44 mb-10 bg-center bg-white bg-opacity-80 text-white relative"
                style={{
                    backgroundImage: `url(${one})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Big Circle with Image Inside */}
                <div className="absolute inset-0 flex justify-center items-center">
                <div className="rounded-full bg-white lg:w-96 lg:h-96 w-72 h-72 translate-x-44 lg:-translate-x-7 border-customBlue lg:border-40 border-20 flex items-center justify-center" style={{ zIndex: 5 }}>

                        {/* Image Inside the Circle */}
                        <img src={Picture1} alt="Center Image" className="lg:w-48 w-44 h-44 lg:h-48 object-fill" />
                    </div>
                </div>

                {/* Main content without numbers or icons (Visible only on medium and larger screens) */}
                <div className="absolute font-semibold text-4xl text-left bg-opacity-80 p-4 rounded hidden md:block" style={{ bottom: '32%', color: '#1388c2', left: '50%', transform: 'translateX(50%)' }}>
                    <p>Software Development |</p>
                    <p>Web & eCommerce Solutions |</p>
                    <p>Digital Marketing Services |</p>
                </div>

                {/* Mobile Specific Styles (Visible only on small screens) */}
                <div className="absolute font-semibold text-xl text-left ml-44 bg-opacity-80 md:hidden flex flex-col items-center" style={{ bottom: '4%', color: '#1388c2', left: '50%', transform: 'translateX(-50%)' }}>
    <p className="whitespace-nowrap">Software Development |</p>
    <p className="whitespace-nowrap">Web & eCommerce Solutions |</p>
    <p className="whitespace-nowrap">Digital Marketing Services |</p>
</div>

            </section>
        </div>
    );
};

export default Hero;
