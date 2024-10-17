import React from 'react';

const ScrollingBanner = () => {
  const scrollDuration = 50;

  return (
    <div
      className="content bg-black text-[#C6C4E4] flex overflow-hidden items-center p-4"
      style={{ whiteSpace: 'nowrap' }}
    >
      <div
        className="flex"
        style={{
          display: 'flex',
          animation: `scroll ${scrollDuration}s linear infinite`,
          whiteSpace: 'nowrap',
        }}
      >
        {['SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER'].map(
          (text, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-xl uppercase text-purple-200 text-[24px] font-extrabold leading-[24px] tracking-[0.08em] ml-4 font-bricolage">
                {text}
              </span>
              <div className="rounded-full bg-gray-800 opacity-90 w-16 h-8 flex items-center justify-center">
                <img src="/smartphone/S_Twenty_Three/Vector.webp" alt="star" className="w-4 h-4 " />
              </div>
            </div>
          )
        )}
        {['SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER', 'SUPER SERIES', 'INCREDIBLY SUPER'].map(
          (text, index) => (
            <div key={index + 6} className="flex items-center space-x-4">
              <span className="text-xl uppercase text-purple-200 text-[24px] font-extrabold leading-[24px] tracking-[0.08em] ml-4 font-bricolage">
                {text}
              </span>
              <div className="rounded-full bg-gray-800 opacity-90 w-16 h-8 flex items-center justify-center">
                <img src="/smartphone/S_Twenty_Three/Vector.webp" alt="star" className="w-4 h-4 " />
              </div>
            </div>
          )
        )}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollingBanner;
