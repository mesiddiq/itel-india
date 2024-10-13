import React from 'react';

import Button from '../../common/Button';

const StayInTheLoop = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between px-[16px] md:px-[80px] pt-[60px] pb-[20px]' style={{ marginTop: '0px' }}>
      <h3 className='text-mobile/h4 md:text-desktop/h3 text-[#FFFFFF]'>Stay in the loop: Follow us for updates!</h3>
      <Button btnLabel='Follow us on Instagram' rounded='mt-[12px] md:mt-0 rounded-full' />
    </div>
    <div className='flex flex-wrap justify-between px-[16px] md:px-[80px] pb-[60px]' style={{ marginTop: '0px' }}>
      <img src='/StayInTheLoopOne.svg' alt='StayInTheLoopOne' className='w-[305px]' />
      <img src='/StayInTheLoopTwo.svg' alt='StayInTheLoopTwo' className='w-[305px]' />
      <img src='/StayInTheLoopThree.svg' alt='StayInTheLoopThree' className='w-[305px]' />
      <img src='/StayInTheLoopFour.svg' alt='StayInTheLoopFour' className='w-[305px]' />
    </div>
    </>
  );
};

export default StayInTheLoop;
