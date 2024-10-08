import React from "react";
import { motion } from "framer-motion";

const MovingRingComponent = () => {
  return (
    <div
      className="h-screen bg-black bg-[url('https://s.wsj.net/public/resources/images/NY-AS171_RED2_G_20110107205319.jpg')] bg-cover bg-center flex items-center justify-between px-10"
    >

      <div className="w-1/2 text-white space-y-4">
        <h1 className="text-5xl font-bold">
          Discover the Next-Gen Feature Phones with itel
        </h1>
        <p className="text-lg">
          itel's feature phones blend classic simplicity with modern style.
        </p>
      </div>
      <div className="relative w-1/4">
        <img
          src="https://png.pngtree.com/png-clipart/20240323/original/pngtree-keypad-mode-cell-phone-png-image_14664813.png"
          alt="Mobile Phone"
          className="relative z-20 w-full"
        />


        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <img
            src="https://img1.picmix.com/output/stamp/normal/0/9/3/8/1698390_3105a.gif"
            alt="Rotating Ring"
            className="absolute inset-0 w-[150%] h-[150%] z-10 object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MovingRingComponent;
