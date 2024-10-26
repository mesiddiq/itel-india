import React from 'react';

const Carousel = () => {
  return (
    <div className='flex w-full items-center h-[250px] md:h-[860px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#0B0021] overflow-hidden'>
      <div className='content relative h-full'>
        <video
          className='absolute w-auto object-cover rounded-[16px]'
          src='/smartphone/color-pro-5g/Carousel/video.mp4'
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Carousel;
