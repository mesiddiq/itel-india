import React from 'react'

const GlassDesign = () => {
    return (
        <div className="px-4 overflow-hidden md:px-0 pt-9 lg:pb-[107px] lg:pt-0 h-[635px] lg:h-[800px] font-markot bg-[url('/featurephone/it5330/Backgrounds/glass_design_mobile.webp')] lg:bg-[url('/featurephone/it5330/Backgrounds/glass_design.webp')] bg-cover">
            <div className="content flex flex-col-reverse lg:flex-row items-center lg:items-end justify-end h-full relative">
                <img src="/featurephone/it5330/Backgrounds/kingvoice.webp" alt="Voice-Activated Functions" className="xl:max-w-[470px] lg:max-w-[350px] max-w-[256px] absolute lg:left-16 -bottom-12 xl:-bottom-72 " />
                <div className="max-w-[562px]">
                    <h1 className="text-mobile/h4 lg:text-featurephone/heading  text-white">Presenting New Age Glass Design</h1>
                    <p className="text-mobile/body/2 lg:text-featurephone/paragraph text-white/90 lg:mt-[22px] mt-[14px]">The aesthetic appeal of glass aligns with modern design trends, while its high durability reduces maintenance requirements.</p>
                    <div className="flex gap-4 lg:gap-6 lg:mt-[70px] mt-5 ">
                        <div className="flex items-center gap-2 lg:gap-4 ">
                        <img src="/featurephone/it5330/icons/phone.svg" alt="" className="size-8 lg:size-14" />
                            <h6 className="text-mobile/h6 lg:text-desktop/h4 text-grey/grey/1">11.1mm Ultra Slim Design</h6>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-4">
                            <img src="/featurephone/it5330/icons/screen.svg" alt="" className="size-8 lg:size-14" />
                            <h6 className="text-mobile/h6 lg:text-desktop/h4 text-grey/grey/1">Glass Finish</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlassDesign