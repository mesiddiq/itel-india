import React from 'react';

const MobileGrid = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[80px] sm:py-[120px] bg-black gap-[16px]">
  <div className="content w-full h-full px-4 lg:p-0">
    {/* Left side with a large box */}
    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4"
    >
      <div className="relative font-markot w-full  lg:w-[700px] h-[450px] lg:h-[771px] bg-cover bg-center bg-no-repeat bg-gradient-to-r from-[#457EDC] to-[#101E53] rounded-[16px] overflow-hidden p-4 sm:p-5"
       style={{ backgroundImage: 'url(/smartphone/P55fiveg/Backgrounds/Mobile01.webp)' }}
      >

        <h3 className="text-white text-mobile/h5/medium md:text-desktop/h3 font-markot ">
          Double the Power<br /> Double the Memories
        </h3>
        <div className="flex flex-col sm:flex-row font-markot text-white mt-4 gap-[20px] opacity-90">
          <h4 className=" text-mobile/h6 md:text-desktop/h4 ">50 MP AI Dual Rear Camera</h4>
          <p className=" text-mobile/h6 md:text-desktop/h4">8MP Front Camera</p>
        </div>
       
      </div>

      {/* Right side with responsive grid for smaller boxes */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 w-full">
  {/* Card 1 */}
  <div
    className="rounded-[16px] bg-gray-600 flex h-[200px] sm:h-[375px] bg-cover bg-center"
    style={{
      backgroundImage: `url(${
        window.innerWidth < 640
          ? '/smartphone/P55fiveg/Backgrounds/Mobile02.webp'
          : '/smartphone/P55fiveg/Backgrounds/Web02.webp'
      })`,
    }}
  >
    <div className="flex flex-col gap-[8px] opacity-90 md:gap-[12px] pt-[16px] sm:pt-[32px] pl-[10px] sm:pl-[29px]">
      <p className="text-white text-mobile/h7 md:text-desktop/h4 font-markot ">
        10 5G Bands enabled<br /> with NRCA Support
      </p>
      <p className="text-[8px] md:text-desktop/caption font-markot text-white">
        Ultra-fast Transmission Speed | Large Network<br /> Capacity | Low Latency | Better & Stable Network
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="rounded-[16px] bg-gray-500 flex h-[200px] sm:h-[375px] bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(349.93deg, rgba(4, 34, 85, 0) 24.6%, #042255 66.8%), url(${
        window.innerWidth < 640
          ? '/smartphone/P55fiveg/Backgrounds/Mobile04.webp'
          : '/smartphone/P55fiveg/Backgrounds/WebGrid03.webp'
      })`,
    }}
  >
    <div className="flex flex-col pt-[16px] sm:pt-[23px] p-[10px] sm:pl-[24px]">
      <div className="text-white text-mobile/h7 md:text-desktop/body/large font-markot md:flex-row flex flex-col">
        <img src="/smartphone/P55fiveg/Backgrounds/media.png" className="md:w-[100px] w-[60px]" />
        Dimensity 6080
      </div>
      <p className="text-mobile/h7 opacity-90 md:pt-4 md:text-desktop/h4 font-markot text-white">
        With 2.4GHz Primary Clock Speed and 6nm Chipset
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="rounded-[16px] bg-gray-600 flex h-[200px] sm:h-[375px] bg-cover bg-center"
    style={{
      backgroundImage: `url(${
        window.innerWidth < 640
          ? '/smartphone/P55fiveg/Backgrounds/Mobile03.webp'
          : '/smartphone/P55fiveg/Backgrounds/WebGrid04.webp'
      })`,
    }}
  >
    <div className="flex flex-col pt-[16px] sm:pt-[23px] pl-[16px] sm:pl-[24px]">
      <p className="text-mobile/h7 opacity-90 md:text-desktop/h4 font-markot text-white">
        Upto 12GB* (6GB + 6GB*) RAM with Memory Fusion + 128GB ROM
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div
    className="rounded-[16px] bg-[#004581] flex h-[200px] sm:h-[375px] w-full bg-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${
        window.innerWidth < 640
          ? '/smartphone/P55fiveg/Backgrounds/Mobile05.webp'
          : '/smartphone/P55fiveg/Backgrounds/WebGrid05.webp'
      })`,
    }}
  >
    <div className="flex flex-col pt-[16px] sm:pt-[23px] pl-[10px] sm:pl-[24px] z-10">
      <p className="text-mobile/h7 md:text-desktop/h4 font-markot text-white text-left">
        5000 mAh Battery and <br />18W Fast Charging
      </p>
    </div>
  </div>
</div>

    </div>

    {/* Bottom section */}
    <div className="relative flex  h-[500px] lg:h-[473px] bg-gradient-to-r from-blue-900 to-transparent w-full overflow-hidden rounded-[16px] mt-8 lg:mt-12">
      <div
        className="absolute md:top-0 md:right-0 md:w-2/3 hidden md:flex w-full  h-full bg-cover bg-center "
        style={{
          backgroundImage: `url('/smartphone/P55fiveg/Backgrounds/gridbg.png')`,
        }}
      />

<div
        className="absolute bottom-0  md:hidden flex w-full  h-1/2 bg-cover bg-center "
        style={{
          backgroundImage: `url('/smartphone/P55fiveg/Backgrounds/gridbg1.png')`,
        }}
      />
      {/* Text Section */}
      <div className="flex flex-col opacity-[70%] md:justify-between items-start text-white z-20 gap-[20px] p-6 md:p-12 font-markot">
        <h1 className="text-mobile/h5/medium md:text-desktop/h3 ">Vivid Colors,<br/>Wide Viewing</h1>
        <div className='flex flex-col gap-[20px] text-mobile/h6 md:text-desktop/h4'>
        <p className="">6.6" HD+ IPS Display</p>
        <p className="">90Hz Refresh Rate</p>
      </div></div>
    </div>
  </div>
</div>

  );
};

export default MobileGrid;
