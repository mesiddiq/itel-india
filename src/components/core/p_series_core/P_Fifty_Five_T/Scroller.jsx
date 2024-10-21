import React from 'react';
import Marquee from 'react-fast-marquee';

const Scroller = () => {
  return (
    <div className='w-full overflow-hidden relative items-center justify-center bg-[#050036]'>
      <Marquee speed='50' direction='right' autoFill={true}>
        <h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] py-2'>
          <img src='/smartphone/p55T/Backgrounds/MarqueeIcon.webp' alt='MarqueeIcon' className='px-3' /> <h1 className='bg-gradient-to-br from-[#EECF7F] to-[#D2B363] inline-block text-transparent bg-clip-text text-[20px] font-bricolage font-[800] uppercase'>Power Series</h1>
          <img src='/smartphone/p55T/Backgrounds/MarqueeIcon.webp' alt='MarqueeIcon' className='px-3' /> <h1 className='bg-gradient-to-br from-[#EECF7F] to-[#D2B363] inline-block text-transparent bg-clip-text text-[20px] font-bricolage font-[800] uppercase'>Intensively Powerful</h1>
        </h3>
      </Marquee>
      <img src='/smartphone/p55T/Backgrounds/Patterns.webp' className='w-full' />
    </div>
  );
};

export default Scroller;
