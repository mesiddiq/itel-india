import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import FeatureSpecifications from '../../../common/smartphone_common/FeatureSpecifications';

const PunchHoleDisplay = () => {
    const sectionRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                }
            },
            {
                threshold: 0.25, // Trigger when the section is 1/4th into view
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
    }, [controls]);

    const imageVariants = {
        hidden: { scale: 1.2 },
        visible: {
            scale: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    const textVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5, // Delay to make sure it comes after the image animation
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div ref={sectionRef} className="flex flex-col relative font-markot lg:h-[1000px] h-[400px] bg-black overflow-hidden">
            <motion.img
                src="/smartphone/S24/s24_display.png"
                alt="Camera Specifications"
                className="w-full"
                initial="hidden"
                animate={controls}
                variants={imageVariants}
            />

            <motion.div
                className="flex flex-col justify-center items-center gap-4 lg:gap-[42px] text-white absolute bottom-8 lg:top-[600px] text-center lg:text-left w-full  lg:left-0 transform -translate-x-1/4"
                initial="hidden"
                animate={controls}
                variants={textVariants}
            >
                <div className="w-[328px] lg:w-full flex flex-col justify-center items-center gap-2 lg:gap-4">
                    <div className="content text-mobile/h5/medium lg:text-desktop/h2 text-center">
                        Seamless Sliding<br />
                        <span className="bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
                            90Hz Punch-Hole Display
                        </span>
                    </div>
                    <div className="text-mobile/small/body lg:text-desktop/body/large text-center">
                        <span className="block lg:hidden">
                            Dive into an effortlessly smooth touch experience<br />every time with the 6.6” HD+ punch-hole display<br />phone featuring a 90Hz refresh rate.
                        </span>
                        <span className="hidden lg:block">
                            Dive into an effortlessly smooth touch experience every time with the<br />6.6” HD+ punch-hole display phone featuring a 90Hz refresh rate.
                        </span>
                    </div>
                </div>

                <div className="flex flex-row gap-4 lg:gap-16 justify-between items-center">
                    <FeatureSpecifications featureMetric="1612*720" featureMetricDescription="HD+ Resolution" />
                    <div className="h-[37px] lg:h-[81px] border"></div>
                    <FeatureSpecifications featureMetric="480 nits" featureMetricDescription="Peak Brightness" />
                </div>
            </motion.div>
        </div>
    );
};

export default PunchHoleDisplay;