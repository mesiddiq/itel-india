import React from 'react';

import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG';

const HeroBanner = () => {

  return (
    <div className='block md:flex relative w-full h-[585px] md:h-[800px] md:items-center p-[20px] md:p-0 pb-0 bg-[url("/SmartPhone/S23+/Backgrounds/HeroBannerSmall.webp")] md:bg-[url("/SmartPhone/S23+/Backgrounds/HeroBanner.webp")] bg-cover bg-center overflow-hidden' style={{ marginTop: '0px' }}>
      <div className='content h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative h-full md:justify-center md:items-center'>
          <div className='col-span-1'>
            <div className='md:h-[26px]'><img src='/SmartPhone/S23+/Backgrounds/SuperSeries.webp' data-aos='fade-right' /></div>
            <h1 className={`linear-gradient text-mobile/h1 md:text-desktop/large/h font-markot md:h-[150px] mt-[20px] md:mt-0`} data-aos='fade-right'>S23+</h1>
            <div className='md:h-[75px]'><p className={`text-mobile/small/body text-[#FFFFFF] md:text-[20px] font-[400] pt-[30px] md:pt-[50px] font-markot`} data-aos='fade-right'>Available at <span className='text-mobile/h5 md:text-desktop/h5'>₹12,999/-</span></p></div>
            <div className='md:h-[64px]'>
              <span className={`hidden md:block pt-5`} data-aos='fade-right'>
                <BuyNowSquareBG />
              </span></div>
            <div className='md:h-[40px]'><p className={`text-mobile/title md:text-desktop/title uppercase text-[#D9D9D9] font-markot`} data-aos='fade-right'>3D Curved FHD+ AMOLED Display | In-Display Fingerprint | 50MP AI Dual ReaR Camera</p></div>
          </div>
          <div className='col-span-1'>
            <img src='/SmartPhone/S23+/Backgrounds/HeroImage.webp' className={`absolute bottom-0 right-0 h-[375px] md:h-full`} alt='heroImage' data-aos='fade-up' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
