import GradientBackgroundWrapper from './GradientBackgroundWrapper '
const Section1TechPartner = () => {
    return (
        <GradientBackgroundWrapper bgImage={'/smartphone/A23s/Backgrounds/a70_camera.png'} mobileBgImage={'/smartphone/A23s/Backgrounds/A70Mobile.jpg'}>
            <div className='md:h-[739px] h-[444px] text-center lg:pt-[295px] md:text-left text-black flex w-full lg:justify-end justify-center content'>
                <div className='lg:h-[423px] h-[131px] lg:w-[412px] w-[304px] flex flex-col gap-[10px] md:gap-9 '>
                    <div>
                        <p className='lg:text-desktop/h2 text-mobile/h4   md:block hidden'>Your Perfect Tech Partner: A23S</p>
                        <p className=' text-mobile/h4  md:hidden'>Your Perfect <br /> Tech Partner: A23S</p>

                    </div>


                    <div className='flex lg:flex-col w-[294px] h-[234px] flex-row gap-1 md:gap-[16px]  mx-auto lg:mx-0 justify-center items-center lg:items-start md:justify-start'>
                        <div className="flex flex-col  gap-[2px] items-center md:items-start">
                            <p className='md:opacity-80 text-mobile/body/large lg:text-mobile/h3 font-medium'>
                                12.7 cm (5-inch)
                            </p>
                            <p className='md:opacity-80 text-mobile/body/2 lg:text-desktop/body/1'>
                                Bright Display
                            </p>
                        </div>

                        <hr className='lg:hidden h-[48px] w-[1px] bg-[#666666] ' />
                        <hr className='hidden lg:block bg-[#000000] h-[2px] w-full opacity-40' />

                        <div className="flex flex-col gap-[2px]  items-center md:items-start">
                            <p className='md:opacity-80 text-mobile/body/large lg:text-mobile/h3 font-medium'>
                                3020 mAh
                            </p>
                            <p className='md:opacity-80 text-mobile/body/2 lg:text-desktop/body/1'>
                                Battery
                            </p>
                        </div>

                        <hr className='lg:hidden h-[38px] w-[1px] bg-[#666666] ' />
                        <hr className='hidden lg:block bg-[#000000] h-[2px] w-full opacity-40' />

                        <p className='lg:opacity-80 text-mobile/body/large lg:text-mobile/h3 text-black text-center lg:text-left'>
                            Smart <br className='lg:hidden' /> Unlock
                        </p>
                    </div>



                </div>
            </div>

        </GradientBackgroundWrapper>
    )
}

export default Section1TechPartner
