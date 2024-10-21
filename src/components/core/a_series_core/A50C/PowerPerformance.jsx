const PowerPerformance = () => {
  return (
    <>
    {/* Laptop */}
    <div className="hidden md:flex flex-col justify-between h-[740px] border border-black/10 pt-[56px] px-[47px]  relative overflow-hidden rounded-2xl md:rounded-[56px]" style={{
      background: 'linear-gradient(8.09deg, rgba(207, 220, 244, 0.8) 5.53%, rgba(207, 220, 244, 0) 85.54%)',
    }}>
      <div className="font-markot flex flex-col items-center ">
        <div className="flex flex-row justify-between w-full ">
          <div className="flex flex-col gap-3">
            <h1 className="text-desktop/h2 text-[#232323]">Power & Performance</h1>
            <h1 className="text-desktop/h4 text-[#232323]">4GB* (2GB+ 2GB)* RAM | 32GB ROM</h1>
          </div>

          <div className="flex flex-col gap-4 max-w-[345px]">
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-desktop/h3 text-[#232323]">20%</h1>
              <h1 className="text-desktop/body/large text-[#232323]">Reduced start-up time of frequently used apps</h1>
            </div>
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-desktop/h3 text-[#232323]">36%</h1>
              <h1 className="text-desktop/body/large text-[#232323]">Faster warm boot of apps</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col justify-end items-center mb-10">
        {/* Image comes here */}
        <img src='/smartphone/A50C/powerPerformance.png' alt="powerPerformance" className="w-3/4" />
      </div>

      <h1 className="absolute bottom-6 right-12 font-markot text-desktop/caption text-[#232323]">Memory Fusion Technology*</h1>
    </div>

    {/* Mobile */}
    <div className="md:hidden flex flex-col items-center justify-between max-h-[392px] h-[392px] border border-black/10 pt-[24px] px-[16px]  relative overflow-hidden rounded-2xl md:rounded-[56px]" style={{
      background: 'linear-gradient(8.09deg, rgba(207, 220, 244, 0.8) 5.53%, rgba(207, 220, 244, 0) 85.54%)',
    }}>
      <div className="font-markot flex flex-col items-center w-full max-w-[350px]">
        <div className="flex flex-col gap-[24px] w-full ">
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-mobile/h4 text-[#181818]">Power & Performance</h1>
            <h1 className="text-mobile/h6 text-[#1C1B1B]">4GB* (2GB+ 2GB)* RAM | 32GB ROM</h1>
          </div>

          <div className="flex flex-row gap-4 ">
            <div className="flex flex-row items-start gap-2">
              <h1 className="text-mobile/h5/medium text-[#0E0E0E]">20%</h1>
              <h1 className="text-mobile/body/2 text-[#0E0E0E]">Reduced start-up time of frequently used apps</h1>
            </div>

            <div className="border border-grey/grey/4"></div>

            <div className="flex flex-row items-start gap-2">
              <h1 className="text-mobile/h5/medium text-[#0E0E0E]">36%</h1>
              <h1 className="text-mobile/body/2 text-[#0E0E0E]">Faster warm boot of apps</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col justify-end items-center mb-10">
        {/* Image comes here */}
        <img src='/smartphone/A50C/powerPerformance.png' alt="powerPerformance" className="w-3/4" />
      </div>

      <h1 className="absolute bottom-4 right-4 font-markot text-[10px] font-normal leading-4 text-[#232323]">Memory Fusion Technology*</h1>

    </div>
    </>
  )
}

export default PowerPerformance