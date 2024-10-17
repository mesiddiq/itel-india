const SeeMoreCaptureMore = () => {
  return (
    <>
        {/* Laptop */}
        <div className="w-full h-screen lg:min-h-[720px] bg-[#91C9EC] flex flex-row bg-cover lg:bg-contain" style={{ 
            backgroundImage: 'url(/smartphone/P55/SeeMoreCaptureMore-Laptop.png)', 
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat', 
        }}>
            
            <div className="content">
                <div className="font-markot w-[40%] py-[80px] h-full flex flex-col justify-between items-start">

                    <div className="flex flex-col justify-between gap-[24px] ">
                        <h1 className="text-black/1 text-desktop/h2 max-w-[400px]">See More. Capture More. Experience More. </h1>
                        <h1 className="text-black/1 text-base font-normal leading-[22.72px] text-left max-w-[337px]">Get ready to unleash your creativity with AI-powered camera features.</h1>
                    </div>

                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-row items-center gap-[12px]">
                                <img src='/smartphone/P55/cameraIcon.svg' alt="cameraIcon" className="w-[34px] h-[34px]" />
                                <span className="text-[#050036] text-desktop/h4">50MP AI Dual Rear Camera</span>
                            </div>
                            <h1 className="text-desktop/body/1 text-black/1 max-w-[381px]">Portrait Mode | Super Night Mode | Panorama Mode | AR Shots | Time Lapse | HDR</h1>
                        </div>

                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-row items-center gap-[12px]">
                                <img src='/smartphone/P55/cameraIcon.svg' alt="cameraIcon" className="w-[34px] h-[34px]" />
                                <span className="text-[#050036] text-desktop/h4">8MP Front Camera</span>
                            </div>
                            <h1 className="text-desktop/body/1 text-black/1 max-w-[436px]">Ultra HD | Beauty | Wide Selfie | Short Video | Super Night | AR Shots | Time Lapse | Portrait Modes</h1>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </>
  )
}

export default SeeMoreCaptureMore