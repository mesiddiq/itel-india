import React, { useEffect, useState } from 'react';

const Revolution = () => {
  const content = [
    {
      videoSrc: '/smartphone/color-pro-5g/Revolution/BetterExperience.mp4',
      title: 'Better Experience',
    },
    {
      videoSrc: '/smartphone/color-pro-5g/Revolution/HighSpeed.mp4',
      title: 'High Speed',
    },
    {
      videoSrc: '/smartphone/color-pro-5g/Revolution/LowLag.mp4',
      title: 'Low Lag',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000); // 5 seconds delay

    return () => clearInterval(interval); // Cleanup on unmount
  }, [content.length]);

  return (
    <div className='flex relative text-center w-full h-[430px] md:h-[1000px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[url("/smartphone/color-pro-5g/NextGenPerformance/bg.png")] md:bg-none overflow-hidden'>
      <h2 className='w-full mx-[-16px] md:mx-[-80px] absolute bottom-[25px] md:bottom-[70px] 2xl:bottom-[20px] bg-gradient-to-br from-[#BA69F6] to-[#2768C2] inline-block text-transparent bg-clip-text text-[40px] md:text-[136px] font-[700] font-markot z-[3]'>
        {content[currentIndex].title}
      </h2>
      <div className='content'>
        <h2 className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot pb-4'>
          5G Revolution:<br />Redefining Connectivity
        </h2>
        <p className='text-desktop/body/1 font-markot pb-8'>
          itel Color Pro 5G is all set to transform the way you connect, communicate, and create.
        </p>
        <div className='flex relative items-center h-full'>
          <img src='/smartphone/color-pro-5g/Revolution/phone.png' className='absolute top-0 z-[2]' />
          <video
            className='absolute top-0 z-[1] w-[95%] top-[10px] md:top-[15px] left-[15px] md:left-[35px]'
            src={content[currentIndex].videoSrc}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Revolution;
