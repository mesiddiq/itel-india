import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import ReactPlayer from 'react-player'

const Video = () => {

  return (
    <div className='w-full overflow-hidden relative items-center justify-center bg-[#050036] overflow-hidden' style={{ marginTop: '0px' }}>
      <Marquee speed='50' direction='right' autoFill={true}>
        <h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] py-2'>
          <img src='/s_twenty_three_plus/MarqueeIcon.png' alt='MarqueeIcon' className='px-3' /> <h1 className='linear-gradient text-[20px] font-bricolage font-[800] uppercase'>Super Series</h1>
          <img src='/s_twenty_three_plus/MarqueeIcon.png' alt='MarqueeIcon' className='px-3' /> <h1 className='linear-gradient text-[20px] font-bricolage font-[800] uppercase'>incredibly super</h1>
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
          url={[{ src: '/s_twenty_three_plus/s23plus.mp4', type: 'video/mp4' }]}
        />
      </div>
      <img src='/s_twenty_three_plus/Patterns.svg' className='w-full' />
    </div>
  );
};

export default Video;
