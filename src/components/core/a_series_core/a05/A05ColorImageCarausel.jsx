/* eslint-disable react/prop-types */
import { useState } from "react";
import ColorSelectorButtonActive from "../../../common/smartphone_common/ColorSelectorButtonActive";
import ColorSelectorButtonInactive from "../../../common/smartphone_common/ColorSelectorButtonInactive";

const A05ColorImageCarausel = ({ ImageCarouselData, showTitleInMobile }) => {
  const [activeColor, setActiveColor] = useState(ImageCarouselData[0].color); // Default active phone color
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeColorData = ImageCarouselData.find(data => data.color === activeColor);

  // Function to handle left navigation
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === 0 ? activeColorData.images.length - 1 : prevIndex - 1;
    });
  };

  // Function to handle right navigation
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === activeColorData.images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <>
    <div className={`relative w-full flex flex-col justify-center items-center gap-8 select-none lg:pt-[20px] md:pb-[40px]`}>
        
        {
          showTitleInMobile &&
          <h1 className="block lg:hidden px-4 text-black/1 text-mobile/h4 text-left font-markot">
            Product Versions
          </h1>
        }

        <div className="lg:rounded-2xl overflow-hidden relative w-full xl:max-w-[1270px] lg:max-w-[1000px] md:max-w-[650px] h-[360px] lg:h-[450px] xl:h-[650px] bg-cover bg-center flex flex-col justify-center items-center" style={{
          backgroundImage: `url(${ImageCarouselData[0].bgURL})`
        }}>
            

            {/* Phone Image */}
            <img src={activeColorData.images[currentImageIndex]} alt="Phone" className="w-[40%] sm:h-[90%] lg:w-full h-auto object-contain" />
            
            <div className="flex flex-row justify-between items-center w-full absolute px-5 lg:px-[80px]">
                {/* Left Arrow */}
                <button onClick={handlePrev} className="w-8 h-8 lg:w-12 lg:h-12">
                    <img src="/SmartPhone/a05/leftArrow.png" alt="leftArrowCarousel"/>
                </button>

                {/* Right Arrow */}
                <button onClick={handleNext} className="w-8 h-8 lg:w-12 lg:h-12">
                        <img src="/SmartPhone/a05/rightArrow.png" alt="leftArrowCarousel"/>
                </button>
            </div>
        </div>
        
        {/* Color Selector */}
        <div className="px-5 lg:px-0 font-markot w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-4">
            <h1 className={`text-desktop/title ${ImageCarouselData[0].colorSelectorTextColor}`}>COLOR</h1>

            {
                ImageCarouselData.map((colorData) => (
                    <div
                        key={colorData.id}
                        onClick={() => { setActiveColor(colorData.color); setCurrentImageIndex(0); }}
                        className={` ${colorData.colorSelectorTextColor} cursor-pointer flex items-center justify-center`}
                    >
                        { 
                            activeColor === colorData.color ? 
                            <ColorSelectorButtonActive textColor={colorData.colorSelectorTextColor} bg={colorData.colorSelectorBGColor} buttonText={colorData.buttonText} buttonGradient={colorData.buttonGradient} />   
                            :
                            <ColorSelectorButtonInactive textColor={colorData.colorSelectorTextColor} bg={colorData.colorSelectorBGColor} buttonText={colorData.buttonText} buttonGradient={colorData.buttonGradient} />   
                        }
                    </div>
                ))
            }
        </div>
    </div>
    </>
  );
};

export default A05ColorImageCarausel;
