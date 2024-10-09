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
            className="mySwiper max-h-screen w-full"
        >
            <SwiperSlide>
                <div className="relative h-[627px] flex justify-center pt-[114px]" style={{ background: 'url(./herobanner/hero_banner_1.gif)' }}>
                    {/* <img src="./herobanner/hero_banner_1.gif" className='w-full object-cover' />\ */}
                    <div className="content space-y-4 absolute">
                        <h1 className='text-desktop/h1 text-white' data-aos="fade-up">Bringing India <br /> Together with itel</h1>
                        <h5 className='text-desktop/body/1' data-aos="fade-up">Snag your itel smartphone starting at just</h5>
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
                <div className="relative h-[627px] flex justify-center pt-[114px]" style={{ background: 'url(./herobanner/hero_banner_3.gif)' }}>
                    <div className="content space-y-4 absolute">
                        <div className="w-fit">
                            <h3 className='text-[14px] leading-[16.8px] uppercase font-extrabold border-2 rounded-[24px] px-[6px] py-[2px]' data-aos="fade-down">coming soon</h3>
                        </div>
                        <h1 className='text-desktop/h1 text-white' data-aos="fade-down">The Ulitimate Hair <br /> Dryer Collection</h1>
                        <h5 className='font-medium text-[24px] leading-6 text-white' data-aos="fade-down">itel Hair Dryers</h5>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HeroSection