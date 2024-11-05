import React from 'react';

import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG';

const HeroBanner = () => {
  return (
    <div className='block md:flex relative w-full h-[585px] md:h-[800px] md:items-center p-[20px] md:p-0 pb-0 bg-[url("/smartphone/p55T/Backgrounds/HeroBanner.webp")] bg-cover bg-center overflow-hidden'>
      <div className='content h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative h-full md:justify-center md:items-center'>
          <div className='col-span-1'>
            <img src='/smartphone/p55T/Backgrounds/PowerSeries.webp' data-aos='fade-right' />
            <h1 className='bg-gradient-to-br from-[#EECF7F] to-[#D2B363] inline-block text-transparent bg-clip-text text-mobile/h1 md:text-desktop/large/h font-markot md:h-[150px] mt-[20px] md:mt-0' data-aos='fade-right'>P55T</h1>
            <p className='text-mobile/title md:text-desktop/title uppercase text-[#D9D9D9] font-markot' data-aos='fade-right'>Android 14 Go Edition | 6000 mAh battery | 6.6″ HD+ Punch-Hole Display</p>
            <p className='text-mobile/small/body text-[#FFFFFF] md:text-[20px] font-[400] pt-[30px] md:pt-[50px] font-markot' data-aos='fade-right'>Available at <span className='text-mobile/h5 md:text-desktop/h5'>₹7,999/-</span></p>
            <span className='hidden md:block pt-5' data-aos='fade-right'>
            <BuyNowSquareBG purchaseLink="" content="BUY NOW"/>
              </span>
          </div>
          <div className='col-span-1'>
            <h3 className='bg-gradient-to-br from-[#EECF7F] to-[#D2B363] inline-block text-transparent bg-clip-text text-[32px] md:text-[100px] font-[350] rotate-90 absolute bottom-[35px] md:bottom-[120px] right-0 md:right-[-100px] font-markot'>P55T</h3>
            <img src='/smartphone/p55T/Backgrounds/HeroImage.webp' className='absolute bottom-0 right-0 h-[375px] md:h-full' alt='heroImage' data-aos='fade-up' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
