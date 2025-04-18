const MultipleCameraModes = () => {
  return (
    <>
        <section className="font-markot h-full w-full bg-[#1c1b1b] py-[20px] px-4 lg:px-[190px]">

            <div className="content flex flex-col items-center gap-5 lg:gap-[60px]">

                {/* Top Most Text */}
                <div className="flex flex-col gap-4 lg:gap-6 justify-center items-center">
                    <div className="flex flex-col gap-[10px] w-[80%] lg:w-full text-center lg:gap-10 justify-center items-center">
                        <h3 className="text-desktop/h4 lg:text-desktop/h2 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
                            Multiple Camera Modes: Get Your Best Shots
                        </h3>
                        <p className="text-mobile/h6 lg:text-desktop/h5/medium text-grey/grey/1"> 
                            AI Clear Portrait | Super Night Mode | Portrait Blurring 
                        </p>
                    </div>
                    <span className="w-full md:w-1/2 text-mobile/body/2 lg:text-desktop/body/1 text-grey/grey/1 text-center">
                        Discover versatile camera modes, from portraits to night mode, for stunning, professional-quality photos every time. 
                    </span>
                </div>
                
                <div className="hidden lg:flex flex-row justify-center lg:gap-[42px]">
                    <div className="flex flex-row justify-center items-end gap-6 lg:gap-3">
                        <img src='/smartphone/S24/superNightModeText.svg' alt='superNightModeText' className="w-[30%] lg:w-[10%]"/>
                        <img src='/smartphone/S24/superNightMode.png' alt='	Super Night Mode' className="w-[90%]"/>
                    </div>
                    <div className="flex flex-row justify-center items-end gap-6 lg:gap-3">
                        <img src='/smartphone/S24/potraitMode.svg' alt='potraitModeText' className="w-[30%] lg:w-[10%]"/>
                        <img src='/smartphone/S24/potraitMode.png' alt='Potrait Mode' className="w-[90%]"/>
                    </div>
                </div>

                <div className="hidden lg:flex flex-row justify-center gap-2 lg:gap-[42px] w-[90%] 2xl:w-full">
                    <div className="flex flex-row justify-center items-end gap-2 lg:gap-6">
                        <img src='/smartphone/S24/timeLapseText.svg' alt='timeLapseText' className=""/>
                        <img src='/smartphone/S24/timeLapse.png' alt='Time Lapse' className="2xl:w-[90%]"/>
                    </div>
                </div>

                {/* Mobile */}
                <div className="lg:hidden grid grid-cols-[50%_50%] gap-x-2">
                    <div className="grid grid-cols-[10%_80%] items-end gap-x-2">
                        <img src='/smartphone/S24/superNightModeText.svg' alt='superNightModeText' className="w-full "/>
                        <img src='/smartphone/S24/superNightMode.png' alt='	Super Night Mode' className="w-full "/>
                    </div>
                    <div className="grid grid-cols-[10%_80%] items-end gap-x-3">
                        <img src='/smartphone/S24/potraitMode.svg' alt='potraitModeText' className=" "/>
                        <img src='/smartphone/S24/potraitMode.png' alt='Potrait Mode' className="w-full"/>
                    </div>
                </div>

                {/* Mobile */}
                <div className="lg:hidden  grid grid-cols-[7%_93%] justify-between items-end ">
                    <img src='/smartphone/S24/timeLapseText.svg' alt='timeLapseText' className="w-[80%]"/>
                    <video autoPlay muted className="w-full">
                        <source
                        src="/videos/s24timelapse.webm"
                        type="video/webm"
                        />
                    </video>
                    {/* <img src='/smartphone/S24/timeLapse.png' alt='timeLapse' className="h-full"/> */}
                </div>

                {/* Lower Most Text */}
                <div className="flex flex-col gap-4 lg:gap-6 justify-center items-center my-8 lg:my-12">
                    <div className="flex flex-col gap-[10px]  text-center lg:gap-10 justify-center items-center">
                        <h3 className="w-[80%] lg:w-full text-desktop/h4 lg:text-desktop/h2 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
                            Shoot Videos with Impeccable Clarity
                        </h3>
                        <p className="text-mobile/h6 lg:text-desktop/h5/medium text-grey/grey/1"> 
                            EIS Video Stabilisation (video recording at 2k@30fps) | Dual Video Recording
                        </p>
                    </div>
                    <span className="w-full lg:w-2/3 text-mobile/body/2 lg:text-desktop/body/1 text-grey/grey/1 text-center">
                        Capture smooth, high-quality videos with EIS stabilization at 2K@30fps. The dual recording feature lets you film from front and back camera - Get travel vlogs, parties etc.
                    </span>
                </div>

            </div>
            
        </section>
    </>
    
  )
}

export default MultipleCameraModes