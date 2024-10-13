import React from 'react'

const EnjoyHIgh = () => {
    return (
        <div className=' bg-brand/black  pt-[37px] lg:pt-[100px] px-4 md:px-0'>
            <div className="content flex justify-between flex-col lg:flex-row">
                <div className="bg-brand/black font-markot space-y-5 max-w-[518px]">
                    <h1 className=' text-mobile/h2 text-bg/primary/1 lg:text-[80px] lg:leading-[96px] font-normal tracking-[-1.6px]'>Enjoy High Speed 4G Network</h1>
                    <p className='text-desktop/body/2/regular lg:text-[18px] lg:leading-[22px] font-normal max-w-[438px]'>Choose your network speed: opt for 4G for lightning-fast browsing or 2G/3G to save data! Stay connected wherever you are!</p>
                </div>
                <img src="/featurephone/superguru4g/enjoyhigh.webp" alt="" className='max-w-[285px] lg:max-w-[551px] w-full mx-auto lg:mx-0'/>
            </div>
        </div>
    )
}

export default EnjoyHIgh