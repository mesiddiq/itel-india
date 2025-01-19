import React, { useRef } from 'react'
import { useSize } from 'react-haiku';

const EnjoyHIgh = () => {

    const elementRef = useRef(null);
    const { width } = useSize(elementRef);

    return (
        <div ref={elementRef} className='pt-[37px] lg:pt-[100px] px-4 md:px-0' style={{ background: `url(/featurephone/superguru4g/enjoyhighspeed${width < 1024 ? 'mobile' : ''}.webp) center center/cover no-repeat` }}>
            <div className="content flex justify-between flex-col lg:flex-row">
                <div className="font-markot space-y-5 max-w-[518px]">
                    <h1 className=' text-mobile/h2 text-bg/primary/1 lg:text-[80px] lg:leading-[96px] font-normal tracking-[-1.6px]'>Enjoy High Speed 4G Network</h1>
                    <p className='text-desktop/body/2/regular lg:text-[16px] lg:leading-[22px] font-light max-w-[438px]'>Choose your network speed: opt for 4G for lightning-fast browsing or 2G/3G to save data! Stay connected wherever you are!</p>
                </div>
                <img src="/featurephone/superguru4g/enjoyhigh.webp" alt="Fast 4G Connectivity" className='max-w-[285px] lg:max-w-[551px] w-full mx-auto lg:mx-0' />
            </div>
        </div>
    )
}

export default EnjoyHIgh