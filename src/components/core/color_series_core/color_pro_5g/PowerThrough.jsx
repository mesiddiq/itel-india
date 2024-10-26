import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const PowerThrough = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          setStartAnimation(true);
          video.currentTime = 0;
          video.play();
          
          const timer = setTimeout(() => {
            video.pause();
          }, 5500);

          // Cleanup the timer on component unmount
          return () => clearTimeout(timer);
        } else {
          console.log("PowerThroughElse", entry.isIntersecting);
          video.pause();
          setStartAnimation(false);
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
    <div ref={containerRef} className='flex relative w-full h-[650px] md:h-[900px] 2xl:h-[1100px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#0B0518] md:bg-none overflow-hidden'>
      <video
        ref={videoRef}
        className='block md:hidden absolute bottom-[55px] right-[90px] w-auto object-cover transform scale-[1.7]'
        src='/smartphone/color-pro-5g/PowerThrough/video.mp4'
        loop={false}
        muted
      />
      <div className='content'>
        <video
          ref={videoRef}
          className='hidden md:block absolute top-0 left-0 w-full h-full object-cover'
          src='/smartphone/color-pro-5g/PowerThrough/video.mp4'
          loop={false}
          muted
        />
        <div className='flex flex-col justify-center relative h-full z-[2] pt-5'>
          {startAnimation && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 5 }}
            >
              <h2 className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot p-5 pt-20 md:w-[50%]'>Power Through Your Day with the Monumental Battery</h2>
              <div className='grid grid-cols-[35%_10%_55%] md:w-[60%] items-center'>
                <div className='col-span-1 flex flex-col'>
                  <h3 className='text-mobile/h4 md:text-desktop/h3 text-[#FFFFFF] font-markot p-5'>5000mAh</h3>
                  <p className='text-mobile/h4 md:text-desktop/body/1 text-[#FFFFFF] font-markot p-5 pt-0'>High-Endurance Battery</p>
                </div>
                <div className='col-span-1 flex justify-center'>
                  <img src='/smartphone/color-pro-5g/PowerThrough/line.png' />
                </div>
                <div className='col-span-1 flex flex-col'>
                  <h3 className='text-mobile/h4 md:text-desktop/h3 text-[#FFFFFF] font-markot p-5'>18W</h3>
                  <p className='text-mobile/h4 md:text-desktop/body/1 text-[#FFFFFF] font-markot p-5 pt-0'>Type-C Fast Charging</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PowerThrough;
