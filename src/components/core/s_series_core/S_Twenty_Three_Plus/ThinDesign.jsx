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
      setStartAnimation(scrollY >= 10050);
    } else {
      setStartAnimation(scrollY >= 5800);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log('startAnimation', startAnimation);
    if (startAnimation) {
      const showPhoneTimeout = setTimeout(() => {
        setShowPhone(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(showPhoneTimeout);
    }
  }, [startAnimation]);

  useEffect(() => {
    if (showPhone) {
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
  }, [showPhone, titleIndex]);
  
  useEffect(() => {
    if (isTitleComplete) {
      const paragraphTimeout = setTimeout(() => {
        setShowParagraph(true);
      }, 1000); // Delay before showing the paragraph

      return () => clearTimeout(paragraphTimeout);
    }
  }, [isTitleComplete]);

  return (
    <>
    <div className='block relative md:hidden h-[130px] px-[16px] pt-[12px] pb-[1px] z-2' style={{ marginTop: '0px', background: 'linear-gradient(270deg, #000000 0%, #0E1D31 50%, #000000 100%)' }}>
      <h3 className='linear-gradient text-mobile/h4 md:text-desktop/h2 font-markot mb-5'>{title.slice(0, titleIndex)}</h3>
      {showParagraph && (<p className='w-[70%] md:w-full text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large font-markot mb-5 md:mb-20' data-aos="fade-down">7.9mm Slim Depth Body</p>)}
    </div>
    <div className='flex flex-col relative items-center justify-center w-full h-[175px] md:h-[800px] px-[16px] md:px-0 py-[12px] md:py-[120px] bg-[url("/s_twenty_three_plus/ThinDesign.svg")] bg-cover bg-no-repeat bg-top bg-center' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='flex flex-col items-center relative md:top-[-60%]'>
          {showPhone && (<img src='/s_twenty_three_plus/DesignMobilePack.png' data-aos="fade-down" />)}
        </div>
        <div className='hidden md:block absolute left-[120px] bottom-0'>
          <h3 className={`linear-gradient text-mobile/h4 md:text-desktop/h2 font-markot mb-[20px] w-[60%]`}>{title.slice(0, titleIndex)}</h3>
          {showParagraph && (<p className='w-[70%] md:w-full text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large font-markot mb-[20px] md:mb-[80px]' data-aos="fade-down">7.9mm Slim Depth Body</p>)}
        </div>
      </div>
    </div>
    </>
  );
};

export default ThinDesign;
