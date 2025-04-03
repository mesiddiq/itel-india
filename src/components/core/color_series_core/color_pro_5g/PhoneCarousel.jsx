import React, { useState } from 'react';

import ColorSelectorButtonActive from "../../../common/smartphone_common/ColorSelectorButtonActive";
import ColorSelectorButtonInactive from "../../../common/smartphone_common/ColorSelectorButtonInactive";
import { ImageCarouselData, FullSpecificationsData } from '../../../../data/smartphonedata/ColorPro5GData';

const PhoneCarousel = () => {
  const [activeColor, setActiveColor] = useState('lavender');

  const getInitialVideo = () => {
    const isDesktop = window.innerWidth > 1000;
    return isDesktop ? ImageCarouselData[0].url : ImageCarouselData[0].mobileUrl;
  };

  const [activeVideo, setActiveVideo] = useState(getInitialVideo());
  
  const getVideoUrl = (colorData) => {
    return window.innerWidth > 1000 ? colorData.url : colorData.mobileUrl;
  };

  return (
    <div className='flex w-full items-center px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#111111] overflow-hidden'>
      <div className='content relative h-full'>
        <div className='h-[350px] md:h-[470px] 2xl:h-[515px]'>
          <video
            className='rounded-[16px]'
            src={activeVideo}
            autoPlay
            loop
            muted
          />
        </div>
        <div className='px-5 lg:px-0 font-markot w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-4 pt-10'>
          <h3 className={`text-desktop/title text-white`}>COLOR</h3>
          {ImageCarouselData.map((colorData) => (
            <div
              key={colorData.id}
              onClick={() => { setActiveColor(colorData.color); setActiveVideo(getVideoUrl(colorData)); }}
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
