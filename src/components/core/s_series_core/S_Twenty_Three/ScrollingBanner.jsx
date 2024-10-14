import React from 'react';

const ScrollingBanner = () => {
  return (
    <div className="bg-black text-[#C6C4E4] flex overflow-hidden items-center p-4">
      {/* Outer flex container to hold all repeated elements */}
      <div className="flex space-x-4 animate-scroll whitespace-nowrap">
        {['SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER'].map((text, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Text */}
            <span className="text-xl uppercase text-purple-200 text-[24px] font-extrabold leading-[24px] tracking-[0.08em]">{text}</span>
            {/* Icon with rounded background */}
            <div className="rounded-full bg-gray-800 opacity-90  w-16 h-8 flex items-center justify-center">
              <img src="/smartphone/S_Twenty_Three/Vector.webp" alt="star" className="w-4 h-4 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
