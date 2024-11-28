// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import { motion, AnimatePresence } from 'framer-motion'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { useState } from 'react';
import { MdCurrencyRupee } from 'react-icons/md';
import { Link } from 'react-router-dom';

// import './styles.css';

const Banner1 = ({ activeSlide }) => {

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeSlide}
                className="relative h-[520px] md:h-[550px] lg:h-[627px]  flex justify-center  lg:pt-[114px]">

                <video
                    autoPlay
                    muted
                    loop
                    src="/videos/homepage/herobanner1.webm" className='w-full object-cover absolute h-full top-0 md:block hidden'
                />
                <video
                    autoPlay
                    muted
                    loop
                    src="/videos/homepage/herobanner1_mobile.webm" className='w-full object-cover h-full scale-110 absolute top-0 md:hidden'
                />
                {/* <img src="https://res.cloudinary.com/djwj42mic/image/upload/v1729920397/Hero_Banner_1_gzgabw.gif" alt="" className='w-full object-cover h-full  absolute top-0 md:hidden' /> */}
                <div className="content space-y-4 z-10 px-4 md:px-0 pt-6 lg:pt-0">
                    <div className="space-y-4 lg:space-y-0">
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className='text-mobile/h2 lg:text-desktop/h1 text-white font-bold'>Bringing India <br /> Together with itel</motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="space-y-2">
                            <h5 className='lg:text-desktop/subtitle text-mobile/small/button text-white/80'>Snag your itel smartphone starting at just</h5>
                            <h2 className='text-neutral-100 text-mobile/h4 lg:text-[28px] font-bold'>&#8377; 6,990 /-</h2>
                        </motion.div>
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <img src="/static_page/Buttons.svg" alt="Buy Now" className='lg:pt-[72px] max-w-[90px] lg:max-w-max md:max-w-28' />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}


// const Banner2 = ({ activeSlide }) => {
//     return (
//         <AnimatePresence mode='wait'>
//             <motion.div
//                 key={activeSlide}
//                 className="relative h-[520px] md:h-[550px] lg:h-[627px]  flex lg:items-center bg-[url('/static_page/homepage/herobanner2_mobile.webp')] md:bg-[url('/static_page/homepage/herobanner2.webp')] bg-center bg-cover" >
//                 <div className="content lg:space-y-[54px] px-4 md:px-0 pt-6 lg:pt-0 ">
//                     <div className="w-fit space-y-5">
//                         <motion.h3
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             transition={{ duration: 1, delay: 0.2 }}
//                             className='text-[14px] w-fit flex gap-1 items-center leading-[16.8px] uppercase font-bold border-2 rounded-[24px] px-[6px] py-[2px] bg-clip-text text-transparent bg-gradient-to-r from-s24/from to-s24/to border-s24/from font-bricolage' >
//                             super series
//                             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
//                                 <g clip-path="url(#clip0_5224_50233)">
//                                     <path d="M11.5 5.99832C11.5012 6.15951 11.4522 6.31708 11.3598 6.44913C11.2674 6.58118 11.1361 6.68116 10.9842 6.73515L7.8679 7.8684L6.73515 10.9842C6.67932 11.1346 6.57879 11.2643 6.44708 11.3559C6.31536 11.4475 6.15876 11.4966 5.99832 11.4966C5.83788 11.4966 5.68129 11.4475 5.54957 11.3559C5.41785 11.2643 5.31733 11.1346 5.2615 10.9842L4.12874 7.8679L1.01245 6.73515C0.862038 6.67932 0.732315 6.5788 0.640708 6.44708C0.549102 6.31536 0.5 6.15876 0.5 5.99832C0.5 5.83788 0.549102 5.68129 0.640708 5.54957C0.732315 5.41785 0.862038 5.31733 1.01245 5.2615L4.12874 4.12875L5.2615 1.01245C5.31733 0.862038 5.41785 0.732315 5.54957 0.640708C5.68129 0.549102 5.83788 0.5 5.99832 0.5C6.15876 0.5 6.31536 0.549102 6.44708 0.640708C6.57879 0.732315 6.67932 0.862038 6.73515 1.01245L7.86839 4.12875L10.9842 5.2615C11.1361 5.31549 11.2674 5.41547 11.3598 5.54752C11.4522 5.67957 11.5012 5.83714 11.5 5.99832Z" fill="url(#paint0_linear_5224_50233)" />
//                                 </g>
//                                 <defs>
//                                     <linearGradient id="paint0_linear_5224_50233" x1="0.42605" y1="11.4966" x2="7.25503" y2="13.6938" gradientUnits="userSpaceOnUse">
//                                         <stop stop-color="#FFCF92" />
//                                         <stop offset="1" stop-color="#FFE8CB" />
//                                     </linearGradient>
//                                     <clipPath id="clip0_5224_50233">
//                                         <rect width="12" height="12" fill="white" />
//                                     </clipPath>
//                                 </defs>
//                             </svg>
//                             s24
//                         </motion.h3>
//                         <motion.h1
//                             initial={{ opacity: 0, y: -50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 1, delay: 0.2 }}
//                             className='text-mobile/h2 lg:text-desktop/h1 text-transparent bg-clip-text bg-gradient-to-r from-s24/from to-s24/to font-bold  '>S24</motion.h1>
//                         <motion.h5
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 1, delay: 0.2 }}
//                             className='lg:text-desktop/h4 text-mobile/small/button text-white/80'>Your Ideal Storyteller: Stunning 108MP AI Camera</motion.h5>
//                     </div>
//                     <motion.div className="space-y-3"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, delay: 0.2 }}
//                     >
//                         <h2 className='text-neutral-100 text-mobile/h4 lg:text-[28px] font-bold'>&#8377; 10,999 /-</h2>
//                         <img src="/static_page/buynowlight.svg" alt="Buy Now" className='max-w-[90px] lg:max-w-max md:max-w-28' />
//                     </motion.div>
//                 </div>
//             </motion.div>
//         </AnimatePresence>
//     )
// }

const ColorPro5g = () => {
    return (
        <div className='bg-black relative lg:h-[627px] h-[520px] overflow-hidden font-markot px-4 md:px-0'>
            <div className="content relative lg:mt-[125px] lg:h-[416px] z-10 h-[238px] pt-6 lg:pt-0">
                <motion.h3
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='text-[14px] w-fit flex gap-1 items-center leading-[16.8px] uppercase font-bold border-2 border-[#BA69F6] rounded-[24px] px-[6px] py-[2px] text-white font-bricolage' >
                    featured
                </motion.h3>
                <p className="lg:text-desktop/h4 text-mobile/small/button text-white/80 lg:mt-[180px] mt-[70px] z-10">Illuminate with Every hue with <br />
                    IVCO itel Vivid Color Technology</p>
                <img src="/static_page/homepage/colorpro5gtext.svg" alt="Color Pro 5g" className='absolute lg:top-10 top-14 -left-10 lg:-left-24 -z-[1] max-w-[300px] lg:max-w-max' />
                <h2 className='text-neutral-100 text-mobile/h4 lg:text-[28px] font-bold flex items-center lg:mt-14 mt-3'>
                    <span>
                        <MdCurrencyRupee />
                    </span>
                    <span >
                        8,999 /-
                    </span>
                </h2>
                <Link to={'/product/color-pro-5g'}>
                    <img src="/static_page/Buttons.svg" alt="Buy Now" className='max-w-[90px] lg:max-w-max md:max-w-28 mt-2 lg:mt-4' />
                </Link>
            </div>
            <img src="/static_page/homepage/colorpro5g.webp" alt="Hritik Roshan" className='h-full w-full absolute lg:-right-[17%] lg:bottom-0 top-36 lg:top-0 object-contain scale-110 lg:scale-100 ' />
        </div>
    )
}

const Banner4 = ({ activeSlide }) => {

    return (
        <AnimatePresence mode='wait'>
            <div key={activeSlide} className="relative h-[520px] md:h-[550px] lg:h-[627px]  flex justify-center  lg:pt-[114px]">
                <video
                    autoPlay
                    muted
                    loop
                    src="/videos/homepage/herobanner3.mp4" className='w-full object-cover absolute h-full top-0 hidden md:block'
                />

                <video
                    autoPlay
                    muted
                    loop
                    src="/videos/homepage/herobanner3_mobile.webm" className='w-full absolute top-0 left-0 md:hidden object-cover h-full'
                />
                <div className="content space-y-4 absolute px-4 md:px-0 pt-6 lg:pt-0">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-fit">
                        <h3 className='text-[14px] leading-[16.8px] uppercase font-bold border-2 rounded-[24px] px-[6px] py-[2px] bg-clip-text text-transparent bg-gradient-to-r from-s24/from to-s24/to border-s24/from font-bricolage' >coming soon</h3>
                    </motion.div>
                    {/* <h1 className='text-desktop/h1 text-white font-bold '>The Ulitimate Hair <br /> Dryer Collection</h1> */}
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='text-mobile/h2 lg:text-desktop/h1 text-white font-bold'>The Ultimate Hair <br /> Dryer Collection</motion.h1>
                    <motion.h5
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='font-medium text-mobile/small/button lg:text-[24px] leading-6 text-white/80'>itel Hair Dryers</motion.h5>
                </div>
            </div>
        </AnimatePresence>
    )
}

const Banner3 = ({ activeSlide }) => {

    return (
        <AnimatePresence mode='wait'>

            <div className="relative">
                <motion.div key={activeSlide} className=" h-[520px] md:h-[550px] lg:h-[627px] content flex lg:justify-center lg:pt-[114px]">
                    <video
                        autoPlay
                        muted
                        loop
                        src="/videos/homepage/herobanner4.webm" className='w-full object-cover absolute left-0 top-0 hidden h-full md:block'
                    />

                    <video
                        autoPlay
                        muted
                        loop
                        src="/videos/homepage/herobanner4_mobile.mp4" className='w-full object-cover absolute left-0 top-0 h-full md:hidden'
                    />
                    <div className="content space-y-4 absolute px-4 md:px-0 pt-6 lg:pt-0">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }} className="w-fit">
                            <h3 className='text-[14px] leading-[16.8px] uppercase font-bold border-2 rounded-[24px] px-[6px] py-[2px] bg-clip-text text-transparent bg-gradient-to-r from-s24/from to-s24/to border-s24/from font-bricolage' >Coming soon</h3>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }} className='text-mobile/h2 lg:text-desktop/h1 text-white font-bold'>Awesome A80</motion.h1>
                        <motion.h5
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }} className='font-medium text-mobile/small/button lg:text-[24px] leading-6 text-white/80'>Get ready to live in the spotlight</motion.h5>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}


const HeroSection = () => {

    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <Swiper
            spaceBetween={100}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                waitForTransition: 500
            }}
            loop
            modules={[Pagination, Autoplay]}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}

            className="max-h-screen w-full "
        >


            {/* *************** Slide 1************************* */}
            <SwiperSlide>
                <Banner1 activeSlide={activeSlide} />
            </SwiperSlide>


            {/* *************** Slide 2************************* */}

            {/* <SwiperSlide>
                <Banner2 activeSlide={activeSlide} />
            </SwiperSlide> */}

            <SwiperSlide>
                <ColorPro5g activeSlide={activeSlide} />
            </SwiperSlide>

            {/* *************** Slide 3************************* */}

            <SwiperSlide>
                <Banner3 activeSlide={activeSlide} />
            </SwiperSlide>

            {/* *************** Slide 4************************* */}

          

            <SwiperSlide>
                <Banner4 activeSlide={activeSlide} />
            </SwiperSlide>
        </Swiper >
    )
}

export default HeroSection