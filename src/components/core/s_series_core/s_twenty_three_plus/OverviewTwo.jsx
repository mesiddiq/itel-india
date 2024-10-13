import React, { useState, useEffect } from 'react';

import Button from '../../../../components/common/Button';

const OverviewTwo = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const title = "Redefining Style with 3D Curved AMOLED Display";

  const handleScroll = () => {
    const sectionOneHeight = 600; // Adjust this value as needed
    setStartAnimation(window.scrollY >= sectionOneHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("startAnimation", startAnimation);
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
      const cardsTimeout = setTimeout(() => {
        setShowCards(true);
      }, 1000); // Delay before showing cards

      return () => clearTimeout(cardsTimeout);
    }
  }, [showParagraph]);

  return (
    <div className='overview-two-section' id='overviewSection'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='col-span-1'>
          <h1 className={`linear-gradient text-[24px] md:text-[48px] font-[500] leading-[31.2px] md:leading-[57.6px]`}>
            {title.slice(0, titleIndex)}
          </h1>
        </div>
        <div className='col-span-1 pt-[10px]'>
          {showParagraph && (
            <p className={`text-[16px] text-[#D9D9D9] font-[350] leading-[25.6px] animate-slide-down`}>
              Experience the future of mobile tech with the itel S23+ smartphone, featuring a sleek 3D curved 6.78″ FHD+ AMOLED display, a robust 5000 mAh battery with fast charging, and a stunning 50MP AI dual rear camera setup, all wrapped in an ultra-slim 7.9mm body for an effortlessly stylish experience.
            </p>
          )}
        </div>
      </div>
      <div className='h-[16px] md:h-[80px]'></div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {showCards && (
          <>
            {[
              {
                img: '/s_twenty_three_plus/OverviewCardOne.svg',
                title: '3D Curved Brilliance: 6.78” FHD+ AMOLED Display',
                description: 'Elevate your vision with itel S23+ smartphone with sleek 3D curved AMOLED display.'
              },
              {
                img: '/s_twenty_three_plus/OverviewCardTwo.svg',
                title: 'Snap in Style with 50MP AI Dual Rear Camera & 32MP Front Camera',
                description: 'Capture every moment in jaw-dropping detail with our 50MP AI dual rear camera and 32 MP Front Camera set-up.'
              },
              {
                img: '/s_twenty_three_plus/OverviewCardThree.svg',
                title: '5000 mAh Battery with 18W Type-C Charger',
                description: 'Power through your day with a 5000 mAh Battery. Recharge quickly and efficiently with the 18W Type-C Charger.'
              }
            ].map((card, index) => (
              <div key={index} className='col-span-1 overview-two-section-card animate-slide-up' style={{ animationDelay: `${(index + 1) * 0.5}s` }}>
                <img src={card.img} alt="" />
                <h3 className={`text-[20px] md:text-[24px] text-[#FFFFFF] font-[500] leading-[26px] md:leading-[31.2px] py-[10px] md:py-[20px]`}>
                  {card.title}
                </h3>
                <p className='text-[16px] text-[#D9D9D9] font-[350] leading-[25.6px]'>
                  {card.description}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OverviewTwo;
