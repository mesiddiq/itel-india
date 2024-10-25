import React from 'react';

const TransformYourPhone = () => {
  return (
    <div className='flex relative w-full h-[650px] md:h-[800px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#000000] md:bg-none overflow-hidden'>
      <video
        className='block md:hidden absolute bottom-[55px] right-[90px] w-auto object-cover transform scale-[1.7]'
        src='/smartphone/color-pro-5g/TransformYourPhone/video.mp4'
        autoPlay
        loop
        muted
      />
      <div className='content'>
        <video
          className='hidden md:block absolute top-0 left-0 w-full h-full object-cover'
          src='/smartphone/color-pro-5g/TransformYourPhone/video.mp4'
          autoPlay
          loop
          muted
        />
        <div className='relative z-[2]'>
          <div className='grid grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <img src='/smartphone/color-pro-5g/TransformYourPhone/ivco.png' />
              <h2 className='text-mobile/h4 md:text-[60px] text-[#FFFFFF] md:leading-[72px] font-markot pt-5'>Transform Your Phone With Every Ray of Sunlight</h2>
              <p className='text-mobile/body/2 md:text-desktop/body/large text-[#FFFFFF] font-markot pt-5'>Discover the enchantment of color-changing back technology in two color models: Lavender Fantasy | River Blue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformYourPhone;
