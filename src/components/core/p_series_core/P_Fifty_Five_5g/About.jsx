import React from 'react';



const Example = () => {
    
    return (
        <div className="h-max py-8 lg:h-[701px] flex px-4 lg:px-0 justify-center font-markot items-center w-full bg-cover"
        style={{ backgroundImage: 'url(/smartphone/P55fiveg/Backgrounds/About.webp)' }} id='overview'>
        <div className='content flex flex-col justify-center items-center gap-6 w-full '>
            <div className="flex flex-col lg:flex-row lg:justify-between items-right gap-3 lg:gap-0">
                <h2  className="gap-[6px] w-full lg:w-1/2 text-mobile/h4 font-markot lg:text-desktop/h2 text-white">
                    Speed, Flair, and Power<br /> in your Pocket!
                </h2>
                <h2 data-aos="fade-up" className="w-full lg:w-1/2 text-desktop/body/1 text-grey/grey/2">
                The powerful itel P55 5G is one of the best phones under ₹12,000, featuring a superfast MediaTek Dimensity 6080 processor, a stunning 6.6" HD+ IPS display, and a robust 5000mAh battery with 18W fast charging. This chic 5G smartphone offers up to 12GB* (6GB+6GB*) RAM, 128GB storage, and a high-camera mobile setup with a 50MP AI Dual Rear and 8MP Selfie Camera. With enhanced security, an elegant design, and a Type-C charger, the itel P55 5G stands out among the latest itel smartphones.
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4  lg:gap-6 w-full items-center">

                <div className="w-full lg:w-1/3 h-max md:h-[287px] rounded-2xl border-white/20 border md:border-0 p-4 md:p-0 flex flex-col gap-2 lg:gap-6">
                    <img src="/smartphone/P55fiveg/Backgrounds/about1.png" alt='' className="w-[48px] lg:w-[52px]" />
                    <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                        <span className="text-mobile/h4/medium lg:text-desktop/h4 lg:text-white text-[#F2F2F2]">
                            <span className=''>
                            5G Enhanced with NRCA
                            </span>
                        </span>
                        <span  className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                        Experience the power of 5G enhanced with<br/> NRCA. Unlock superior connectivity with<br/> next-gen network integration.
                        </span>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 h-max md:h-[287px] rounded-2xl border-white/20 border md:border-0 p-4 md:p-0 flex flex-col gap-2 lg:gap-6">
                    <img src="/smartphone/P55fiveg/Backgrounds/about3.png" alt='' className="w-[48px] lg:w-[52px]" />
                    <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                        <span className="text-mobile/h5/medium lg:text-desktop/h4 lg:text-white text-[#F2F2F2]">
                        Blazing Performance with <br/>MediaTek Dimensity 6080
                        </span>
                        <span className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                        Get hyped for the itel P55 5G! Featuring<br/> MediaTek Dimensity 6080 processor,<br/>designed for ultimate multitasking.

                        </span>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 h-max md:h-[287px] rounded-2xl border-white/20 border md:border-0 p-4 md:p-0 flex flex-col gap-2 lg:gap-6">
                    <img src="/smartphone/P55fiveg/Backgrounds/about2.png" alt='' className="w-[48px] lg:w-[52px]" />
                    <div data-aos="fade-up" className="flex flex-col gap-2 w-full">
                        <span className="text-mobile/h5/medium lg:text-desktop/h4 lg:text-white text-[#F2F2F2]">
                        Mega RAM & Storage: 12GB*<br/> (6GB + 6GB*) RAM + 128GB ROM
                        </span>
                        <span className="text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/3 lg:text-grey/grey/2 opacity-80">
                        Experience endless possibilities with the itel P55<br/> 5G's impressive storage capacity powered by <br/>memory fusion technology. 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Example