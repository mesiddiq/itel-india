import GradientBackgroundWrapper from "./GradientBackgroundWrapper ";

const Section4Securitypage = () => {
  return (
    <GradientBackgroundWrapper paddingStart="0" padding="0">
      <div className="relative flex flex-col-reverse xl:flex-col gap-1 xl:h-[739px] overflow-hidden">
        <img
          src="/smartphone/a70/A70Security.webp"
          alt="bgimgsec3"
          className="xl:absolute top-[20rem] xl:h-[739px] xl:max-w-[1248px] md:top-0 left-0 w-full object-cover"
        />
        <div className="z-10 flex xl:justify-end justify-center text-center md:text-left md:items-start md:px-[69px] lg:py-[50px] px-[13px] py-[11px]">
          <div className="xl:w-[401px] flex flex-col gap-4">
            <p className="text-desktop/h2 md:block hidden xl:max-w-[458px]">
              Hello! <br /> Hassle-free Security
            </p>
            <p className="text-mobile/h4 md:hidden">Hello Hassle-free Security</p>
            <p className="md:text-mobile/body/large w-[295px] lg:w-[401px] md:pt-5 lg:pt-0 md:w-full text-mobile/body/2">
              With itel A70s side-mounted fingerprint sensor, experience seamless login, swift access, and top-notch security.
            </p>
          </div>
        </div>
      </div>
    </GradientBackgroundWrapper>
  );
};

export default Section4Securitypage;
