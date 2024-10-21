import React from 'react'

const BigScreen = () => {
    return (
        <div className='px-4 lg:px-0 font-markot bg-[#181818] lg:pt-[118px] lg:pb-[48px] py-[34px]'>
            <div className="max-w-[919px] text-center mx-auto">
                <div className="">
                    <img src="/featurephone/it5330/Backgrounds/big_screen.webp" alt="it5330" className='lg:max-h-[602px] max-h-[393px]' />
                </div>
                <div className="flex flex-col gap-3 lg:gap-5">
                    <h1 className=" text-mobile/h4 lg:text-desktop/h1 text-bg/primary/1">2.8” QVGA Display</h1>
                    <p className="  text-mobile/body/2 lg:text-desktop/body/large text-white/80">Enjoy a clear and expansive viewing experience on the 2.8” QVGA big display, perfect for browsing, messaging, binge-watching, and more.</p>
                </div>
            </div>
        </div>
    )
}

export default BigScreen