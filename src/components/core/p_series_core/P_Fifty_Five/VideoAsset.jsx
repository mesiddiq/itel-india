/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Video1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the animation has triggered
        }
      },
      {
        threshold: 0.20, // 1/4th of the component's visibility
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={videoRef}
      initial={{ y: 300, scale: 0.8, opacity: 0 }}
      animate={isVisible ? { y: 0, scale: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="w-full"
    >
      <video autoPlay muted className="w-full">
        <source
          src="/videos/p55.webm"
          type="video/mp4"
        />
      </video>
    </motion.div>
  );
};

export default Video1;
