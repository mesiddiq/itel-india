import React, { useState, useEffect } from 'react';

const UnlockTouch = (props) => {
  const { scrollY } = props;
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showFinger, setShowFinger] = useState(false);
  const [showFingerPrint, setShowFingerPrint] = useState(false);
  const title = 'Unlock with a Touch: In-Display Fingerprint'

  useEffect(() => {
    if (screen.width > 1000) {
      setStartAnimation(scrollY >= 9200);
    } else {
      setStartAnimation(scrollY >= 5350);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log("startUnlockTouchAnimation", startAnimation);
    if (startAnimation) {
      const titleInterval = setInterval(() => {
        if (titleIndex < title.length) {
          setTitleIndex((prev) => prev + 1);
        } else {
          clearInterval(titleInterval);
          setIsTitleComplete(true);
        }
      }, 30);

      return () => clearInterval(titleInterval);
    }
  }, [startAnimation, titleIndex]);

  useEffect(() => {
    if (isTitleComplete) {
      const paragraphTimeout = setTimeout(() => {
        setShowParagraph(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(paragraphTimeout);
    }
  }, [isTitleComplete]);

  useEffect(() => {
    if (showParagraph) {
      const showPhoneTimeout = setTimeout(() => {
        setShowPhone(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(showPhoneTimeout);
    }
  }, [showParagraph]);

  useEffect(() => {
    if (showPhone) {
      const showFingerPrintTimeout = setTimeout(() => {
        setShowFingerPrint(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(showFingerPrintTimeout);
    }
  }, [showPhone]);

  useEffect(() => {
    if (showFingerPrint) {
      const showFingerTimeout = setTimeout(() => {
        setShowFinger(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(showFingerTimeout);
    }
  }, [showFingerPrint]);

  return (
    <div className='unlock-touch-section'>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-4'>
        <div className='col-span-1 text-left pt-8'>
          <h3 className={`linear-gradient text-mobile/h4 md:text-desktop/h2 font-markot mb-[20px] w-[65%]`}>{title.slice(0, titleIndex)}</h3>
          {showParagraph && (<p className='w-[55%] md:w-[70%] md:w-full text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large font-markot mb-[20px] md:mb-[80px] slideInFromLeft'>Effortlessly access your device with the touch of a finger - seamless security and convenience with in-display finger unlock.</p>)}
        </div>
        <div className='col-span-1'>
          <div className='hidden md:flex justify-center'>
            {showPhone && (<img src='/s_twenty_three_plus/UnlockTouchPhone.svg' className='absolute top-0 slideInFromTop' />)}
            {showFingerPrint && (<img src='/s_twenty_three_plus/UnlockTouchFingerPrint.svg' className='absolute top-[50%] ml-[-30px] slideInFromTop' />)}
            {showFinger && (<img src='/s_twenty_three_plus/UnlockTouchFinger.svg' className='absolute bottom-0 ml-[-770px] slideInFromTop' />)}
          </div>
          <div className='flex md:hidden'>
            {showPhone && (<img src='/s_twenty_three_plus/UnlockTouchPhoneSM.svg' className='absolute top-[80px] right-[40px] w-[109px] h-[284px] slideInFromTop' />)}
            {showFingerPrint && (<img src='/s_twenty_three_plus/UnlockTouchFingerPrint.svg' className='absolute top-[55%] right-[90px] ml-[-30px] w-[18px] h-[28px] slideInFromTop' />)}
            {showFinger && (<img src='/s_twenty_three_plus/UnlockTouchFingerMobile.svg' className='absolute left-0 bottom-[-50px] w-[450px] slideInFromTop' />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockTouch;
