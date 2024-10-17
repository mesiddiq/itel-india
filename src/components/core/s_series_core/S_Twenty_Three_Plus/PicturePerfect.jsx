import React, { useState, useEffect } from 'react';

const PicturePerfect = (props) => {
  const { scrollY } = props;
  const [startAnimation, setStartAnimation] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showCardOne, setShowCardOne] = useState(false);
  const [showCardTwo, setShowCardTwo] = useState(false);
  const [showCardThree, setShowCardThree] = useState(false);
  const [showCardFour, setShowCardFour] = useState(false);
  const [showPhoneMobile, setShowPhoneMobile] = useState(false);
  const title = "Picture Perfect Ultra Clear Camera";

  useEffect(() => {
    if (screen.width > 1000) {
      setStartAnimation(scrollY >= 4900);
    } else {
      setStartAnimation(scrollY >= 2750);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log("startSnapFlawlessSelfieAnimation", startAnimation);
    if (startAnimation) {
      const showPhoneTimeout = setTimeout(() => {
        setShowPhone(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(showPhoneTimeout);
    }
  }, [startAnimation]);

  useEffect(() => {
    if (showPhone) {
      setTimeout(() => {
        const titleInterval = setInterval(() => {
          if (titleIndex < title.length) {
            setTitleIndex((prev) => prev + 1);
          } else {
            clearInterval(titleInterval);
            setIsTitleComplete(true);
          }
        }, 30);
        
        return () => clearInterval(titleInterval);
      }, 500);

    }
  }, [showPhone, titleIndex]);

  useEffect(() => {
    if (isTitleComplete) {
      const textTimeout = setTimeout(() => {
        setShowText(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(textTimeout);
    }
  }, [isTitleComplete]);

  useEffect(() => {
    if (showText) {
      const cardOneTimeout = setTimeout(() => {
        setShowCardOne(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(cardOneTimeout);
    }
  }, [showText]);

  useEffect(() => {
    if (showCardOne) {
      const cardTwoTimeout = setTimeout(() => {
        setShowCardTwo(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(cardTwoTimeout);
    }
  }, [showCardOne]);

  useEffect(() => {
    if (showCardTwo) {
      const cardThreeTimeout = setTimeout(() => {
        setShowCardThree(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(cardThreeTimeout);
    }
  }, [showCardTwo]);

  useEffect(() => {
    if (showCardThree) {
      const cardFourTimeout = setTimeout(() => {
        setShowCardFour(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(cardFourTimeout);
    }
  }, [showCardThree]);

  useEffect(() => {
    if (showCardFour) {
      const phoneMobileTimeout = setTimeout(() => {
        setShowPhoneMobile(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(phoneMobileTimeout);
    }
  }, [showCardFour]);

  return (
    <div className='picture-perfect-section'>
      <div className='md:flex md:content gap-4'>
        <div className='hidden md:flex w-[60%]'>
          {showPhone && (<img src='/s_twenty_three_plus/PicturePerfectPhone.png' className='absolute bottom-0 slideInFromLeft' />)}
        </div>
        <div className='w-full md:w-[40%]'>
          <h3 className='linear-gradient text-[24px] md:text-[48px] font-markot font-[500] w-[60%] md:w-full'>{title.slice(0, titleIndex)}</h3>
          {showText && (
            <div className='flex gap-4 animate-slide-down pt-4 md:pt-8'>
              <h3 className='flex items-center'><img src='/s_twenty_three_plus/PicturePerfectIcon.svg' className='w-[32px] md:w-[48px] mr-2 md:mr-5' /> <span className='text-[#FFFFFF] text-mobile/h6 md:text-desktop/h3 font-markot'>50MP</span></h3>
              <img src='/s_twenty_three_plus/SnapFlawlessSelfieBorder.svg' className='h-[32px] md:h-[48px] mt-[5px]' />
              <h3 className='text-[#FFFFFF] text-mobile/h6 md:desktop/h5/medium font-markot md:mt-2'>AI Dual<br />Rear Camera</h3>
            </div>
          )}
          <div className='grid grid-cols-2 gap-4 mt-[40px] md:mt-[80px]'>
            {showCardOne && (<div className='col-span-1 slideInFromBottom'>
              <div className='flex md:flex-col items-start'>
                <img src='/s_twenty_three_plus/PicturePerfectIconGroupOne.svg' className='h-[28px] md:h-[42px] mb-[15px] pr-[12px]' />
                <div>
                  <h6 className='text-[#EBE8E2] text-mobile/h7 md:text-desktop/h6/medium font-markot mb-[10px]'>Super Night Mode</h6>
                  <p className='text-[#EBE8E2] text-mobile/small/body md:text-desktop/caption font-markot'>Take clear & bright photos at night</p>
                </div>
              </div>
            </div>)}
            {showCardTwo && (<div className='col-span-1 slideInFromBottom'>
              <div className='flex md:flex-col items-start'>
                <img src='/s_twenty_three_plus/PicturePerfectIconGroupTwo.svg' className='h-[28px] md:h-[42px] mb-[15px] pr-[12px]' />
                <div>
                  <h6 className='text-[#EBE8E2] text-mobile/h7 md:text-desktop/h6/medium font-markot mb-[10px]'>Time-Lapse Mode</h6>
                  <p className='text-[#EBE8E2] text-mobile/small/body md:text-desktop/caption font-markot'>Capture life's moments in mesmerizing fast-forward with the time-lapse camera mode on your smartphone</p>
                </div>
              </div>
            </div>)}
            {showCardThree && (<div className='col-span-1 slideInFromBottom'>
              <div className='flex md:flex-col items-start'>
                <img src='/s_twenty_three_plus/PicturePerfectIconGroupThree.svg' className='h-[28px] md:h-[42px] mb-[15px] pr-[12px]' />
                <div>
                  <h6 className='text-[#EBE8E2] text-mobile/h7 md:text-desktop/h6/medium font-markot mb-[10px]'>HDR 4.0 Mode</h6>
                  <p className='text-[#EBE8E2] text-mobile/small/body md:text-desktop/caption font-markot'>Experience vivid detail and lifelike clarity with HDR 4.0 mode</p>
                </div>
              </div>
            </div>)}
            {showCardFour && (<div className='col-span-1 slideInFromBottom'>
              <div className='flex md:flex-col items-start'>
                <img src='/s_twenty_three_plus/PicturePerfectIconGroupFour.svg' className='h-[28px] md:h-[42px] mb-[15px] pr-[12px]' />
                <div>
                  <h6 className='text-[#EBE8E2] text-mobile/h7 md:text-desktop/h6/medium font-markot mb-[10px]'>Pro Mode</h6>
                  <p className='text-[#EBE8E2] text-mobile/small/body md:text-desktop/caption font-markot'>Click like a professional creator</p>
                </div>
              </div>
            </div>)}
          </div>
        </div>
        <div className='flex md:hidden w-full p-4 pb-0 pt-10'>
          {showPhoneMobile && (<img src='/s_twenty_three_plus/PicturePerfectPhone.png' className='slideInFromTop' />)}
        </div>
      </div>
    </div>
  );
};

export default PicturePerfect;
