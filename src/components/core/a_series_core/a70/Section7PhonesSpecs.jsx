import GradientBackgroundWrapper from "./GradientBackgroundWrapper ";

const Section7PhonesSpecs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-2 lg:px-0 py-10 text-black content">
      <GradientBackgroundWrapper
        bgImage="/smartphone/a70/DisplaygridBG.webp"
        mobileBgImage="/smartphone/a70/DisplaygridBG.webp"
        paddingStart="0"
        padding="0"
      >
        <div className="flex flex-col justify-between xl:w-[518px] lg:h-[784px] h-auto">
          <div className="pt-[26px] px-[12px] md:pt-[12px] lg:pt-[40px] md:px-2 md:ps-[38px]">
            <p className="text-mobile/h5/medium md:text-desktop/h3">
              Enjoy Ultra-Smooth Precision
            </p>
            <p className="text-mobile/body/large lg:pt-[20px] md:text-desktop/h4">
              6.6” HD+ Display | 120 Hz Touch Sampling Rate | Dynamic Bar
            </p>
          </div>
          <div className="mx-auto w-[316px] h-auto lg:w-[522px] lg:h-auto">
            <img
              src="/smartphone/a70/displaygrid-phone.webp"
              alt="Display"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </GradientBackgroundWrapper>

      <div className="flex flex-col gap-4 lg:w-[738px] lg:h-[784px] h-auto">
        <GradientBackgroundWrapper
          bgImage="/smartphone/a70/slimdesigngridBG.webp"
          mobileBgImage="/smartphone/a70/slimdesigngridBG.webp"
          paddingStart="0"
          padding="0"
        >
          <div className="flex flex-col lg:w-full h-[190px] md:h-[250px] lg:h-[380px] gap-10">
            <div className="md:ps-[38px] lg:py-[40px] px-[12px] py-[16px]">
              <p className="text-mobile/h5/medium md:text-desktop/h3">
                Slim & Glossy: Glass-like Finish
              </p>
              <span className="text-mobile/body/large md:text-desktop/h4">
                8.6mm Ultra-slim Body
              </span>
            </div>
            <div className="flex justify-end">
              <img
                src="/smartphone/a70/slimdesigngrid-phone.webp"
                alt="Slim Design"
                className="w-[200px] h-auto md:w-[577px] lg:h-auto"
              />
            </div>
          </div>
        </GradientBackgroundWrapper>

        <GradientBackgroundWrapper
          bgImage="/smartphone/a70/ProcessorgridBG.webp"
          mobileBgImage="/smartphone/a70/Processorgrid-mobileBG.webp"
          paddingStart="0"
          padding="0"
        >
          <div className="flex flex-col lg:flex-row justify-between lg:w-full h-auto lg:h-[380px]">
            <div className="lg:p-[40px] md:p-[30px] lg:w-[360px] px-[12px] py-[16px]">
              <p className="text-mobile/h5/medium md:text-desktop/h3">
                itel A70’s Performance Dynamo: Octa-Core T603 Processor
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-1/2">
              <img
                src="/smartphone/a70/processorchip.webp"
                alt="Processor"
                className="z-10 w-[246px] h-auto lg:w-[300px] lg:h-auto"
              />
            </div>
          </div>
        </GradientBackgroundWrapper>
      </div>
    </div>
  );
};

export default Section7PhonesSpecs;
