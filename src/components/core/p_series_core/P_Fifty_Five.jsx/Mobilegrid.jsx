import React from 'react';

const MobileGrid = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[80px] sm:py-[120px] bg-black gap-[16px]">
  <div className="content w-full h-full px-4 lg:p-0">
    {/* Left side with a large box */}
    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4">
      <div className="relative font-markot w-full md:w-[450px] lg:w-[522px] h-[450px] lg:h-[771px] bg-gradient-to-r from-[#457EDC] to-[#101E53] rounded-[16px] overflow-hidden p-4 sm:p-8">
        <h3 className="text-white text-mobile/h5/medium md:text-desktop/h3 font-markot font-bold">
          Double the Power,<br /> Double the Memories
        </h3>
        <div className="flex flex-col sm:flex-row  text-white mt-4">
          <h4 className=" text-mobile/h6 md:text-desktop/h4  mr-4">50 MP AI Dual Rear Camera</h4>
          <p className=" text-mobile/h6 md:text-desktop/h4">8MP Front Camera</p>
        </div>
        <img
          src="/P_Series/galaxy.png"
          className="absolute -bottom-10 left-0 z-0"
          style={{ width: '400px', height: 'auto' }}
          alt="Phone"
        />
      </div>

      {/* Right side with responsive grid for smaller boxes */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 w-full">
        {/* Card 1 */}
        <div className="rounded-[16px] bg-gray-600 flex h-[159px] sm:h-[375px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/P_Series/5g.png)' }}>
          <div className="flex flex-col gap-[12px] pt-[16px] sm:pt-[32px] pl-[16px] sm:pl-[29px]">
            <p className="text-white text-mobile/h7 md:text-desktop/h4 font-markot ">
              10 5G Bands enabled with NRCA Support
            </p>
            <p className="text-desktop/caption font-markot text-white">
              Ultra-fast Transmission Speed | Large Network<br/> Capacity | Low Latency | Better & Stable Network
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-[16px] bg-gray-500 flex h-[159px] sm:h-[375px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(349.93deg, rgba(4, 34, 85, 0) 24.6%, #042255 66.8%), url("/P_Series/chip.png")`,
          }}>
          <div className="flex flex-col pt-[16px] sm:pt-[23px] pl-[16px] sm:pl-[24px]">
            <p className="text-white text-desktop/h4 font-markot">DMINSITY 6080</p>
            <p className="text-mobile/h7 md:text-desktop/caption font-markot text-white">
              With 2.4GHz Primary Clock Speed and 6nm Chipset
            </p>
          </div>
        </div>

        {/* Card 3, hide on small screens */}
        <div className="rounded-[16px] bg-gray-600 flex h-[159px] sm:h-[375px] bg-cover bg-center "
          style={{ backgroundImage: 'url(/P_Series/6g.png)' }}>
          <div className="flex flex-col pt-[16px] sm:pt-[23px] pl-[16px] sm:pl-[24px]">
            <p className="text-mobile/h7 md:text-desktop/h4 font-markot text-white">
              Upto 12GB* 6GB + 6GB* RAM with Memory Fusion + 128GB ROM
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-[16px] bg-[#004581] flex flex-col items-center justify-center h-[159px] sm:h-[375px] w-full">
          <div className="flex flex-col pt-[16px] sm:pt-[23px] pl-[16px] sm:pl-[24px] z-10">
            <p className="text-mobile/h7 md:text-desktop/h4 font-markot text-white">
              5000 mAh Battery and 18W Fast Charging
            </p>
          </div>

          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 48.75% 28.93%, rgba(0, 69, 129, 0.1) 0%, rgba(0, 55, 110, 0.1) 100%), url("/P_Series/chip2.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.8,
              position: 'relative',
            }}
          />
        </div>
      </div>
    </div>

    {/* Bottom section */}
    <div className="relative flex  h-[650px] lg:h-[473px] bg-gradient-to-r from-blue-900 to-transparent w-full overflow-hidden rounded-[16px] mt-8 lg:mt-12">
      <div
        className="absolute md:top-0 md:right-0 md:w-2/3 hidden md:flex w-full  h-full bg-cover bg-center "
        style={{
          backgroundImage: `url('/P_Series/gridbg.png')`,
        }}
      />

<div
        className="absolute bottom-0  md:hidden flex w-full  h-1/2 bg-cover bg-center "
        style={{
          backgroundImage: `url('/P_Series/gridbg1.png')`,
        }}
      />
      {/* Text Section */}
      <div className="flex flex-col opacity-[70%] md:justify-between items-start text-white z-20 gap-[20px] p-12 font-markot">
        <h1 className="text-mobile/h5/medium md:text-desktop/h3 ">Vivid Colors,Wide Viewing</h1>
        <div className='flex flex-col text-mobile/h6 md:text-desktop/h4'>
        <p className="">6.6" HD+ IPS Display</p>
        <p className="">90Hz Refresh Rate</p>
      </div></div>
    </div>
  </div>
</div>

  );
};

export default MobileGrid;
