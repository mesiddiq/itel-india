import React, { useState, useEffect } from 'react';

const Overview = (props) => {
  return (
    <div className='relative w-full px-[16px] lg:px-0 py-[40px] lg:py-[120px] h-[1000px] md:h-auto bg-[url("/smartphone/p55T/Backgrounds/HeroBanner.webp")] bg-cover bg-center' id='overview'>
      <div className='content'>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[185px] lg:min-h-[120px]'>
          <div className='col-span-1'>
            <h1 className='bg-gradient-to-br from-[#EECF7F] to-[#D2B363] inline-block text-transparent bg-clip-text text-desktop/h4 md:text-desktop/h2 font-markot'>Your New Tech Flex Powered by Android 14 Go</h1>
          </div>
          <div className='col-span-1 pt-[10px]'>
            <p className='text-desktop/body/2/regular md:text-desktop/body/1 text-[#D9D9D9] font-markot animate-slide-down'>
              Meet the itel P55T – a game-changer! With a 6000mAh battery, rapid 18W Type-C charging, and Android 14 Go Edition, stay powered up and ahead. Enjoy a stunning 6.6-inch HD+ punch hole display, up to 8GB* (4GB + 4GB*) RAM with memory fusion, and 128GB storage. Capture moments with the 50MP AI dual rear camera and pick from three cool colors!
            </p>
          </div>
        </div>
<<<<<<< HEAD
        <div className='h-[16px] md:h-[80px]'></div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0'>
          <div className='col-span-1 p-[16px] md:p-[40px] mx-0 md:mx-[25px] my-[16px] md:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
=======
        <div className='h-[16px] lg:h-[80px]'></div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='col-span-1 p-[16px] lg:p-[40px] mx-0 lg:mx-[25px] my-[16px] lg:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
>>>>>>> 0a49af0d8ae45dd08e85a261859193c576e986f5
            <img src='/smartphone/p55T/Backgrounds/OverviewCardOne.webp' alt='OverviewCardOne' data-aos='fade-up' />
            <h3 className='text-mobile/h5/medium md:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] lg:py-[20px]' data-aos='fade-up'>
              Powered by Android 14 Go Edition!
            </h3>
            <p className='text-desktop/body/2/regular md:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Game and stream like a pro with the latest Android 14 Go Edition. Smooth, efficient performance in a sleek package!
            </p>
          </div>
<<<<<<< HEAD
          <div className='col-span-1 p-[16px] md:p-[40px] mx-0 md:mx-[25px] my-[16px] md:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
=======
          <div className='col-span-1 p-[16px] lg:p-[40px] mx-0 lg:mx-[25px] my-[16px] lg:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
>>>>>>> 0a49af0d8ae45dd08e85a261859193c576e986f5
            <img src='/smartphone/p55T/Backgrounds/OverviewCardTwo.webp' alt='OverviewCardTwo' data-aos='fade-up' />
            <h3 className='text-mobile/h5/medium md:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] lg:py-[20px]' data-aos='fade-up'>
              6000 mAh Powerhouse: Fast Charging Beast
            </h3>
            <p className='text-desktop/body/2/regular md:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Meet the ultra-fast charging smartphone with a powerful 6000mAh battery and 18W Type-C charging.
            </p>
          </div>
<<<<<<< HEAD
          <div className='col-span-1 p-[16px] md:p-[40px] mx-0 md:mx-[25px] my-[16px] md:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
=======
          <div className='col-span-1 p-[16px] lg:p-[40px] mx-0 lg:mx-[25px] my-[16px] lg:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
>>>>>>> 0a49af0d8ae45dd08e85a261859193c576e986f5
            <img src='/smartphone/p55T/Backgrounds/OverviewCardThree.webp' alt='OverviewCardThree' data-aos='fade-up' />
            <h3 className='text-mobile/h5/medium md:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] lg:py-[20px]' data-aos='fade-up'>
              Dive Into the 6.6″ HD+ Punch-Hole Display
            </h3>
            <p className='text-desktop/body/2/regular md:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Your binge-watching sessions just got an upgrade with the sleek 6.6″ HD+ punch-hole display and a buttery smooth 90Hz refresh rate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
