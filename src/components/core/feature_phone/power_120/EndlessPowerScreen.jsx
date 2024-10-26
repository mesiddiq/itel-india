const BackgroundImage = () => {
    return (
        <div className="hidden md:block">
            <img
                src="/featurephone/Power_120/Backgrounds/EndlessPowerBG.webp"
                alt="Endless Power Background"
                className='w-full object-contain'
            />
        </div>
    );
}

const MobileBackgroundImage = () => {
    return (
        <div className="md:hidden">
            <img
                src="/featurephone/Power_120/Backgrounds/Endless-Power-BG-Mobile.webp"
                alt="Endless Power Background"
                className='w-full  object-contain  h-[683px] '
            />
        </div>
    );
}

const EndlessPowerScreen = () => {
    return (
        <div className='content  text-black relative my-10'>
            <div className="relative">
                <MobileBackgroundImage />
                <BackgroundImage />
                <div className="absolute top-[2rem] lg:top-[4rem] custom-lg-style  left-[2rem] lg:left-[8rem] text-black flex flex-col gap-8 lg:w-[400px] w-[285px] h-full ">
                    <div className='flex flex-col  gap-2 lg:gap-10'>
                        <p className='text-mobile/h3 custom-lg-h1 xl:text-desktop/h2 text-black lg:px-0'>
                            Endless Power with Super Battery Mode
                        </p>
                        <p className='text-mobile/h6 lg:text-[36px] lg:font-normal'>2500 mAh Battery </p>
                        <p className='text-mobile/body/2 lg:text-[16px] lg:font-normal leading-[20.6px] lg:leading-[25.6px]'>Activate Super Battery Mode for uninterrupted usage with our long-lasting battery, delivering extended power!</p>
                    </div>
                    <div className='flex flex-col  lg:gap-12'>
                        <div className='flex lg:flex-col  gap-4'>
                            <img src="/featurephone/Power_120/icons/BatteryIcon.svg" alt="Endless Power Icon" className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px] ' />
                            <div className='flex flex-col lg:gap-4 '>
                                <p className='text-mobile/h6 lg:text-[20px] lg:font-medium leading-[25.6px]'>55 Days* Standby Time</p>
                                <p className='text-mobile/h6 lg:text-[20px] lg:font-medium leading-[25.6px]'>24 Hours* Talktime</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndlessPowerScreen;
