import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import './styles.css';

const UltraHDMode = () => {
  const [isMobile, setIsMobile] = useState(false);
  const slides = [
    {
      image: "/smartphone/S23+/Backgrounds/UltraHDMode.webp",
      text: "Ultra HD Mode"
    },
    {
      image: "/smartphone/S23+/Backgrounds/WideSelfieMode.webp",
      text: "Wide Selfie Mode"
    },
    {
      image: "/smartphone/S23+/Backgrounds/TimeLapseMode.webp",
      text: "Time Lapse Mode"
    }
  ]

  const textStyle = {
    position: 'absolute',
    bottom: '3%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const textStyleSM = {
    position: 'absolute',
    bottom: '6%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  useEffect(() => {
    if (screen.width > 1000) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: 500
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper w-full"
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="relative max-h-[300px] h-screen md:max-h-[430px] lg:max-h-[800px] flex justify-center">
              <div className='w-full h-full bg-center bg-contain bg-no-repeat duration-500' style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}>
                <h3 style={isMobile ? textStyleSM : textStyle} className='text-[#FFFFFF] text-mobile/h7 lg:text-desktop/h3 font-markot'>{slide.text}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default UltraHDMode