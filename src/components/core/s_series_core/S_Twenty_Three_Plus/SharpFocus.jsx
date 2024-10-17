import React from 'react';

const SharpFocus = (props) => {
  const { scrollY } = props;

  return (
    <div className='sharp-focus-section'>
      <div className='content'>
        <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot mb-8'>Enhance your photos with<br />Eye-Tracking Technology</h3>
        <div className='grid grid-cols-[15%_85%] md:grid-cols-[25%_75%] relative'>
          <div className='col-span-1'>
            <img src='/s_twenty_three_plus/SharpFocusCardOneText.svg' alt='SharpFocusCardOneText' className='sharp-focus-section-text absolute left-[-12px] md:left-[80px] bottom-0 md:top-0' />
          </div>
          <div className='col-span-1'>
            <img src='/s_twenty_three_plus/SharpFocusCardOneImage.svg' alt='SharpFocusCardOneImage' 
            />
          </div>
        </div>
        <div className='md:hidden'>
          <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot my-8 text-end'>Crystal-Clear Shots,<br />Even in Dim Light</h3>
          <div className='grid md:hidden grid-cols-[85%_15%] relative'>
            <div className='col-span-1'>
              <img src='/s_twenty_three_plus/SharpFocusCardTwoImage.svg' alt='SharpFocusCardTwoImage' className='w-full' />
            </div>
            <div className='col-span-1'>
              <img src='/s_twenty_three_plus/SharpFocusCardTwoText.svg' alt='SharpFocusCardTwoText' className='sharp-focus-section-text absolute right-[-5px] bottom-0' />
            </div>
          </div>
          <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot my-8'>Master Your Shots: Unlock<br />Advanced Photography</h3>
          <div className='grid grid-cols-[15%_85%] relative'>
            <div className='col-span-1'>
              <img src='/s_twenty_three_plus/SharpFocusCardThreeText.svg' alt='SharpFocusCardThreeText' className='sharp-focus-section-text absolute left-[-12px] bottom-0' />
            </div>
            <div className='col-span-1'>
              <img src='/s_twenty_three_plus/SharpFocusCardThreeImage.svg' alt='SharpFocusCardThreeImage' className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharpFocus;
