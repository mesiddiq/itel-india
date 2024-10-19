

export default function Frame2() {
  return (
    <div className="relative mt-[16px] bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full min-h-[400px] md:h-[739px] flex flex-col items-center md:rounded-[36px] rounded-[16px] overflow-hidden">
    {/* text div */}
    <div className="flex flex-col justify-start items-center z-10 xl:px-[244.5px] xl:pt-[34px] px-[12px] pt-[16px] md:px-[20px] md:pt-[24px]">
        <h2 className="xl:text-desktop/h2 md:text-desktop/h3 text-mobile/h4 text-center max-w-full">App Harmony: Speed Performance</h2>
        <span className="md:py-[20px]">
            <h4 className="md:text-desktop/h4 text-mobile/h6 text-[#232323] text-opacity-85 text-center max-w-full py-[12px]">8GB (*4GB+4GB*) RAM + 64GB ROM</h4>
        </span>
        <p className="xl:text-desktop/body/large md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-opacity-70 max-w-xl text-center xs:text-mobile/h7">
        Juggling apps has never been easier! Glide through your tasks with a fluid experience that makes multitasking a breeze.
        </p>
    </div>
    
    {/* img div */}
    <div className="xl:px-[101px] xl:pt-[220px] xl:pb-[52px] md:px-[12px] md:pb-[64px] md:pt-[160px] absolute z-0 md:flex hidden">
        <img
        src="/orange.png"
        alt="Trees"
        className="w-[1000px] h-full mx-auto"
        />
    </div>
    <div className="px-[12px] pb-[64px] xs:pb-0 pt-[160px] absolute z-0 md:hidden flex">
        <img
        src="/orange.png"
        alt="Trees"
        className="w-[304px] h-full mx-auto"
        />
    </div>
    
    <p className="absolute bottom-0 text-opacity-70 text-[#6F7384] right-0 md:pb-[32.47px] md:pr-[36px] pr-[12px] pb-[14px] text-[10px] md:text-desktop/body/1">*Memory Fusion Technology</p>
    </div>
  )
}
