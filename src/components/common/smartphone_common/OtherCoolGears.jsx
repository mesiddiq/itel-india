import React from 'react';

import Button from '../../common/Button';

const OtherCoolGears = () => {
  return (
    <>
      <div className='flex px-[16px] md:px-[80px] pt-[40px] pb-[20px]' style={{ marginTop: '0px' }}>
        <h3 className='text-mobile/h4 md:text-desktop/h3 text-[#FFFFFF]'>Take a quick Peep on our other cool gears!</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 px-[16px] md:px-[80px] pb-[40px]" style={{ marginTop: '0px' }}>
        <div class="group col-span-1 md:col-span-2 bg-[#232322] p-[20px] rounded-[16px] h-[258px] relative overflow-hidden">
          <div className='grid grid-cols-2'>
            <div className='col-span-1 w-[200%]'>
              <h3 className='text-mobile/h5/medium md:text-desktop/h4 text-[#FFFFFF] pb-[10px]'>Smart Gadgets and Wearables, Exquisite Design and Power</h3>
              <p className='flex items-center text-mobile/button md:text-desktop/button text-[#F8F6F3]'>
                READ MORE 
                <img src='/arrow.png' alt='arrow' className='ml-2 mt-1' />
              </p>
            </div>
            <div className='col-span-1 flex justify-center items-center h-full'>
              <img 
                src='/EnjoyBetterLifeCol2Bg.png'
                alt="EnjoyBetterLifeCol2Bg" 
                className="max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110" 
              />
              <img 
                src='/OtherCoolGearsCardOne.svg' 
                alt="OtherCoolGearsColOne" 
                className="max-w-[50%] md:max-w-auto h-auto absolute bottom-[-15px] right-0 transition-transform duration-300 transform scale-100 group-hover:scale-105" 
              />
              <img 
                src='/OtherCoolGearsCardOneTwo.svg' 
                alt="OtherCoolGearsColOneTwo" 
                className="max-w-[50%] md:max-w-auto h-auto absolute bottom-0 right-32 md:right-44 transition-transform duration-300 transform scale-100 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
        <div class="group col-span-1 bg-[#232322] p-[20px] rounded-[16px] h-[258px] relative overflow-hidden">
          <div className='grid grid-cols-2'>
            <div className='col-span-1 w-[200%]'>
              <h3 className='text-mobile/h5/medium md:text-desktop/h4 text-[#FFFFFF] pb-[10px]'>Smart TV, Non-Stop Entertainment</h3>
              <p className='flex items-center text-mobile/button md:text-desktop/button text-[#F8F6F3]'>
                READ MORE 
                <img src='/arrow.png' alt='arrow' className='ml-2 mt-1' />
              </p>
            </div>
            <div className='col-span-1 flex justify-center items-center h-full'>
              <img 
                src='/EnjoyBetterLifeCol3Bg.png'
                alt="EnjoyBetterLifeCol3Bg" 
                className="max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110" 
              />
              <img 
                src='/EnjoyBetterLifeCol3.png'
                alt="EnjoyBetterLifeCol3" 
                className="max-w-full h-auto absolute bottom-0 transition-transform duration-300 transform scale-100 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
        <div class="group col-span-1 bg-[#232322] p-[20px] rounded-[16px] h-[258px] relative overflow-hidden">
          <div className='grid grid-cols-2'>
            <div className='col-span-1 w-[200%]'>
              <h3 className='text-mobile/h5/medium md:text-desktop/h4 text-[#FFFFFF] pb-[10px]'>Feature Phones-<span className='text-mobile/h6 md:text-desktop/h6'>Stay Connected All Day Long</span></h3>
              <p className='flex items-center text-mobile/button md:text-desktop/button text-[#F8F6F3]'>
                READ MORE 
                <img src='/arrow.png' alt='arrow' className='ml-2 mt-1' />
              </p>
            </div>
            <div className='col-span-1 flex justify-center items-center h-full'>
              <img 
                src='/EnjoyBetterLifeCol3Bg.png'
                alt="EnjoyBetterLifeCol3Bg" 
                className="max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110" 
              />
              <img 
                src='/OtherCoolGearsCardThree.svg'
                alt="OtherCoolGearsCardThree" 
                className="max-w-full h-auto absolute bottom-0 transition-transform duration-300 transform scale-100 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherCoolGears;
