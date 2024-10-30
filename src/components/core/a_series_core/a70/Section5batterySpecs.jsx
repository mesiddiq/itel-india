import GradientBackgroundWrapper from "./GradientBackgroundWrapper ";

const Section5batterySpecs = () => {
  return (
    <GradientBackgroundWrapper
      bgImage="/smartphone/a70/batteryBg.webp"
      paddingStart="57px"
      padding="0"
      mobileBgImage="/smartphone/a70/batterybg-mobile.webp"
    >
      <div className="relative flex flex-col lg:flex-row  xl:pt-[48px] xl:pb-[53px]  pt-[14px] justify-between">
        <div className="flex flex-col lg:h-[513px] md:h-[400px] lg:justify-between gap-6 md:gap-10 lg:gap-0">
          <div className="lg:w-[513px]  text-center lg:text-left md:flex md:flex-col md:gap-5">
            <p className="text-mobile/h4 md:text-desktop/h2">
              Endless Energy <br /> Always by Your Side
            </p>
            <span className="text-mobile/body/2 md:text-desktop/body/large md:px-12 lg:px-0">
              Stay powered-up all day long with 5000 mAh battery and Type-C Charging. itel A70 smartphone delivers endurance and performance for the long haul.
            </span>
          </div>
          <div className="flex lg:flex-col items-center justify-center lg:justify-start lg:items-start gap-2 md:gap-4 pb-6">
            <p className="md:text-desktop/h3 text-mobile/h6 text-center">5000 mAh Battery</p>
            <hr className="hidden lg:block lg:w-[300px] h-[3px] bg-black" />
            <div className="lg:hidden w-[2px] h-[20px] md:h-[44px] bg-[#666666]" />
            <p className="text-mobile/h6 md:text-desktop/h3 text-center">Type-C Charging</p>
          </div>
        </div>
        <div className="responsive-Tab">
          <img src="/smartphone/a70/phonebatteryimg.png" alt="battery" />
        </div>
      </div>
    </GradientBackgroundWrapper>
  );
};

export default Section5batterySpecs;
