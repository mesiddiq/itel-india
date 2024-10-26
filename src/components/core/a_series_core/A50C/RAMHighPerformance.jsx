const RAMHighPerformance = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden border border-black/10 relative md:flex flex-row overflow-hidden rounded-2xl md:rounded-[56px] bg-RAMHighPerformanceGradient h-[740px] px-5 pt-5">
        
        <div className="flex flex-col justify-end items-center h-full w-1/2 rounded-2xl md:rounded-[56px]">
            <img src="/smartphone/A05i/RAMHighPerformance-Laptop.png"/>
        </div>

        <div className="md:scale-75 lg:scale-100 flex flex-col justify-center items-center h-full w-1/2 rounded-2xl md:rounded-[56px] font-markot">
            <div className="flex flex-col justify-between gap-12 max-w-[500px]">
                <div className="flex flex-col gap-[18px]">
                    <h1 className="text-desktop/h2 text-[#232323]">4GB* (2GB + 2GB*) RAM for High Performance</h1>
                    <h2 className="text-desktop/body/large text-[#6F7384]">Enabled with Memory Fusion Technology</h2>
                </div>

                <div className="flex flex-col gap-[38px]">
                    <div className="flex flex-row gap-[40px]">
                        <img src="/smartphone/A05i/moreApps.svg" alt='RAMHighPerformance' className="w-[70px] h-[94px]"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-desktop/h3 text-[#0E0E0E]/80">2 More Apps</h1>
                            <h1 className="text-desktop/body/large text-[#232323]/80 max-w-[300px]">Running in the background</h1>
                        </div>
                    </div>

                    <div className="flex flex-row gap-[40px]">
                        <img src="/smartphone/A05i/reducedTime.svg" alt='RAMHighPerformance' className="w-[70px] h-[94px]"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-desktop/h3 text-[#0E0E0E]/80">20%</h1>
                            <h1 className="text-desktop/body/large text-[#232323]/80 max-w-[300px]">Reduced start-up time of frequently used apps</h1>
                        </div>
                    </div>

                    <div className="flex flex-row gap-[40px]">
                        <img src="/smartphone/A05i/fasterBoot.svg" alt='RAMHighPerformance' className="w-[70px] h-[94px]"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-desktop/h3 text-[#0E0E0E]/80">36%</h1>
                            <h1 className="text-desktop/body/large text-[#232323]/80 max-w-[300px]">Faster Warm Boot of Apps</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        </div>

        {/* Mobile */}
        <div className="border border-black/10 relative md:hidden flex flex-col-reverse gap-16 overflow-hidden rounded-2xl md:rounded-[56px] bg-RAMHighPerformanceGradient h-auto px-5 pt-5">
        
            <div className="flex flex-col justify-end items-center h-full w-full rounded-2xl md:rounded-[56px]">
                <img src="/smartphone/A05i/RAMHighPerformance-Mobile.png"/>
            </div>

            <div className=" flex flex-col justify-center items-start h-full w-full rounded-2xl md:rounded-[56px] font-markot">
                <div className="flex flex-col justify-between gap-4 max-w-[296px]">
                    <div className="flex flex-col gap-[8px]">
                        <h1 className="text-mobile/h5/medium text-[#232323]">4GB* (2GB + 2GB*) RAM for High Performance</h1>
                        <h2 className="text-mobile/small/body text-[#6F7384]">Enabled with Memory Fusion Technology</h2>
                    </div>

                    <div className="flex flex-col gap-[12px]">
                        <div className="flex flex-row gap-[12px]">
                            <img src="/smartphone/A05i/moreApps.svg" alt='RAMHighPerformance' className="w-[34px] h-[42px]"/>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-mobile/h6 text-[#0E0E0E]/80">2 More Apps</h1>
                                <h1 className="text-mobile/small/body text-[#232323]/80 max-w-[300px]">Running in the background</h1>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[12px]">
                            <img src="/smartphone/A05i/reducedTime.svg" alt='RAMHighPerformance' className="w-[34px] h-[42px]"/>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-mobile/h6 text-[#0E0E0E]/80">20%</h1>
                                <h1 className="text-mobile/small/body text-[#232323]/80 max-w-[300px]">Reduced start-up time of frequently used apps</h1>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[12px]">
                            <img src="/smartphone/A05i/fasterBoot.svg" alt='RAMHighPerformance' className="w-[34px] h-[42px]"/>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-mobile/h6 text-[#0E0E0E]/80">36%</h1>
                                <h1 className="text-mobile/small/body text-[#232323]/80 max-w-[300px]">Faster Warm Boot of Apps</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default RAMHighPerformance