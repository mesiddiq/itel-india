import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import FeatureSpecifications from '../../../common/smartphone_common/FeatureSpecifications';

const CameraSpecifications = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.25, // Trigger when 1/4th of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="font-markot relative lg:h-full h-[454px] bg-black overflow-hidden">
      {/* Image */}
      <motion.img
        initial={{ scale: 1.2 }}
        animate={inView ? { scale: 1 } : { scale: 1.2 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src="/smartphone/S24/s23Camera.png"
        alt="Camera Specifications"
        className="w-full"
      />

      {/* Camera Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
        className="flex flex-col justify-center items-center gap-4 lg:gap-[42px] text-white absolute bottom-16 md:bottom-8 lg:bottom-16 w-full"
      >
        <div className="content flex flex-col justify-center items-center gap-2 lg:gap-[14px]">
          <div className="text-mobile/h5/medium lg:text-desktop/h2 text-center">
            Capturing Clarity
            <br />
            <span className="bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
              108MP Ultra Clear Camera
            </span>
          </div>
          <div className="text-mobile/small/body lg:text-desktop/h5">
            Samsung HM6 ISOCELL Sensor
          </div>
        </div>

        <div className="flex flex-row gap-4 lg:gap-16 justify-between items-center">
          <FeatureSpecifications featureMetric="1.93 µm" featureMetricDescription="Fusion Pixel" />
          <div className="h-[37px] lg:h-[81px] border"></div>
          <FeatureSpecifications featureMetric="12000 * 9000" featureMetricDescription="Fusion Pixel" />
          <div className="h-[37px] lg:h-[81px] border"></div>
          <FeatureSpecifications featureMetric="f/1.6" featureMetricDescription="Large Aperture" />
        </div>
      </motion.div>
    </div>
  );
};

export default CameraSpecifications;
