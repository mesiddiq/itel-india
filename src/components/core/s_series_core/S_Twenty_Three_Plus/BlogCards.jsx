import React from 'react';

const BlogCards = () => {

  return (
    <div className='blog-cards-section'>
      <div className='grid grid-cols-1 md:grid-cols-[40%_60%] gap-4'>
        <div className='relative col-span-1 row-span-2 bg-[#000000] rounded p-[16px] md:p-[40px] h-[370px] md:h-[780px]'>
          <h3 className={`linear-gradient text-mobile/h5/medium md:text-desktop/h3 mb-[20px]`}>Dive into the Visuals</h3>
          <p className='text-[#F2F2F2] text-mobile/body/large md:text-desktop/h4 mb-[20px] md:mb-[80px]'>6.78”FHD+ AMOLED 3D Curved Screen</p>
          <div className='flex justify-center'>
            <img src='/s_twenty_three_plus/BlogCardsOnePhone.svg' className='absolute bottom-0 w-[70%] md:w-auto' />
            <img src='/s_twenty_three_plus/BlogCardsOneScreen.svg' className='absolute bottom-0 w-[55%] md:w-auto' />
            <img src='/s_twenty_three_plus/BlogCardsOneButterfly.svg' className='absolute bottom-[8%] md:bottom-[17%] left-[42%] w-[45%] md:w-auto' />
          </div>
        </div>
        <div className='col-span-1 bg-[#000000] rounded p-[16px] md:p-[40px] h-[200px] md:h-auto'>
          <h3 className={`linear-gradient w-[60%] md:w-full text-mobile/h5/medium md:text-desktop/h3 mb-[20px]`}>Shoot like a Boss</h3>
          <p className='text-[#F2F2F2] w-[60%] md:w-full text-mobile/body/large md:text-desktop/h4 mb-[20px] md:mb-[80px]'>50MP AI Dual Rear Cam<br />32 MP Front Camera</p>
        </div>
        <div className='col-span-1 bg-[#000000] rounded p-[16px] md:p-[40px] h-[200px] md:h-auto'>
          <h3 className={`linear-gradient w-[60%] md:w-full text-mobile/h5/medium md:text-desktop/h3 mb-[20px]`}>The Ultimate Processor</h3>
          <p className='text-[#F2F2F2] w-[60%] md:w-full text-mobile/body/large md:text-desktop/h4 mb-[20px] md:mb-[80px]'>Unisoc Tiger T616 (12 nm)<br />High Performance Chipset</p>
        </div>
        <div className='col-span-1 bg-[#000000] rounded p-[16px] md:p-[40px] h-[200px] md:h-auto'>
          <h3 className={`linear-gradient w-[60%] md:w-full text-mobile/h5/medium md:text-desktop/h3 mb-[20px]`}>Storage & Performance</h3>
          <p className='text-[#F2F2F2] w-[60%] md:w-full text-mobile/body/large md:text-desktop/h4 mb-[20px] md:mb-[80px]'>16GB* (8GB+8GB*) RAM +256GB ROM</p>
        </div>
        <div className='col-span-1 bg-[#000000] rounded p-[16px] md:p-[40px] h-[200px] md:h-auto'>
          <h3 className={`linear-gradient w-[60%] md:w-full text-mobile/h5/medium md:text-desktop/h3 mb-[20px]`}>Charge up Quick Full Power in Just 2 hrs</h3>
          <p className='text-[#F2F2F2] w-[60%] md:w-full text-mobile/body/large md:text-desktop/h4 mb-[20px] md:mb-[80px]'>5000 mAh Battery with 18W<br />Type-C Charger</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
