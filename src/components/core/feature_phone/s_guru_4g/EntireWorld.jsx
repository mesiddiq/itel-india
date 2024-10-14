import React from 'react'

const EntireWorld = () => {
    return (
        <div className='bg-brand/black px-4 md:px-0'>
            <div className="flex flex-col lg:flex-row-reverse justify-between font-markot content ">
                <div className="space-y-5 lg:space-y-[60px] max-w-[518px]">
                    <div className="flex flex-col gap-3 lg:gap-5">
                        <h4 className='text-[16px] font-medium leading-[19.2px]-tracking-[0.16px] uppercase'>king media support</h4>
                        <h4 className='text-mobile/h4 lg:-tracking-[1.2px] lg:text-[60px]  lg:leading-[72px]  text-bg/primary/1'>Entire World: One Tap!</h4>
                        <p className='text-mobile/body/2 text-white max-w-[405px]'>Get ready for all your interests under one roof with kingmedia's preloaded app. Whether you're into news, cricket scores, weather updates, or anything else, we've got you covered. </p>
                    </div>

                    <div className="grid grid-cols-2 gap-y-3">
                        <div className="flex items-center gap-2">
                            <img src="" alt="Youtube" className='size-8' />
                            <h3 className='text-desktop/body/2/regular lg:text-desktop/body/1 text-white'>Youtube</h3>
                        </div>
                    </div>

                </div>
                <div className="">
                    {/* Image will be here */}
                    iamge will be here
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between font-markot content ">
                <div className="space-y-5 lg:space-y-[60px] max-w-[518px]">
                    <div className="flex flex-col gap-3 lg:gap-5">
                        <h4 className='text-mobile/h4 lg:-tracking-[1.2px] lg:text-[60px]  lg:leading-[72px]  text-bg/primary/1'>King Media: <br /> Videos, Games, You Name it!</h4>
                        <p className='text-mobile/body/2 text-white max-w-[405px]'>Dive into the latest videos, content and preloaded games for all your entertainment cravings—it's all here at king media, your one-stop entertainment hub</p>
                    </div>
                </div>
                <div className="">
                    {/* Image will be here */}
                    iamge will be here
                </div>
            </div>
        </div>
    )
}

export default EntireWorld