import React from 'react';

const NewVision = () => {
  return (
    <div className='new-vision-section'>
    	<div className='hidden md:flex w-1/2 p-4'>
        <img src='/s_twenty_three_plus/StepIntoNewVisionPhone.svg' className='w-full' />
      </div>
      <div className='w-full md:w-1/2 p-4 md:pt-24 text-center'>
        <h3 className='linear-gradient text-mobile/h4 md:text-desktop/h2'>Step into the New Vision</h3>
        <p className='text-[#F2F2F2] text-mobile/h6 md:text-desktop/h4 mt-[20px] mb-[30px]'>6.78" FHD+ Amoled Display<br />3D Curved Screen</p>
        <div className='grid grid-cols-[35%_10%_55%] md:grid-cols-[45%_10%_45%] md:gap-4'>
          <div className='text-[#FFFFFF] md:text-left'>
            <h3 className='text-mobile/h6 md:text-desktop/h3 mb-[8px]'>2400 x 1080</h3>
            <p className='text-mobile/small/body md:text-desktop/body/1'>Pixels Resolution</p>
          </div>
          <div className='text-[#FFFFFF]'>
            <img src='/s_twenty_three_plus/StepIntoNewVisionBorder.svg' className='w-full md:w-auto h-[66px] md:h-[110px] mt-0 md:mt-[5px]' />
          </div>
          <div className='text-[#FFFFFF] md:text-left'>
            <h3 className='text-mobile/h6 md:text-desktop/h3 mb-[8px]'>Gorilla Glass 5</h3>
            <img src='/s_twenty_three_plus/StepIntoNewVisionFrame.svg' />
          </div>
        </div>
      </div>
      <div className='flex md:hidden w-full p-4'>
        <img src='/s_twenty_three_plus/StepIntoNewVisionPhone.svg' className='w-full' />
      </div>
    </div>
  );
};

export default NewVision;
