const DisplayPart1 = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden md:flex flex-row justify-between h-[666px] border border-black/10 pt-[56px] px-[47px]  relative overflow-hidden rounded-2xl md:rounded-[56px]" style={{
            background: 'linear-gradient(240.05deg, rgba(207, 220, 244, 0.5) 1.69%, rgba(199, 209, 227, 0) 68.28%)',
        }}>
            <div className="font-markot w-1/2 flex flex-col gap-[42px] max-w-[492px] ">
                <div className="flex flex-col gap-3">
                    <h1 className="text-desktop/h2 text-[#232323]">6.6” HD+ IPS Display</h1>
                    <h1 className="text-desktop/body/large text-[#232323]">Enjoy HD quality display on the expansive 6.6” screen, seamlessly integrated with the dynamic notification bar - Keep up with notifications effortlessly. </h1>
                </div>

                <div className="flex flex-row gap-[32px]">
                    <div className="flex flex-col gap-2">
                        <img src='/smartphone/A50C/samplingRate.svg' alt="samplingRate" className="w-[49px]" />
                        <h1 className="text-desktop/h6/medium text-[#232323]">120 Hz Touch Sampling Rate</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <img src='/smartphone/A50C/refreshRate.svg' alt="refreshRate" className="w-[49px]" />
                        <h1 className="text-desktop/h6/medium text-[#232323]">60 Hz Refresh Rate</h1>
                    </div>
                </div>
            </div>
    
            <div className="w-1/2 h-full flex flex-col justify-end items-center">
            {/* Image comes here */}
            <img src='/smartphone/A50C/displayImage1.png' alt="displayImage1" className="w-full" />
            </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col justify-between items-center max-h-[526px] border border-black/10 pt-[16px] px-[16px] relative overflow-hidden rounded-2xl md:rounded-[56px]" style={{
            background: 'linear-gradient(240.05deg, rgba(207, 220, 244, 0.5) 1.69%, rgba(199, 209, 227, 0) 68.28%)',
        }}>
            <div className="font-markot w-full flex flex-col gap-[18px] max-w-[296px] ">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-mobile/h4 text-[#181818]">6.6” HD+ IPS Display</h1>
                    <h1 className="text-mobile/body/2 text-[#1C1B1B]">Enjoy HD quality display on the expansive 6.6” screen, seamlessly integrated with the dynamic notification bar - Keep up with notifications effortlessly. </h1>
                </div>

                <div className="flex flex-row text-center gap-[16px]">
                    <div className="flex flex-col items-center gap-[10px]">
                        <img src='/smartphone/A50C/samplingRate.svg' alt="samplingRate" className="w-[32px]" />
                        <h1 className="text-mobile/h7 text-[#0E0E0E]">120 Hz Touch Sampling Rate</h1>
                    </div>
                    <div className="flex flex-col items-center gap-[10px]">
                        <img src='/smartphone/A50C/refreshRate.svg' alt="refreshRate" className="w-[32px]" />
                        <h1 className="text-mobile/h7 text-[#0E0E0E]">60 Hz Refresh Rate</h1>
                    </div>
                </div>
            </div>
    
            <div className="w-full h-full flex flex-col justify-end items-center">
                {/* Image comes here */}
                <img src='/smartphone/A50C/displayImage1.png' alt="displayImage1" className="w-full" />
            </div>
        </div>
    </>
  )
}

export default DisplayPart1