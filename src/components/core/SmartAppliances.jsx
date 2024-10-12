import React from 'react';
import { motion } from 'framer-motion';

const SmartAppliances = () => {
  return (
    <section className="py-8 px-5">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Our Smart Appliances
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 max-w-[900px] mx-auto">
        
        {/* Home Care Card */}
        <motion.div
          className="relative bg-[#252525] p-3 rounded-lg border-2 border-transparent"
          whileHover={{ scale: 1.1, borderColor: '#9b59b6' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img 
            src="vc.gif"
            className="w-full h-[500px] object-cover cursor-pointer" // Increased height
            alt="Home Care"
          />
          <div className="absolute top-0 left-0 p-4 text-white text-xl font-bold ml-3">
            Home Care
          </div>
        </motion.div>

        {/* Personal Care Card */}
        <motion.div
          className="relative bg-[#252525] p-3 rounded-lg border-2 border-transparent"
          whileHover={{ scale: 1.1, borderColor: '#9b59b6' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img
            src="/Trimmer.gif"
            className="w-full h-[500px] object-cover cursor-pointer" // Increased height do change according to need
            alt="Personal Care"
          />
          <div className="absolute top-0 left-0 p-4 text-white text-xl font-bold ml-3">
            Personal Care
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartAppliances;
