import React from 'react';

const UnlockTouch = () => {
  return (
    <div className='unlock-touch-section'>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-4'>
        <div className='col-span-1 text-left'>
          <h3 className={`linear-gradient text-[24px] md:text-[48px] font-[500] leading-[31.2px] md:leading-[57.6px] mb-[20px]`}>Unlock with a Touch:<br />In-Display Fingerprint</h3>
          <p className='w-[70%] md:w-full text-[#F2F2F2] text-[12px] md:text-[20px] font-[400] leading-[18px] md:leading-[32px] mb-[20px] md:mb-[80px]'>Effortlessly access your device with the touch of a finger - seamless security and convenience with in-display finger unlock.</p>
        </div>
        <div className='col-span-1'>
          <div className='hidden md:flex justify-center'>
            <img src='/s_twenty_three_plus/UnlockTouchPhone.svg' className='absolute top-0' />
            <img src='/s_twenty_three_plus/UnlockTouchFingerPrint.svg' className='absolute top-[50%] ml-[-30px]' />
            <img src='/s_twenty_three_plus/UnlockTouchFinger.svg' className='absolute bottom-0 ml-[-770px]' />
          </div>
          <div className='flex md:hidden'>
            <img src='/s_twenty_three_plus/UnlockTouchPhoneSM.svg' className='absolute top-20 right-0 w-[109px] h-[284px]' />
            <img src='/s_twenty_three_plus/UnlockTouchFingerPrint.svg' className='absolute top-[60%] right-12 ml-[-30px] w-[18px] h-[28px]' />
            <img src='/s_twenty_three_plus/UnlockTouchFinger.svg' className='absolute left-14 bottom-5 w-[348px] h-[260px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockTouch;
