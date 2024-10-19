import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

const UltraHDMode = (props) => {
  const { scrollY } = props;
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      image: "/s_twenty_three_plus/UltraHDModeOne.png",
      text: "Ultra HD Mode"
    },
    {
      image: "/s_twenty_three_plus/UltraHDModeOneBg.png",
      text: "Ultra HD Mode 2"
    },
    {
      image: "/s_twenty_three_plus/AmoledDisplay.jpg",
      text: "Ultra HD Mode 3"
    }
  ]

  const textStyle = {
    position: 'absolute',
    bottom: '3%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const bulletStyle = {
    position: 'absolute',
    bottom: '0px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const textStyleSM = {
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const bulletStyleSM = {
    position: 'absolute',
    bottom: '-18px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  useEffect(() => {
    if (screen.width < 2000 && screen.width > 1500) {
      setStartAnimation(scrollY >= 8700);
    } else if (screen.width > 1000) {
      setStartAnimation(scrollY >= 8200);
    } else {
      setStartAnimation(scrollY >= 5100);
    }
  }, [scrollY]);

  useEffect(() => {
    if (screen.width > 1000) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log("startUltraHDModeAnimation", startAnimation);
    if (startAnimation) {
      const timeInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < slides.length - 1) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 3000);

      return () => clearInterval(timeInterval);
    }
  }, [currentIndex])

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-full relative h-[300px] md:h-[800px] xl:h-[950px] m-auto'>
      <div className='w-full h-full bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slides[currentIndex].image})`}}>
        <h3 style={isMobile ? textStyleSM : textStyle} className='text-[#FFFFFF] text-mobile/h7 md:text-desktop/h3 font-markot'>{slides[currentIndex].text}</h3>
      </div>
      <div className='flex absolute items-center' style={isMobile ? bulletStyleSM : bulletStyle}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`${currentIndex === slideIndex ? 'text-3xl' : 'text-2xl'} cursor-pointer`} style={{ color: currentIndex === slideIndex ? 'rgba(255, 0, 55, 1)' : 'rgba(255, 255, 255, 0.4)' }}><RxDotFilled /></div>
        ))}
      </div>
    </div>
  );
};

export default UltraHDMode;
