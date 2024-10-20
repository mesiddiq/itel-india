import React from 'react'
import Marquee from 'react-fast-marquee';

const PhoneSliderAnimation = () => {
    return (
        <div className='overflow-x-hidden py-[10px] bg-[#ebe9e2]'>
            {/* <Marquee speed='50' direction='right' autoFill={true}>
                <div className=' flex items-center md:text-[35px] py-2'>
                    <img src='/featurephone/common/slidericon.svg' alt="MarqueeIcon" className='px-3' />
                    <h1 className=' text-grey/grey/4 uppercase text-[20px] font-medium leading-[24px] tracking-[0.08em] text-justify'>
                        retro Connect with modern twist
                    </h1>
                    <img src='/featurephone/common/slidericon.svg' alt="MarqueeIcon" className='px-3' />
                    <h1 className='text-grey/grey/4 uppercase text-[20px] font-medium leading-[24px] -tracking-[0.2px] text-justify'>
                        Snap back to reality
                    </h1>
                </div>
            </Marquee> */}
            <Marquee  speed='50' direction='right' autoFill={true}>
                <h1 className="font-markot uppercase text-[16px]lg:text-[20px] lg:leading-6 font-medium text-grey/grey/4 -tracking-[0.16px]">Snap back to reality</h1>
                <img src="/featurephone/common/slidericon.svg" alt="Slider Icon" className='w-7 h-[17px] mx-4' />
                <h1 className="font-markot uppercase text-[16px]lg:text-[20px] lg:leading-6 font-medium text-grey/grey/4 -tracking-[0.16px]">retro Connect with modern twist</h1>
                <img src="/featurephone/common/slidericon.svg" alt="Slider Icon" className='w-7 h-[17px] mx-4' />
            </Marquee>
        </div>
    );
}

export default PhoneSliderAnimation