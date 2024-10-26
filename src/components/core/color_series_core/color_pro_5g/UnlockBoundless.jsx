import React, { useRef, useEffect } from 'react';

const UnlockBoundless = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
          
          const timer = setTimeout(() => {
            video.pause();
          }, 5500);

          // Cleanup the timer on component unmount
          return () => clearTimeout(timer);
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 });

    const containerElement = containerRef.current;
    if (containerElement) {
      observer.observe(containerElement);
    }

    // Cleanup on unmount
    return () => {
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className='flex relative w-full h-[650px] md:h-[800px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#000000] md:bg-none overflow-hidden'>
      <video
        ref={videoRef}
        className='block md:hidden absolute bottom-[55px] right-[90px] w-auto object-cover transform scale-[1.7]'
        src='/smartphone/color-pro-5g/UnlockBoundless/video.mp4'
        loop={false}
        muted
      />
      <div className='content'>
        <video
          ref={videoRef}
          className='hidden md:block absolute top-0 left-0 w-full h-full object-cover'
          src='/smartphone/color-pro-5g/UnlockBoundless/video.mp4'
          loop={false}
          muted
        />
        <div className='flex md:flex-col md:justify-between relative h-full z-[2]'>
          <div className='grid grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h2 className='text-mobile/h4 md:text-[60px] text-[#FFFFFF] md:leading-[72px] font-markot pt-5'>Unlock Boundless Possibilities with Memory Fusion Technology</h2>
            </div>
          </div>
          <div>
            <div>
              <h5 className='text-desktop/h5 text-[#FFFFFF] font-markot'>12 GB* (6GB + 6GB)*</h5>
            </div>
            <div>
              <h5 className='text-desktop/h5 text-[#FFFFFF] font-markot'>12 GB* (6GB + 6GB)*</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockBoundless;
