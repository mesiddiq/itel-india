import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

const TimeLapse = () => {

  return (
    <div className='hidden md:flex relative w-full h-[250px] md:h-[800px] px-[16px] md:px-0 py-[12px] md:py-[120px] bg-[url("/s_twenty_three_plus/SnapFlawlessSelfie.png")] bg-cover bg-center' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='grid grid-cols-[15%_85%] md:grid-cols-[25%_75%] relative'>
          <div className='col-span-1'>
            <img src='/s_twenty_three_plus/TimeLapseText.svg' alt='TimeLapseText' className='absolute w-[120px] md:w-auto left-[120px] bottom-[45px] md:bottom-0' />
          </div>
          <div className='col-span-1'>
            <ReactPlayer
              playing
              controls={false}
              loop={true}
              muted={true}
              width='100%'
              height='100%'
              url={[{src: '/s_twenty_three_plus/TimeLapseVideo.mp4', type: 'video/mp4'}]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLapse;
