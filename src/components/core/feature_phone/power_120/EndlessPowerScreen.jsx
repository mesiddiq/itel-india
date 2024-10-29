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
        <div className='content relative lg:pt-[144px] lg:pb-[104px] font-markot py-11 px-4 lg:px-0'>
            <div className="relative lg:h-[651px] h-[670px] bg-[url('/featurephone/Power_120/Backgrounds/endless_mobile.jpg')] bg-cover rounded-[24px] border lg:border-none lg:bg-none bg-right">
                <img
                    src="/featurephone/Power_120/Backgrounds/EndlessPowerBG.webp"
                    alt="Endless Power Background"
                    className='w-full object-contain absolute -z-10 hidden lg:block'
                />
                <div className=" max-w-[495px] space-y-8 lg:pt-[101px] lg:ml-[144px] pt-8 px-4 lg:px-0">
                    <div className='flex flex-col  gap-2 lg:gap-6'>
                        <p className='text-mobile/h3 custom-lg-h1 lg:text-desktop/h2 text-black/1 lg:px-0'>
                            Endless Power with Super Battery Mode
                        </p>
                        <p className='text-mobile/h6 lg:text-[36px] lg:font-normal text-smoky/black'>2500 mAh Battery </p>
                        <p className='text-mobile/body/2 lg:text-[16px] lg:font-normal leading-[20.6px] lg:leading-[25.6px] text-brand/black'>Activate Super Battery Mode for uninterrupted usage with our long-lasting battery, delivering extended power!</p>
                    </div>
                    <div className='flex flex-col  lg:gap-6'>
                        <div className='flex lg:flex-col  gap-4'>
                            <img src="/featurephone/Power_120/icons/BatteryIcon.svg" alt="Endless Power Icon" className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px] ' />
                            <div className='flex flex-col lg:gap-4 text-smoky/black'>
                                <p className='text-mobile/h6 lg:text-[20px] lg:font-medium leading-[25.6px]'>55 Days* Standby Time</p>
                                <p className='text-mobile/h6 lg:text-[20px] lg:font-medium leading-[25.6px]'>24 Hours* Talktime</p>
                            </div>
                        </div>

                    </div>
                    <img src="/featurephone/Power_120/Backgrounds/endless_phone.png" alt="Power 120 Featurephone" className="mx-auto lg:hidden" />
                </div>
            </div>
        </div>
    );
};

export default EndlessPowerScreen;
