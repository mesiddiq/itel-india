const ClearVision = () => {
  return (
    <>
    <div className="hidden sm:flex flex-row justify-center items-center h-[860px] w-full bg-white py-[120px] px-4 md:px-0">
        <div className="flex flex-row justify-center text-white items-center w-full h-full relative">
            
            <div className="content rounded-2xl h-full" style={{
                backgroundImage: `url('/smartphone/P55/clearVisionBG.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'   
            }}>
                <div className="relative z-10 h-full p-16 left-0">
                    
                    <div className="font-markot flex flex-col justify-between items-start h-full">
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
    </div>

    <div className="sm:hidden flex flex-row justify-center items-center w-full bg-white py-[40px] px-4 md:px-0">
        <div className="flex flex-row justify-center text-white items-center w-full h-full relative">
            
            <div className="content rounded-2xl min-h-[500px]" style={{
                backgroundImage: `url('/smartphone/P55/clearVisionBGMobile.png')`,
                backgroundPosition: 'top',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'   
            }}>
                <div className="relative z-10 py-[10px] w-full flex flex-col justify-start items-center">
                    
                    <div className="font-markot flex flex-col justify-start mt-[26px] items-center gap-[10px] h-full">
                            <h1 className="text-mobile/h4">90Hz Madness</h1>
                            <h2 className="text-mobile/body/2 text-center max-w-[218px]">Immerse yourself in the ultimate visual experience with the itel P55&apos;s 6.6-inch HD+ punch-hole display with a super-smooth 90Hz refresh rate.</h2>

                        <div className="flex flex-row gap-[6px]">
                            <img src='/smartphone/P55/punchHole.svg' alt="punchHole" className="w-[24px] h-[24px]" />
                            <h2 className="text-mobile/body/large uppercase">6.6” HD+ with Punch hole display</h2>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>


    </>
  )
}

export default ClearVision