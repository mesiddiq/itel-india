import React, { useState, useEffect } from 'react';

const ThinDesign = () => {
  
  return (
    <div className='flex flex-col relative items-center w-full h-[275px] md:h-[800px] px-[16px] md:px-0 py-[12px] md:py-[120px] bg-[url("/smartphone/S23+/Backgrounds/ThinDesignBgSmall.webp")] md:bg-[url("/smartphone/S23+/Backgrounds/ThinDesignBg.webp")] bg-cover bg-no-repeat bg-center' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='flex flex-col items-center md:top-[-60%]'>
          <div className='md:absolute md:left-[120px] md:bottom-0'>
            <h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text text-mobile/h4 md:text-desktop/h2 font-markot mb-[10px] md:mb-[20px] md:w-[60%]' data-aos="fade-down">Ultra-Thin Design: Perfectly Crafted for New Age Style</h3>
            <p className='w-[70%] md:w-full text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large font-markot mb-[40px] md:mb-[80px]' data-aos="fade-down">7.9mm Slim Depth Body</p>
          </div>
          <img src='/smartphone/S23+/Backgrounds/ThinDesignMobile.webp' data-aos="fade-down" className='mt-8 md:mt-0' />
        </div>
      </div>
    </div>
  );
};

export default ThinDesign;
