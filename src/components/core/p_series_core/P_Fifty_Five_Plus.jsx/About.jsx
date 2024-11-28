import React from 'react'

const About = () => {
  return (
    <div className="h-max py-8 lg:h-[701px] flex justify-center items-center w-full bg-cover"
    style={{ backgroundImage: 'url(/smartphone/P55+/Backgrounds/About.webp)' }} id='overview'>
    <div className='lg:content font-markot flex flex-col justify-center items-center w-full px-4 lg:p-0'>
        <div className="flex flex-col lg:flex-row lg:justify-between items-right gap-3 lg:gap-0">
            <h2  className="gap-[6px] font-markot w-full lg:w-1/2 text-mobile/h4 lg:text-desktop/h2 text-transparent bg-clip-text" style={{
  backgroundImage: 'linear-gradient(180deg, #ACC887 0%, #3E9C6F 100%)'
}}>
            Get a 45W Super<br/> Charge smartphone<br/> for Under 10k
            </h2>
            <h2 data-aos="fade-up" className="w-full font-markot lg:w-1/2 text-desktop/body/1 text-grey/grey/2" >
            Get Ready for Power: Meet itel P55+, a smartphone under 10K with 45W Charging. It is your performance companion with 8GB RAM, expandable up to 16GB* with Memory Fusion, and 256GB ROM. 
            Experience every detail on the 6.6" HD+ punch-hole display, complete with a smooth 90Hz refresh rate for seamless viewing. The sleek vegan leather finish exudes unparalleled elegance.
            </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-20 lg:gap-6 w-full items-center">

            <div className="w-full lg:w-1/3 h-max md:h-[287px] rounded-2xl border-white/20 border md:border-0 p-4 md:p-0 flex flex-col gap-2 lg:gap-6">
                <img src="/smartphone/P55+/Backgrounds/icon5.png" alt='' className="w-[48px] lg:w-[52px]" />
                <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                    <span className="text-mobile/h4/medium lg:text-desktop/h4  text-transparent bg-clip-text "  style={{
  backgroundImage: 'linear-gradient(180deg, #ACC887 0%, #3E9C6F 100%)'
}}>
                        <span className=''>
                        45W Ultra Super <br/>
                        Charging Phone
                        </span>
                    </span>
                    <span  className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80"data-aos='fade-up' >
                    Stay juiced up all day with a 45W ultra-fast<br/> charging smartphone under 10K. Say<br/> goodbye to low battery anxiety!
                    </span>
                </div>
            </div>

            <div className="w-full lg:w-1/3 h-max md:h-[287px] rounded-2xl border-white/20 border md:border-0 p-4 md:p-0 flex flex-col gap-2 lg:gap-6">
                <img src="/smartphone/P55+/Backgrounds/icon6.png" alt='' className="w-[48px] lg:w-[52px]" />
                <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                    <span className="text-mobile/h5/medium lg:text-desktop/h4  text-transparent bg-clip-text"  style={{
  backgroundImage: 'linear-gradient(180deg, #ACC887 0%, #3E9C6F 100%)'
}}>
                    Memory Marvel: 8GB RAM,<br/> expandable up to 16GB* with Memory Fusion
                    </span>
                    <span className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80" >
                    Unleash multitasking prowess and store<br/> your world – from apps to shows to <br/>memories – all in one powerhouse device.
                    </span>
                </div>
            </div>

            <div className="w-full lg:w-1/3 h-max md:h-[287px] rounded-2xl border-white/20 border md:border-0 p-4 md:p-0 flex flex-col gap-2 lg:gap-6">
                <img src="/smartphone/P55+/Backgrounds/icon7.png" alt='' className="w-[48px] lg:w-[52px]" />
                <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                    <span className="text-mobile/h5/medium lg:text-desktop/h4  text-transparent bg-clip-text"  style={{
  backgroundImage: 'linear-gradient(180deg, #ACC887 0%, #3E9C6F 100%)'
}}>
                    Vegan <br/>
                    Leather Finish
                    </span>
                    <span className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                    Flaunt your grace with the luxurious vegan <br/>leather finish, adding an extra touch of <br/>sophistication to your device!

                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About