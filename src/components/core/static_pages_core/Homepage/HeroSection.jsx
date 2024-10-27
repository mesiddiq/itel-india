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
            loop
            modules={[EffectFade, Pagination]}
            className="mySwiper max-h-screen w-full "
        >

            {/* *************** Slide 1************************* */}
            <SwiperSlide>
                <div className="relative h-[520px] md:h-[550px] lg:h-[627px]  flex justify-center  lg:pt-[114px]">
                    <video
                        autoPlay
                        muted
                        loop
                        src="https://res.cloudinary.com/djwj42mic/video/upload/v1728548513/Screen_Recording_2024-10-09_at_2.38.54_PM_ykvaf9.mov" className='w-full object-cover absolute top-0 lg:block hidden'
                    />
                    <img src="https://res.cloudinary.com/djwj42mic/image/upload/v1729920397/Hero_Banner_1_gzgabw.gif" alt="" className='w-full object-cover h-full  absolute top-0 lg:hidden' />
                    <div className="content space-y-4 z-10 px-4 md:px-0 pt-6 lg:pt-0">
                        <div className="space-y-4 lg:space-y-0">
                            <h1 className='text-mobile/h2 lg:text-desktop/h1 text-white font-bold'>Bringing India <br /> Together with itel</h1>
                            <div className="space-y-2">
                                <h5 className='lg:text-desktop/subtitle text-mobile/small/button text-white/80'>Snag your itel smartphone starting at just</h5>
                                <h2 className='text-neutral-100 text-mobile/h4 lg:text-[28px] font-bold'>&#8377; 6,990 /-</h2>
                            </div>
                            <img src="/static_page/buynowlight.svg" alt="Buy Now" className='lg:pt-[72px] max-w-[90px] lg:max-w-max md:max-w-28' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>


            {/* *************** Slide 2************************* */}

            <SwiperSlide>
                <div className="relative h-[520px] md:h-[550px] lg:h-[627px]  flex lg:items-center bg-[url('https://res.cloudinary.com/djwj42mic/image/upload/v1729920395/Hero_Bannerm_2_vhepy0.png')] lg:bg-[url('https://res.cloudinary.com/djwj42mic/image/upload/v1729919870/Hero_Banner_2_vcvtht.png')] bg-center bg-cover" >
                    <div className="content lg:space-y-[54px] px-4 md:px-0 pt-6 lg:pt-0 ">
                        <div className="w-fit space-y-5">
                            <h3 className='text-[14px] w-fit flex gap-1 items-center leading-[16.8px] uppercase font-bold border-2 rounded-[24px] px-[6px] py-[2px] bg-clip-text text-transparent bg-gradient-to-r from-s24/from to-s24/to border-s24/from font-bricolage' >
                                super series
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <g clip-path="url(#clip0_5224_50233)">
                                        <path d="M11.5 5.99832C11.5012 6.15951 11.4522 6.31708 11.3598 6.44913C11.2674 6.58118 11.1361 6.68116 10.9842 6.73515L7.8679 7.8684L6.73515 10.9842C6.67932 11.1346 6.57879 11.2643 6.44708 11.3559C6.31536 11.4475 6.15876 11.4966 5.99832 11.4966C5.83788 11.4966 5.68129 11.4475 5.54957 11.3559C5.41785 11.2643 5.31733 11.1346 5.2615 10.9842L4.12874 7.8679L1.01245 6.73515C0.862038 6.67932 0.732315 6.5788 0.640708 6.44708C0.549102 6.31536 0.5 6.15876 0.5 5.99832C0.5 5.83788 0.549102 5.68129 0.640708 5.54957C0.732315 5.41785 0.862038 5.31733 1.01245 5.2615L4.12874 4.12875L5.2615 1.01245C5.31733 0.862038 5.41785 0.732315 5.54957 0.640708C5.68129 0.549102 5.83788 0.5 5.99832 0.5C6.15876 0.5 6.31536 0.549102 6.44708 0.640708C6.57879 0.732315 6.67932 0.862038 6.73515 1.01245L7.86839 4.12875L10.9842 5.2615C11.1361 5.31549 11.2674 5.41547 11.3598 5.54752C11.4522 5.67957 11.5012 5.83714 11.5 5.99832Z" fill="url(#paint0_linear_5224_50233)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_5224_50233" x1="0.42605" y1="11.4966" x2="7.25503" y2="13.6938" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFCF92" />
                                            <stop offset="1" stop-color="#FFE8CB" />
                                        </linearGradient>
                                        <clipPath id="clip0_5224_50233">
                                            <rect width="12" height="12" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                s24
                            </h3>
                            <h1 className='text-mobile/h2 lg:text-desktop/h1 text-transparent bg-clip-text bg-gradient-to-r from-s24/from to-s24/to font-bold  '>S24</h1>
                            <h5 className='lg:text-desktop/h4 text-mobile/small/button text-white/80'>Your Ideal Storyteller: Stunning 108MP AI Camera</h5>
                        </div>
                        <div className="space-y-3">
                            <h2 className='text-neutral-100 text-mobile/h4 lg:text-[28px] font-bold'>&#8377; 10,999 /-</h2>
                            <img src="/static_page/buynowlight.svg" alt="Buy Now" className='max-w-[90px] lg:max-w-max md:max-w-28' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* *************** Slide 3************************* */}

            <SwiperSlide>
                <div className="relative h-[520px] md:h-[550px] lg:h-[627px]  flex justify-center  lg:pt-[114px]">
                    <video
                        autoPlay
                        muted
                        loop
                        src="https://res.cloudinary.com/djwj42mic/video/upload/v1728548505/Screen_Recording_2024-10-09_at_2.42.54_PM_v4tncr.mov" className='w-full object-cover absolute top-0 hidden lg:block'
                    />
                    <img src="https://res.cloudinary.com/djwj42mic/image/upload/v1729920397/Herobanner3_kuzaot.gif" alt="" className='w-full absolute top-0 left-0 lg:hidden object-cover h-full' />
                    <div className="content space-y-4 absolute px-4 md:px-0 pt-6 lg:pt-0">
                        <div className="w-fit">
                            <h3 className='text-[14px] leading-[16.8px] uppercase font-bold border-2 rounded-[24px] px-[6px] py-[2px] bg-clip-text text-transparent bg-gradient-to-r from-s24/from to-s24/to border-s24/from font-bricolage' >coming soon</h3>
                        </div>
                        {/* <h1 className='text-desktop/h1 text-white font-bold '>The Ulitimate Hair <br /> Dryer Collection</h1> */}
                        <h1 className='text-mobile/h2 lg:text-desktop/h1 text-white font-bold'>The Ulitimate Hair <br /> Dryer Collection</h1>
                        <h5 className='font-medium text-mobile/small/button lg:text-[24px] leading-6 text-white/80'>itel Hair Dryers</h5>
                    </div>
                </div>
            </SwiperSlide>


            {/* *************** Slide 4************************* */}

            <SwiperSlide>
                <div className="relative h-[520px] md:h-[550px] lg:h-[627px]  flex lg:justify-center lg:pt-[114px]">
                    <img
                        src="https://res.cloudinary.com/djwj42mic/image/upload/v1729919895/Banner_4_fqvsxb.gif" className='w-full object-cover absolute top-0 hidden lg:block'
                    />
                    <img
                        src="https://res.cloudinary.com/djwj42mic/image/upload/v1729920399/HeroBanner4_fr36xf.gif" className='w-full object-cover absolute top-0 lg:hidden'
                    />
                    <div className="content space-y-4 absolute px-4 md:px-0 pt-6 lg:pt-0">
                        <div className="w-fit">
                            <h3 className='text-[14px] leading-[16.8px] uppercase font-bold border-2 rounded-[24px] px-[6px] py-[2px] bg-clip-text text-transparent bg-gradient-to-r from-s24/from to-s24/to border-s24/from font-bricolage' >coming soon</h3>
                        </div>
                        <h1 className='text-mobile/h2 lg:text-desktop/h1 text-white font-bold'>Coolest & Fastest</h1>
                        <h5 className='font-medium text-mobile/small/button lg:text-[24px] leading-6 text-white/80'>Color Changing Technology | Super Fast 5G++</h5>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HeroSection