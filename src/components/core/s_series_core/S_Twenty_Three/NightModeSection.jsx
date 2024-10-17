import React from 'react';

function NightModeSection() {
  return (
    <div className='bg-black opacity-90 h-[998px] md:h-[856px]  px-4 md:px-0'>
      <div className='md:py-10 content'>
        <h3 className='text-white text-mobile/h4 md:text-desktop/h2 font-markot mb-8 md:mt-14  md:mx-10 md:pt-0 pt-10'>
          Nightlife Alive:
          <span className="hidden md:inline"><br /></span>
          <span className="inline md:hidden ml-2"></span>
          Super Night Mode Engaged!
        </h3>
        <div className='grid grid-cols-[25%_75%] relative md:mt-12 md:mr-12'>
          <div className='col-span-1'>
            <img src='/smartphone/S_Twenty_Three/Night_Mode.webp' alt='' className='absolute md:left-[8%] md:bottom-[87px] left-[6%] bottom-0 max-md:h-[129px]' />
          </div>
          <div className='col-span-1'>
            <img src='/smartphone/S_Twenty_Three/Night1.webp' alt='Night Mode'
            />
          </div>
        </div>
        <div className='max-md:block hidden'>
          <h3 className='text-white text-mobile/h4 md:text-desktop/h2 my-9 text-end'>
            Ultra HD Mode<br /> with 10X Zoom
          </h3>
          <div className='grid md:hidden grid-cols-[75%_25%] relative'>
            <div className='col-span-1 '>
              <img src='/smartphone/S_Twenty_Three/10X_Zoom.webp' alt='' className='absolute right-10 -bottom-48 z-20' />
            </div>
            <div className='col-span-1'>
              <img src='/smartphone/S_Twenty_Three/Night2.webp' alt='`10X Zoom' className='absolute left-0 -bottom-48' />
            </div>
          </div>
          <h3 className='text-white text-mobile/h4 md:text-desktop/h2 mt-60'>
            Click Each Image with<br />Incredible Detail
          </h3>
          <div className='grid grid-cols-[25%_75%] relative mt-8'>
            <div className='col-span-1'>
              <img src='/smartphone/S_Twenty_Three/50Mp.webp' alt='' className=' absolute left-[8%] bottom-0' />
            </div>
            <div className='col-span-1'>
              <img src='/smartphone/S_Twenty_Three/Night3.webp' alt='50Mp Camera'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightModeSection;
