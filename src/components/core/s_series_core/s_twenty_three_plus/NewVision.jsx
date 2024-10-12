import React from 'react';

import StepIntoNewVisionPhone from '../../../../images/s_series/s_twenty_three_plus/StepIntoNewVisionPhone.svg';
import StepIntoNewVisionFrame from '../../../../images/s_series/s_twenty_three_plus/StepIntoNewVisionFrame.svg';
import StepIntoNewVisionBorder from '../../../../images/s_series/s_twenty_three_plus/StepIntoNewVisionBorder.svg';

import '../../../../pages/s_series/style.css';

const NewVision = () => {
  return (
    <div className='new-vision-section'>
    	<div className='hidden md:flex w-1/2 p-4'>
        <img src={StepIntoNewVisionPhone} className='w-full' />
      </div>
      <div className='w-full md:w-1/2 p-4 md:pt-24 text-center'>
        <h3 className='linear-gradient text-[24px] md:text-[48px] font-[500]'>Step into the New Vision</h3>
        <p className='text-[#F2F2F2] text-[16px] md:text-[24px] font-[500] mt-[20px] mb-[30px]'>6.78" FHD+ Amoled Display<br />3D Curved Screen</p>
        <div className='grid grid-cols-[35%_10%_55%] md:grid-cols-[45%_10%_45%] md:gap-4'>
          <div className='text-[#FFFFFF] md:text-left'>
            <h3 className='text-[16px] md:text-[36px] font-[500]'>2400 x 1080</h3>
            <p className='text-[10px] font-[400]'>Pixels Resolution</p>
          </div>
          <div className='text-[#FFFFFF]'>
            <img src={StepIntoNewVisionBorder} className='w-full md:w-auto h-[66px] md:h-[110px] mt-0 md:mt-[5px]' />
          </div>
          <div className='text-[#FFFFFF] md:text-left'>
            <h3 className='text-[16px] md:text-[36px] font-[500] mb-[8px]'>Gorilla Glass 5</h3>
            <img src={StepIntoNewVisionFrame} />
          </div>
        </div>
      </div>
      <div className='flex md:hidden w-full p-4'>
        <img src={StepIntoNewVisionPhone} className='w-full' />
      </div>
    </div>
  );
};

export default NewVision;
