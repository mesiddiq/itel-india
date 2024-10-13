import React from 'react';
import ReactPlayer from 'react-player'

const ImmersiveEntertainment = () => {
  return (
    <div className='immersive-entertainment-section'>
      <h2 className='text-[#181818] text-desktop/button md:text-desktop/h1'>Immersive Entertainment Awaits!</h2>
			<ReactPlayer
        playing
        controls={false}
        loop={true}
        muted={true}
        width='100%'
        height='100%'
        url={[{src: '/s_twenty_three_plus/ImmersiveEntertainment.mp4', type: 'video/mp4'}]}
      />
      <div className='flex absolute bottom-4 md:bottom-10 w-full text-center justify-center gap-5 md:gap-14'>
        <div>
          <h3 className='text-[#000000] text-mobile/title md:text-desktop/h2'>2400*1080</h3>
          <p className='text-[#000000] text-mobile/small/body md:text-desktop/h5/medium'>Pixels Resolution</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-mobile/title md:text-desktop/h2'>59%</h3>
          <p className='text-[#000000] text-mobile/small/body md:text-desktop/h5/medium'>Screen Curvature</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-mobile/title md:text-desktop/h2'>400,000:1</h3>
          <p className='text-[#000000] text-mobile/small/body md:text-desktop/h5/medium'>Contrast Ratio</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-mobile/title md:text-desktop/h2'>99%</h3>
          <p className='text-[#000000] text-mobile/small/body md:text-desktop/h5/medium'>DCI-P3 Color Gamut</p>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveEntertainment;
