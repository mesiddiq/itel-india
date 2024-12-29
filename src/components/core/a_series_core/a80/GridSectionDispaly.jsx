import ReactPlayer from "react-player";

const GridSectionDisplay = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/smartphone/A80/AllSections/Banner/Herobg.webp')",
      }}
    >
      <div className="content flex flex-col gap-6 justify-center items-center pt-14 px-4">
        {/* Top Row */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* First Card */}
          <div className="w-full xl:w-[762px] border pb-0 gap-6 p-4 flex flex-col lg:flex-row justify-between items-center border-[#FFBD6D] rounded-lg h-auto lg:h-[272px] overflow-hidden">
            <div className="w-full lg:w-[300px] pt-6 lg:pt-5 px-2 text-center lg:text-left">
              <img
                src="/smartphone/A80/AllSections/Grid/smartPhone.svg"
                alt="Smartphone Icon"
                className="pb-4 mx-auto lg:mx-0"
              />
              <h1
                className="lg:text-desktop/h5 text-mobile/h5 py-2"
                data-aos="fade-up"
              >
                120Hz Display Refresh Rate
              </h1>
              <p
                className="text-desktop/body/2/medium lg:text-desktop/body/2/regular"
                data-aos="fade-left"
              >
                6.67” Edge-to-edge screen <br />
                4096 Levels of Brightness
              </p>
            </div>
            <div className="block">
              <img
                src="/smartphone/A80/AllSections/Grid/120hzmobwithOpattern.webp"
                alt="120Hz Display Image"
                className="md:h-[270px]"
              />
            </div>
          </div>

          {/* Video Card */}
          <div className="w-full xl:w-[415px] overflow-hidden border border-[#FFBD6D] rounded-lg h-auto lg:h-[272px]">
            <ReactPlayer
              playing
              controls={false}
              loop
              muted
              width="100%"
              height="100%"
              url={[
                { src: "/smartphone/A80/AllSections/Grid/ip54.webm", type: "video/webm" },
              ]}
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Dynamic Bar */}
          <div className="w-full xl:w-[550px] border flex flex-col justify-center items-center overflow-hidden border-[#FFBD6D] rounded-lg h-auto lg:h-[272px] relative">
            <h1
              className="text-center lg:text-left lg:text-desktop/h5 text-mobile/h6 py-2 pt-[30px]"
              data-aos="fade-up"
            >
              Effortless Navigation with the Dynamic Bar
            </h1>
            <div className="relative pt-8">
              <img
                src="/smartphone/A80/AllSections/Grid/DynamicBarOpattern.webp"
                alt="Dynamic Bar Background"
                className="h-[190px] object-cover"
              />
              <img
                src="/smartphone/A80/AllSections/Grid/DynamicBar.webp"
                alt="Dynamic Bar Image"
                className="h-[190px] absolute top-12 left-0"
              />
            </div>
          </div>

          {/* Camera */}
          <div className="w-full xl:w-[626px] gap-10 border overflow-hidden flex flex-col lg:flex-row justify-between border-[#FFBD6D] rounded-lg h-auto lg:h-[272px]">
            <div className="w-full lg:w-[300px] pt-6 lg:pt-20 px-2 md:ps-6 text-center lg:text-left">
              <img
                src="/smartphone/A80/AllSections/Grid/CameraLine.svg"
                alt="Camera Line Icon"
                className="pb-2 mx-auto lg:mx-0"
              />
              <h1
                className="lg:text-desktop/h5 text-mobile/h6 py-1"
                data-aos="fade-up"
              >
                50MP Camera
              </h1>
              <p
                className="text-desktop/body/2/regular lg:text-desktop/body/2/regular"
                data-aos="fade-left"
              >
                Super HDR Camera | <br className="hidden md:block" />
                Unique Ring Light <br className="hidden md:block" />
                Automatic Scene Classification
              </p>
            </div>
            <div className="relative mx-auto">
              <img
                src="/smartphone/A80/AllSections/Grid/50MPOpattern.webp"
                alt="50MP Camera Background"
                className="h-[230px] relative right-[53px] object-cover hidden lg:block"
              />
              <img
                src="/smartphone/A80/AllSections/Grid/50MpMobile.webp"
                alt="50MP Mobile"
                className="h-[230px] relative object-cover lg:hidden"
              />
              <img
                src="/smartphone/A80/AllSections/Grid/50MP(clipblack).webp"
                alt="50MP Highlight"
                className="h-[210px] absolute top-10 left-0 hidden lg:block"
              />
              <img
                src="/smartphone/A80/AllSections/Grid/mobilePhone.webp"
                alt="Mobile Phone"
                className="h-[240px] absolute top-0 left-16 lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSectionDisplay;
