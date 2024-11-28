import React from 'react';

const FeaturesGrid = () => {
  return (
    <div className='block md:flex relative w-full px-[15px] md:px-[80px] pt-[20px] md:pt-[50px] pb-[40px] md:pb-[120px] bg-[#181818] overflow-hidden'>
      <div className='content'>
        <div className='grid grid-cols-1 md:grid-cols-[45%_27.5%_27.5%] gap-4'>
          <div className='relative col-span-1 md:row-span-2 rounded-[16px] h-[520px] md:h-auto overflow-hidden'>
            <video
              className='absolute top-0 left-0 w-full h-full object-cover'
              src='/smartphone/color-pro-5g/FeatureGrid/grid_color_change.mp4'
              autoPlay
              loop
              muted
            />
            <div className='relative z-[2] p-[25px]'>
              <h3 className='text-[22px] md:text-desktop/h3 leading-[29px] text-[#FFFFFF] font-markot'>The Future of Dynamic Color Change is Here</h3>
              <h5 className='text-[12.5px] md:text-desktop/h5 text-[#FFFFFF] font-markot pt-3 md:pt-4'>Lavender Fantasy | River Blue</h5>
            </div>
          </div>
          <div className='col-span-1 h-[340px] md:h-[375px] rounded-[16px] p-[20px] bg-[url("/smartphone/color-pro-5g/FeatureGrid/grid_5g.webp")] bg-cover bg-center bg-no-repeat'>
            <h5 className='text-mobile/h5/medium md:text-desktop/h5 text-[#FFFFFF] font-markot'>5G Power with NRCA Support</h5>
            <h5 className='text-mobile/body/large md:text-desktop/caption text-[#FFFFFF] font-markot pt-2'>Wider Network Reception | Higher Internet Speed | Low Latency | Higher Battery Life | Low Drop in Online Video Resolution</h5>
          </div>
          <div className='col-span-1 h-[340px] md:h-[375px] rounded-[16px] p-[20px] bg-[url("/smartphone/color-pro-5g/FeatureGrid/grid_ramrom.webp")] bg-cover bg-center bg-no-repeat'>
            <h4 className='text-mobile/h5/medium md:text-desktop/h4 text-[#FFFFFF] font-markot'>Store More, Run Smooth</h4>
            <h5 className='text-mobile/h6 md:text-desktop/h5/medium text-[#FFFFFF] font-markot pt-2'>12 GB* (6GB+6GB*) RAM | 128GB ROM</h5>
            <h5 className='text-mobile/body/large md:text-desktop/caption text-[#FFFFFF] font-markot pt-2'>With Memory Fusion Technology*</h5>
          </div>
          <div className='col-span-1 h-[340px] md:h-[375px] rounded-[16px] p-[20px] bg-[url("/smartphone/color-pro-5g/FeatureGrid/grid_processor.webp")] bg-cover bg-center bg-no-repeat'>
            <h4 className='text-mobile/h5/medium md:text-desktop/h4 text-[#FFFFFF] font-markot'>Superior Processor Power</h4>
            <h5 className='text-[16px] md:text-desktop/h5/medium leading-[19px] text-[#FFFFFF] font-markot pt-2'>MediaTek Dimensity 6080 (4,20,000 AnTuTu Score)</h5>
          </div>
          <div className='col-span-1 h-[340px] md:h-[375px] rounded-[16px] p-[20px] bg-[url("/smartphone/color-pro-5g/FeatureGrid/grid_ramrom.webp")] bg-cover bg-center bg-no-repeat'>
            <h4 className='text-mobile/h5/medium md:text-desktop/h4 text-[#FFFFFF] font-markot'>Endless Battery Power*</h4>
            <h5 className='text-[16px] md:text-desktop/h5/medium leading-[19px] text-[#FFFFFF] font-markot pt-2'>5000 mAh | 18W Fast Charging</h5>
          </div>
          <div className='col-span-1 md:col-span-3 relative h-[340px] md:h-[375px] rounded-[16px] p-[20px] pb-0 md:px-[40px] md:pt-[30px] bg-[url("/smartphone/color-pro-5g/FeatureGrid/grid_five.webp")] bg-cover bg-center bg-no-repeat'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
              <div className='col-span-1'>
                <h3 className='text-mobile/h5/medium md:text-desktop/h3 text-[#FFFFFF] font-markot z-[2]'>Get a Free Screen Replacement within 100 Days*</h3>
                <p className='text-desktop/caption md:text-[10px] text-[#FFFFFF] md:leading-[16px] font-markot pt-2 md:w-[55%]'>*Disclaimer: Terms & conditions apply. Offer valid for 100 days from the date of purchase and covers only the first screen breakage.</p>
              </div>
              <div className='col-span-1'>
                <img src='/smartphone/color-pro-5g/FeatureGrid/grid_screen_phone.png' />
              </div>
              <div className='col-span-1 md:col-span-2 relative'>
                <img src='/smartphone/color-pro-5g/FeatureGrid/Free-Screen-Replacement.webp' className='absolute bottom-0 opacity-40' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
