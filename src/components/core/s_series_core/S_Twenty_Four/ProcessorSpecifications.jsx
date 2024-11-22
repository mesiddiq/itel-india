import { useRef, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import FeatureSpecifications from '../../../common/smartphone_common/FeatureSpecifications';

const CameraSpecifications = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative font-markot lg:h-[1020px] h-[454px] bg-black overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }}
    >
      {/* Background */}
      <img
        src="/smartphone/S24/processor-background.png"
        alt="Processor Background"
        className="absolute bottom-0 w-full"
      />

      {/* Processor Image */}
      <img
        src="/smartphone/S24/processor.png"
        alt="Processor Image"
        className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] absolute top-[65%] sm:top-[65%] md:top-[70%] lg:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Processor Specifications */}
      <motion.div
        className="flex flex-col justify-center items-center gap-4 lg:gap-[42px] text-white absolute top-[40px] lg:top-[90px] w-full "
        initial={{ y: -100 }}
        animate={controls}
        variants={{
          visible: {  y:0, transition: { staggerChildren: 0.3, delayChildren: 1 } },
          hidden: { },
        }}
      >
        <motion.div className="content flex flex-col justify-center items-center gap-2 lg:gap-[14px]">
          <motion.div
            className="text-mobile/h5/medium lg:text-desktop/h2 text-center"
            variants={{
              visible: { y: 0, transition: { duration: 0.6 } },
              hidden: { y: -100 },
            }}
          >
            Game Like a Pro<br />
            <span className="bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
              Helio G91 Processor
            </span>
          </motion.div>
          <motion.div
            className="text-mobile/small/body lg:text-desktop/body/large text-center"
            variants={{
              visible: { transition: { duration: 0.6 } },
              hidden: { },
            }}
          >
            Play your favourite games like pro with lightning-fast responsiveness.
          </motion.div>
        </motion.div>

        <motion.div
          className="content w-[350px] lg:w-[779px] lg:max-w-[779px] lg:text-nowrap text-center lg:text-left flex flex-row gap-4 lg:gap-12 justify-between items-center"
          variants={{
            visible: {  y: 0, transition: { duration: 0.8 } },
            hidden: { y: -100 },
          }}
        >
          <FeatureSpecifications
            featureMetric="12nm"
            featureMetricDescription="TSMC High-efficiency Process"
          />
          <div className="h-[56px] lg:h-[107px] border"></div>
          <FeatureSpecifications
            featureMetric="Upto 2.0GHz"
            featureMetricDescription="Octa-core CPU"
          />
          <div className="h-[56px] lg:h-[107px] border"></div>
          <FeatureSpecifications
            featureMetric="260000+"
            featureMetricDescription="AnTuTu Score"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CameraSpecifications;