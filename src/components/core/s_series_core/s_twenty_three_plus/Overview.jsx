import React from 'react';

const OverviewTwo = (props) => {
  return (
    <div className='relative w-full px-[16px] lg:px-0 py-[40px] lg:py-[120px] h-[1000px] lg:h-auto bg-[#1C1B1B] overflow-hidden' id='overview' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[185px] lg:min-h-[120px]'>
          <div className='col-span-1'>
            <h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text text-desktop/h4 md:text-desktop/h2 font-markot'>Redefining Style with 3D Curved AMOLED Display</h3>
          </div>
          <div className='col-span-1 pt-[10px]'>

            <p className='text-desktop/body/2/regular md:text-desktop/body/1 text-[#D9D9D9] font-markot animate-slide-down'>
              Experience the future of mobile tech with the itel S23+ smartphone, featuring a sleek 3D curved 6.78″ FHD+ AMOLED display, a robust 5000 mAh battery with fast charging, and a stunning 50MP AI dual rear camera setup, all wrapped in an ultra-slim 7.9mm body for an effortlessly stylish experience.
            </p>

          </div>
        </div>
        <div className='h-[16px] lg:h-[80px]'></div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='col-span-1 p-[16px] lg:p-[40px] mx-0 lg:mx-[25px] my-[16px] lg:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
            <img src='/smartphone/S23+/Backgrounds/OverviewCardOne.svg' alt='OverviewCardOne' data-aos='fade-up' />
            <h3 className='text-mobile/h5/medium lg:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] lg:py-[20px]' data-aos='fade-up'>
              3D Curved Brilliance: 6.78” FHD+ AMOLED Display
            </h3>
            <p className='text-desktop/body/2/regular lg:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Elevate your vision with itel S23+ smartphone with sleek 3D curved AMOLED display.
            </p>
          </div>
          <div className='col-span-1 p-[16px] lg:p-[40px] mx-0 lg:mx-[25px] my-[16px] lg:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
            <img src='/smartphone/S23+/Backgrounds/OverviewCardTwo.svg' alt='OverviewCardTwo' data-aos='fade-up' />
            <h3 className='text-mobile/h5/medium lg:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] lg:py-[20px]' data-aos='fade-up'>
              Snap in Style with 50MP AI Dual Rear Camera & 32MP Front Camera
            </h3>
            <p className='text-desktop/body/2/regular lg:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Capture every moment in jaw-dropping detail with our 50MP AI dual rear camera and 32 MP Front Camera set-up.
            </p>
          </div>
          <div className='col-span-1 p-[16px] lg:p-[40px] mx-0 lg:mx-[25px] my-[16px] lg:my-0 rounded-[16px] min-h-[210px] lg:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
            <img src='/smartphone/S23+/Backgrounds/OverviewCardThree.svg' alt='OverviewCardThree' data-aos='fade-up' />
            <h3 className='text-mobile/h5/medium lg:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] lg:py-[20px]' data-aos='fade-up'>
              5000 mAh Battery with 18W Type-C Charger
            </h3>
            <p className='text-desktop/body/2/regular lg:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Power through your day with a 5000 mAh Battery. Recharge quickly and efficiently with the 18W Type-C Charger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTwo;
