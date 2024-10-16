import React, { useState, useEffect } from 'react';

import Button from '../../../../components/common/Button';
import OverviewCardOne from '../../../../images/s_series/s_twenty_three_plus/OverviewCardOne.svg';
import OverviewCardTwo from '../../../../images/s_series/s_twenty_three_plus/OverviewCardTwo.svg';
import OverviewCardThree from '../../../../images/s_series/s_twenty_three_plus/OverviewCardThree.svg';
import SuperSeries from '../../../../images/s_series/s_twenty_three_plus/SuperSeries.png';

import '../../../../pages/s_series/style.css';

const OverviewTwo = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setFirst(true);
    }, 100);

    const secondTimer = setTimeout(() => {
      setSecond(true);
    }, 1500);
  }, [])

  return (
    <div className='overview-two-section'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='col-span-1'>
          <h1 className={`linear-gradient text-[24px] md:text-[48px] font-[500] leading-[31.2px] md:leading-[57.6px] ${first ? 'overview-two-section-title' : ''}`}>Redefining Style with 3D Curved AMOLED Display</h1>
        </div>
        <div className='col-span-1 pt-[10px]'>
          <p className={`text-[16px] text-[#D9D9D9] font-[350] leading-[25.6px] ${second ? 'overview-two-section-primary' : ''}`}>
            Experience the future of mobile tech with the itel S23+ smartphone, featuring a sleek 3D curved 6.78″ FHD+ AMOLED display, a robust 5000 mAh battery with fast charging, and a stunning 50MP AI dual rear camera setup, all wrapped in an ultra-slim 7.9mm body for an effortlessly stylish experience.
          </p>
        </div>
      </div>
      <div className='h-[16px] md:h-[80px]'></div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-1 overview-two-section-card'>
          <img src={OverviewCardOne} />
          <h3 className={`text-[20px] md:text-[24px] text-[#FFFFFF] font-[500] leading-[26px] md:leading-[31.2px] py-[10px] md:py-[20px]`}>3D Curved Brilliance: 6.78” FHD+ AMOLED Display</h3>
          <p className='text-[16px] text-[#D9D9D9] font-[350] leading-[25.6px]'>
            Elevate your vision with itel S23+ smartphone with sleek 3D curved AMOLED display.
          </p>
        </div>
        <div className='col-span-1 overview-two-section-card'>
          <img src={OverviewCardTwo} />
          <h3 className={`text-[20px] md:text-[24px] text-[#FFFFFF] font-[500] leading-[26px] md:leading-[31.2px] py-[10px] md:py-[20px]`}>Snap in Style with 50MP AI Dual Rear Camera & 32MP Front Camera</h3>
          <p className='text-[16px] text-[#D9D9D9] font-[350] leading-[25.6px]'>
            Capture every moment in jaw-dropping detail with our 50MP AI dual rear camera and 32 MP Front Camera set-up.
          </p>
        </div>
        <div className='col-span-1 overview-two-section-card'>
          <img src={OverviewCardThree} />
          <h3 className={`text-[20px] md:text-[24px] text-[#FFFFFF] font-[500] leading-[26px] md:leading-[31.2px] py-[10px] md:py-[20px]`}>5000 mAh Battery with 18W Type-C Charger</h3>
          <p className='text-[16px] text-[#D9D9D9] font-[350] leading-[25.6px]'>
            Power through your day with a 5000 mAh Battery. Recharge quickly and efficiently with the 18W Type-C Charger.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewTwo;
