import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NextGenPerformance = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          console.log("NextGenPerformanceIf", entry.isIntersecting);
          video.currentTime = 0;
          video.play();
          
          const timer = setTimeout(() => {
            video.pause();
          }, 5500);
          setStartAnimation(true);

          // Cleanup the timer on component unmount
          return () => clearTimeout(timer);
        } else {
          console.log("NextGenPerformanceElse", entry.isIntersecting);
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
    <div ref={containerRef} className='flex relative w-full h-[400px] md:h-[900px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[url("/smartphone/color-pro-5g/NextGenPerformance/bg.png")] md:bg-none overflow-hidden'>
      <div className='content'>
        <video
          ref={videoRef}
          className='absolute top-[110px] md:top-0 md:left-0 md:w-full md:h-full object-cover transform scale-[1.5] md:scale-[1]'
          src='/smartphone/color-pro-5g/NextGenPerformance/video.mp4'
          loop={false}
          muted
        />
        {startAnimation && (
          <div className='flex flex-col relative items-center h-full z-[2] md:mt-[-45px]'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: .5, delay: 2.5 }}
              className='flex justify-center items-center'>
              <img src='/smartphone/color-pro-5g/NextGenPerformance/mediatek.png'  className='w-[75px] md:w-[150px] pr-2 md:pr-5' />
              <h6 className='text-[16px] md:text-[23px] font-[500] md:font-[400] text-[#FFFFFF] font-markot'><span className='md:font-[700]'>Dimensity</span> 6080 Octa Core</h6>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, delay: 2 }}
              className='text-mobile/h4 md:text-[60px] text-[#FFFFFF] md:leading-[72px] font-markot py-4'>Next-Gen Performance</motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, delay: 2.5 }}
              className='text-[12px] md:text-[20px] text-[#FFFFFF] leading-[18px] md:leading-[32px] font-markot'>Obliterates Lag | Blazing-fast Speed | Better Image Processing</motion.p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NextGenPerformance;
