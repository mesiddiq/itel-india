import React from 'react';

import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG';

const HeroBanner = () => {
  return (
    <div className='block md:flex relative w-full h-[650px] md:h-[700px] md:items-center overflow-hidden'>
      <div className='h-full'>
        <div className='grid grid-cols-1 z-50 md:grid-cols-2 gap-4 relative h-full md:justify-center md:items-center'>
          <div className='col-span-1 relative text-center'>
            <div className='w-full absolute top-[120px] md:top-[220px] z-[2]'>
              <h3 className='hidden md:block text-mobile/title md:text-desktop/h3 text-[#CFF1FF] font-markot'>Illuminate with Every Hue</h3>
              <img src='/smartphone/color-pro-5g/HeroBanner/Layer_1.png' className='md:hidden block pt-[10px] z-[1] mx-auto' />
              <p className='text-mobile/title md:text-desktop/title uppercase text-[#D9D9D9] md:leading-[22px] font-markot pt-[10px] md:pt-[50px]'>IVCO <span className='lowercase'>itel</span> Vivid Color Technology<br />5G Network Connectivity | 12GB* (6GB+6GB)/<br />8GB* (4GB+4GB) RAM + 128GB ROM</p>
              <img src='/smartphone/color-pro-5g/HeroBanner/HeroBannerBorderBottom.png' className='px-[16px] pt-[10px] md:pt-[50px] z-[1] mx-auto' />
              <p className='text-mobile/small/body text-[#FFFFFF] md:text-[20px] font-[400] pt-[10px] md:pt-[20px] font-markot'>Starting from <span className='text-mobile/h5 md:text-desktop/h5'>₹8,999/-</span></p>
              <div className='hidden md:flex justify-center pt-5'>
                <BuyNowSquareBG purchaseLink="https://www.amazon.in/dp/B0DHVX144Z?th=1" content="BUY NOW" />
              </div>
            </div>
            <img src='/smartphone/color-pro-5g/HeroBanner/HeroBannerBorderTop.png' className='pt-[10px] md:pt-[50px] mx-auto ' />
            <img src='/smartphone/color-pro-5g/HeroBanner/HeroTitle.svg' className='z-50 pr-5' />
          </div>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        src="/videos/homepage/color_pro_5g.mp4" className='w-full object-cover absolute left-0 top-0 hidden h-full md:block object-right'
      />

      <video
        autoPlay
        muted
        loop
        src="/videos/homepage/color_pro_5g_mobile.mp4" className='w-full object-cover absolute left-0 top-0 h-full md:hidden'
      />
    </div>
  );
};

export default HeroBanner;
