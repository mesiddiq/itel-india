import GradientBackgroundWrapper from "./GradientBackgroundWrapper "

const Section7PhonesSpecs = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 px-2 lg:px-0 py-10 content">
              <div className="flex flex-col  justify-between lg:w-[518px] lg:h-[784px] h-[430px]">
                <GradientBackgroundWrapper bgImage={'/a70/DisplaygridBG.webp'}  mobileBgImage={'/a70/DisplaygridBG.webp'} paddingStart="0" padding="0">
                    <div className="lg:pt-[40px] md:pt-[12px] pt-[26px] px-[12px] md:px-2 md:ps-[38px]">
                        <p className="text-mobile/h5/medium md:text-desktop/h3">
                            Enjoy Ultra-Smooth Precision
                        </p>
                        <p className="text-mobile/body/large lg:pt-[20px] md:text-desktop/h4">6.6” HD+ Display | 120 Hz Touch Sampling Rate | Dynamic Bar</p>
                    </div>
                    <div className="w-[316px] h-[430px] lg:w-[522px] lg:h-[822px] mx-auto"
                        style={{
                            backgroundImage: `url(${'/a70/displaygrid-phone.webp'})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </div>
                </GradientBackgroundWrapper>
            </div>
            <div className="flex flex-col gap-4 lg:w-[738px] lg:h-[784px]">
                <GradientBackgroundWrapper bgImage={'/a70/slimdesigngridBG.webp'} mobileBgImage={'/a70/slimdesigngridBG.webp'} paddingStart="0" padding="0">
                    <div className="flex flex-col  lg:w-[738px] h-[260px] lg:h-[380px] gap-10">
                        <div className="md:ps-[38px] lg:py-[40px] px-[12px] py-[16px]">
                            <p className="text-mobile/h5/medium md:text-desktop/h3">
                                Slim & Glossy: Glass-like Finish
                            </p>
                            <span className="text-mobile/body/large md:text-desktop/h4">8.6mm Ultra-slim Body</span>
                        </div>
                        <div className="flex justify-end">
                            <img src={'/a70/slimdesigngrid-phone.webp'} alt="" className="w-[200px] h-[36px] lg:w-[577px] lg:h-[76px]" />
                        </div>
                    </div>
                </GradientBackgroundWrapper>

                <GradientBackgroundWrapper bgImage={'/a70/ProcessorgridBG.webp'} mobileBgImage={'/a70/Processorgrid-mobileBG.webp'} paddingStart="0" padding="0">
                    <div className=" flex flex-col lg:flex-row justify-between lg:w-[738px] h-[386px] lg:h-[380px] ">
                        <div className="lg:p-[40px] md:p-[30px] lg:pr-0  lg:w-[360px] px-[12px] py-[16px]">
                            <p className="text-mobile/h5/medium md:text-desktop/h3">
                                itel A70 s Performance Dynamo: Octa-Core T603 Processor
                            </p>
                        </div>
                        <div className="lg:w-1/2  flex items-center justify-center">
                            <img src={'/a70/processorchip.webp'} alt="" className="z-10 w-[246px] h-[248px] lg:w-[300px] lg:h-[302px]" />
                        </div>
                    </div>
                </GradientBackgroundWrapper>
            </div>
        </div>
    )
}

export default Section7PhonesSpecs
