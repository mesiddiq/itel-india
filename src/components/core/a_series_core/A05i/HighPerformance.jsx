const HighPerformance = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden border border-black/10 relative md:flex flex-row overflow-hidden rounded-2xl md:rounded-[56px] bg-HighPerformanceGradient h-[740px] px-5 pt-5">
            
            <div className="flex flex-col justify-center items-center h-full w-1/2 rounded-2xl md:rounded-[56px]">
                <img src="/smartphone/A05i/highPerformance.png"/>
            </div>

            <div className="md:scale-75 lg:scale-100 flex flex-col justify-center items-center h-full w-1/2 rounded-2xl md:rounded-[56px] font-markot">
                <div className="flex flex-col justify-between h-[569px] ">
                    <div className="flex flex-col gap-[12px] max-w-[450px]">
                        <h1 className="text-desktop/h2 text-[#232323]">High-Performance Octa-Core A55 Cortex Processor</h1>
                        <h2 className="text-desktop/body/1 text-[#6F7384] max-w-[350px]">A55 Cortex offers exceptional efficiency and speed for advanced apps. Its robust architecture ensures seamless multitasking and enhanced power management.</h2>
                    </div>

                    <div className="flex flex-col gap-[32px]">
                        <h1 className="text-desktop/body/large text-[#252525] max-w-[500px]">Efficient Information Processing | Smoother Entertainment | Smoother Running Time</h1>
                        <div className="flex flex-row gap-[42px] max-w-[455px]">
                            <div className="flex flex-col gap-4">
                                <img src="/smartphone/A05i/octaCore.svg" alt='octaCore' className="w-[49px] h-[49px]"/>
                                <h1 className="text-desktop/h6/medium text-[#0E0E0E] max-w-[180px]">A55 Cortex Octa-Core</h1>
                            </div>
                            <div className="flex flex-col gap-4">
                                <img src="/smartphone/A05i/gigaHertz.svg" alt='gigaHertz' className="w-[49px] h-[49px]"/>
                                <h1 className="text-desktop/h6/medium text-[#0E0E0E] max-w-[180px]">1.6 GHz</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Mobile */}
        <div className="md:hidden border border-black/10 relative flex flex-col items-center gap-10 py-12 overflow-hidden rounded-2xl md:rounded-[56px] bg-HighPerformanceGradient h-auto px-5 ">
            
            <div className="flex flex-col justify-center items-center h-full max-w-[250px] w-full rounded-2xl md:rounded-[56px]">
                <img src="/smartphone/A05i/highPerformance.png"/>
            </div>

            <div className="md:scale-75 lg:scale-100 flex flex-col justify-center items-center h-full w-full rounded-2xl md:rounded-[56px] font-markot">
                <div className="flex flex-col justify-between gap-[8px] h-auto max-w-[296px]">
                    <div className="flex flex-col gap-[8px]">
                        <h1 className="text-mobile/h5 text-[#232323]">High-Performance Octa-Core A55 Cortex Processor</h1>
                        <h2 className="text-mobile/small/body text-black">A55 Cortex offers exceptional efficiency and speed for advanced apps. Its robust architecture ensures seamless multitasking and enhanced power management.</h2>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <h1 className="text-mobile/small/button text-[#252525] max-w-[500px]">Efficient Information Processing | Smoother Entertainment | Smoother Running Time</h1>
                        <div className="flex flex-row gap-[16px] max-w-[296px]">
                            <div className="flex flex-col gap-3">
                                <img src="/smartphone/A05i/octaCore.svg" alt='octaCore' className="w-[32px] h-[32px]"/>
                                <h1 className="text-mobile/h7 text-[#0E0E0E] max-w-[180px]">A55 Cortex Octa-Core</h1>
                            </div>
                            <div className="flex flex-col gap-3">
                                <img src="/smartphone/A05i/gigaHertz.svg" alt='gigaHertz' className="w-[32px] h-[32px]"/>
                                <h1 className="text-mobile/h7 text-[#0E0E0E] max-w-[180px]">1.6 GHz</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
  )
}

export default HighPerformance