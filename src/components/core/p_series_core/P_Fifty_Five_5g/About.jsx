import React from 'react';



const Example = () => {
    
    return (
        <div className="h-max py-8 lg:h-[701px] flex justify-center items-center w-full bg-cover"
        style={{ backgroundImage: 'url(/SmartPhone/P55fiveg/Backgrounds/About.webp)' }}>
        <div className='content flex flex-col justify-center items-center w-full px-4 lg:p-0'>
            <div className="flex flex-col lg:flex-row lg:justify-between items-right gap-3 lg:gap-0">
                <h2  className="gap-[6px] w-full lg:w-1/2 text-mobile/h4 lg:text-desktop/h2 text-white">
                    Speed, Flair, and Power<br /> in your Pocket!
                </h2>
                <h2 data-aos="fade-up" className="w-full lg:w-1/2 text-desktop/body/1 text-grey/grey/2">
                    Capture stories with the all-new itel S24. Packed with a stunning 108MP ultra clear AI camera, bring your pictures to life. Experience blazing-fast speed with a 8GB RAM, expandable up to 16GB* with memory fusion and 128GB ROM smartphone. With a 5000 mAh battery and 18W fast charging, always stay on top of your game. Get a super smooth and responsive experience with a 90Hz refresh rate on the 6.6-inch HD+ punch-hole display smartphone.
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 py-8 lg:gap-6 w-full items-center">

                <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] rounded-2xl flex flex-col gap-2 lg:gap-6">
                    <img src="/SmartPhone/P55fiveg/Backgrounds/about1.png" alt='' className="w-[48px] lg:w-[52px]" />
                    <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                        <span className="text-mobile/h4/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white text-[#F2F2F2]">
                            <span className=''>
                                Picture-Perfect Moments:<br />
                                108 MP AI Rear Camera
                            </span>
                        </span>
                        <span  className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                            Say goodbye to blurry memories and<br />
                            hello to crystal-clear shots with the<br />
                            Samsung HM6 ISOCELL Sensor.
                        </span>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] rounded-2xl flex flex-col gap-2 lg:gap-6">
                    <img src="/SmartPhone/P55fiveg/Backgrounds/about2.png" alt='' className="w-[48px] lg:w-[52px]" />
                    <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                        <span className="text-mobile/h5/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white text-[#F2F2F2]">
                            MediaTek Helio G91:<br />
                            Unmatched Speed
                        </span>
                        <span className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                            Experience ultra-fast gaming &<br />
                            multi-tasking like never before with the<br />
                            Helio G91 processor.
                        </span>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] rounded-2xl flex flex-col gap-2 lg:gap-6">
                    <img src="/SmartPhone/P55fiveg/Backgrounds/about3.png" alt='' className="w-[48px] lg:w-[52px]" />
                    <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                        <span className="text-mobile/h5/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white text-[#F2F2F2]">
                            6.6&quot; HD+ Punch Hole Display<br />
                            with 90 Hz Refresh Rate
                        </span>
                        <span className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                            Dive into a world of vibrant visuals with<br />
                            a 90 Hz refresh rate, every swipe and<br />
                            scroll feels buttery-smooth.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Example