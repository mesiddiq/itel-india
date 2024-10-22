import React from 'react';

const SuperCharge = () => {
  return (
    <>
   
      {/* Mobile View */}
      <div className="w-full h-[750px] bg-white md:hidden"> {/* Hide on desktop */}
  <div className="relative w-full h-full overflow-hidden">
    {/* Background Image (Rotated) */}
    <div
      className={`
        absolute top-0 left-0 h-full w-full   {/* Swap width and height */}
        bg-[url('/SmartPhone/P55plus/storagem.png')] 
        bg-cover bg-center bg-no-repeat
     
      `}
    ></div>

          {/* Content (Unrotated) */}
          <div className="relative z-10 text-white flex flex-col justify-center items-center gap-[12px]  md:gap-[56px] text-center rounded-[16px] pt-8">
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-medium text-mobile/h4 mb-4 text-[#B3D98E]">
                Beast Mode <br />
                Octa-Core Processor
              </h1>
              <p className="text-desktop/button">Unisoc T606 (12nm)</p>
            </div>
            <p className="text-[16px] mb-6">
              Experience enhanced speed and reliability with the advanced<br /> 
              capabilities of the UNISOC T606 processor.
            </p>

            <div className="flex gap-[12px] font-markot opacity-[50%]">
              <span className="text-[16px]">Powered by</span>
              <img src="/SmartPhone/P55plus/name.png" alt="Powered by" />
            </div>
          </div>
        </div>
      </div>
      {/* Desktop View */}
      <div className="hidden md:block w-full h-[720px] bg-white"> {/* Hide on mobile */}
        <div
          className={`
            flex flex-col items-end justify-center w-full
            bg-cover overflow-hidden h-full
            bg-[url('/SmartPhone/P55plus/beastmode.png')]  {/* Desktop Background */}
            bg-center bg-no-repeat
          `}
        >
          <div className="content flex flex-row md:flex-col justify-center gap-[56px] items-end rounded-[16px]">
            <div
              className="flex flex-col justify-between md:gap-[48px] text-left pt-8"
              data-aos="fade-left"
            >
              <div className="flex flex-col gap-[12px]">
                <h1 className="font-medium text-desktop/h2 mb-4 text-[#B3D98E]">
                  Beast Mode <br />
                  Octa-Core Processor
                </h1>
                <p className="text-desktop/button">Unisoc T606 (12nm)</p>
              </div>
              <p className="text-[16px] mb-6">
                Experience enhanced speed and reliability with the advanced<br />
                capabilities of the UNISOC T606 processor.
              </p>

              <div className="flex gap-[12px] font-markot opacity-[50%]">
                <span className="text-[16px]">Powered by</span>
                <img src="/SmartPhone/P55plus/name.png" alt="Powered by" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperCharge;
