import Aos from 'aos'
import React, { useEffect, useRef, useState } from 'react'
import { useSize } from 'react-haiku'

const FeaturePhoneProductGallery = ({ bgUrl, bgUrlMobile, products }) => {

    const elementRef = useRef()

    const { width } = useSize(elementRef)

    const [selectedData, setselectedData] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)


    // Function to handle left navigation
    const handlePrev = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(selectedData.images.length - 1)
        } else {
            setCurrentImageIndex((prevIndex) => {
                return prevIndex - 1;
            });
        }
    };

    // Function to handle right navigation
    const handleNext = () => {
        if (currentImageIndex === selectedData.images.length - 1) {
            setCurrentImageIndex(0)
            console.log(currentImageIndex)
        } else {
            setCurrentImageIndex((prevIndex) => {
                return prevIndex + 1;
            });
        }
    };


    useEffect(() => {
        setselectedData(products[0])
    }, [])

    // console.log(ProductGalleryData)
    if (selectedData === null) {
        return null
    }

    return (
        <div ref={elementRef} className='space-y-12 px-4 md:px-0'>
            <div className={`bg-cover content lg:rounded-[20px] rounded-[16px] min-h-[400px] lg:min-h-[800px] flex items-center justify-center relative`} style={{ background: `url('${width > 1024 ? bgUrl : bgUrlMobile}') center center/cover` }}>
                <div className="">
                    <img src={selectedData?.images[currentImageIndex]} alt="Phone Image" className={`lg:max-h-[610px] max-h-[264px]`} />
                </div>
                {
                    selectedData?.images?.length > 1 &&
                    <div className="flex flex-row justify-between items-center w-full absolute px-5 lg:px-[80px]">
                        {/* Left Arrow */}
                        <button onClick={handlePrev} className="w-8 h-8 lg:w-12 lg:h-12">
                            <img src="/smartphone/S24/leftArrowCarousel.svg" alt="leftArrowCarousel" />
                        </button>

                        {/* Right Arrow */}
                        <button onClick={handleNext} className="w-8 h-8 lg:w-12 lg:h-12">
                            <img src="/smartphone/S24/rightArrowCarousel.svg" alt="leftArrowCarousel" />
                        </button>
                    </div>
                }
            </div>
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