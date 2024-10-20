import React from 'react';

const SnapFlawlessSelfie = () => {

  return (
    <div className='flex relative w-full h-[468px] md:h-[800px] px-[16px] md:px-0 py-[12px] md:py-[120px] bg-[url("/SmartPhone/S23+/Backgrounds/SnapFlawlessSelfieBg.webp")] bg-cover bg-center overflow-hidden' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='col-span-1 text-center md:text-left'>
            <h1 className={`linear-gradient text-mobile/h4 md:text-desktop/h2 font-markot mb-[20px]`}>Snap Your Flawless Selfie</h1>
            <p className='text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large font-markot mb-[20px] md:mb-[80px]' data-aos="fade-down">Capture flawless selfies with advanced features like Ultra HD resolution, Beauty mode, and Wide Selfie for expansive group shots.</p>

            <div className='hidden md:grid grid-cols-[160px_10px_60px] md:gap-4' data-aos="fade-down">
              <div className='text-[#FFFFFF] md:text-left'>
                <h3 className='flex'><img src='/SmartPhone/S23+/Backgrounds/SnapFlawlessSelfieFinger.svg' className='w-[26px] md:w-[40px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-mobile/h6 md:text-desktop/h3 font-markot'>32MP</span></h3>
              </div>
              <div className='text-[#FFFFFF]'>
                <img src='/SmartPhone/S23+/Backgrounds/SnapFlawlessSelfieBorder.svg' className='mt-0 md:mt-[5px]' />
              </div>
              <div className='text-[#FFFFFF] md:text-left'>
                <h3 className='text-[#FFFFFF] text-mobile/small/body md:text-desktop/body/2/regular font-markot my-[8px]'>Front AI<br />Camera</h3>
              </div>
            </div>
            <div className='flex md:hidden gap-4 justify-center align-center' data-aos="fade-down">
              <h3 className='flex'><img src='/SmartPhone/S23+/Backgrounds/SnapFlawlessSelfieFinger.svg' className='w-[26px] md:w-[40px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-[16px] md:text-[36px] font-markot font-[500]'>32MP</span></h3>
              <img src='/SmartPhone/S23+/Backgrounds/SnapFlawlessSelfieBorder.svg' className='h-[26px] mt-0 md:mt-[5px]' />
              <h3 className='text-[#FFFFFF] text-mobile/small/body md:desktop/body/2/regular font-markot leading-[14px]'>Front AI<br />Camera</h3>
            </div>

          </div>
          <div className='col-span-1'>
            <div className='flex justify-center'>
              <img src='/SmartPhone/S23+/Backgrounds/SnapFlawlessSelfie.webp' className='absolute bottom-0 w-[167px] h-[283px] md:w-[400px] md:h-auto' data-aos="fade-down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapFlawlessSelfie;
