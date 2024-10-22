import GradientBackgroundWrapper from "./GradientBackgroundWrapper ";

const Section7PhonesSpecs = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-0 text-black py-10 content">
            <GradientBackgroundWrapper
                bgImage={'/smartphone/A23s/Backgrounds/FaceunlockgridBG.webp'}
                mobileBgImage={'/smartphone/A23s/Backgrounds/FaceunlockgridBG.webp'}
                paddingStart="0"
                padding="0"
            >
                <div className="flex flex-col justify-between lg:w-[518px] lg:h-[784px] h-[430px]">
                    <div className="lg:pt-10 pt-6 px-4 text-mobile/h5/medium md:text-desktop/h3 text-center lg:text-left">
                        Effortless Security: <br className="lg:block hidden" /> Smart Face Unlock
                    </div>
                    <div
                        className="mx-auto w-full max-w-[316px] lg:w-full lg:h-[784px] h-[430px]"
                        style={{
                            backgroundImage: `url(${'/smartphone/A23s/Backgrounds/faceunlockgrid-phone.webp'})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </div>
            </GradientBackgroundWrapper>

            <div className="flex flex-col gap-4 lg:w-[738px]">
                <GradientBackgroundWrapper
                    bgImage={'/smartphone/A23s/Backgrounds/batterygridBG.webp'}
                    mobileBgImage={'/smartphone/A23s/Backgrounds/batterygrid-mobileBG.webp'}
                    paddingStart="0"
                    padding="0"
                    mobileBackgroundPosition='right'

                >
                    <div className="flex flex-col lg:w-full h-[260px] lg:h-[380px] ">
                        <div className="md:py-6  py-2 px-4 text-mobile/h5/medium md:text-desktop/h3">
                            Enjoy Efficient Battery Use All Day
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={'/smartphone/A23s/Backgrounds/batterygridphone.webp'}
                                alt="Battery"
                                className="h-auto max-h-[225px] md:w-[370px] lg:w-[534px] object-cover"
                            />
                        </div>
                    </div>
                </GradientBackgroundWrapper>

                <GradientBackgroundWrapper
                    bgImage={'/smartphone/A23s/Backgrounds/RAMgridBG.webp'}
                    mobileBgImage={'/smartphone/A23s/Backgrounds/RAMgridBG.webp'}
                    paddingStart="0"
                    padding="0"
                >
                    <div className="flex flex-col lg:w-full h-[250px] md:h-[380px]">
                        <div className="md:py-6  py-2 px-4 text-mobile/h5/medium md:text-desktop/h3 text-left">
                            4GB* (2GB+2GB*) RAM : <br className="lg:block hidden" /> Enhanced Productivity
                        </div>

                        <div className="flex relative left-[2rem] top-[2rem] md:top-0 items-center justify-center ">
                            <img
                                src={'/smartphone/A23s/Backgrounds/RAMgridphone.webp'}
                                alt="RAM"
                                className="h-[170px] md:h-[233px]"
                            />
                        </div>
                    </div>
                </GradientBackgroundWrapper>
            </div>
        </div>
    );
}

export default Section7PhonesSpecs;
