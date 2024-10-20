import React, { useState, useEffect } from 'react';

const NewVision = (props) => {
  
  return (
    <div className='block md:flex relative w-full h-[545px] md:h-[800px] px-[16px] md:px-0 py-[12px] md:py-0 bg-black md:bg-[url("/SmartPhone/S23+/Backgrounds/StepIntoNewVisionBg.webp")] md:bg-contain md:bg-center md:bg-no-repeat overflow-hidden' style={{ marginTop: '0px' }}>
      <div className='relative content h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-full align-middle'>
          <div className='col-span-1'></div>
          <div className='col-span-1 md:pt-24 text-center'>
            <div data-aos="fade-down">
              <h3 className='linear-gradient text-mobile/h4 md:text-desktop/h2 font-markot'>Step into the New Vision</h3>
              <p className='text-[#F2F2F2] text-mobile/h6 md:text-desktop/h4 font-markot mt-[20px] mb-[30px]'>6.78" FHD+ Amoled Display<br />3D Curved Screen</p>
            </div>
            <div className='grid grid-cols-[96px_24px_167px] md:grid-cols-[231px_36px_256px] md:gap-4 justify-center' data-aos="fade-down">
              <div className='text-[#FFFFFF] md:text-left'>
                <h3 className='text-mobile/h6 md:text-desktop/h3 font-markot mb-[8px]'>2400 x 1080</h3>
                <p className='text-mobile/small/body md:text-desktop/body/1 font-markot'>Pixels Resolution</p>
              </div>
              <div className='text-[#FFFFFF]'>
                <img src='/SmartPhone/S23+/Backgrounds/StepIntoNewVisionBorder.svg' className='w-full md:w-auto h-[66px] md:h-[110px] mt-0 md:mt-[5px]' />
              </div>
              <div className='text-[#FFFFFF] md:text-left'>
                <h3 className='text-mobile/h6 md:text-desktop/h3 font-markot mb-[8px]'>Gorilla Glass 5</h3>
                <img src='/SmartPhone/S23+/Backgrounds/StepIntoNewVisionFrame.svg' />
              </div>
            </div>
          </div>
          <div className='flex md:hidden w-full p-4'>
            <img src='/SmartPhone/S23+/Backgrounds/StepIntoNewVision.webp' className='w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVision;
