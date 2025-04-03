const HighPerformance = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden border border-black/10 relative md:flex flex-row overflow-hidden rounded-2xl md:rounded-[56px] h-[740px] px-5 pt-5" style={{
            background:'linear-gradient(240.05deg, #CFDCF4 1.69%, rgba(199, 209, 227, 0) 68.28%)'
        }}>
            
            <div className="flex flex-col justify-center items-center h-full w-1/2 rounded-2xl md:rounded-[56px]">
                <img alt="Unisoc T603 Processor" src="/smartphone/A50C/highPerformance.png"/>
            </div>

            <div className="md:scale-75 lg:scale-100 flex flex-col justify-center items-center h-full w-1/2 rounded-2xl md:rounded-[56px] font-markot">
                <div className="flex flex-col gap-[40px] ">
                    <div className="flex flex-col gap-[32px] max-w-[450px]">
                        <div className="flex flex-col gap-[12px] max-w-[450px]">
                            <h3 className="text-desktop/h2 text-[#232323]">High-Performance Unisoc T603 Processor</h3>
                            <h2 className="text-desktop/body/1 text-[#6F7384] max-w-[350px]">A50C offers exceptional efficiency and speed for seamless multitasking and enhanced power management.</h2>
                        </div>

                        <h3 className="text-desktop/body/large text-[#252525] max-w-[500px]">Efficient Information Processing | Smoother Entertainment | Smoother Running Time</h3>
                    </div>

                    <div className="flex flex-row gap-[42px] max-w-[455px]">
                        <div className="flex flex-col gap-4">
                            <img src="/smartphone/A05i/octaCore.svg" alt='octaCore' className="w-[49px] h-[49px]"/>
                            <h3 className="text-desktop/h6/medium text-[#0E0E0E] max-w-[180px]">Octa-Core Processor</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <img src="/smartphone/A05i/gigaHertz.svg" alt='gigaHertz' className="w-[49px] h-[49px]"/>
                            <h3 className="text-desktop/h6/medium text-[#0E0E0E] max-w-[240px]">1.8 GHz Primary Clock Speed</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Mobile */}
        <div className="md:hidden border border-black/10 relative flex flex-col items-center gap-10 py-[37px] overflow-hidden rounded-2xl md:rounded-[56px] bg-HighPerformanceGradient max-h-[650px] h-auto px-5 " style={{
            background:'linear-gradient(240.05deg, #CFDCF4 1.69%, rgba(199, 209, 227, 0) 68.28%)'
        }}>
            
            <div className="flex flex-col justify-center items-center h-full max-w-[250px] w-full rounded-2xl md:rounded-[56px]">
                <img alt="Unisoc T603 Processor" src="/smartphone/A50C/highPerformance.png"/>
            </div>

            <div className="md:scale-75 lg:scale-100 flex flex-col justify-center items-center h-full w-full rounded-2xl md:rounded-[56px] font-markot">
                <div className="flex flex-col justify-between items-center gap-[8px] h-auto max-w-[296px]">
                    <div className="text-center flex flex-col gap-2">
                        <h3 className="text-mobile/h4 text-[#232323]">High-Performance Unisoc T603 Processor</h3>
                        <h2 className="text-mobile/body/2 text-black">A50C offers exceptional efficiency and speed for seamless multitasking and enhanced power management.</h2>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <h3 className="text-center text-mobile/h7 text-[#252525] max-w-[500px]">Efficient Information Processing | Smoother Entertainment | Smoother Running Time</h3>
                        <div className="flex flex-row  max-w-[296px]">
                            <div className="flex flex-row gap-3">
                                <img src="/smartphone/A05i/octaCore.svg" alt='octaCore' className="w-[32px] h-[32px]"/>
                                <h3 className="text-mobile/h7 text-[#0E0E0E] max-w-[101px]">Octa-Core Processor</h3>
                            </div>
                            <div className="flex flex-row gap-3">
                                <img src="/smartphone/A05i/gigaHertz.svg" alt='gigaHertz' className="w-[32px] h-[32px]"/>
                                <h3 className="text-mobile/h7 text-[#0E0E0E] max-w-[101px]">1.8 GHz Primary Clock Speed</h3>
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