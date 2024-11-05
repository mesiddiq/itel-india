import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltraSmooth = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [ultraSmoothVideoSrc, setUltraSmoothVideoSrc] = useState(false);

  useEffect(() => {
    if (screen.width > 1000) {
      setUltraSmoothVideoSrc("/smartphone/color-pro-5g/UltraSmooth/video.mp4");
    } else {
      setUltraSmoothVideoSrc("/smartphone/color-pro-5g/UltraSmooth/videoMobile.mp4");
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          console.log("UltraSmoothIf", entry.isIntersecting);
          video.currentTime = 0;
          video.play();
          
          const timer = setTimeout(() => {
            video.pause();
          }, 2500);
          setStartAnimation(true);

          // Cleanup the timer on component unmount
          return () => clearTimeout(timer);
        } else {
          console.log("UltraSmoothElse", entry.isIntersecting);
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
    <>
    <div ref={containerRef} className='flex w-full md:items-center h-[600px] md:h-[860px] px-0 md:px-[80px] py-0 md:py-[120px] bg-[#0B0021] overflow-hidden'>
      <div className='content relative h-full'>
        <video
          ref={videoRef}
          className='absolute w-auto object-cover'
          src={ultraSmoothVideoSrc}
          loop={false}
          muted
        />
        <div className='flex flex-col md:justify-center relative h-full z-[2] p-8'>
          {startAnimation && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <h2 className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot md:pl-5 md:w-[40%]'>Ultra-Smooth<br />6.6" HD+ Display</h2>
              <p className='text-mobile/body/2 md:text-desktop/body/large text-[#FFFFFF] font-markot md:pl-5 pt-5 md:w-[38%]'>Experience stunning visuals on the 6.6-inch HD+ display, featuring a 90Hz refresh rate that reduces visual fatigue and ensures smoother, faster response times.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default UltraSmooth;
