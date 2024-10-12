import React from 'react';

function HDRSection() {
  return (
    <section className="flex overflow-hidden z-0 flex-col justify-center items-center px-20 py-16 max-w-full bg-fuchsia-400 w-[1440px] max-md:px-5">
      <div className="flex flex-col w-full max-w-[1065px] max-md:max-w-full">
        <div className="flex flex-col items-center font-medium text-center max-md:max-w-full">
          <h2 className="text-5xl tracking-tighter bg-clip-text bg-[linear-gradient(98deg,#DACFF9_0%,#5C5C7E_146.29%)] leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            HDR 4.0 Enhanced Detailed Captures!
          </h2>
          <p className="mt-4 text-xl tracking-normal leading-7 text-zinc-100 w-[692px] max-md:max-w-full">
            Capture every detail with HDR 4.0 for stunning, lifelike images. Experience enhanced clarity and vibrant colors in your photos.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-12 mr-8 w-full max-w-[1032px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          {/* No HDR Section */}
          <div className="relative flex flex-col items-center bg-white bg-opacity-0 max-md:max-w-full">
            <div className="absolute inset-0 bg-gray-500 opacity-60"></div>
            <img
              src="/SmartPhone/S_Twenty_Three/Hdrleft.webp" 
              alt="No HDR"
              className="object-cover w-full h-[500px] relative z-10"
            />
            <div className="absolute bottom-4 left-4 px-4 py-2 bg-white bg-opacity-20 text-base font-medium tracking-wide leading-tight text-white uppercase">
              No HDR
            </div>
          </div>

          {/* With HDR Section */}
          <div className="relative flex flex-col items-center bg-white bg-opacity-0 max-md:max-w-full">
            <img
              src="/SmartPhone/S_Twenty_Three/HdrRight.webp" 
              alt="With HDR"
              className="object-cover w-full h-[500px] relative z-10"
            />
            <div className="absolute bottom-4 left-4 px-4 py-2 bg-white bg-opacity-20 text-base font-medium tracking-wide leading-tight text-white uppercase">
              With HDR 4.0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HDRSection;
