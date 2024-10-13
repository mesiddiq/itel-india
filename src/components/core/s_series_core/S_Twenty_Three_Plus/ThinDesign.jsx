import React from 'react';

const ThinDesign = () => {
  return (
    <div className='thin-design-section items-center justify-center'>
      <div className='w-[60%] flex flex-col items-center relative'>
        <img src='/s_twenty_three_plus/ThinDesignMobileText.svg' className='absolute left-[12%] top-[-43px]' />
        <img src='/s_twenty_three_plus/ThinDesignMobileTopArrow.svg' className='absolute top-[-43px]' />
        <img src='/s_twenty_three_plus/ThinDesignMobile.svg' />
        <img src='/s_twenty_three_plus/ThinDesignMobileBottomArrow.svg' className='absolute top-[55px]' />
      </div>
    </div>
  );
};

export default ThinDesign;
