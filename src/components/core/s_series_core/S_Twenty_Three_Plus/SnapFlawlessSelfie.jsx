import React from 'react';

const SnapFlawlessSelfie = () => {
  return (
    <div className='snap-flawless-selfie-section'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-4'>
        <div className='col-span-1 text-center md:text-left'>
          <h1 className={`linear-gradient text-mobile/h4 md:text-desktop/h2 mb-[20px]`}>Snap Your Flawless Selfie</h1>
          <p className='text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large mb-[20px] md:mb-[80px]'>Capture flawless selfies with advanced features like Ultra HD resolution, Beauty mode, and Wide Selfie for expansive group shots.</p>
          <div className='hidden md:grid grid-cols-[45%_10%_45%] md:grid-cols-[25%_5%_70%] md:gap-4'>
            <div className='text-[#FFFFFF] md:text-left'>
              <h3 className='flex'><img src='/s_twenty_three_plus/SnapFlawlessSelfieFinger.svg' className='w-[26px] md:w-[40px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-mobile/h6 md:desktop/h3'>32MP</span></h3>
            </div>
            <div className='text-[#FFFFFF]'>
              <img src='/s_twenty_three_plus/SnapFlawlessSelfieBorder.svg' className='mt-0 md:mt-[5px]' />
            </div>
            <div className='text-[#FFFFFF] md:text-left'>
              <h3 className='text-[#FFFFFF] text-mobile/small/body md:desktop/body/2/regular my-[8px]'>Front AI<br />Camera</h3>
            </div>
          </div>
          <div className='flex md:hidden gap-4 justify-center align-center'>
            <h3 className='flex'><img src='/s_twenty_three_plus/SnapFlawlessSelfieFinger.svg' className='w-[26px] md:w-[40px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-[16px] md:text-[36px] font-[500]'>32MP</span></h3>
            <img src='/s_twenty_three_plus/SnapFlawlessSelfieBorder.svg' className='h-[26px] mt-0 md:mt-[5px]' />
            <h3 className='text-[#FFFFFF] text-mobile/small/body md:desktop/body/2/regular leading-[14px]'>Front AI<br />Camera</h3>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='flex justify-center'>
            <img src='/s_twenty_three_plus/SnapFlawlessSelfiePhoto.png' className='absolute bottom-16 pl-[10px] w-[157px] h-[214px] md:w-auto md:h-auto' />
            <img src='/s_twenty_three_plus/SnapFlawlessSelfiePhone.png' className='absolute bottom-0 w-[167px] h-[283px] md:w-auto md:h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapFlawlessSelfie;
