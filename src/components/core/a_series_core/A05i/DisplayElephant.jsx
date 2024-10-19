const DisplayElephant = () => {
  return (
    // Optimised for all views
    <div className="border border-black/10 relative overflow-hidden rounded-2xl md:rounded-[56px]">
      <div className="h-full w-full rounded-2xl md:rounded-[56px]">
        <img src="/smartphone/A05i/displayElephant.png"/>
      </div>
      <div className="font-markot absolute bottom-[6px] sm:bottom-2 md:bottom-3 lg:bottom-4 w-full text-nowrap flex flex-row justify-center gap-4 md:gap-[47px]">
          <div className="flex flex-row items-center gap-2 lg:gap-3">
            <img src="/smartphone/A05i/largeScreenSize.svg" alt='largeScreenSize' className="w-4 h-4 lg:w-8 lg:h-8"/>
            <h1 className="text-mobile/small/body md:text-mobile/h6 lg:text-mobile/h3">6.6” Large Screen Size</h1>
          </div>
          <div className="flex flex-row items-center gap-2 lg:gap-3">
            <img src="/smartphone/A05i/hdResolution.svg" alt='hdResolution' className="w-4 h-4 lg:w-8 lg:h-8"/>
            <h1 className="text-mobile/small/body md:text-mobile/h6 lg:text-mobile/h3">HD+ Resolution</h1>
          </div>
          <div className="flex flex-row items-center gap-2 lg:gap-3">
            <img src="/smartphone/A05i/nitsBrightness.svg" alt='nitsBrightness' className="w-4 h-4 lg:w-8 lg:h-8"/>
            <h1 className="text-mobile/small/body md:text-mobile/h6 lg:text-mobile/h3">450 NITS</h1>
          </div>
      </div>
    </div>
  )
}

export default DisplayElephant