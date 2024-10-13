import React, { useState, useEffect, useRef } from 'react';

import Button from '../../../../components/common/Button';

const Overview = () => {
  const ref = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const sectionOneHeight = '900';
    setIsFixed(window.scrollY >= sectionOneHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className={`overview-section ${isFixed ? 'fixed top-0 z-[999]' : ''}`}>
      <div className='flex items-center w-1/2 pr-4'>
        <img src='/s_twenty_three_plus/overview.png' alt='overview' /><h3 className='text-[28px] md:text-[36px] text-[#FFFFFF] font-[500] pl-3'>S23+</h3>
        <a href="#overviewSection" className='hidden md:flex text-[16px] text-[#E8E8E8] font-[700] uppercase ml-auto'>Overview</a>
      </div>
      <div className='flex items-center w-1/2 pl-4'>
        <a href="javascript:;" onClick={handleClick} className='hidden md:flex text-[16px] text-[#E8E8E8] font-[500]'>Specifications</a>
        <p className='text-[16px] text-[#E8E8E8] font-[700] uppercase ml-auto'><Button btnLabel='BUY NOW' rounded='rounded-full' /></p>
      </div>
    </div>
  );
};

export default Overview;
