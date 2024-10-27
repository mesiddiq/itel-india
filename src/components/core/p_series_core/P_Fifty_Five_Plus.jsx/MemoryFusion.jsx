import React from 'react';

const MemoryFusion = () => {
  return (
    <>
      {/* Desktop View */}
      <div className='hidden lg:block h-[813px] w-full bg-[#B3D98E]'>
      <div
        className=" hidden lg:block h-[813px] w-full bg-white px-12 content"
        style={{
          WebkitMaskImage: "url('/smartphone/P55plus/shape.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          backgroundImage: "url('/smartphone/P55plus/storage.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "white" 
        }}
      >
        <div className="content h-full">
          <div className="relative content font-markot h-full w-full flex flex-col justify-center items-start">
            <div className="absolute left-[80px] flex flex-col gap-[9px] z-10">
              <h1 className="text-desktop/h3 text-[#B3D98E] max-w-[393px]">
              8GB RAM, expandable up to 16GB* with Memory Fusion
              </h1>
              <h1 className="text-base font-normal leading-[22.72px] text-left max-w-[450px]">
              Level up your device with 8GB RAM & an extra virtual memory, expandable up to 16GB* with Memory Fusion. Say goodbye to lag and hello to seamless app switching.
              </h1>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Mobile View */}
      <div className=' w-full bg-[#B3D98E] min-h-[663px] block  py-[60px] lg:hidden'>
      <div className=" relative overflow-hidden h-screen w-full">
        {/* Wrapper for Mask Rotation */}
        <div
          style={{
            WebkitMaskImage: "url('/smartphone/P55plus/shape.svg')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            backgroundImage: "url('/smartphone/P55plus/storage.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "rotate(90deg)", // Rotate the mask only
          }}
          className="absolute inset-0 w-full h-full z-0" // Ensures it stays in the background
        />
        <div className="content h-full relative z-10">
          <div className="relative font-markot h-full w-full flex flex-col justify-center items-center">
            {/* Unrotated Content */}
            <div className="pt-[60px] flex flex-col gap-[9px] text-center z-10">
              <h1 className="text-mobile/h4 text-[#D4DDF0] max-w-[256px]">
              8GB RAM, expandable up to 16GB* with Memory Fusion
              </h1>
              <h1 className="text-mobile/body/2 max-w-[240px]">
              Level up your device with 8GB RAM & an extra virtual memory, expandable up to 16GB* with Memory Fusion. Say goodbye to lag and hello to seamless app switching.
              </h1>
            </div>
          </div>
        </div>
      </div></div>
    </>
  );
};

export default MemoryFusion;
