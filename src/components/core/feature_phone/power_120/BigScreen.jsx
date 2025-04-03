import React from 'react'

const BigScreen = () => {
    return (
        <div className='px-4 lg:px-0 font-markot lg:bg-[url(/featurephone/Power_120/Backgrounds/big_screen.webp)] bg-[url(/featurephone/Power_120/Backgrounds/big_screen_mobile.webp)] bg-cover overflow-hidden lg:pb-[48px] py-[34px]'>
            <div className="max-w-[919px] text-center mx-auto">
                <div className="">
                    <img src="/featurephone/Power_120/Backgrounds/big_screen_phone.webp" alt="it5330" className='lg:max-h-[602px] max-h-[393px]' />
                </div>
                <div className="flex flex-col gap-3 lg:gap-5">
                    <h3 className=" text-mobile/h4 lg:text-desktop/h1 text-bg/primary/1">Super 2” Big Screen Display</h3>
                    <p className="  text-mobile/body/2 lg:text-desktop/body/large text-white/80">Take your viewing experience to greater heights with the itel Power 120's <br className='hidden lg:block' /> super 2" large screen - 5.08cm QVGA display, offering the ideal fusion of style and functionality.</p>
                </div>
                <div className="flex gap-4 lg:gap-10 mx-auto w-full justify-center mt-5">
                    <div className="flex gap-2 lg:gap-3 items-center">
                        <img src="/featurephone/Power_120/icons/design.svg" alt="phone icon" className="size-8 lg:size-12" />
                        <h4 className="text-grey/grey/1 text-mobile/h7 text-left lg:text-desktop/h5/medium">Bigger View</h4>
                    </div>
                    <div className="flex gap-2 lg:gap-3 items-center ">
                        <img src="/featurephone/Power_120/icons/phone.svg" alt="phone icon" className="size-8 lg:size-12" />
                        <h4 className="text-grey/grey/1 text-mobile/h7 text-left lg:text-desktop/h5/medium">Highly Ergonomic | Elevated Experience</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigScreen