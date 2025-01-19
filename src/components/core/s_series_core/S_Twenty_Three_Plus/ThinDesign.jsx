import React, { useState, useEffect } from 'react';

const ThinDesign = () => {
  
  return (
    <div className='flex flex-col relative items-center w-full h-[275px] md:h-[400px] lg:h-[800px] px-[16px] lg:px-0 py-[12px] lg:py-[120px] bg-[url("/smartphone/S23+/Backgrounds/ThinDesignBgSmall.webp")] lg:bg-[url("/smartphone/S23+/Backgrounds/ThinDesignBg.webp")] bg-cover bg-no-repeat bg-center' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='flex flex-col items-center lg:top-[-60%]'>
          <div className='lg:absolute lg:left-[120px] lg:bottom-0'>
            <h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text text-mobile/h4 md:text-desktop/h2 font-markot mb-[10px] lg:mb-[20px] lg:w-[60%]' data-aos="fade-down">Ultra-Thin Design: Perfectly Crafted for New Age Style</h3>
            <p className='w-[70%] lg:w-full text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large font-markot mb-[40px] lg:mb-[80px]' data-aos="fade-down">7.9mm Slim Depth Body</p>
          </div>
          <img src='/smartphone/S23+/Backgrounds/ThinDesignMobile.webp' alt='Ultra-Thin Slim Design' data-aos="fade-down" className='mt-8 lg:mt-0' />
        </div>
      </div>
    </div>
  );
};

export default ThinDesign;
