const ClearCamera = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden lg:block p-[50px] font-markot border border-black/10 h-[739px] w-full rounded-2xl md:rounded-[56px] relative overflow-hidden" style={{
            backgroundImage: `url("/smartphone/A50C/clearCamera.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}>
            
            <img 
                src='/smartphone/A50C/cameraSpecs.png' 
                alt="cameraSpecs" 
                className="top-0 absolute w-full h-full object-cover z-0" 
            />

            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2 text-black/1">
                    <h1 className="max-w-[539px] text-desktop/h2 ">Clear Camera to Record Exciting Moments</h1>
                    <h1 className="max-w-[455px] text-desktop/body/large ">Featuring an 8MP AI rear camera and 5MP selfie camera, every shot is infused with stunning detail and clarity.</h1>
                </div>

                <div className="flex flex-col gap-[42px] text-[#232323]">
                    <div className="flex flex-row gap-[42px]">
                        <div className="flex flex-col gap-[18px] min-w-[91px] max-w-[91px]">
                            <img src='/smartphone/A50C/beautyMode.svg' alt="beautyMode" className="w-[45px] h-[45px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">5 AI Beauty Mode</h1>
                        </div>
                        <div className="flex flex-col gap-[18px] min-w-[91px] max-w-[91px]">
                            <img src='/smartphone/A50C/potraitMode.svg' alt="potraitMode" className="w-[45px] h-[45px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">Portrait Mode</h1>
                        </div>
                        <div className="flex flex-col gap-[18px] min-w-[91px] max-w-[91px]">
                            <img src='/smartphone/A50C/wideSelfie.svg' alt="wideSelfie" className="w-[45px] h-[45px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">Wide Selfie Mode</h1>
                        </div>
                    </div>

                    <div className="flex flex-row gap-[42px]">
                        <div className="flex flex-col gap-[18px] min-w-[91px] max-w-[91px]">
                            <img src='/smartphone/A50C/panorama.svg' alt="panorama" className="w-[45px] h-[45px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">Panorama</h1>
                        </div>
                        <div className="flex flex-col gap-[18px] min-w-[91px] max-w-[91px]">
                            <img src='/smartphone/A50C/hdrMode.svg' alt="hdrMode" className="w-[45px] h-[45px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">HDR Mode</h1>
                        </div>
                        <div className="flex flex-col gap-[18px] min-w-[91px] max-w-[91px]">
                            <img src='/smartphone/A50C/beautyMode.svg' alt="beautyMode" className="w-[45px] h-[45px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">Time Lapse</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col justify-between pt-[22px]  font-markot border border-black/10 h-auto min-h-[678px] w-full rounded-2xl md:rounded-[56px] relative overflow-hidden" style={{
            backgroundImage: `url("/smartphone/A50C/clearCamera.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}>
            
    
            <div className="flex flex-col items-center gap-4 h-full px-4">
                <div className="flex flex-col gap-2 text-black/1 text-center">
                    <h1 className="max-w-[539px] text-mobile/h4 ">Clear Camera to Record Exciting Moments</h1>
                    <h1 className="max-w-[455px] text-mobile/body/2 ">Featuring an 8MP AI rear camera and 5MP selfie camera, every shot is infused with stunning detail and clarity.</h1>
                </div>

                <div className="z-10 flex flex-col gap-[42px] text-[#232323] text-center">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col items-center gap-[16px] min-w-[88px] max-w-[88px]">
                            <img src='/smartphone/A50C/beautyMode.svg' alt="beautyMode" className="w-[32px] h-[32px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">5 AI Beauty Mode</h1>
                        </div>
                        <div className="flex flex-col items-center gap-[16px] min-w-[88px] max-w-[88px]">
                            <img src='/smartphone/A50C/potraitMode.svg' alt="potraitMode" className="w-[32px] h-[32px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">Portrait Mode</h1>
                        </div>
                        <div className="flex flex-col items-center gap-[16px] min-w-[88px] max-w-[88px]">
                            <img src='/smartphone/A50C/wideSelfie.svg' alt="wideSelfie" className="w-[32px] h-[32px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">Wide Selfie Mode</h1>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col items-center gap-[16px] min-w-[88px] max-w-[88px]">
                            <img src='/smartphone/A50C/panorama.svg' alt="panorama" className="w-[32px] h-[32px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">Panorama</h1>
                        </div>
                        <div className="flex flex-col items-center gap-[16px] min-w-[88px] max-w-[88px]">
                            <img src='/smartphone/A50C/hdrMode.svg' alt="hdrMode" className="w-[32px] h-[32px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">HDR Mode</h1>
                        </div>
                        <div className="flex flex-col items-center gap-[16px] min-w-[88px] max-w-[88px]">
                            <img src='/smartphone/A50C/beautyMode.svg' alt="beautyMode" className="w-[32px] h-[32px]" />
                            <h1 className="text-[16px] font-bold leading-[19.2px] tracking-[0.01em]">Time Lapse</h1>
                        </div>
                    </div>
                </div>
            </div>

            <img 
                src='/smartphone/A50C/cameraSpecs.png' 
                alt="cameraSpecs" 
                className="z-0 scale-125 sm:scale-100  -translate-x-[10%] -translate-y-[10%] sm:-translate-x-[0%] sm:-translate-y-[0%] w-full h-full object-cover" 
            />


        </div>

    </>
  )
}

export default ClearCamera