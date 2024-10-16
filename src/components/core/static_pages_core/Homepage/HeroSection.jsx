// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import './styles.css';

const HeroSection = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            autoplay
            modules={[EffectFade, Pagination]}
            className="mySwiper max-h-screen w-full "
        >
            <SwiperSlide>
                <div className="relative h-[627px] flex justify-center  pt-[114px]">
                    <video
                        autoPlay
                        muted
                        loop
                        src="https://res.cloudinary.com/djwj42mic/video/upload/v1728548513/Screen_Recording_2024-10-09_at_2.38.54_PM_ykvaf9.mov" className='w-full object-cover absolute top-0'
                    />
                    <div className="content space-y-4 z-10">
                        <h1 className='text-desktop/h1 text-white font-bold'>Bringing India <br /> Together with itel</h1>
                        <div className="space-y-2">
                            <h5 className='text-desktop/subtitle'>Snag your itel smartphone starting at just</h5>
                            <h2 className='text-neutral-100 text-[28px] font-bold'>&#8377; 6,999 /-</h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[627px]" style={{ background: 'url(./herobanner/hero_banner_2.png)' }}>
                    {/* <img src="./herobanner/hero_banner_2.png" className='w-full object-cover' /> */}
                    adsfjdaskljfklsdaj
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[627px] flex justify-center pt-[114px]">
                    <video
                        autoPlay
                        muted
                        loop
                        src="https://res.cloudinary.com/djwj42mic/video/upload/v1728548505/Screen_Recording_2024-10-09_at_2.42.54_PM_v4tncr.mov" className='w-full object-cover absolute top-0'
                    />
                    <div className="content space-y-4 absolute">
                        <div className="w-fit">
                            <h3 className='text-[14px] leading-[16.8px] uppercase font-bold border-2 rounded-[24px] px-[6px] py-[2px] bg-clip-text text-transparent bg-gradient-to-r from-s24/from to-s24/to border-s24/from' >coming soon</h3>
                        </div>
                        <h1 className='text-desktop/h1 text-white font-bold '>The Ulitimate Hair <br /> Dryer Collection</h1>
                        <h5 className='font-medium text-[24px] leading-6 text-white'>itel Hair Dryers</h5>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HeroSection