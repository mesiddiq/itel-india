import React from 'react';

const PicturePerfect = () => {
  return (
    <div className='block md:flex relative w-full h-[790px] md:h-[800px] px-[16px] md:px-0 pt-[12px] md:pt-[120px] pb-0 md:pb-[120px] bg-[url("/smartphone/S23+/Backgrounds/PicturePerfectBg.webp")] bg-cover bg-center overflow-hidden' style={{ marginTop: '0px' }}>
      <div className='md:flex md:content gap-4'>
        <div className='hidden md:flex w-[60%]'>
          <img src='/smartphone/S23+/Backgrounds/PicturePerfectPhone.webp' className='absolute bottom-0' data-aos="fade-right" />
        </div>
        <div className='w-full md:w-[40%]'>
          <h3 className='linear-gradient text-[24px] md:text-[48px] font-markot font-[500] w-[60%] md:w-full'>Picture Perfect Ultra Clear Camera</h3>
          <div className='flex gap-4 pt-4 md:pt-8' data-aos="fade-down">
            <h3 className='flex items-center'><img src='/smartphone/S23+/Backgrounds/PicturePerfectIcon.svg' className='w-[32px] md:w-[48px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-mobile/h6 md:text-desktop/h3 font-markot'>50MP</span></h3>
            <img src='/smartphone/S23+/Backgrounds/SnapFlawlessSelfieBorder.svg' className='h-[32px] md:h-[48px] mt-[5px]' />
            <h3 className='text-[#FFFFFF] text-mobile/h6 md:desktop/h5/medium font-markot md:mt-2'>AI Dual<br />Rear Camera</h3>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-[40px] md:mt-[80px]'>
            <div className='col-span-1' data-aos="fade-up">
              <div className='flex md:flex-col items-start'>
                <img src='/smartphone/S23+/Backgrounds/PicturePerfectIconGroupOne.svg' className='h-[28px] md:h-[42px] mb-[15px] pr-[12px]' />
                <div>
                  <h6 className='text-[#EBE8E2] text-mobile/h7 md:text-desktop/h6/medium font-markot mb-[10px]'>Super Night Mode</h6>
                  <p className='text-[#EBE8E2] text-mobile/small/body md:text-desktop/caption font-markot'>Take clear & bright photos at night</p>
                </div>
              </div>
            </div>
            <div className='col-span-1' data-aos="fade-up">
              <div className='flex md:flex-col items-start'>
                <img src='/smartphone/S23+/Backgrounds/PicturePerfectIconGroupTwo.svg' className='h-[28px] md:h-[42px] mb-[15px] pr-[12px]' />
                <div>
                  <h6 className='text-[#EBE8E2] text-mobile/h7 md:text-desktop/h6/medium font-markot mb-[10px]'>Time-Lapse Mode</h6>
                  <p className='text-[#EBE8E2] text-mobile/small/body md:text-desktop/caption font-markot'>Capture life's moments in mesmerizing fast-forward with the time-lapse camera mode on your smartphone</p>
                </div>
              </div>
            </div>
            <div className='col-span-1' data-aos="fade-up">
              <div className='flex md:flex-col items-start'>
                <img src='/smartphone/S23+/Backgrounds/PicturePerfectIconGroupThree.svg' className='h-[28px] md:h-[42px] mb-[15px] pr-[12px]' />
                <div>
                  <h6 className='text-[#EBE8E2] text-mobile/h7 md:text-desktop/h6/medium font-markot mb-[10px]'>HDR 4.0 Mode</h6>
                  <p className='text-[#EBE8E2] text-mobile/small/body md:text-desktop/caption font-markot'>Experience vivid detail and lifelike clarity with HDR 4.0 mode</p>
                </div>
              </div>
            </div>
            <div className='col-span-1' data-aos="fade-up">
              <div className='flex md:flex-col items-start'>
                <img src='/smartphone/S23+/Backgrounds/PicturePerfectIconGroupFour.svg' className='h-[28px] md:h-[42px] mb-[15px] pr-[12px]' />
                <div>
                  <h6 className='text-[#EBE8E2] text-mobile/h7 md:text-desktop/h6/medium font-markot mb-[10px]'>Pro Mode</h6>
                  <p className='text-[#EBE8E2] text-mobile/small/body md:text-desktop/caption font-markot'>Click like a professional creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex md:hidden w-full p-4 pb-0 pt-10'>
          <img src='/smartphone/S23+/Backgrounds/PicturePerfectPhone.webp' data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
};

export default PicturePerfect;
