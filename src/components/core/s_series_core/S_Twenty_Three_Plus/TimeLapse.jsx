import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

const TimeLapse = (props) => {
  const { scrollY } = props;

  return (
    <div className='hidden md:flex time-lapse-section'>
      <div className='content'>
        <div className='grid grid-cols-[15%_85%] md:grid-cols-[25%_75%] relative'>
          <div className='col-span-1'>
            <img src='/s_twenty_three_plus/TimeLapseText.svg' alt='TimeLapseText' className='sharp-focus-section-text absolute left-[120px] bottom-0' />
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
