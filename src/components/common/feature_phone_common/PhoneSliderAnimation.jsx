import React from 'react'
import Marquee from 'react-fast-marquee';

const PhoneSliderAnimation = () => {
    return (
        <div className='overflow-x-hidden py-[10px] bg-[#ebe9e2]'>
            <Marquee  speed='50' direction='right' autoFill={true}>
                <h3 className="font-bricolage uppercase text-[16px]lg:text-[20px] lg:leading-6 font-medium text-grey/grey/4 -tracking-[0.16px]">Snap back to reality</h3>
                <img src="/featurephone/common/slidericon.svg" alt="Slider Icon" className='w-7 h-[17px] mx-4' />
                <h3 className="font-bricolage uppercase text-[16px]lg:text-[20px] lg:leading-6 font-medium text-grey/grey/4 -tracking-[0.16px]">retro Connect with modern twist</h3>
                <img src="/featurephone/common/slidericon.svg" alt="Slider Icon" className='w-7 h-[17px] mx-4' />
            </Marquee>
        </div>
    );
}

export default PhoneSliderAnimation