import React from 'react';

import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG';

const HeroBanner = () => {
  return (
    <div className='block md:flex relative w-full h-[650px] md:h-[800px] md:items-center p-0 pb-0 bg-[url("/smartphone/color-pro-5g/HeroBanner/bgMobile.webp")] md:bg-[url("/smartphone/color-pro-5g/HeroBanner/bg.webp")] bg-cover bg-center bg-no-repeat overflow-hidden'>
      <div className='h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative h-full md:justify-center md:items-center'>
          <div className='col-span-1 relative text-center'>
            <div className='w-full absolute top-[120px] md:top-[220px] z-[2]'>
              <h3 className='hidden md:block text-mobile/title md:text-desktop/h3 text-[#CFF1FF] font-markot'>Illuminate with Every Hue</h3>
              <img src='/smartphone/color-pro-5g/HeroBanner/Layer_1.png' className='md:hidden block pt-[10px] z-[1] mx-auto' />
              <p className='text-mobile/title md:text-desktop/title uppercase text-[#D9D9D9] md:leading-[22px] font-markot pt-[10px] md:pt-[50px]'>IVCO <span className='lowercase'>itel</span> Vivid Color Technology<br />5G Network Connectivity | 12GB* (6GB+6GB)/<br />8GB* (4GB+4GB) RAM + 128GB ROM</p>
              <img src='/smartphone/color-pro-5g/HeroBanner/HeroBannerBorderBottom.png' className='px-[16px] pt-[10px] md:pt-[50px] z-[1] mx-auto' />
              <p className='text-mobile/small/body text-[#FFFFFF] md:text-[20px] font-[400] pt-[10px] md:pt-[20px] font-markot'>Starting from <span className='text-mobile/h5 md:text-desktop/h5'>₹8,999/-</span></p>
              <div className='hidden md:flex justify-center pt-5'>
              <BuyNowSquareBG purchaseLink="https://www.amazon.in/dp/B0DHVX144Z?th=1" content="BUY NOW"/>
              </div>
            </div>
            <img src='/smartphone/color-pro-5g/HeroBanner/HeroBannerBorderTop.png' className='pt-[10px] md:pt-[50px] z-[1] mx-auto' />
            <img src='/smartphone/color-pro-5g/HeroBanner/HeroTitle.svg' className='z-[1] pr-5' />
          </div>
          <div className='col-span-1'>
            <img src='/smartphone/color-pro-5g/HeroBanner/HeroImage.webp' className='hidden md:block absolute bottom-0 right-0 h-[300px] z-[2] md:h-[700px]' alt='ITEL Color Pro 5G' data-aos='fade-up' />
            <img src='/smartphone/color-pro-5g/HeroBanner/HeroImage.webp' className='md:hidden absolute bottom-0 left-[50%] h-[300px] z-[2] md:h-[700px]' alt='ITEL Color Pro 5G' data-aos='fade-up' style={{ transform: 'translate(-50%)' }} />
          </div>
        </div>
      </div>
      <img src='/smartphone/color-pro-5g/HeroBanner/BeUnstoppable.gif' className='absolute bottom-[150px] md:top-[400px] rotate-[-40deg] z-[1] opacity-20' alt='heroImage' />
    </div>
  );
};

export default HeroBanner;
