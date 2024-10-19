import React from 'react'
import Marquee from 'react-fast-marquee';

const PhoneSliderAnimation = () => {
    return (
        <div className='w-full h-[52px] overflow-x-hidden relative items-center justify-center flex flex-col bg-bg/secondry font-markot'>
            <Marquee speed='50' direction='right' autoFill={true}>
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
            </Marquee>
        </div>
    );
}

export default PhoneSliderAnimation