import React from 'react';
import Marquee from 'react-fast-marquee';
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div className='w-full overflow-hidden relative items-center justify-center bg-[#050036] overflow-hidden'>
      <Marquee speed='50' direction='right' autoFill={true}>
        <h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] py-2'>
          <img src='/smartphone/S23+/Backgrounds/MarqueeIcon.png' alt='MarqueeIcon' className='px-3' /> <h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text text-[20px] font-bricolage font-[800] uppercase'>Super Series</h3>
          <img src='/smartphone/S23+/Backgrounds/MarqueeIcon.png' alt='MarqueeIcon' className='px-3' /> <h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text text-[20px] font-bricolage font-[800] uppercase'>incredibly super</h3>
        </h3>
      </Marquee>
      <div data-aos='zoom-in-up'>
        <ReactPlayer
          playing
          controls={false}
          loop={true}
          muted={true}
          width='100%'
          height='100%'
          url={[{ src: '/smartphone/S23+/Backgrounds/s23plus.mp4', type: 'video/mp4' }]}
        />
      </div>
      <img src='/smartphone/S23+/Backgrounds/Patterns.svg' className='w-full' />
    </div>
  );
};

export default Video;
