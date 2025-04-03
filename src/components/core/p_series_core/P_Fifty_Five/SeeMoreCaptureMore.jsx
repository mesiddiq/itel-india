const SeeMoreCaptureMore = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden lg:flex flex-row w-full h-screen lg:min-h-[720px] bg-[#91C9EC] bg-cover lg:bg-contain" style={{ 
            backgroundImage: 'url(/smartphone/P55/SeeMoreCaptureMore-Laptop.webp)', 
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat', 
        }}>
            
            <div className="content">
                <div className="w-[40%] py-[80px] h-full flex flex-col justify-between items-start">

                    <div className="flex flex-col justify-between gap-[24px] ">
                        <h3 className="text-black/1 text-desktop/h2 max-w-[400px]">See More. Capture More. Experience More. </h3>
                        <h3 className="text-black/1 text-base font-normal leading-[22.72px] text-left max-w-[337px]">Get ready to unleash your creativity with AI-powered camera features.</h3>
                    </div>

                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-row items-center gap-[12px]">
                                <img src='/smartphone/P55/cameraIcon.svg' alt="cameraIcon" className="w-[34px] h-[34px]" />
                                <span className="text-[#050036] text-desktop/h4">50MP AI Dual Rear Camera</span>
                            </div>
                            <h3 className="text-desktop/body/1 text-black/1 max-w-[381px]">Portrait Mode | Super Night Mode | Panorama Mode | AR Shots | Time Lapse | HDR</h3>
                        </div>

                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-row items-center gap-[12px]">
                                <img src='/smartphone/P55/cameraIcon.svg' alt="cameraIcon" className="w-[34px] h-[34px]" />
                                <span className="text-[#050036] text-desktop/h4">8MP Front Camera</span>
                            </div>
                            <h3 className="text-desktop/body/1 text-black/1 max-w-[436px]">Ultra HD | Beauty | Wide Selfie | Short Video | Super Night | AR Shots | Time Lapse | Portrait Modes</h3>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        {/* Mobile */}
        <div className="lg:hidden w-full h-auto min-h-[654px] bg-[#91C9EC] flex flex-col-reverse justify-between">
           
            <div className="w-full h-full">
                <img src='/smartphone/P55/SeeMoreCaptureMore-Mobile.png' alt='SeeMoreCaptureMore' className="w-full h-full"/>
            </div>

            <div className="content">
                <div className="font-markot w-full p-[25px] h-full flex flex-col justify-between items-start xms:items-center gap-[25px]">

                    <div className="flex flex-col justify-between gap-[12px] ">
                        <h3 className="text-black/1 text-mobile/h4 max-w-[200px] xms:max-w-full xms:text-center">See More. Capture More. Experience More. </h3>
                        <h3 className="text-black/1 text-mobile/body/2 text-left max-w-[242px] xms:max-w-full xms:text-center">Get ready to unleash your creativity with AI-powered camera features.</h3>
                    </div>

                    <div className="flex flex-col gap-[25px]">
                        <div className="flex flex-col xms:items-center gap-[11px]">
                            <div className="flex flex-row items-center gap-[8px]">
                                <img src='/smartphone/P55/cameraIcon.svg' alt="cameraIcon" className="w-[26px] h-[26px]" />
                                <span className="text-[#050036] text-mobile/title">50MP AI Dual Rear Camera</span>
                            </div>
                            <h3 className="text-mobile/body/2 text-black/1 max-w-[284px] xms:text-center">Portrait Mode | Super Night Mode | Panorama Mode | AR Shots | Time Lapse | HDR</h3>
                        </div>

                        <div className="flex flex-col xms:items-center gap-[11px]">
                            <div className="flex flex-row items-center gap-[8px]">
                                <img src='/smartphone/P55/cameraIcon.svg' alt="cameraIcon" className="w-[26px] h-[26px]" />
                                <span className="text-[#050036] text-mobile/title">8MP Front Camera</span>
                            </div>
                            <h3 className="text-mobile/body/2 text-black/1 max-w-[307px] xms:text-center">Ultra HD | Beauty | Wide Selfie | Short Video | Super Night | AR Shots | Time Lapse | Portrait Modes</h3>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </>
  )
}

export default SeeMoreCaptureMore