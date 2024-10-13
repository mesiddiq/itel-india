import s24OverviewLogo1 from '/smartphone/S24/s24OverviewLogo1-instagram.svg'
import s24OverviewLogo2 from '/smartphone/S24/s24OverviewLogo2-cpu-charge.svg'
import s24OverviewLogo3 from '/smartphone/S24/s24OverviewLogo3-slider.svg'

const ProductDescription = () => {
return (
    <div className="FFMarkRegular h-full w-full flex flex-col gap-6 lg:gap-[100px] px-4 py-10 lg:px-[60px] lg:py-[100px] bg-[#1C1B1B]">
        
        <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0">
            <h1 className="font-markot w-full lg:w-1/2 text-mobile/h4 lg:text-desktop/h2 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
                <span className='hidden lg:block'>
                    Your Ideal Storyteller:
                    <br/>    
                    Stunning 108MP AI
                    <br/>
                    Camera
                </span>
                <span className='block lg:hidden font-markot'>
                    Your Ideal Storyteller:
                    <br/>    
                    Stunning 108MP AI Camera
                </span>
            </h1>
            <h2 className="w-full font-markot lg:w-1/2 text-desktop/body/1 text-grey/grey/2">
            Capture stories with the all-new itel S24. Packed with a stunning 108MP ultra clear AI camera, bring your pictures to life. Experience blazing-fast speed with a 8GB RAM, expandable upto 16GB* with memory fusion and 128GB ROM smartphone. With a 5000 mAh battery and 18W fast charging, always stay on top of your game. Get a super smooth and responsive experience with a 90Hz refresh rate on the 6.6-inch HD+ punch-hole display smartphone.
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full">
            
            <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] p-4 lg:p-10 border border-white/20 rounded-2xl flex flex-col gap-2 lg:gap-6">
                <img src={s24OverviewLogo1} alt='' className="w-[48px] lg:w-[52px]"/>
                <div className="flex flex-col gap-2 w-full">
                    <span className="font-markot text-mobile/h5/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white">
                        <span className='hidden lg:block'>
                            Picture-Perfect Moments:<br/>
                            108 MP AI Rear Camera
                        </span>
                        <span className='font-markot block lg:hidden'>
                        Picture-Perfect Moments: 108<br/>
                        MP AI Rear Camera
                        </span>
                    </span>
                    <span className="font-markot text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                        Say goodbye to blurry memories and<br/>
                        hello to crystal-clear shots with the<br/>
                        Samsung HM6 ISOCELL Sensor.
                    </span>
                </div>
            </div>

            <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] p-4 lg:p-10 border border-white/20 rounded-2xl flex flex-col gap-2 lg:gap-6">
                <img src={s24OverviewLogo2} alt='' className="w-[48px] lg:w-[52px]"/>
                <div className="flex flex-col gap-2 w-full">
                    <span className="font-markot text-mobile/h5/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white">
                        <span></span>
                        MediaTek Helio G91:<br/>
                        Unmatched Speed
                    </span>
                    <span className="font-markot text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                        Experience ultra-fast gaming &<br/>
                        multi-tasking like never before with the<br/>
                        Helio G91 processor.
                    </span>
                </div>
            </div>
            
            <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] p-4 lg:p-10 border border-white/20 rounded-2xl flex flex-col gap-2 lg:gap-6">
                <img src={s24OverviewLogo3} alt='' className="w-[48px] lg:w-[52px]"/>
                <div className="flex flex-col gap-2 w-full">
                    <span className="font-markot text-mobile/h5/medium lg:text-desktop/h4 text-grey/grey/1 lg:text-white">
                        6.6&quot; HD+ Punch Hole Display<br/>
                        with 90 Hz Refresh Rate
                    </span>
                    <span className="font-markot text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                        Dive into a world of vibrant visuals with<br/>
                        a 90 Hz refresh rate, every swipe and<br/>
                        scroll feels buttery-smooth.
                    </span>
                </div>
            </div>
  
        </div>
    </div>
)
}

export default ProductDescription