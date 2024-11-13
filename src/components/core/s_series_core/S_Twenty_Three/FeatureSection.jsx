// import React from 'react';
// const features = [
//   {
//     icon: "/smartphone/S_Twenty_Three/instagram.webp",
//     title: "Snap Magic: itel S23's 50MP Wonder!",
//     description: "Say cheese and let the memories unfold in vibrant colours and sharpness with the itel S23's 50MP AI dual rear camera."
//   },
//   {
//     icon: "/smartphone/S_Twenty_Three/cpu-charge.webp",
//     title: "Boost Performance: 16GB* (8GB + 8GB*) RAM with Memory Fusion",
//     description: "Enjoy faster app performance and smoother operations for all your needs powered by Memory Fusion Technology."
//   },
//   {
//     icon: "/smartphone/S_Twenty_Three/slider.webp",
//     title: "Magic Hue: Colour Change Tech",
//     description: "Witness the magic of colour changing seamlessly in sunlight with photochromic technology for a unique visual delight."
//   }
// ];

// return (
//   <section className="flex bg-black opacity-90  overflow-hidden z-0 flex-col justify-center px-5 md:px-0 pt-[40px] md:pt-40 pb-32 max-w-full max-md:py-24 ">

//     <div className="flex flex-col md:px-10 lg:px-0 justify-center w-full max-md:max-w-full content">
//       <div className="flex flex-wrap justify-between items-start w-full max-md:max-w-full max-md:flex-col">
//         <h2 className="flex flex-col flex-1 shrink text-5xl font-medium tracking-tighter basis-0 leading-[58px] min-w-[240px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] md:gap-[24px]">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-s23/from to-s23/to md:max-w-[90%] max-md:text-mobile/h4  text-desktop/h2  mt-6 font-markot">
//             Flaunt your Style: Photochromic Colour Change Technology
//           </span>
//         </h2>
//         <p className="text-desktop/body/2/regular md:text-desktop/body/1 text-zinc-300 w-[630px] max-md:w-full mt-6">
//           Meet the itel S23 - Capture every moment with its 50MP AI Dual Rear Camera and enjoy seamless multitasking with 8GB RAM, expandable up to 16GB* with Memory Fusion Technology. Flaunt the colour-changing back panel and stay entertained with the 6.6" HD+ Display for an immersive experience. With a 5000 mAh battery and Type-C charger, this slim, sleek phone has it all. Discover the ultimate blend of style and performance with itel S23.
//         </p>
//       </div>
//       <div className="flex flex-wrap gap-10 items-start mt-32 w-full max-md:mt-10 flex-col md:flex-row ">
//         {features.map((feature, index) => (
//           <div key={index} className="flex flex-col shrink px-10 py-8 lg:py-12 rounded-2xl basis-0 min-h-[316px] min-w-[240px] max-md:px-5 max-md:w-full border-2 border-gray-200 border-opacity-10 h-[356px]">
//             <img loading="lazy" src={feature.icon} alt="arrow icon" className="object-contain aspect-square w-[52px]" />
//             <div className="flex flex-col mt-6 w-full">

//               function FeatureSection() {
//                 <h3 className="text-mobile/h5 md:text-desktop/h4  text-white">{feature.title}</h3>
//                 <p className="mt-2 text-desktop/body/2/regular md:text-desktop/body/1 text-zinc-300">{feature.description}</p>
//               </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );


// export default FeatureSection;


import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


import React from 'react';
const features = [
  {
    icon: "/smartphone/S_Twenty_Three/instagram.webp",
    title: "Snap Magic: itel S23's 50MP Wonder!",
    description: "Say cheese and let the memories unfold in vibrant colours and sharpness with the itel S23's 50MP AI dual rear camera."
  },
  {
    icon: "/smartphone/S_Twenty_Three/cpu-charge.webp",
    title: "Boost Performance: 16GB* (8GB + 8GB*) RAM with Memory Fusion",
    description: "Enjoy faster app performance and smoother operations for all your needs powered by Memory Fusion Technology."
  },
  {
    icon: "/smartphone/S_Twenty_Three/slider.webp",
    title: "Magic Hue: Colour Change Tech",
    description: "Witness the magic of colour changing seamlessly in sunlight with photochromic technology for a unique visual delight."
  }
];


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
          className="w-full lg:w-[40%] text-mobile/h4 lg:text-desktop/h2 bg-gradient-to-r from-s23/from to-s23/to bg-clip-text text-transparent"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          Flaunt your Style: Photochromic Colour Change Technology
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
          Meet the itel S23 - Capture every moment with its 50MP AI Dual Rear Camera and enjoy seamless multitasking with 8GB RAM, expandable up to 16GB* with Memory Fusion Technology. Flaunt the colour-changing back panel and stay entertained with the 6.6" HD+ Display for an immersive experience. With a 5000 mAh battery and Type-C charger, this slim, sleek phone has it all. Discover the ultimate blend of style and performance with itel S23.
        </motion.h2>
      </div>

      <div className="content md:content flex flex-col lg:flex-row gap-4 lg:gap-12 w-full lg:min-h-[320px]">
        {/* First Content Div */}

        {
          features.map(({ icon, title, description }) => (
            <motion.div
              className="w-full lg:w-1/3 h-[227px] lg:h-auto p-4 lg:p-10 border border-white/20 rounded-2xl flex flex-col gap-2 lg:gap-6"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.img
                src={icon}
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
                  {title}
                </motion.span>
                <motion.span
                  className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={textAnimation} // Apply description animation
                >
                  {description}
                </motion.span>
              </div>
            </motion.div>
          ))
        }
      </div>

    </div>
  );
};

export default ProductDescription;

