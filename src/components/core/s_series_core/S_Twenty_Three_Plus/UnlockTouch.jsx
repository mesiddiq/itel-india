import React from 'react';

const UnlockTouch = () => {

  return (
    <div className='flex relative w-full overflow-hidden h-[500px] md:h-[800px] px-[16px] lg:px-0 py-[12px] lg:py-[120px] bg-[url("/smartphone/S23+/Backgrounds/SnapFlawlessSelfieBg.webp")] bg-cover bg-center overflow-hidden' style={{ marginTop: '0px' }}>
      <div className='content relative'>
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-4'>
          <div className='col-span-1 text-left pt-8'>
            <h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text text-mobile/h4 md:text-desktop/h2 font-markot mb-[20px] w-[65%] lg:w-[75%]'>Unlock with a Touch: In-Display Fingerprint</h3>
            <p className='w-[55%] lg:w-[70%] text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large font-markot mb-[20px] lg:mb-[80px]' data-aos="fade-down">Effortlessly access your device with the touch of a finger - seamless security and convenience with in-display finger unlock.</p>
          </div>
          <div className='col-span-1'>
            <img src='/smartphone/S23+/Backgrounds/UnlockTouchPhone.webp' className='hidden lg:flex absolute right-0 bottom-[-510px]' data-aos="fade-down" />
            <img src='/smartphone/S23+/Backgrounds/UnlockTouchPhoneSmall.webp' className='flex lg:hidden absolute bottom-[-75px] left-[-20px] md:left-[-50px]' data-aos="fade-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockTouch;
