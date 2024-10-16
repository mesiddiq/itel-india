import React from 'react';

import Marquee from "react-fast-marquee";
import ReactPlayer from 'react-player'

import MarqueeIcon from '../../../../images/s_series/s_twenty_three_plus/MarqueeIcon.png';
import S23Plus from '../../../../images/s_series/s_twenty_three_plus/s23plus.mp4';

import '../../../../pages/s_series/style.css';

const Video = () => {
  return (
    <div className='w-full overflow-hidden relative items-center justify-center bg-[#050036]' style={{ marginTop: '0px' }}>
      <Marquee speed='50' direction='right' autoFill={true}>
				<h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] py-2'>
					<img src={MarqueeIcon} alt="MarqueeIcon" className='px-3' /> <h1 className='linear-gradient text-[20px] font-[800] uppercase'>Super Series</h1> 
					<img src={MarqueeIcon} alt="MarqueeIcon" className='px-3' /> <h1 className='linear-gradient text-[20px] font-[800] uppercase'>incredibly super</h1> 
				</h3>
			</Marquee>
			<ReactPlayer
        playing
        controls={false}
        loop={true}
        muted={true}
        width='100%'
        height='100%'
        url={[{src: S23Plus, type: 'video/mp4'}]}
      />
    </div>
  );
};

export default Video;
