import React from 'react';

import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG';

const BeUnstoppable = () => {
  return (
    <div className='block md:flex relative w-full px-[16px] md:px-[80px] pt-[40px] md:pt-[120px] bg-[#181818] overflow-hidden'>
      <div className='content'>
        <div className='grid grid-cols-1 md:grid-cols-[70%_30%] gap-4'>
          <div className='col-span-1'>
            <h2 className='text-mobile/h4 md:text-desktop/h2 text-[#FFFFFF] font-markot'>Be Unstoppable: Color Changing Back Technology with 5G Power</h2>
            <p className='text-mobile/body/1/regular md:text-desktop/body/1 text-[#FFFFFF] font-markot pt-[20px]'>The revolutionary itel Color Pro 5G smartphone has arrived, bringing in breathtaking IVCO (itel Vivid Color Technology) that transforms its back with every shift of sunlight. Embrace the future with blazing-fast 5G speed powered by NRCA, letting you multitask, download & surf the internet at warp speed, and dominate your online wo...</p>
            <p className='text-mobile/title md:text-desktop/button text-[#FFFFFF] font-markot pt-[10px]'>READ MORE</p>
            <div className='hidden md:flex items-center pt-8'>
              <BuyNowSquareBG />
              <p className='text-mobile/small/body text-[#FFFFFF] md:text-[20px] font-[400] pl-4 font-markot'>Starting from <span className='text-mobile/h5 md:text-desktop/h5'>₹9,999/-</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeUnstoppable;
