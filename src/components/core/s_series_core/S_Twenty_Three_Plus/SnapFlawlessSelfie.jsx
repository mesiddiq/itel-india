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
    if (screen.width < 2000 && screen.width > 1500) {
      setStartAnimation(scrollY >= 7500);
    } else if (screen.width > 1000) {
      setStartAnimation(scrollY >= 7400);
    } else {
      setStartAnimation(scrollY >= 4550);
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
    <div className='flex relative w-full h-[468px] md:h-[800px] px-[16px] md:px-0 py-[12px] md:py-[120px] bg-[url("/s_twenty_three_plus/SnapFlawlessSelfie.png")] bg-cover bg-center' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='col-span-1 text-center md:text-left'>
            <h1 className={`linear-gradient text-mobile/h4 md:text-desktop/h2 font-markot mb-[20px]`}>{title.slice(0, titleIndex)}</h1>
            {showParagraph && (<p className='text-[#F2F2F2] text-mobile/body/2 md:text-desktop/body/large font-markot mb-[20px] md:mb-[80px]' data-aos="fade-down">Capture flawless selfies with advanced features like Ultra HD resolution, Beauty mode, and Wide Selfie for expansive group shots.</p>)}
            {showText && (
              <>
                <div className='hidden md:grid grid-cols-[160px_10px_60px] md:gap-4' data-aos="fade-down">
                  <div className='text-[#FFFFFF] md:text-left'>
                    <h3 className='flex'><img src='/s_twenty_three_plus/SnapFlawlessSelfieFinger.svg' className='w-[26px] md:w-[40px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-mobile/h6 md:text-desktop/h3 font-markot'>32MP</span></h3>
                  </div>
                  <div className='text-[#FFFFFF]'>
                    <img src='/s_twenty_three_plus/SnapFlawlessSelfieBorder.svg' className='mt-0 md:mt-[5px]' />
                  </div>
                  <div className='text-[#FFFFFF] md:text-left'>
                    <h3 className='text-[#FFFFFF] text-mobile/small/body md:text-desktop/body/2/regular font-markot my-[8px]'>Front AI<br />Camera</h3>
                  </div>
                </div>
                <div className='flex md:hidden gap-4 justify-center align-center' data-aos="fade-down">
                  <h3 className='flex'><img src='/s_twenty_three_plus/SnapFlawlessSelfieFinger.svg' className='w-[26px] md:w-[40px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-[16px] md:text-[36px] font-markot font-[500]'>32MP</span></h3>
                  <img src='/s_twenty_three_plus/SnapFlawlessSelfieBorder.svg' className='h-[26px] mt-0 md:mt-[5px]' />
                  <h3 className='text-[#FFFFFF] text-mobile/small/body md:desktop/body/2/regular font-markot leading-[14px]'>Front AI<br />Camera</h3>
                </div>
              </>
            )}
          </div>
          <div className='col-span-1'>
            <div className='flex justify-center'>
              {showPhoto && (<img src='/s_twenty_three_plus/SnapFlawlessSelfiePhoto.png' className='absolute bottom-[30px] md:bottom-16 w-[157px] h-[214px] md:w-auto md:h-auto' data-aos="fade-down" />)}
              {showPhone && (<img src='/s_twenty_three_plus/SnapFlawlessSelfiePhone.png' className='absolute bottom-0 w-[167px] h-[283px] md:w-auto md:h-auto' data-aos="fade-down" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapFlawlessSelfie;
