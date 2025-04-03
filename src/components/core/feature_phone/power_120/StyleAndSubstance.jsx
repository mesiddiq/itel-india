import React from 'react'

const StyleAndSubstance = () => {
    return (
        <div className='lg:h-[800px] h-[490px] lg:bg-[url(/featurephone/Power_120/Backgrounds/style_substance_bg.webp)] bg-[url(/featurephone/Power_120/Backgrounds/style_substance_mobile.webp)] bg-cover overflow-hidden font-markot px-4 md:px-0'>
            <div className="content pt-12 lg:pt-[112px] relative h-full">
                <div className="space-y-3 lg:space-y-4 max-w-[560px]">
                    <h3 className=" text-mobile/h4 lg:text-desktop/h1 text-bg/primary/1">Style & Substance</h3>
                    <h3 className=" text-mobile/h6 lg:text-desktop/h4">Highly Ergonomic - Light Blue | Deep Blue | Interstellar Blue</h3>
                    <h6 className=" text-mobile/body/2 lg:text-desktop/body/large text-white/80 max-w-[407px]">Designed to complement your unique sense of style while delivering unparalleled visual clarity, it's the perfect companion for your digital lifestyle.</h6>
                </div>
                <img src="/featurephone/Power_120/Backgrounds/style_substance.webp" alt="Power 120" className='lg:max-w-[700px] max-w-[310px] -bottom-16 absolute lg:-bottom-40 right-0' />
            </div>
        </div>
    )
}

export default StyleAndSubstance