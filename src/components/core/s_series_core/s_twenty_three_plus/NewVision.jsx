import React, { useState, useEffect } from 'react';

const NewVision = (props) => {
  const { scrollY } = props;
  const [startAnimation, setStartAnimation] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showMobileImage, setShowMobileImage] = useState(false);

  useEffect(() => {
    if (screen.width > 1000) {
      setStartAnimation(scrollY >= 3450);
    } else {
      setStartAnimation(scrollY >= 2250);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log("startNewVisionAnimation", startAnimation);
    if (startAnimation) {
      const startVideo = setTimeout(() => {
        setShowImage(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(startVideo);
    }
  }, [startAnimation]);

  useEffect(() => {
    if (showImage) {
      const headingTimeout = setTimeout(() => {
        setShowHeading(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(headingTimeout);
    }
  }, [showImage]);

  useEffect(() => {
    if (showHeading) {
      const textTimeout = setTimeout(() => {
        setShowText(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(textTimeout);
    }
  }, [showHeading]);

  useEffect(() => {
    if (showText) {
      const mobileImageTimeout = setTimeout(() => {
        setShowMobileImage(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(mobileImageTimeout);
    }
  }, [showText]);
  
  return (
    <div className='new-vision-section'>
    	<div className='hidden md:flex w-1/2 p-4'>
        {showImage && (<img src='/s_twenty_three_plus/StepIntoNewVisionPhone.svg' className='w-full slideInFromLeft' />)}
      </div>
      <div className='w-full md:w-1/2 p-4 md:pt-24 text-center'>
        {showHeading && (
          <div className='animate-slide-down'>
            <h3 className='linear-gradient text-mobile/h4 md:text-desktop/h2'>Step into the New Vision</h3>
            <p className='text-[#F2F2F2] text-mobile/h6 md:text-desktop/h4 mt-[20px] mb-[30px]'>6.78" FHD+ Amoled Display<br />3D Curved Screen</p>
          </div>
        )}
        {showText && (
        <div className='grid grid-cols-[0%_35%_10%_55%] md:grid-cols-[15%_35%_10%_40%] md:gap-4 animate-slide-down'>
          <div className='text-[#FFFFFF]'>
          </div>
          <div className='text-[#FFFFFF] md:text-left'>
            <h3 className='text-mobile/h6 md:text-desktop/h3 mb-[8px]'>2400 x 1080</h3>
            <p className='text-mobile/small/body md:text-desktop/body/1'>Pixels Resolution</p>
          </div>
          <div className='text-[#FFFFFF]'>
            <img src='/s_twenty_three_plus/StepIntoNewVisionBorder.svg' className='w-full md:w-auto h-[66px] md:h-[110px] mt-0 md:mt-[5px]' />
          </div>
          <div className='text-[#FFFFFF] md:text-left'>
            <h3 className='text-mobile/h6 md:text-desktop/h3 mb-[8px]'>Gorilla Glass 5</h3>
            <img src='/s_twenty_three_plus/StepIntoNewVisionFrame.svg' />
          </div>
        </div>
        )}
      </div>
      <div className='flex md:hidden w-full p-4'>
        {showMobileImage && (<img src='/s_twenty_three_plus/StepIntoNewVisionPhone.svg' className='w-full animate-slide-down' />)}
      </div>
    </div>
  );
};

export default NewVision;
