import React, { useState, useEffect, useRef } from 'react';

import Button from '../../../../components/common/Button';

const Overview = (props) => {
  const { scrollY } = props;
  const ref = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (screen.width > 1000) {
      setIsFixed(scrollY >= 900);
    } else {
      setIsFixed(scrollY >= 650);
    }
  }, [scrollY]);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className={`overview-section ${isFixed ? 'fixed top-0 z-[999]' : 'relative'}`}>
      <div className='flex items-center w-1/2 pr-4'>
        <img src='/s_twenty_three_plus/overview.png' alt='overview' /><h3 className='text-mobile/h3 md:text-desktop/h3 text-[#FFFFFF] pl-3'>S23+</h3>
        <a href="#overviewSection" className='hidden md:flex text-desktop/button text-[#E8E8E8] font-[700] uppercase ml-auto'>Overview</a>
      </div>
      <div className='flex items-center w-1/2 pl-4'>
        <a href="javascript:;" onClick={handleClick} className='hidden md:flex text-desktop/h6/medium text-[#E8E8E8]'>Specifications</a>
        <p className='text-[16px] text-[#E8E8E8] font-[700] uppercase ml-auto'><Button btnLabel='BUY NOW' rounded='rounded-full' /></p>
      </div>
    </div>
  );
};

export default Overview;
