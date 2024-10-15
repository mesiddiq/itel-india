import React, { useState, useEffect } from 'react';

const SnapFlawlessSelfie = (props) => {
  const { scrollY } = props;
  const [startAnimation, setStartAnimation] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const title = "Snap Your Flawless Selfie";

  useEffect(() => {
    if (screen.width > 1000) {
      setStartAnimation(scrollY >= 5900);
    } else {
      setStartAnimation(scrollY >= 3600);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log("startSnapFlawlessSelfieAnimation", startAnimation);
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
      const textTimeout = setTimeout(() => {
        setShowText(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(textTimeout);
    }
  }, [showParagraph]);

  useEffect(() => {
    if (showText) {
      const phoneTimeout = setTimeout(() => {
        setShowPhone(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(phoneTimeout);
    }
  }, [showText]);

  useEffect(() => {
    if (showPhone) {
      const photoTimeout = setTimeout(() => {
        setShowPhoto(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(photoTimeout);
    }
  }, [showPhone]);

  return (
    <div className='snap-flawless-selfie-section'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-4'>
        <div className='col-span-1 text-center md:text-left'>
          <h1 className={`linear-gradient text-mobile/h4 md:text-desktop/h2 mb-[20px]`}>{title.slice(0, titleIndex)}</h1>
          {showParagraph && (<p className='text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large mb-[20px] md:mb-[80px] animate-slide-down'>Capture flawless selfies with advanced features like Ultra HD resolution, Beauty mode, and Wide Selfie for expansive group shots.</p>)}
          {showText && (
            <>
              <div className='hidden md:grid grid-cols-[45%_10%_45%] md:grid-cols-[25%_5%_70%] md:gap-4 animate-slide-down'>
                <div className='text-[#FFFFFF] md:text-left'>
                  <h3 className='flex'><img src='/s_twenty_three_plus/SnapFlawlessSelfieFinger.svg' className='w-[26px] md:w-[40px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-mobile/h6 md:text-desktop/h3'>32MP</span></h3>
                </div>
                <div className='text-[#FFFFFF]'>
                  <img src='/s_twenty_three_plus/SnapFlawlessSelfieBorder.svg' className='mt-0 md:mt-[5px]' />
                </div>
                <div className='text-[#FFFFFF] md:text-left'>
                  <h3 className='text-[#FFFFFF] text-mobile/small/body md:text-desktop/body/2/regular my-[8px]'>Front AI<br />Camera</h3>
                </div>
              </div>
              <div className='flex md:hidden gap-4 justify-center align-center animate-slide-down'>
                <h3 className='flex'><img src='/s_twenty_three_plus/SnapFlawlessSelfieFinger.svg' className='w-[26px] md:w-[40px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-[16px] md:text-[36px] font-[500]'>32MP</span></h3>
                <img src='/s_twenty_three_plus/SnapFlawlessSelfieBorder.svg' className='h-[26px] mt-0 md:mt-[5px]' />
                <h3 className='text-[#FFFFFF] text-mobile/small/body md:desktop/body/2/regular leading-[14px]'>Front AI<br />Camera</h3>
              </div>
            </>
          )}
        </div>
        <div className='col-span-1'>
          <div className='flex justify-center'>
            {showPhoto && (<img src='/s_twenty_three_plus/SnapFlawlessSelfiePhoto.png' className='absolute bottom-16 pl-[10px] w-[157px] h-[214px] md:w-auto md:h-auto animate-slide-down' />)}
            {showPhone && (<img src='/s_twenty_three_plus/SnapFlawlessSelfiePhone.png' className='absolute bottom-0 w-[167px] h-[283px] md:w-auto md:h-auto animate-slide-down' />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapFlawlessSelfie;
