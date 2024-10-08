import React, { useState, useEffect } from "react";

const Hero = () => {
 
  const images = [
    "/HeroBanner.gif",
    "/Banner2.png",
    "/Banner3.gif"
  ];

  // State for tracking the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {index === currentSlide && (
            <div className="absolute bottom-20 left-5 md:left-16 text-white space-y-4 max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold">
                Bringing India Together with itel
              </h1>
              <p className="text-lg md:text-2xl">
                Snag your itel smartphones starting at just ₹6,999/-
              </p>
              <button className="px-6 py-3 bg-red-500 hover:bg-red-600 transition-colors rounded-md text-white font-semibold cursor-pointer">
                Check Now
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Hero;
