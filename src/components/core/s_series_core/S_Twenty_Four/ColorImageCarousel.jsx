import { useState } from "react";
import rightArrowCarousel from "/smartphone/S24/rightArrowCarousel.svg";
import leftArrowCarousel from "/smartphone/S24/leftArrowCarousel.svg";

// Placeholder for the images (you can replace with your actual image URLs)
const blackPhoneImages = [
    "/smartphone/S24/Starry Black 1.png",
    "/smartphone/S24/Starry Black 2.png",
    "/smartphone/S24/Starry Black 3.png",
    "/smartphone/S24/Starry Black 4.png",
];
const whitePhoneImages = [
    "/smartphone/S24/Dawn white 1.png",
    "/smartphone/S24/Dawn white 2.png",
    "/smartphone/S24/Dawn white 3.png",
    "/smartphone/S24/Dawn white 4.png",
];

const ColorImageCarousel = () => {
  const [activeColor, setActiveColor] = useState("black"); // Default active phone color
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle left navigation
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => {
      const maxIndex = activeColor === "black" ? blackPhoneImages.length : whitePhoneImages.length;
      return prevIndex === 0 ? maxIndex - 1 : prevIndex - 1;
    });
  };

  // Function to handle right navigation
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      const maxIndex = activeColor === "black" ? blackPhoneImages.length : whitePhoneImages.length;
      return prevIndex === maxIndex - 1 ? 0 : prevIndex + 1;
    });
  };

  const images = activeColor === "black" ? blackPhoneImages : whitePhoneImages;

  return (
    <div className="relative h-full flex flex-col justify-center items-center gap-8 bg-[#1c1b1b]">
        <div className="relative w-full h-screen  bg-cover bg-center bg-imageCarouselBackground flex flex-col justify-center items-center">
            {/* Phone Image */}
            <img src={images[currentImageIndex]} alt="Phone" className="w-full h-full object-contain" />
            
            <div className="flex flex-row justify-between items-center w-full absolute px-[80px]">
                {/* Left Arrow */}
                <button onClick={handlePrev} className="w-12 h-12">
                    <img src={leftArrowCarousel} alt="leftArrowCarousel"/>
                </button>

                {/* Right Arrow */}
                <button onClick={handleNext} className="w-12 h-12">
                        <img src={rightArrowCarousel} alt="leftArrowCarousel"/>
                </button>
            </div>
        </div>
        
        {/* Color Selector */}
        <div className="text-markot flex flex-row justify-between items-center gap-5">
            <h1 className="text-desktop/title text-white">COLOR</h1>

            {/* Black color */}
            <div onClick={() => { setActiveColor("black"); setCurrentImageIndex(0); }} className={`cursor-pointer flex items-center justify-center`}>
                { 
                    activeColor === "black" ? 
                    <div className="border-[2px] border-itel-red flex flex-row justify-between items-center pl-4 p-[7px] gap-5 rounded-full">
                        <span className="text-desktop/button uppercase text-white">Starry Black</span>
                        <div className="h-[26px] w-[26px] bg-gradient-to-br from-[#ACB1B7] to-[#060708] rounded-full"></div>
                    </div>
                    :
                    <span className="border-[2px] border-itel-red rounded-[100px] h-10 w-10 p-[2px] ">
                        <div className="h-full w-full bg-gradient-to-br from-[#ACB1B7] to-[#060708] rounded-full"></div>
                    </span>
                }
            </div>

            {/* White color */}
            <div onClick={() => { setActiveColor("white"); setCurrentImageIndex(0); }} className={`cursor-pointer flex flex-row items-center justify-center`}>
                {
                    activeColor === "white" ?
                    <div className="border-[2px] border-itel-red flex flex-row justify-between items-center pl-4 p-[7px] gap-5 rounded-full">
                        <span className="text-desktop/button uppercase text-white">Dawn White</span>
                        <div className="h-[26px] w-[26px] bg-gradient-to-bl from-[#F4F5F9] to-[#E0E3E8] rounded-full"></div>
                    </div>    
                    :
                    <span className="border-[2px] border-itel-red rounded-[100px] h-10 w-10 p-[2px] ">
                        <div className="h-full w-full bg-gradient-to-bl from-[#F4F5F9] to-[#E0E3E8] rounded-full"></div>
                    </span>
                }
            </div>
        </div>
    </div>
  );
};

export default ColorImageCarousel;
