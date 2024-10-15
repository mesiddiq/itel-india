import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

const TimeLapse = (props) => {
  const { scrollY } = props;

  return (
    <div className='hidden md:flex time-lapse-section'>
      <img src='/s_twenty_three_plus/TimeLapseText.svg' className='absolute' />
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
  );
};

export default TimeLapse;
