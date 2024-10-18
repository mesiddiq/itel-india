import React, { useState, useEffect } from 'react';

import Button from '../../../../components/common/Button';

const OverviewTwo = (props) => {
  const { scrollY } = props;
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showCardIconOne, setShowCardIconOne] = useState(false);
  const [showCardIconTwo, setShowCardIconTwo] = useState(false);
  const [showCardIconThree, setShowCardIconThree] = useState(false);
  const [showCardTitleOne, setShowCardTitleOne] = useState(false);
  const [showCardTitleTwo, setShowCardTitleTwo] = useState(false);
  const [showCardTitleThree, setShowCardTitleThree] = useState(false);
  const [showCardParaOne, setShowCardParaOne] = useState(false);
  const [showCardParaTwo, setShowCardParaTwo] = useState(false);
  const [showCardParaThree, setShowCardParaThree] = useState(false);
  const title = "Redefining Style with 3D Curved AMOLED Display";

  useEffect(() => {
    if (screen.width < 2000 && screen.width > 1500) {
      setStartAnimation(scrollY >= 200);
    } else if (screen.width > 1000) {
      setStartAnimation(scrollY >= 630);
    } else {
      setStartAnimation(scrollY >= 350);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log("startOverviewAnimation", startAnimation);
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
      const cardIconTimeout = setTimeout(() => {
        setShowCardIconOne(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardIconTimeout);
    }
  }, [showParagraph]);

  useEffect(() => {
    if (showCardIconOne) {
      const cardIconTwoTimeout = setTimeout(() => {
        setShowCardIconTwo(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardIconTwoTimeout);
    }
  }, [showCardIconOne]);

  useEffect(() => {
    if (showCardIconTwo) {
      const cardIconThreeTimeout = setTimeout(() => {
        setShowCardIconThree(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardIconThreeTimeout);
    }
  }, [showCardIconTwo]);

  useEffect(() => {
    if (showCardIconThree) {
      const cardTitleOneTimeout = setTimeout(() => {
        setShowCardTitleOne(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardTitleOneTimeout);
    }
  }, [showCardIconThree]);

  useEffect(() => {
    if (showCardTitleOne) {
      const cardTitleTwoTimeout = setTimeout(() => {
        setShowCardTitleTwo(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardTitleTwoTimeout);
    }
  }, [showCardTitleOne]);

  useEffect(() => {
    if (showCardTitleTwo) {
      const cardTitleThreeTimeout = setTimeout(() => {
        setShowCardTitleThree(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardTitleThreeTimeout);
    }
  }, [showCardTitleTwo]);

  useEffect(() => {
    if (showCardTitleThree) {
      const cardParaOneTimeout = setTimeout(() => {
        setShowCardParaOne(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardParaOneTimeout);
    }
  }, [showCardTitleThree]);

  useEffect(() => {
    if (showCardParaOne) {
      const cardParaTwoTimeout = setTimeout(() => {
        setShowCardParaTwo(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardParaTwoTimeout);
    }
  }, [showCardParaOne]);

  useEffect(() => {
    if (showCardParaTwo) {
      const cardParaThreeTimeout = setTimeout(() => {
        setShowCardParaThree(true);
      }, 500); // Delay before showing cards

      return () => clearTimeout(cardParaThreeTimeout);
    }
  }, [showCardParaTwo]);

  return (
    <div className='relative w-full px-[16px] md:px-0 py-[40px] md:py-[120px] h-[1000px] md:h-auto bg-[#1C1B1B]' id='overviewSection' style={{ marginTop: '0px' }}>
      <div className='content'>
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[185px] md:min-h-[120px]'>
          <div className='col-span-1'>
            <h1 className={`linear-gradient text-desktop/h4 md:text-desktop/h2 font-markot`}>{title.slice(0, titleIndex)}</h1>
          </div>
          <div className='col-span-1 pt-[10px]'>
            {showParagraph && (
              <p className={`text-desktop/body/2/regular md:text-desktop/body/1 text-[#D9D9D9] font-markot animate-slide-down`}>
                Experience the future of mobile tech with the itel S23+ smartphone, featuring a sleek 3D curved 6.78″ FHD+ AMOLED display, a robust 5000 mAh battery with fast charging, and a stunning 50MP AI dual rear camera setup, all wrapped in an ultra-slim 7.9mm body for an effortlessly stylish experience.
              </p>
            )}
          </div>
        </div>
        <div className='h-[16px] md:h-[80px]'></div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='col-span-1 p-[16px] md:p-[40px] mx-0 md:mx-[25px] my-[16px] md:my-0 rounded-[16px] min-h-[210px] md:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
            {showCardIconOne && (<img src='/s_twenty_three_plus/OverviewCardOne.svg' alt='OverviewCardOne' data-aos='fade-up' />)}
            {showCardTitleOne && (<h3 className={`text-mobile/h5/medium md:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] md:py-[20px]`} data-aos='fade-up'>
              3D Curved Brilliance: 6.78” FHD+ AMOLED Display
            </h3>)}
            {showCardParaOne && (<p className='text-desktop/body/2/regular md:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Elevate your vision with itel S23+ smartphone with sleek 3D curved AMOLED display.
            </p>)}
          </div>
          <div className='col-span-1 p-[16px] md:p-[40px] mx-0 md:mx-[25px] my-[16px] md:my-0 rounded-[16px] min-h-[210px] md:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
            {showCardIconTwo && (<img src='/s_twenty_three_plus/OverviewCardTwo.svg' alt='OverviewCardTwo' data-aos='fade-up' />)}
            {showCardTitleTwo && (<h3 className={`text-mobile/h5/medium md:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] md:py-[20px]`} data-aos='fade-up'>
              Snap in Style with 50MP AI Dual Rear Camera & 32MP Front Camera
            </h3>)}
            {showCardParaTwo && (<p className='text-desktop/body/2/regular md:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Capture every moment in jaw-dropping detail with our 50MP AI dual rear camera and 32 MP Front Camera set-up.
            </p>)}
          </div>
          <div className='col-span-1 p-[16px] md:p-[40px] mx-0 md:mx-[25px] my-[16px] md:my-0 rounded-[16px] min-h-[210px] md:min-h-[360px]' style={{ border: '1px solid rgba(202, 134, 255, 0.1)' }}>
            {showCardIconThree && (<img src='/s_twenty_three_plus/OverviewCardThree.svg' alt='OverviewCardThree' data-aos='fade-up' />)}
            {showCardTitleThree && (<h3 className={`text-mobile/h5/medium md:text-desktop/h4 font-markot text-[#FFFFFF] py-[10px] md:py-[20px]`} data-aos='fade-up'>
              5000 mAh Battery with 18W Type-C Charger
            </h3>)}
            {showCardParaThree && (<p className='text-desktop/body/2/regular md:text-desktop/body/1 font-markot text-[#D9D9D9]' data-aos='fade-up'>
              Power through your day with a 5000 mAh Battery. Recharge quickly and efficiently with the 18W Type-C Charger.
            </p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTwo;
