import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import ReactPlayer from 'react-player'

const Video = (props) => {
  const { scrollY } = props;
  const [startAnimation, setStartAnimation] = useState(false);
  const [startVideoAnimation, setStartVideoAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(scrollY >= 1100);
  }, [scrollY]);

  useEffect(() => {
    console.log("startVideoAnimation", startAnimation);
    if (startAnimation) {
      const startVideo = setTimeout(() => {
        setStartVideoAnimation(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(startVideo);
    }
  }, [startAnimation]);

  return (
    <div className='w-full overflow-hidden relative items-center justify-center bg-[#050036]' style={{ marginTop: '0px' }}>
      <Marquee speed='50' direction='right' autoFill={true}>
				<h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] py-2'>
					<img src='/s_twenty_three_plus/MarqueeIcon.png' alt="MarqueeIcon" className='px-3' /> <h1 className='linear-gradient text-[20px] font-[800] uppercase'>Super Series</h1> 
					<img src='/s_twenty_three_plus/MarqueeIcon.png' alt="MarqueeIcon" className='px-3' /> <h1 className='linear-gradient text-[20px] font-[800] uppercase'>incredibly super</h1> 
				</h3>
			</Marquee>
      {startVideoAnimation && (
        <>
          <div class='video-animate-slide-up'>
      			<ReactPlayer
              playing
              controls={false}
              loop={true}
              muted={true}
              width='100%'
              height='100%'
              url={[{src: '/s_twenty_three_plus/s23plus.mp4', type: 'video/mp4'}]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Video;
