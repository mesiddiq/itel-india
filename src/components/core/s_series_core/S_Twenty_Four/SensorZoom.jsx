import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ZoomRectangle from './ZoomRectangle';

const SensorZoom = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Set up Intersection Observer
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
        threshold: 0.25, // Trigger when 1/4th of the section is visible
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
    <section
      ref={sectionRef}
      className="font-markot lg:h-full lg:w-full bg-[#1c1b1b] px-4 py-9 lg:px-[230px] lg:py-[125px]"
    >
      {/* Laptop Design */}
      <div className="content hidden lg:flex flex-row justify-between lg:gap-4 xl:gap-2 h-[704px] ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="w-[45%] flex flex-col justify-between items-start overflow-hidden"
        >
          {/* Text Part */}
          <div className="flex flex-col items-start gap-6 lg:pb-6 max-w-[407px]">
            <h1 className="text-desktop/h2 text-white">
              3X In-sensor{' '}
              <span className="bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
                Zoom
              </span>
            </h1>
            <p className="text-desktop/body/large text-grey/grey/2 ">
              With the 3X In-sensor Zoom, you can capture distant subjects with
              improved composition and quality.
            </p>
          </div>
          {/* Images Part */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="w-[374px] h-[500px] overflow-hidden relative"
          >
            <div className="absolute bottom-3 left-3 z-10">
              <ZoomRectangle active="1X" />
            </div>
            <img
              src="/smartphone/S24/threeXzoomImage.png"
              alt="	3X In-sensor Zoom"
              className="z-0 scale-[300%] translate-y-1/2"
            />
          </motion.div>
        </motion.div>

        {/* Images Part */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          className="w-[55%] overflow-hidden relative"
        >
          <div className="absolute bottom-3 left-3 z-10">
            <ZoomRectangle active="3X" />
          </div>
          <img
            src="/smartphone/S24/threeXzoomImage.png"
            alt="	3X In-sensor Zoom"
            className="z-0 scale-[430%] translate-y-full "
          />
        </motion.div>
      </div>


      {/* Mobile Design */}
      <div className="content font-markot lg:hidden flex flex-col items-center gap-5 h-[400px]">
        {/* Text Part */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 max-w-[328px]"
        >
          <h1 className="text-mobile/h4 text-white">
            3X In-sensor{' '}
            <span className="bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
              Zoom
            </span>
          </h1>
          <p className="text-mobile/body/2 text-grey/grey/1 text-center">
            With the 3X In-sensor Zoom, you can capture distant subjects with
            improved composition and quality.
          </p>
        </motion.div>

        {/* Images Part */}
        <div className="flex flex-row gap-5 justify-between h-full">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="w-[45%] h-full overflow-hidden relative flex flex-col justify-end items-end"
          >
            <div className="absolute bottom-3 left-3 z-10">
              <ZoomRectangle active="1X" />
            </div>
            <div className="h-[80%] relative w-full overflow-hidden">
              <img
                src="/smartphone/S24/threeXzoomImage.png"
                alt="	3X In-sensor Zoom"
                className="absolute z-0 scale-[330%] xs:scale-[300%] sm:-top-20 translate-y-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="w-[65%] h-full overflow-hidden relative"
          >
            <div className="absolute bottom-3 left-3 z-10">
              <ZoomRectangle active="3X" />
            </div>
            <img
              src="/smartphone/S24/threeXzoomImage.png"
              alt="	3X In-sensor Zoom"
              className="z-0 scale-[400%] translate-y-2/3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SensorZoom;
