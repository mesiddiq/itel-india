import React from 'react';
import ReactPlayer from 'react-player'

const ElevateUnparalled = () => {
  return (
    <div className='block md:flex relative w-full px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#121523] overflow-hidden'>
      <div className='content'>
        <h2 className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot'>Elevate Unparalleled Capabilities</h2>
        <h4 className='text-mobile/body/2 md:text-desktop/h4 text-[#FFFFFF] font-markot pt-3 md:pt-5 pb-5 md:pb-12 w-full md:w-[50%]'>With a smartphone that transforms multitasking and provides high-speed performance.</h4>
        <div data-aos='zoom-in-up'>
          <ReactPlayer
            playing
            controls={false}
            loop={true}
            muted={true}
            width='100%'
            height='100%'
            url={[{ src: '/smartphone/color-pro-5g/ElevateUnparalled/video.mp4', type: 'video/mp4' }]}
          />
        </div>
      </div>
    </div>
  );
};

export default ElevateUnparalled;
