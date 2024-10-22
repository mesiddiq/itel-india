import Aos from 'aos'
import React, { useEffect, useRef, useState } from 'react'
import { For, useSize } from 'react-haiku'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const FeaturePhoneProductGallery = ({ bgUrl, bgUrlMobile, products }) => {

    const elementRef = useRef()

    const { width } = useSize(elementRef)

    const [selectedData, setselectedData] = useState(null)

    const prevRef = useRef(null)
    const nextRef = useRef(null)


    useEffect(() => {
        setselectedData(products[0])
    }, [])

    // console.log(ProductGalleryData)
    if (selectedData === null) {
        return null
    }

    return (
        <div ref={elementRef} className='space-y-12 px-4 md:px-0'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay
                modules={[EffectFade, Navigation]}
                className=" relative content "
            >
                {
                    selectedData?.images.length > 0 &&
                    <SwiperSlide>
                        <div className="lg:rounded-[20px] rounded-[16px] min-h-[400px] lg:min-h-[calc(100vh-100px)] w-full bg-black flex items-center justify-center" style={{ background: `url('${width > 1024 ? bgUrl : bgUrlMobile}') center center/cover` }}>
                            <img src={selectedData?.images[0]} alt="Phone Image" className={`lg:max-h-[550px] max-h-[264px]`} />
                        </div>
                    </SwiperSlide>
                }
                {
                    selectedData?.images.length > 1 &&
                    <SwiperSlide>
                        <div className="lg:rounded-[20px] rounded-[16px] min-h-[400px] lg:min-h-[calc(100vh-100px)] w-full flex items-center justify-center" style={{ background: `url('${width > 1024 ? bgUrl : bgUrlMobile}') center center/cover` }}>
                            <img src={selectedData?.images[1]} alt="Phone Image" className={`lg:max-h-[550px] max-h-[264px]`} />
                        </div>
                    </SwiperSlide>
                }
                {
                    selectedData?.images.length > 2 &&
                    <SwiperSlide>
                        <div className="lg:rounded-[20px] rounded-[16px] min-h-[400px] lg:min-h-[calc(100vh-100px)] w-full flex items-center justify-center" style={{ background: `url('${width > 1024 ? bgUrl : bgUrlMobile}') center center/cover` }} >
                            <img src={selectedData?.images[2]} alt="Phone Image" className={`lg:max-h-[550px] max-h-[264px]`} />
                        </div>
                    </SwiperSlide>
                }
                {
                    selectedData?.images.length > 3 &&
                    <SwiperSlide>
                        <div className="lg:rounded-[20px] rounded-[16px] min-h-[400px] lg:min-h-[calc(100vh-100px)] w-full flex items-center justify-center" style={{ background: `url('${width > 1024 ? bgUrl : bgUrlMobile}') center center/cover` }} >
                            <img src={selectedData?.images[3]} alt="Phone Image" className={`lg:max-h-[550px] max-h-[264px]`} />
                        </div>
                    </SwiperSlide>
                }
                {
                    selectedData?.images.length > 4 &&
                    <SwiperSlide>
                        <div className="lg:rounded-[20px] rounded-[16px] min-h-[400px] lg:min-h-[calc(100vh-100px)] w-full flex items-center justify-center" style={{ background: `url('${width > 1024 ? bgUrl : bgUrlMobile}') center center/cover` }} >
                            <img src={selectedData?.images[4]} alt="Phone Image" className={`lg:max-h-[550px] max-h-[264px]`} />
                        </div>
                    </SwiperSlide>
                }
                <div className="flex flex-row justify-between items-center w-full px-5 lg:px-[80px] absolute z-50 top-1/2 -translate-y-1/2">
                    {/* Left Arrow */}
                    <button ref={prevRef} className="w-8 h-8 lg:w-12 lg:h-12">
                        <img src="/smartphone/S24/leftArrowCarousel.svg" alt="leftArrowCarousel" />
                    </button>

                    {/* Right Arrow */}
                    <button ref={nextRef} className="w-8 h-8 lg:w-12 lg:h-12">
                        <img src="/smartphone/S24/rightArrowCarousel.svg" alt="leftArrowCarousel" />
                    </button>
                </div>
            </Swiper>
            <div className='flex flex-col md:flex-row text-center md:items-center justify-center gap-4 content'>
                <h1 className="text-desktop/title uppercase text-black/1">color</h1>
                <div className="flex gap-3 flex-col md:flex-row">
                    {products.map((item) => (
                        <button key={item.id} onClick={() => setselectedData(item)} className={` rounded-full flex gap-3 h-9 lg:h-auto items-center font-markot ${item.id === selectedData.id ? 'border-itel-red border-2 py-[6px] md:px-3' : 'text-lg'}`}>
                            {item.id === selectedData.id &&
                                <span className=' text-desktop/button text-black/1 uppercase hidden md:block'>{item.buttonLabel}</span>
                            }
                            <div className={` rounded-full bg-red-50 ${item.id === selectedData.id ? 'size-[26px] md:ml-0 ml-[40%]' : 'md:size-10 size-[26px] ml-[40%] md:ml-0'}`} style={{ background: item.buttonColor }}></div>
                            <span className=' text-mobile/h6 text-black/1 uppercase md:hidden '>{item.buttonLabel}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturePhoneProductGallery