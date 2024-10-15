import React from 'react';

const SharpFocus = (props) => {
  const { scrollY } = props;

  return (
    <div className='sharp-focus-section'>
      <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 mb-8'>
        Enhance your photos with<br />Eye-Tracking Technology
      </h3>
      <div className='grid grid-cols-[25%_75%] relative'>
        <div className='col-span-1'>
          <img src='/s_twenty_three_plus/SharpFocusCardOneText.svg' alt='SharpFocusCardOneText' className='sharp-focus-section-text absolute left-[10%] bottom-0' />
        </div>
        <div className='col-span-1'>
          <img src='/s_twenty_three_plus/SharpFocusCardOneImage.svg' alt='SharpFocusCardOneImage' 
          />
        </div>
      </div>
      <div className='md:hidden'>
        <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 my-8 text-end'>
          Crystal-Clear Shots,<br />Even in Dim Light
        </h3>
        <div className='grid md:hidden grid-cols-[75%_25%] relative'>
          <div className='col-span-1'>
            <img src='/s_twenty_three_plus/SharpFocusCardTwoImage.svg' alt='SharpFocusCardTwoImage' />
          </div>
          <div className='col-span-1'>
            <img src='/s_twenty_three_plus/SharpFocusCardTwoText.svg' alt='SharpFocusCardTwoText' className='sharp-focus-section-text absolute right-[10%] bottom-0' />
          </div>
        </div>
        <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 my-8'>
          Master Your Shots: Unlock<br />Advanced Photography
        </h3>
        <div className='grid grid-cols-[25%_75%] relative'>
          <div className='col-span-1'>
            <img src='/s_twenty_three_plus/SharpFocusCardThreeText.svg' alt='SharpFocusCardThreeText' className='sharp-focus-section-text absolute left-[10%] bottom-0' />
          </div>
          <div className='col-span-1'>
            <img src='/s_twenty_three_plus/SharpFocusCardThreeImage.svg' alt='SharpFocusCardThreeImage' 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharpFocus;
