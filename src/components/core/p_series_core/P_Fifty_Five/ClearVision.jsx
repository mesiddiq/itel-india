const ClearVision = () => {
  return (
    <div className="h-[860px] w-full bg-white py-[120px]">
        <div className="content w-full h-full relative">
            
            <img src='/smartphone/P55/clearVisionBG.png' alt="clearVisionBG" className="absolute w-full h-full object-cover z-0" />
            
            <div className="relative z-10 font-markot h-full  p-16">
                
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-[24px]">
                        <h1 className="text-desktop/h2">90Hz Madness</h1>
                        <h2 className="text-base font-normal leading-[22.72px] text-left max-w-[300px]">Immerse yourself in the ultimate visual experience with the itel P55&apos;s 6.6-inch HD+ punch-hole display with a super-smooth 90Hz refresh rate.</h2>
                    </div>

                    <div className="flex flex-col gap-[12px] max-w-[290px]">
                        <img src='/smartphone/P55/punchHole.svg' alt="punchHole" className="w-[37px] h-[37px]" />
                        <h2 className="text-[22px] font-medium leading-[28px] tracking-[0.02em] text-left uppercase">6.6” HD+ with Punch hole display</h2>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ClearVision