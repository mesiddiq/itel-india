import React from "react";
import { motion } from "framer-motion";

const TvAnimationLoop = () => {
  return (
    <div className=" flex justify-center items-center">
      <motion.div
        className="relative w-screen h-auto border-8 border-black rounded-lg overflow-hidden"
        animate={{ scaleX: [1, 0.5, 0.5, 1], scaleY: [1, 0.5, 0.5, 1] }} // Image scaling animation
        transition={{ 
          duration: 8, 
          ease: "easeInOut", 
          times: [0, 0.4, 0.6, 1], // Hold at the minimum size between 40% to 60%
          repeat: Infinity, 
          repeatType: "reverse"
        }}
      >
        <img
          src="https://i.pinimg.com/originals/72/80/87/7280877c093eb2f01cf0fef1a9b51075.gif" // Replace with the actual URL of your TV image
          alt="TV"
          className="w-full h-full object-cover" // Ensure full width and height responsiveness
        />

        <motion.h1
          className="absolute inset-0 flex justify-center items-center text-9xl text-white font-bold"
          animate={{
            opacity: [1, 0, 0, 1], // Opacity: full -> hidden during small -> visible
            scale: [1, 0.5, 0.5, 1], // Scale down with the image and back up
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1], // Hold opacity and scale with the image
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Endless Entertainment Awaits
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default TvAnimationLoop;
