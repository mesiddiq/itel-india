import React from 'react'

const EpicBatteryPower = () => {
    return (
        <div className="lg:h-[800px] relative overflow-hidden h-[694px] px-4 md:px-0 font-markot  bg-[url('/featurephone/it5330/Backgrounds/epic_battery_mobile.webp')] lg:bg-[url('/featurephone/it5330/Backgrounds/epic_battery.webp')] bg-cover ">
            <div className="content  pt-8 lg:pt-[130px] justify-between flex flex-col lg:flex-row items-center">
                <div className="max-w-[590px]">
                    <h3 className="text-mobile/h4 lg:text-featurephone/heading text-bg/primary/1">Epic Battery Power</h3>
                    <h2 className="lg:text-desktop/h3 text-mobile/h6 lg:mt-5 mt-3">1900 mAh Battery</h2>
                    <p className="text-mobile/body/2 lg:text-featurephone/paragraph text-grey/grey/1/90 lg:mt-5 mt-3">Fuel your hustle with itel it5330's 1900 mAh battery with super battery mode, delivering a whopping 12 days* standby and 31.7 hours* of talktime. Stay charged, stay winning!</p>
                    <div className="flex lg:flex-col gap-2 lg:gap-6 mt-5">
                        <img src="/featurephone/it5330/icons/battery.svg" alt="" className="w-8 lg:w-14 " />
                        <div className="space-y-2 lg:space-y-5">
                            <h4 className="lg:text-[20px] lg:leading-6 text-mobile/h6 font-bold text-grey/grey/1 lg:-tracking-[0.2px]">12 Days* Standby Time</h4>
                            <h4 className="lg:text-[20px] lg:leading-6 text-mobile/h6 font-bold text-grey/grey/1 lg:-tracking-[0.2px]">31.7 Hours* Talktime</h4>
                        </div>
                    </div>
                </div>
                <div className="xl:relative absolute bottom-0 xl:-bottom-4 lg:right-20 xl:right-0 ">
                    <div className="absolute bottom-10 right-[100px]  z-10  items-end hidden lg:flex ">
                        <p className="text-desktop/body/large text-grey/grey/1 text-nowrap">Press to activate <br /> Super Battery Mode</p>
                        <div className="w-full min-w-[500px] max-w-[500px] h-[2px] bg-white"></div>
                    </div>
                    <img src="/featurephone/it5330/Backgrounds/epic_battery_phone.webp" alt="it5330" className='xl:max-w-[436px] lg:max-w-[350px] max-w-[271px] ' />
                    <img src="/featurephone/it5330/Backgrounds/line.png" alt="line" className='absolute bottom-8 -left-8 lg:hidden' />
                </div>
            </div>
        </div>
    )
}

export default EpicBatteryPower