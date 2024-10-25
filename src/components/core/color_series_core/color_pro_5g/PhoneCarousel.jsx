import React, { useState } from 'react';

import ColorSelectorButtonActive from "../../../common/smartphone_common/ColorSelectorButtonActive";
import ColorSelectorButtonInactive from "../../../common/smartphone_common/ColorSelectorButtonInactive";

const PhoneCarousel = () => {
  const [activeColor, setActiveColor] = useState('lavender');
  const [activeVideo, setActiveVideo] = useState('/smartphone/color-pro-5g/PhoneCarousel/lavender.mp4');

  const ImageCarouselData = [
    {
      id: 1,
      color: "lavender",
      buttonText: "Lavender Fantasy",
      buttonGradient: "bg-[#C2AFE3]",
      colorSelectorBGColor: "",
      colorSelectorTextColor: "text-white",
      url: "/smartphone/color-pro-5g/PhoneCarousel/lavender.mp4"
    },
    {
      id: 2,
      color: "blue",
      buttonText: "River Blue",
      buttonGradient: "bg-[#76C7E9]",
      colorSelectorBGColor: "",
      colorSelectorTextColor: "text-white",
      url: "/smartphone/color-pro-5g/PhoneCarousel/blue.mp4"
    },
  ];

  return (
    <div className='flex w-full items-center px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#111111] overflow-hidden'>
      <div className='content relative h-full'>
        <video
          className='rounded-[16px]'
          src={activeVideo}
          autoPlay
          loop
          muted
        />
        <div className='px-5 lg:px-0 font-markot w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-4 pt-10'>
          <h1 className={`text-desktop/title text-white`}>COLOR</h1>
          {ImageCarouselData.map((colorData) => (
            <div
              key={colorData.id}
              onClick={() => { setActiveColor(colorData.color); setActiveVideo(colorData.url); }}
              className={` ${colorData.colorSelectorTextColor} cursor-pointer flex items-center justify-center`}
            >
              {activeColor === colorData.color ? 
                <ColorSelectorButtonActive textColor={colorData.colorSelectorTextColor} bg={colorData.colorSelectorBGColor} buttonText={colorData.buttonText} buttonGradient={colorData.buttonGradient} />   
                :
                <ColorSelectorButtonInactive textColor={colorData.colorSelectorTextColor} bg={colorData.colorSelectorBGColor} buttonText={colorData.buttonText} buttonGradient={colorData.buttonGradient} />   
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneCarousel;
