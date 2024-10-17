import React from 'react';

const MobileGrid = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[80px] sm:py-[120px]  bg-black gap-[16px]">
    <div className='content w-full h-full'>
      {/* Left side with a large box */}
      <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-4'>
        <div className="flex-none relative w-full md:w-[450px] lg:w-[522px]  h-[450px] lg:h-[771px] bg-gradient-to-r from-[#457EDC] to-[#101E53] rounded-[16px] overflow-hidden p-4 sm:p-8">
          <h3 className="text-white text-center text-lg sm:text-xl lg:text-2xl font-bold">Double the Power,<br /> Double the Memories</h3>
          <div className="flex flex-col sm:flex-row text-white justify-center mt-4">
            <h4 className="text-base sm:text-lg mr-4">50 MP AI Dual Rear Camera</h4>
            <p className="text-base sm:text-lg">8MP Front Camera</p>
          </div>
          <img
            src="/P_Series/galaxy.png"
            className="absolute bottom-0 left-0 z-0"
            style={{ width: '100%', height: 'auto' }}
            alt="Phone"
          />
        </div>
  
        {/* Right side with smaller boxes */}
        <div className="flex flex-col lg:justify-between w-full lg:w-auto gap-4">
          {/* Top two boxes */}
          <div className="flex lg:flex-row justify-between w-full gap-4">
            <div className="rounded-[16px] bg-gray-600 flex h-[159px] sm:h-[375px] w-full lg:w-[329px] bg-cover bg-center" style={{ backgroundImage: 'url(/P_Series/5g.png)' }}>
              <div className='flex flex-col gap-[12px] pt-[16px] sm:pt-[32px] pl-[16px] sm:pl-[29px]'>
                <p className="text-white text-sm sm:text-lg lg:text-xl">
                  10 5G Bands enabled with NRCA Support
                </p>
                <p className='text-xs sm:text-sm lg:text-base text-white'>
                  Ultra-fast Transmission Speed | Large Network Capacity | Low Latency | Better & Stable Network
                </p>
              </div>
            </div>
  
            <div className="rounded-[16px] bg-gray-500 flex h-[159px] sm:h-[375px] w-full lg:w-[329px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(349.93deg, rgba(4, 34, 85, 0) 24.6%, #042255 66.8%), url("/P_Series/chip.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
              <div className='flex flex-col pt-[16px] sm:pt-[23px] pl-[16px] sm:pl-[24px]'>
                <p className="text-white text-sm sm:text-lg lg:text-xl">DMINSITY 6080</p>
                <p className='text-xs sm:text-sm lg:text-lg text-white'>
                  With 2.4GHz Primary Clock Speed and 6nm Chipset
                </p>
              </div>
            </div>
          </div>
  
          {/* Bottom two boxes */}
          <div className="flex justify-between w-full gap-4">
            <div className="rounded-[16px] flex h-[159px] sm:h-[375px] w-full lg:w-[329px] bg-cover bg-center" style={{ backgroundImage: 'url(/P_Series/6g.png)' }}>
              <div className='flex flex-col pt-[16px] sm:pt-[23px] pl-[16px] sm:pl-[24px]'>
                <p className='text-xs sm:text-sm lg:text-lg text-white'>
                  Upto 12GB* 6GB + 6GB* RAM with Memory Fusion + 128GB ROM
                </p>
              </div>
            </div>
  
            <div className="rounded-[16px] bg-[#004581] flex flex-col items-center justify-center h-[159px] sm:h-[375px] w-full lg:w-[329px]">
              <div className="flex flex-col pt-[16px] sm:pt-[23px] pl-[16px] sm:pl-[24px] z-10">
                <p className="text-base sm:text-lg lg:text-xl text-white">
                  5000 mAh Battery and 18W Fast Charging
                </p>
              </div>
  
              {/* Background Image Container */}
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
      </div>
  
      {/* Bottom section */}
      <div className="relative flex flex-col md:flex-row items-center h-[430px] md:h-[473px] justify-center bg-gradient-to-r from-blue-900 to-transparent w-full overflow-hidden rounded-[16px] mt-8 lg:mt-12">
        {/* Background Image */}
        <div
          className="absolute top-0 right-0 w-3/4 h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/P_Series/vector.png')`,
          }}
        />
  
        {/* Mobile Image */}
        <div className="relative z-10">
          <img
            src="/P_Series/screen.png"
            alt="Mobile display"
            className="w-[200px] sm:w-[300px] lg:w-[400px]"
          />
        </div>
  
        {/* Text Section */}
        <div className="absolute top-2 md:top-1/4 md:left-4 sm:left-10 text-white z-20">
          <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold">Vivid Colors, Wide Viewing</h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg">6.6" HD+ IPS Display</p>
          <p className="mt-1 text-sm sm:text-lg">90Hz Refresh Rate</p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default MobileGrid;
