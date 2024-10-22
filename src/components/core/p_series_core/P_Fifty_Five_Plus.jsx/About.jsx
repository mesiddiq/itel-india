import React from 'react'

const About = () => {
  return (
    <div className="h-max py-8 lg:h-[701px] flex justify-center items-center w-full bg-cover"
    style={{ backgroundImage: 'url(/SmartPhone/P55plus/banner1.png)' }}>
    <div className='content flex flex-col justify-center items-center w-full px-4 lg:p-0'>
        <div className="flex flex-col lg:flex-row lg:justify-between items-right gap-3 lg:gap-0">
            <h2  className="gap-[6px] w-full lg:w-1/2 text-mobile/h4 lg:text-desktop/h2 text-transparent bg-clip-text" style={{
  backgroundImage: 'linear-gradient(180deg, #ACC887 0%, #3E9C6F 100%)'
}}>
            Get a 45W Super Charge Smartphone for Under 10k
            </h2>
            <h2 data-aos="fade-up" className="w-full lg:w-1/2 text-desktop/body/1 text-grey/grey/2" >
            Get Ready for Power: Meet itel P55+, a smartphone under 10K with 45W Charging. It is your performance companion with 8GB RAM, expandable up to 16GB* with Memory Fusion, and 256GB ROM. 
            Experience every detail on the 6.6" HD+ punch-hole display, complete with a smooth 90Hz refresh rate for seamless viewing. The sleek vegan leather finish exudes unparalleled elegance.
            </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-8 lg:gap-6 w-full items-center">

            <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] rounded-2xl flex flex-col gap-2 lg:gap-6">
                <img src="/P_Series/about1.png" alt='' className="w-[48px] lg:w-[52px]" />
                <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                    <span className="text-mobile/h4/medium lg:text-desktop/h4  text-transparent bg-clip-text "  style={{
  backgroundImage: 'linear-gradient(180deg, #ACC887 0%, #3E9C6F 100%)'
}}>
                        <span className=''>
                        45W Ultra Super 
                        Charging Phone
                        </span>
                    </span>
                    <span  className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80" >
                    Stay juiced up all day with a 45W ultra-fast charging smartphone under 10K. Say goodbye to low battery anxiety!
                    </span>
                </div>
            </div>

            <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] rounded-2xl flex flex-col gap-2 lg:gap-6">
                <img src="/P_Series/about2.png" alt='' className="w-[48px] lg:w-[52px]" />
                <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                    <span className="text-mobile/h5/medium lg:text-desktop/h4  text-transparent bg-clip-text"  style={{
  backgroundImage: 'linear-gradient(180deg, #ACC887 0%, #3E9C6F 100%)'
}}>
                    Memory Marvel: 8GB RAM, expandable up to 16GB* with Memory Fusion
                    </span>
                    <span className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80" >
                    Unleash multitasking prowess and store your world – from apps to shows to memories – all in one powerhouse device.
                    </span>
                </div>
            </div>

            <div className="w-full lg:w-1/3 h-[227px] lg:h-[287px] rounded-2xl flex flex-col gap-2 lg:gap-6">
                <img src="/P_Series/about3.png" alt='' className="w-[48px] lg:w-[52px]" />
                <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                    <span className="text-mobile/h5/medium lg:text-desktop/h4  text-transparent bg-clip-text"  style={{
  backgroundImage: 'linear-gradient(180deg, #ACC887 0%, #3E9C6F 100%)'
}}>
                    Vegan <br/>
                    Leather Finish
                    </span>
                    <span className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                    Flaunt your grace with the luxurious vegan leather finish, adding an extra touch of sophistication to your device!

                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About