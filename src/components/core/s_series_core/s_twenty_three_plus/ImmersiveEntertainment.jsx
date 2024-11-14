import React from 'react';
import ReactPlayer from 'react-player'

const ImmersiveEntertainment = () => {
  return (
    <div className='relative w-full text-center overflow-hidden' style={{ marginTop: '0px' }}>
      <h2 className='absolute w-full top-[12%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-[#181818] text-desktop/button md:text-desktop/h3 lg:text-desktop/h1 font-markot'>Immersive Entertainment Awaits!</h2>
			<ReactPlayer
        playing
        controls={false}
        loop={true}
        muted={true}
        width='100%'
        height='100%'
        url={[{src: '/smartphone/S23+/Backgrounds/ImmersiveEntertainment.mp4', type: 'video/mp4'}]}
      />
      <div className='flex absolute bottom-4 lg:bottom-10 w-full text-center justify-center gap-5 lg:gap-14 px-[16px] lg:px-0 py-[12px] lg:py-0'>
        <div>
          <h3 className='text-[#000000] text-mobile/title md:text-desktop/h3 lg:text-desktop/h2 font-markot'>2400*1080</h3>
          <p className='text-[#000000] text-mobile/small/body lg:text-desktop/h5/medium font-markot'>Pixels Resolution</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-mobile/title md:text-desktop/h3 lg:text-desktop/h2 font-markot'>59%</h3>
          <p className='text-[#000000] text-mobile/small/body lg:text-desktop/h5/medium font-markot'>Screen Curvature</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-mobile/title md:text-desktop/h3 lg:text-desktop/h2 font-markot'>400,000:1</h3>
          <p className='text-[#000000] text-mobile/small/body lg:text-desktop/h5/medium font-markot'>Contrast Ratio</p>
        </div>
        <div>
          <h3 className='text-[#000000] text-mobile/title md:text-desktop/h3 lg:text-desktop/h2 font-markot'>99%</h3>
          <p className='text-[#000000] text-mobile/small/body lg:text-desktop/h5/medium font-markot'>DCI-P3 Color Gamut</p>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveEntertainment;
