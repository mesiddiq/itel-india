import { useRef, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const StandAloneImage = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
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

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }}
      className="h-full"
    >
      <img
        src="/smartphone/S24/standAloneImage.webp"
        alt="standAloneImage"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default StandAloneImage;