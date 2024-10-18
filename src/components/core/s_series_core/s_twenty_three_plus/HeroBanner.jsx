import React, { useState, useEffect } from 'react';

import Button from '../../../../components/common/Button';

const HeroBanner = (props) => {
  const { scrollY } = props;
  const [startAnimation, setStartAnimation] = useState(false);
  const [primaryAnimation, setPrimaryAnimation] = useState(false);
  const [primaryAnimationDuration, setPrimaryAnimationDuration] = useState(3500);
  const [seriesAnimation, setSeriesAnimation] = useState(false);
  const [paraAnimation, setParaAnimation] = useState(false);
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const [imageAnimation, setImageAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setPrimaryAnimation(true);
    }, 2000); // Delay before showing the paragraph

    return () => clearTimeout(animationTimeout);
  }, []);

  useEffect(() => {
    if (screen.width > 1000) {
      setIsMobile(false);
      setPrimaryAnimationDuration(3500);
    } else {
      setIsMobile(true);
      setPrimaryAnimationDuration(500);
    }
  }, []);

  useEffect(() => {
    if (primaryAnimation) {
      const seriesAnimationTimeout = setTimeout(() => {
        setSeriesAnimation(true);
      }, primaryAnimationDuration); // Delay before showing the paragraph

      return () => clearTimeout(seriesAnimationTimeout);
    }
  }, [primaryAnimation]);

  useEffect(() => {
    if (seriesAnimation) {
      const paraAnimationTimeout = setTimeout(() => {
        setParaAnimation(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(paraAnimationTimeout);
    }
  }, [seriesAnimation]);

  useEffect(() => {
    if (paraAnimation) {
      const buttonAnimationTimeout = setTimeout(() => {
        setButtonAnimation(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(buttonAnimationTimeout);
    }
  }, [paraAnimation]);

  useEffect(() => {
    if (paraAnimation) {
      const buttonAnimationTimeout = setTimeout(() => {
        setButtonAnimation(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(buttonAnimationTimeout);
    }
  }, [paraAnimation]);

  useEffect(() => {
    if (buttonAnimation) {
      const imageAnimationTimeout = setTimeout(() => {
        setImageAnimation(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(imageAnimationTimeout);
    }
  }, [buttonAnimation]);

  return (
    <div className='block md:flex relative w-full h-[585px] md:h-[800px] md:items-center p-[20px] md:p-0 pb-0 bg-[url("/s_twenty_three_plus/heroBg.png")] bg-cover bg-center' style={{ marginTop: '0px' }}>
      <div className='content h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative h-full md:justify-center md:items-center'>
          <div className='col-span-1'>
            <div className='md:h-[26px]'>{seriesAnimation && (<img src='/s_twenty_three_plus/SuperSeries.png' data-aos='fade-right' />)}</div>
            {primaryAnimation && (<h1 className={`linear-gradient text-mobile/h1 md:text-desktop/large/h font-markot md:h-[150px] ${!isMobile ? 'primaryAnimation' : ''} `} data-aos='fade-right'>S23+</h1>)}
            <div className='md:h-[40px]'>{paraAnimation && (<p className={`text-mobile/title md:text-desktop/title uppercase text-[#D9D9D9] font-markot`} data-aos='fade-right'>3D Curved FHD+ AMOLED Display | In-Display Fingerprint | 50MP AI Dual ReaR Camera</p>)}</div>
            <div className='md:h-[75px]'>{paraAnimation && (<p className={`text-mobile/small/body text-[#FFFFFF] md:text-[20px] font-[400] pt-[30px] md:pt-[50px] font-markot`} data-aos='fade-right'>Available at <span className='text-mobile/h5 md:text-desktop/h5'>₹12,999/-</span></p>)}</div>
            <div className='md:h-[64px]'>{buttonAnimation && (<span className={`hidden md:block pt-5`} data-aos='fade-right'><Button btnLabel='BUY NOW' rounded='rounded-full' /></span>)}</div>
          </div>
          <div className='col-span-1'>
            {imageAnimation && (<img src='/s_twenty_three_plus/heroImage.png' className={`absolute bottom-0 right-0 h-[375px] md:h-full`} alt='heroImage' data-aos='fade-up' />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
