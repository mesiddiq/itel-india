import React, { useState, useEffect } from 'react';

const ThinDesign = (props) => {
  const { scrollY } = props;
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const title = 'Ultra-Thin Design: Perfectly Crafted for New Age Style'

  useEffect(() => {
    if (screen.width > 1000) {
      setStartAnimation(scrollY >= 7700);
    } else {
      setStartAnimation(scrollY >= 5700);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log('startAnimation', startAnimation);
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
      }, 1000); // Delay before showing the paragraph

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
  
  return (
    <>
    <div className='thin-design-mobile-text block md:hidden'>
      <h3 className='linear-gradient text-mobile/h4 md:text-desktop/h2 mb-5'>{title.slice(0, titleIndex)}</h3>
      {showParagraph && (<p className='w-[70%] md:w-full text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large mb-5 md:mb-20 slideInFromLeft'>7.9mm Slim Depth Body</p>)}
    </div>
    <div className='thin-design-section items-center justify-center'>
      <div className='flex flex-col items-center relative'>
        {showPhone && (<img src='/s_twenty_three_plus/DesignMobilePack.png' className='slideInFromTop' />)}
      </div>
      <div className='hidden md:block absolute left-[120px] bottom-0'>
        <h3 className={`linear-gradient text-mobile/h4 md:text-desktop/h2 mb-[20px] w-[60%]`}>{title.slice(0, titleIndex)}</h3>
        {showParagraph && (<p className='w-[70%] md:w-full text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large mb-[20px] md:mb-[80px] slideInFromLeft'>7.9mm Slim Depth Body</p>)}
      </div>
    </div>
    </>
  );
};

export default ThinDesign;
