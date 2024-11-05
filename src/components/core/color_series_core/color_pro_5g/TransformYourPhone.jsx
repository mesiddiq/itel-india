import React, { useState, useEffect } from 'react';

const TransformYourPhone = () => {
  const [transformYourPhoneVideoSrc, setTransformYourPhoneVideoSrc] = useState(false);

  useEffect(() => {
    if (screen.width > 1000) {
      setTransformYourPhoneVideoSrc("/smartphone/color-pro-5g/TransformYourPhone/video.mp4");
    } else {
      setTransformYourPhoneVideoSrc("/smartphone/color-pro-5g/TransformYourPhone/videoMobile.mp4");
    }
  }, []);

  return (
    <div className='flex relative w-full h-[650px] md:h-[800px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[#000000] md:bg-none overflow-hidden'>
      <div className='content'>
        <video
          className='absolute bottom-0 md:top-0 left-0 w-full h-full object-cover'
          src={transformYourPhoneVideoSrc}
          autoPlay
          loop
          muted
        />
        <div className='relative z-20'>
          <div className='grid grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <img src='/smartphone/color-pro-5g/TransformYourPhone/ivco.png' />
              <h2 className='text-mobile/h4 md:text-[60px] text-[#FFFFFF] md:leading-[72px] font-markot pt-5'>Transform Your Phone With Every Ray of Sunlight</h2>
              <p className='text-mobile/body/2 md:text-desktop/body/large text-[#FFFFFF] font-markot pt-5'>Discover the enchantment of color-changing back technology in two color models: Lavender Fantasy | River Blue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformYourPhone;
