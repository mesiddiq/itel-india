import React from 'react';

import ReactPlayer from 'react-player'

import ImmersiveEntertainmentVideo from '../../../../images/s_series/s_twenty_three_plus/ImmersiveEntertainment.mp4';

import '../../../../pages/s_series/style.css';

const ImmersiveEntertainment = () => {
  return (
    <div className='immersive-entertainment-section'>
      <h2 className='text-[#181818] text-[16px] md:text-[80px]'>Immersive Entertainment Awaits!</h2>
			<ReactPlayer
        playing
        controls={false}
        loop={true}
        muted={true}
        width='100%'
        height='100%'
        url={[{src: ImmersiveEntertainmentVideo, type: 'video/mp4'}]}
      />
      <div className='flex absolute bottom-4 md:bottom-10 w-full text-center justify-center gap-5 md:gap-14'>
        <div>
          <h3 className='text-[#000000] text-[14px] md:text-[48px] font-[500] leading-[22.4px] md:leading-[57.6px]'>2400*1080</h3>
          <p className='text-[#000000] text-[10px] md:text-[20px] font-[400] md:font-[500] leading-[14px] md:leading-[26px]'>Pixels Resolution</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-[14px] md:text-[48px] font-[500] leading-[22.4px] md:leading-[57.6px]'>59%</h3>
          <p className='text-[#000000] text-[10px] md:text-[20px] font-[400] md:font-[500] leading-[14px] md:leading-[26px]'>Screen Curvature</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-[14px] md:text-[48px] font-[500] leading-[22.4px] md:leading-[57.6px]'>400,000:1</h3>
          <p className='text-[#000000] text-[10px] md:text-[20px] font-[400] md:font-[500] leading-[14px] md:leading-[26px]'>Contrast Ratio</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-[14px] md:text-[48px] font-[500] leading-[22.4px] md:leading-[57.6px]'>99%</h3>
          <p className='text-[#000000] text-[10px] md:text-[20px] font-[400] md:font-[500] leading-[14px] md:leading-[26px]'>DCI-P3 Color Gamut</p>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveEntertainment;
