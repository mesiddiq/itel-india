import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const Awards = () => {
  return (
    <div className=' content lg:space-y-[61px] space-y-5  font-markot px-4 '>
          <p className=' text-center text-black text-mobile/h4 lg:text-desktop/h2'>Awards and Recognitions</p>



<Swiper
  spaceBetween={22}
  slidesPerView={window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1} // Adjust slides per view based on screen width
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide>
    <img className='w-full h-auto max-w-[410px] lg:h-[500px]' src={'/static_page/Aboutus/AwardsRecognition1.webp'} alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img className='w-full h-auto max-w-[410px] lg:h-[500px]' src={'/static_page/Aboutus/Awards&Recognition2.webp'} alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img className='w-full h-auto max-w-[410px] lg:h-[500px]' src={'/static_page/Aboutus/Awards&Recognition3.webp'} alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img className='w-full h-auto max-w-[410px] lg:h-[500px]' src={'/static_page/Aboutus/Awards&Recognition4.webp'} alt="" />
  </SwiperSlide>
  {/* Add more slides as needed */}
</Swiper>


    </div>
  )
}

export default Awards