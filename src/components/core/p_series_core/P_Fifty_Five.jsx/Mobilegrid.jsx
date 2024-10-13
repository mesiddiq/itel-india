import React from 'react';

const Mobile_grid = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[120px] px-[80px] bg-black gap-[16px]">


      {/* Left side with a large box */}
      <div className='flex justify-center items-center w-full'>
      <div className="relative w-[522px] h-[771px] bg-gradient-to-r from-[#457EDC] to-[#101E53] rounded-[16px] overflow-hidden">
        <h3 className="text-white text-center text-xl font-bold">Double the Power,<br /> Double the Memories</h3>
        <div className="flex text-white justify-center mt-4">
          <h4 className="text-lg mr-4">50 MP AI Dual Rear Camera</h4>
          <p className="text-lg">8MP Front Camera</p>
        </div>
        {/* Image with specified width and height */}
        <img
          src="/P_Series/phone.png"
          className="absolute bottom-0 left-0 z-0"
          style={{ width: '450px', height: '564px' }}
          alt="Phone"
        />
      </div>

      {/* Right side with smaller boxes */}
      <div className="flex flex-col justify-between ml-4">
        {/* Top two boxes */}
        <div className="flex mb-4" >
          <div className="rounded-[16px] bg-gray-600 flex  h-[375px] w-[359px] mr-4 bg-cover bg-center " style={{ backgroundImage: 'url(/P_Series/5g.png)' }}>
         <div className='flex flex-col gap-[12px]  pt-[32px] pl-[29px]'>
          <p className="text-white text-desktop/h4">
            10 5G Bands enabled
            with NRCA Support
              </p>
              <p className='text-desktop/caption text-white'>Ultra-fast Transmission Speed | Large Network Capacity | Low Latency | Better & Stable Network</p>
          </div></div>
          <div className="rounded-[16px] bg-gray-500 flex  h-[375px] w-[359px] bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(349.93deg, rgba(4, 34, 85, 0) 24.6%, #042255 66.8%),
url("/P_Series/chip.png")` ,
backgroundSize: 'cover',
backgroundPosition: 'center',
            }}
            >
              <div className='flex flex-col pt-[23px] pl-[24px]'>
            <p className="text-white text-desktop/large">
            DMINSITY 6080
              </p>
              <p className='text-desktop/h4 text-white'>With 2.4GHz Primary Clock Speed and 6nm Chipset</p>
          </div></div>
        </div>
        {/* Bottom two boxes */}
        <div className="flex">
          <div className="rounded-[16px] flex  h-[375px] w-[359px] mr-4 bg-cover bg-center" style={{ backgroundImage: 'url(/P_Series/6g.png)' }}>
          <div className='flex flex-col pt-[23px] pl-[24px]'>
           
           <p className='text-desktop/h4 text-white'>Upto 12GB* 6GB + 6GB* RAM with Memory Fusion + 128GB ROM</p>
       </div>
          </div>
          <div className="rounded-[16px] bg-[#004581] flex flex-col items-center justify-center h-[375px] w-full md:w-[359px]">
  {/* Content Container */}
  <div className="flex flex-col pt-[23px] pl-[24px] z-10">
    <p className="text-xl md:text-2xl lg:text-3xl text-white">
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
      opacity: 0.8, // Lower opacity
      position: 'relative', // For z-index control
      // Adjust this value as needed to push the image down
     // Ensure the image is behind the content
    }}
  />
</div>

        </div>
      </div></div>
    <div className="relative flex items-center justify-center bg-gradient-to-r from-blue-900 to-transparent w-full overflow-hidden rounded-[16px]">
      {/* Background Image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center "
        style={{
          backgroundImage: `url('/P_Series/vector.png')`,
        }}
      />

      {/* Mobile Image */}
      <div className="relative z-10">
        <img
          src="/P_Series/screen.png"
          alt="Mobile display"
          className=""
        />
      </div>

      {/* Text Section */}
      <div className="absolute top-1/4 left-10 text-white z-20">
        <h1 className="text-4xl font-bold">Vivid Colors, Wide Viewing</h1>
        <p className="mt-4 text-lg">6.6" HD+ IPS Display</p>
        <p className="mt-1 text-lg">90Hz Refresh Rate</p>
      </div>
    </div>


       
    </div>
  );
};

export default Mobile_grid;




