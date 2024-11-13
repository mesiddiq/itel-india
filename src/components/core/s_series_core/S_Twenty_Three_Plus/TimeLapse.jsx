import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

const TimeLapse = () => {

  return (
    <div className='hidden md:flex relative w-full h-[250px] md:h-[500px] lg:h-[800px] px-[16px] md:px-0 py-[12px] md:py-[120px] bg-[url("/smartphone/S23+/Backgrounds/SnapFlawlessSelfieBg.webp")] bg-cover bg-center' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='grid grid-cols-[15%_85%] lg:grid-cols-[25%_75%] relative'>
          <div className='col-span-1'>
            <img src='/smartphone/S23+/Backgrounds/TimeLapseText.svg' alt='TimeLapseText' className='absolute w-[135px] md:w-[200px] lg:w-auto left-[-12px] lg:left-[80px] bottom-0 lg:top-0' />
          </div>
          <div className='col-span-1'>
            <ReactPlayer
              playing
              controls={false}
              loop={true}
              muted={true}
              width='100%'
              height='100%'
              url={[{src: '/smartphone/S23+/Backgrounds/TimeLapseVideo.mp4', type: 'video/mp4'}]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLapse;
