import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./slide.css";

const Slide = () => {
    const images = [
        "https://codeinfosys.com/img/logos/imag-6.png",
        "https://codeinfosys.com/img/logos/imag-7.png",
        "https://codeinfosys.com/img/logos/imag-8.png",
        "https://codeinfosys.com/img/logos/imag-9.png",
        "https://codeinfosys.com/img/logos/imag-10.png",
        "https://codeinfosys.com/img/logos/imag-11.png",
        "https://codeinfosys.com/img/logos/imag-12.png",
        "https://codeinfosys.com/img/logos/imag-13.png",
        "https://codeinfosys.com/img/logos/imag-14.png",
        "https://codeinfosys.com/img/logos/imag-15.png"
    ];

    const [isLoaded, setIsLoaded] = useState(false);

    const preloadImages = (images) => {
        let loadedImages = 0;
        const totalImages = images.length;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages += 1;
                if (loadedImages === totalImages) {
                    setIsLoaded(true);
                }
            };
        });
    };

    useEffect(() => {
        preloadImages(images);
    }, [images]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="py-10">
            <div className="mx-auto px-4">
                {isLoaded ? (
                    <Slider {...settings}>
                        {images.map((src, index) => (
                            <div key={index} className="slide-item">
                                <img src={src} alt={`Slide ${index + 1}`} className="object-contain w-full" />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="flex justify-center items-center" style={{ height: '300px' }}>
                        <span>Loading...</span> {/* You can customize this loading indicator */}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Slide;
