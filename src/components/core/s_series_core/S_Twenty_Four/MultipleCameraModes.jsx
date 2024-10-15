const MultipleCameraModes = () => {
  return (
    <>
        <section className="font-markot h-full w-full bg-[#1c1b1b] py-[20px] px-4 lg:px-[190px]">

            <div className="content flex flex-col gap-[60px]">

                {/* Top Most Text */}
                <div className="flex flex-col gap-4 lg:gap-6 justify-center items-center">
                    <div className="flex flex-col gap-[10px] w-[80%] lg:w-full text-center lg:gap-10 justify-center items-center">
                        <h1 className="text-desktop/h4 lg:text-desktop/h2 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
                            Multiple Camera Modes: Get Your Best Shots
                        </h1>
                        <p className="text-mobile/h6 lg:text-desktop/h5/medium text-grey/grey/1"> 
                            AI Clear Portrait | Super Night Mode | Portrait Blurring 
                        </p>
                    </div>
                    <span className="text-mobile/body/2 lg:text-desktop/body/1 text-grey/grey/1 text-center">
                        Discover versatile camera modes, from portraits to night mode, for stunning, professional-quality photos every time. 
                    </span>
                </div>
                
                <div className="w-full text-white font-bold p-20 border-4 border-itel-red">
                    This section is incomplete
                </div>

                {/* Lower Most Text */}
                <div className="flex flex-col gap-4 lg:gap-6 justify-center items-center">
                    <div className="flex flex-col gap-[10px] w-[80%] lg:w-full text-center lg:gap-10 justify-center items-center">
                        <h1 className="text-desktop/h4 lg:text-desktop/h2 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
                            Shoot Videos with Impeccable Clarity
                        </h1>
                        <p className="text-mobile/h6 lg:text-desktop/h5/medium text-grey/grey/1"> 
                            EIS Video Stabilisation (video recording at 2k@30fps) | Dual Video Recording
                        </p>
                    </div>
                    <span className="text-mobile/body/2 lg:text-desktop/body/1 text-grey/grey/1 text-center">
                        Capture smooth, high-quality videos with EIS stabilization at 2K@30fps. The dual recording feature lets you film from front and back camera - Get travel vlogs, parties etc.
                    </span>
                </div>

            </div>
            
        </section>
    </>
    
  )
}

export default MultipleCameraModes