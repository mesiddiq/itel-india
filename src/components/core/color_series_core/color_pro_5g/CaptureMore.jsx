import React from 'react';

const CaptureMore = () => {
  return (
    <div className='flex w-full items-center h-[860px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] bg-[url("/smartphone/color-pro-5g/CaptureMore/bg.png")] bg-cover bg-center bg-no-repeat overflow-hidden'>
      <div className='content relative'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='col-span-1'>
            <div className='flex flex-col'>
              <h2 className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot p-5'>Capture More with Smart Scene Detection</h2>
              <p className='text-[16px] md:text-desktop/body/large text-[#FFFFFF] font-markot p-5 pt-0'>Wide Shot AI Camera automatically detects scenes and adjusts settings to deliver optimal image quality. It also offers advanced smart beauty effects to showcase your best self.</p>
              <div className='grid grid-cols-[35%_10%_55%]'>
                <div className='col-span-1'>
                  <h3 className='text-mobile/h6 md:text-desktop/h3 text-[#FFFFFF] font-markot p-5'>50MP AI</h3>
                  <p className='text-mobile/small/body md:text-desktop/body/1 text-[#FFFFFF] font-markot p-5 pt-0'>Rear Camera</p>
                </div>
                <div className='col-span-1'>
                </div>
                <div className='col-span-1'>
                  <h3 className='text-mobile/h6 md:text-desktop/h3 text-[#FFFFFF] font-markot p-5'>8MP</h3>
                  <p className='text-mobile/small/body md:text-desktop/body/1 text-[#FFFFFF] font-markot p-5 pt-0'>Selfie Camera</p>
                </div>
              </div>
              <p className='text-mobile/small/button md:text-desktop/body/large text-[#FFFFFF] font-markot p-5 pt-20'>Dual Video Mode | Document | Slow Motion Mode | AR Shots | Short Video | Pro | Sky Shop | Time Lapse | Panaroma | Super Night Mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptureMore;
