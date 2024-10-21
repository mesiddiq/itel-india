import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import ReactPlayer from 'react-player'

const A05Video = () => {

  return (
    <div className='w-full overflow-hidden relative items-center justify-center bg-[#EBE8E2]' style={{ marginTop: '0px' }}>
      <Marquee speed='50' direction='right' autoFill={true}>
        <h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] py-2'>
          <img src='/SmartPhone/a05/logos/tickerLogo.png' alt='MarqueeIcon' className='px-3' /> <h1 className='text-[#6B6682] text-[20px] font-bricolage font-[800] uppercase'>AWESOME SERIES</h1>
          <img src='/SmartPhone/a05/logos/tickerLogo.png' alt='MarqueeIcon' className='px-3' /> <h1 className='text-[#6B6682] text-[20px] font-bricolage font-[800] uppercase'>IMPRESIVELY AWESOME</h1>
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
    </div>
  );
};

export default A05Video;
