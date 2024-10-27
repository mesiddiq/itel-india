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
          console.log("PowerThroughIf", entry.isIntersecting);
          video.currentTime = 0;
          video.play();
          
          const timer = setTimeout(() => {
            video.pause();
          }, 5000);
          setStartAnimation(true);

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
      <div className='content'>
        <video
          ref={videoRef}
          className='absolute top-[110px] md:top-0 md:left-0 md:w-full md:h-full object-cover transform scale-[1.5] md:scale-[1]'
          src='/smartphone/color-pro-5g/PowerThrough/video.mp4'
          loop={false}
          muted
        />
        <div className='flex flex-col md:justify-center relative h-full z-[2] pt-5'>
          {startAnimation && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 5 }}
            >
              <h2 className='text-mobile/h3 md:text-desktop/h2 text-[#FFFFFF] font-markot md:pt-20 md:w-[50%]'>Power Through Your Day with the Monumental Battery</h2>
              <div className='grid grid-cols-[35%_10%_55%] md:w-[60%] items-center md:pt-20'>
                <div className='col-span-1 flex flex-col'>
                  <h3 className='text-mobile/h5/medium md:text-desktop/h3 text-[#FFFFFF] font-markot'>5000mAh</h3>
                  <p className='text-mobile/body/large md:text-desktop/body/1 text-[#FFFFFF] font-markot pt-0'>High-Endurance Battery</p>
                </div>
                <div className='col-span-1 flex justify-center'>
                  <img src='/smartphone/color-pro-5g/PowerThrough/line.png' />
                </div>
                <div className='col-span-1 flex flex-col'>
                  <h3 className='text-mobile/h5/medium md:text-desktop/h3 text-[#FFFFFF] font-markot'>18W</h3>
                  <p className='hidden md:block text-mobile/body/large md:text-desktop/body/1 text-[#FFFFFF] font-markot pt-0'>Type-C Fast Charging</p>
                  <p className='md:hidden text-mobile/body/large md:text-desktop/body/1 text-[#FFFFFF] font-markot pt-0'>Type-C<br />Charging</p>
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
