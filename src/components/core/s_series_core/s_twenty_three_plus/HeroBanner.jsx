import React, { useState, useEffect } from 'react';

import Button from '../../../../components/common/Button';

const HeroBanner = () => {
  const [primaryAnimation, setPrimaryAnimation] = useState(false);
  const [secondaryAnimation, setSecondaryAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setPrimaryAnimation(true);
    }, 100);

    const stimer = setTimeout(() => {
      setSecondaryAnimation(true);
      console.log("HI");
    }, 30000);

    // Cleanup the timer on component unmount
    return () => {
      clearTimeout(timer);
      clearTimeout(stimer);
    };
  }, []);

  return (
    <div className='hero-section md:items-center'>
      <div className='w-full md:w-1/2 p-4'>
        <img src='/s_twenty_three_plus/SuperSeries.png' className={`${secondaryAnimation ? '' : ''}`} />
        <h1 className={`linear-gradient text-[36px] md:text-[136px] font-[500] ${primaryAnimation ? '' : ''}`}>S23+</h1>
        <p className={`text-[14px] md:text-[16px] leading-[19px] font-[500] uppercase text-[#D9D9D9] ${secondaryAnimation ? '' : ''}`}>3D Curved FHD+ AMOLED Display | In-Display Fingerprint | 50MP AI Dual ReaR Camera</p>
        <p className={`text-[20px] leading-[26px] font-[500] text-[#FFFFFF] pt-[30px] md:pt-[50px] ${secondaryAnimation ? '' : ''}`}>Available at <span className='font-[700]'>₹12,999/-</span></p>
        <span className={`hidden md:block mt-5 ${secondaryAnimation ? '' : ''}`}><Button btnLabel='BUY NOW' rounded='rounded-full' /></span>
      </div>
      <div className='w-full md:w-1/2 p-4'>
        <img src='/s_twenty_three_plus/heroImage.png' className={`absolute bottom-0 right-0 h-[375px] md:h-full ${secondaryAnimation ? 'hero-section-image' : ''}`} alt='heroImage' />
      </div>
    </div>
  );
};

export default HeroBanner;
