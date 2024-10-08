import React from 'react';
import { motion } from 'framer-motion';

const SmartAppliances = () => {
  return (
    <section className="py-8 px-5">
      <h2 className="text-4xl font-bold mb-6 ml-[50px]">
        Our Smart Appliances
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 max-w-[900px] mx-auto">

        {/* using framer motion not required */}
        {/* Home Care Card */}
        <motion.div
          className="relative bg-[#252525] p-3 rounded-lg border-2 border-transparent"
          whileHover={{ scale: 1.1, borderColor: '#9b59b6' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* can later add links using react router dom for full functionality */}
          <img 
            src="homeCare.png"
            className="w-full h-[450px] object-cover cursor-pointer"
            alt="Home Care"
          />
        </motion.div>

        {/* Personal Care Card */}
        <motion.div
          className="relative bg-[#252525] p-3 rounded-lg border-2 border-transparent"
          whileHover={{ scale: 1.1, borderColor: '#9b59b6' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img
            src="/personal.png"
            className="w-full h-[450px] object-cover cursor-pointer"
            alt="Personal Care"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SmartAppliances;
