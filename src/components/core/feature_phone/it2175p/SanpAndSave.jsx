import React from 'react'

const SanpAndSave = () => {
    return (
        <div className="px-4 md:px-0 pt-[44px] md:pt-[140px] lg:pt-[163px] font-markot min-h-[614px] md:min-h-[700px] lg:min-h-[800px] bg-[url('/featurephone/it2175p/Backgrounds/snapandsavebgmobile.webp')] lg:bg-[url('/featurephone/it2175p/Backgrounds/snapandsavebg.webp')] bg-cover overflow-hidden">
            <div className="content flex flex-col gap-[70px] md:gap-0 md:flex-row lg:flex-row xl:flex-row-reverse lg:justify-between">
                <div className="space-y-3 lg:space-y-5 max-w-[530px]">
                    <h3 className="text-mobile/h4 text-bg/primary/1 lg:text-[60px] lg:leading-[72px] lg:font-medium lg:-tracking-[1.2px]">Snap & Save: Rear Camera Magic</h3>
                    <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[22.7px] font-normal tracking-[0.14px] text-white/70">Snap precious moments with itel it2175 Pro&apos;s rear camera - Memories captured, connections preserved.</p>
                </div>
                <div className=" relative w-full lg:w-1/2">
                    <img src="/featurephone/it2175p/Backgrounds/snapandsave.webp" alt="it2175p image" className='min-h-[522px] lg:min-h-[921px] min-w-[287px] lg:w-[600px] -top-10 object-top mx-auto object-cover absolute lg:right-10' />
                </div>
            </div>
        </div>
    )
}

export default SanpAndSave