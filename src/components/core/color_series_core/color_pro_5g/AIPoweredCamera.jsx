import React from 'react';
import ReactPlayer from 'react-player'

const AIPoweredCamera = () => {
  return (
    <div className='block md:flex relative w-full px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#121523] overflow-hidden'>
      <div className='content'>
        <h2 className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot md:w-[50%]'>50MP AI-Powered Camera: Capture Brilliance</h2>
        <h4 className='text-mobile/body/2 md:text-desktop/h4 text-[#FFFFFF] font-markot pt-3 md:pt-5 pb-5 md:pb-12 w-full md:w-[50%]'>Ensure every photo is a masterpiece with exceptional clarity and realistic color contrast.</h4>
        <div data-aos='zoom-in-up'>
          <ReactPlayer
            playing
            controls={false}
            loop={true}
            muted={true}
            width='100%'
            height='100%'
            url={[{ src: '/smartphone/color-pro-5g/AIPoweredCamera/video.mp4', type: 'video/mp4' }]}
          />
        </div>
      </div>
    </div>
  );
};

export default AIPoweredCamera;
