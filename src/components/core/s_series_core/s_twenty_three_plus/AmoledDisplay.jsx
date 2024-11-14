import React from 'react';

const AmoledDisplay = () => {
  return (
    <div className='flex relative w-full h-[330px] md:h-[600px] lg:h-[800px] p-0 bg-[url("/smartphone/S23+/Backgrounds/AmoledDisplayBg.webp")] bg-cover bg-center overflow-hidden' style={{ marginTop: '0px' }}>
        <div className='content'>
          <div className='w-[80%] lg:w-auto absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-[9]'>
            <img src='/smartphone/S23+/Backgrounds/AmoledDisplayGraphic.webp' className='transform scale-[1.2]' data-aos="fade-up" />
          </div>
        </div>
    </div>
  );
};

export default AmoledDisplay;
