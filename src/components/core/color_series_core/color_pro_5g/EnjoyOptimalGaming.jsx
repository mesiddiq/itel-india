import React from 'react';

const EnjoyOptimalGaming = () => {
  return (
    <div className='flex w-full md:items-center h-[700px] md:h-[860px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[url("/smartphone/color-pro-5g/EnjoyOptimalGaming/bgMobile.webp")] md:bg-[url("/smartphone/color-pro-5g/EnjoyOptimalGaming/bg.webp")] bg-cover bg-center bg-no-repeat overflow-hidden'>
      <div className='content relative'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='col-span-1'>
            <div className='flex flex-col'>
              <h2 className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot md:w-[90%]'>Enjoy Optimal Gaming Performance</h2>
              <p className='text-[16px] md:text-desktop/body/large text-[#FFFFFF] font-markot md:w-[80%] pt-5'>The Color Pro 5G is perfect for maximizing your gaming enjoyment with low power consumption, rapid performance, and enhanced image processing.</p>
              <div className='grid grid-cols-[25%_30%_45%] md:grid-cols-[25%_25%_50%] gap-2 md:gap-4'>
                <div className='col-span-1 pt-5 md:pt-10'>
                  <img src='/smartphone/color-pro-5g/EnjoyOptimalGaming/charge.png' className='w-[32px] md:w-[40px]' />
                  <h6 className='text-mobile/desktop/caption md:text-desktop/h6/medium text-[#FFFFFF] font-markot pt-5 pb-3'>Octa-core</h6>
                  <h4 className='text-mobile/h5 md:text-desktop/h4 text-[#FFFFFF] font-markot pt-0'>6nm</h4>
                </div>
                <div className='col-span-1 pt-5 md:pt-10'>
                	<img src='/smartphone/color-pro-5g/EnjoyOptimalGaming/folder.png' className='w-[32px] md:w-[40px]' />
                  <h6 className='text-mobile/desktop/caption md:text-desktop/h6/medium text-[#FFFFFF] font-markot pt-5 pb-3'>Storage Type</h6>
                  <h4 className='text-mobile/h5 md:text-desktop/h4 text-[#FFFFFF] font-markot pt-0'>UMCP</h4>
                </div>
                <div className='col-span-1 pt-5 md:pt-10'>
                  <img src='/smartphone/color-pro-5g/EnjoyOptimalGaming/game.png' className='w-[32px] md:w-[40px]' />
                  <h6 className='text-mobile/desktop/caption md:text-desktop/h6/medium text-[#FFFFFF] font-markot pt-5 pb-3'>Primary Clock Speed</h6>
                  <h4 className='text-mobile/h5 md:text-desktop/h4 text-[#FFFFFF] font-markot pt-0'>2.4GHz</h4>
                </div>
              </div>
              <h2 className='text-mobile/h1 md:text-desktop/h1 text-[#FFFFFF] font-markot md:w-[90%] pt-5 md:pt-20 pb-0'>4,20,000*</h2>
              <h6 className='text-mobile/body/2/regular md:text-desktop/h6/medium text-[#FFFFFF] font-markot md:w-[90%]'>AnTutu Score</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnjoyOptimalGaming;
