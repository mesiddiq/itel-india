const MultiTaskEase = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden border border-black/10 relative lg:flex flex-row overflow-hidden rounded-2xl md:rounded-[56px] bg-MultiTaskEaseGradient h-[740px] px-5 ">
            
            <div className="flex flex-col justify-center items-center h-full w-[60%] rounded-2xl md:rounded-[56px]">
                <img alt="Multi-task at Ease: 32GB ROM" src="/smartphone/A05i/MultiTaskEaseImage.png" className="mt-20"/>
            </div>

            <div className="md:scale-75 lg:scale-100 flex flex-col justify-center items-center h-full w-[40%] rounded-2xl md:rounded-[56px] font-markot">
                <div className="flex flex-col justify-between gap-[42px] max-w-[500px]">
                    <div className="flex flex-col gap-[12px]">
                        <h1 className="text-desktop/h2 text-[#232323] max-w-[400px]">Multi-task at Ease: 32GB ROM </h1>
                        <h2 className="text-desktop/body/1 text-black max-w-[350px]">Enjoy 32GB storage providing a lag-free experience and plenty of room for all your essential files.</h2>
                    </div>

                    <div className="flex flex-col gap-[38px]">
                        <div className="flex flex-row items-center gap-[12px]">
                            <img src="/smartphone/A05i/photos.svg" alt='RAMHighPerformance' className="w-[48px] h-[48px]"/>
                            <h1 className="text-mobile/h3 text-[#050036]">13,000 Photos</h1>
                        </div>

                        <div className="flex flex-row items-center gap-[12px]">
                            <img src="/smartphone/A05i/videos.svg" alt='RAMHighPerformance' className="w-[48px] h-[48px]"/>
                            <h1 className="text-mobile/h3 text-[#050036]">9,000 Short Videos</h1>
                        </div>

                        <div className="flex flex-row items-center gap-[12px]">
                            <img src="/smartphone/A05i/tvSeries.svg" alt='RAMHighPerformance' className="w-[48px] h-[48px]"/>
                            <h1 className="text-mobile/h3 text-[#050036]">300 TV Series</h1>
                        </div>

                        <div className="flex flex-row items-center gap-[12px]">
                            <img src="/smartphone/A05i/movies.svg" alt='RAMHighPerformance' className="w-[48px] h-[48px]"/>
                            <h1 className="text-mobile/h3 text-[#050036]">100 Movies</h1>
                        </div>

                    </div>
                </div>
            </div>

            <h1 className="absolute right-8 bottom-6 text-desktop/body/1 text-[#6F7384]">*Data may vary basis users’ usage pattern</h1>

        </div>

        {/* Mobile */}
        <div className="lg:hidden border border-black/10 pt-12 pb-16 relative flex flex-col gap-4 items-center overflow-hidden rounded-2xl md:rounded-[56px] bg-MultiTaskEaseGradient h-auto px-5 ">
            
            <div className="flex flex-col justify-center items-center h-full max-w-[300px] w-full rounded-2xl md:rounded-[56px]">
                <img alt="Multi-task at Ease: 32GB ROM" src="/smartphone/A05i/MultiTaskEaseImage.png" className=""/>
            </div>

            <div className="max-w-[350px] lg:scale-100 flex flex-col justify-center items-center h-full w-full md:rounded-[56px] font-markot">
                <div className="flex flex-col justify-between gap-[16px] w-full">
                    <div className="flex flex-col gap-[8px]">
                        <h1 className="text-mobile/h5/medium text-[#232323] ">Multi-task at Ease: 32GB ROM </h1>
                        <h2 className="text-mobile/small/body text-black ">Enjoy 32GB storage providing a lag-free experience and plenty of room for all your essential files.</h2>
                    </div>

                    <div className="flex flex-row gap-[16px] flex-wrap ">
                        <div className="flex flex-row items-center gap-[12px]">
                            <img src="/smartphone/A05i/photos.svg" alt='RAMHighPerformance' className="w-[32px] h-[32px]"/>
                            <h1 className="text-mobile/h7 text-[#050036]">13,000 Photos</h1>
                        </div>

                        <div className="flex flex-row items-center gap-[12px]">
                            <img src="/smartphone/A05i/videos.svg" alt='RAMHighPerformance' className="w-[32px] h-[32px]"/>
                            <h1 className="text-mobile/h7 text-[#050036]">9,000 Short Videos</h1>
                        </div>

                        <div className="flex flex-row items-center gap-[12px]">
                            <img src="/smartphone/A05i/tvSeries.svg" alt='RAMHighPerformance' className="w-[32px] h-[32px]"/>
                            <h1 className="text-mobile/h7 text-[#050036]">300 TV Series</h1>
                        </div>

                        <div className="flex flex-row items-center gap-[12px]">
                            <img src="/smartphone/A05i/movies.svg" alt='RAMHighPerformance' className="w-[32px] h-[32px]"/>
                            <h1 className="text-mobile/h7 text-[#050036]">100 Movies</h1>
                        </div>

                    </div>
                </div>
            </div>
            
            <h1 className="absolute right-5 bottom-4 text-[10px] font-normal leading-[16px] font-markot text-[#6F7384]">*Data may vary basis users’ usage pattern</h1>

        </div>
    </>
  )
}

export default MultiTaskEase