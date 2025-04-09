import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UnlockBoundless = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          // console.log("UnlockBoundlessIf", entry.isIntersecting);
          video.currentTime = 0;
          video.play();

          const timer = setTimeout(() => {
            video.pause();
          }, 5500);
          setStartAnimation(true);

          // Cleanup the timer on component unmount
          return () => clearTimeout(timer);
        } else {
          // console.log("UnlockBoundlessElse", entry.isIntersecting);
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
    <div ref={containerRef} className='flex relative w-full h-[500px] md:h-[800px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[url("/smartphone/color-pro-5g/UnlockBoundless/bg.png")] md:bg-none bg-cover bg-top bg-no-repeat overflow-hidden'>
      <div className='content'>
        <video
          ref={videoRef}
          className='absolute top-[230px] md:top-0 left-[-160px] md:left-0 md:w-full md:h-full object-cover transform scale-[2] md:scale-[1]'
          src='/smartphone/color-pro-5g/UnlockBoundless/video.mp4'
          loop={false}
          muted
        />
        {startAnimation && (
          <div className='flex flex-col md:justify-between relative h-full z-[2]'>
            <div className='grid grid-cols-2'>
              <div className='col-span-2 md:col-span-1'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5, delay: 1.5 }}
                  className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot md:pt-5'>Unlock Boundless Possibilities with Memory Fusion Technology</motion.h2>
              </div>
            </div>
            <div className='flex md:flex-col gap-4 pt-7'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .5, delay: 3 }}
              >
                <h3 className='text-mobile/h6 md:text-desktop/h3 text-[#FFFFFF] font-markot'>12 GB* (6GB + 6GB)*</h3>
                <h5 className='text-desktop/h7 md:text-[22px] text-[#FFFFFF] font-markot pt-2'>RAM</h5>
                <p className='text-mobile/small/body md:text-[16px] text-[#FFFFFF] font-[400] font-markot pt-2'>*Using memory fusion Technology</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .5, delay: 3 }}
                className='md:hidden'
              >
                <img src='/smartphone/color-pro-5g/PowerThrough/line.png' className='h-[75px]' />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .5, delay: 4 }}
              >
                <h3 className='text-mobile/h6 md:text-desktop/h3 text-[#FFFFFF] font-markot md:pt-7'>128GB</h3>
                <h5 className='text-desktop/h7 md:text-[22px] text-[#FFFFFF] font-markot pt-2'>ROM</h5>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, delay: 4.5 }}
              className='text-end hidden lg:block'>
              Also available in 4GB/6GB Variant
            </motion.div>
          </div>
        )}
      </div>

    </div>
  );
};

export default UnlockBoundless;
