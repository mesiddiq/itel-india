import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ProductDescription = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Animation for each image
  const imageAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  // Animation for the text elements
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  // Using Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing once visible
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div ref={ref} className="font-markot h-full w-full flex flex-col gap-6 lg:gap-[100px] px-4 py-10 lg:px-0 lg:py-[100px] bg-[#1C1B1B]">
      
      <div className="content md:content flex flex-col lg:flex-row justify-between gap-3 lg:gap-0">
        <motion.h1
          className="w-full lg:w-[40%] text-mobile/h4 lg:text-desktop/h2 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          Your Ideal Storyteller: Stunning 108MP AI Camera
        </motion.h1>

        <motion.h2
          className="w-full lg:w-1/2 text-desktop/body/1 text-grey/grey/2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          Capture stories with the all-new itel S24. Packed with a stunning 108MP ultra clear AI camera, bring your pictures to life. Experience blazing-fast speed with 8GB RAM, expandable up to 16GB* with memory fusion and 128GB ROM smartphone. With a 5000 mAh battery and 18W fast charging, always stay on top of your game. Get a super smooth and responsive experience with a 90Hz refresh rate on the 6.6-inch HD+ punch-hole display smartphone.
        </motion.h2>
      </div>

      <div className="content md:content flex flex-col lg:flex-row gap-4 lg:gap-12 w-full lg:min-h-[320px]">
        {/* First Content Div */}
        <motion.div
          className="w-full lg:w-1/3 h-[227px] lg:h-auto p-4 lg:p-10 border border-white/20 rounded-2xl flex flex-col gap-2 lg:gap-6"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.img
            src='/smartphone/S24/s24OverviewLogo1-instagram.svg'
            alt=''
            className="w-[48px] lg:w-[52px]"
            variants={imageAnimation} // Apply image animation
          />
          <div className="flex flex-col gap-2 w-full">
            <motion.span
              className="text-mobile/h5/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textAnimation} // Apply title animation
            >
              Picture-Perfect Moments:<br />108 MP AI Rear Camera
            </motion.span>
            <motion.span
              className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textAnimation} // Apply description animation
            >
              Say goodbye to blurry memories and
              hello to crystal-clear shots with the
              Samsung HM6 ISOCELL Sensor.
            </motion.span>
          </div>
        </motion.div>

        {/* Second Content Div */}
        <motion.div
          className="w-full lg:w-1/3 h-[227px] lg:h-auto p-4 lg:p-10 border border-white/20 rounded-2xl flex flex-col gap-2 lg:gap-6"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.img
            src='/smartphone/S24/s24OverviewLogo2-cpu-charge.svg'
            alt=''
            className="w-[48px] lg:w-[52px]"
            variants={imageAnimation} // Apply image animation
          />
          <div className="flex flex-col gap-2 w-full">
            <motion.span
              className="text-mobile/h5/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textAnimation} // Apply title animation
            >
              MediaTek Helio G91: Unmatched Speed
            </motion.span>
            <motion.span
              className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textAnimation} // Apply description animation
            >
                Experience ultra-fast gaming & multi-tasking like never before with the Helio G91 processor.
            </motion.span>
          </div>
        </motion.div>

        {/* Third Content Div */}
        <motion.div
          className="w-full lg:w-1/3 h-[227px] lg:h-auto p-4 lg:p-10 border border-white/20 rounded-2xl flex flex-col gap-2 lg:gap-6"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.img
            src='/smartphone/S24/s24OverviewLogo3-slider.svg'
            alt=''
            className="w-[48px] lg:w-[52px]"
            variants={imageAnimation} // Apply image animation
          />
          <div className="flex flex-col gap-2 w-full">
            <motion.span
              className="text-mobile/h5/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textAnimation} // Apply title animation
            >
              6.6&quot; HD+ Punch Hole Display with 90 Hz Refresh Rate
            </motion.span>
            <motion.span
              className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textAnimation} // Apply description animation
            >
              Dive into a world of vibrant visuals with
              a 90 Hz refresh rate, every swipe and
              scroll feels buttery-smooth.
            </motion.span>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default ProductDescription;
