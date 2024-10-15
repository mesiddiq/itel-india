import React, { useState, useEffect } from 'react';

import Button from '../../../../components/common/Button';

const HeroBanner = (props) => {
  const { scrollY } = props;
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
        <h1 className={`linear-gradient text-mobile/h1 md:text-desktop/large/h ${primaryAnimation ? '' : ''}`}>S23+</h1>
        <p className={`text-mobile/title md:text-desktop/title uppercase text-[#D9D9D9] ${secondaryAnimation ? '' : ''}`}>3D Curved FHD+ AMOLED Display | In-Display Fingerprint | 50MP AI Dual ReaR Camera</p>
        <p className={`text-mobile/small/body md:text-desktop/h5 text-[#FFFFFF] pt-[30px] md:pt-[50px] ${secondaryAnimation ? '' : ''}`}>Available at <span className='text-mobile/h5 md:text-desktop/h5'>₹12,999/-</span></p>
        <span className={`hidden md:block mt-5 ${secondaryAnimation ? '' : ''}`}><Button btnLabel='BUY NOW' rounded='rounded-full' /></span>
      </div>
      <div className='w-full md:w-1/2 p-4'>
        <img src='/s_twenty_three_plus/heroImage.png' className={`absolute bottom-0 right-0 h-[375px] md:h-full ${secondaryAnimation ? 'hero-section-image' : ''}`} alt='heroImage' />
      </div>
    </div>
  );
};

export default HeroBanner;
