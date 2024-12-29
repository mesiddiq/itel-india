import ReactPlayer from "react-player";

const CreativeFilterA80 = () => {
  return (
    <div className="bg-[#161410]">
      <div className="content relative flex flex-col lg:flex-row items-center gap-6 pt-14 px-4">
        {/* Text Section */}
        <div className="w-full lg:w-[496px] relative lg:absolute lg:top-1/2 lg:left-12 transform lg:-translate-y-1/2 z-10">
          <h1
            className="text-mobile/h3 lg:text-desktop/h2 text-white py-4"
            data-aos="fade-up"
          >
            9 Creative Filters
          </h1>
          <p
            className="text-mobile/body/2 lg:text-desktop/body/large text-white"
            data-aos="fade-left"
          >
            Enhance your photos with 8 different filters, adding a professional
            touch to every shot. Fresh, Forest, Flames, Fade, Nature, Baby,
            Blues, Mono.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full overflow-hidden hidden lg:block">
          <ReactPlayer
            playing
            controls={false}
            loop
            muted
            width="100%"
            height="100%"
            url={[
              {
                src: "/smartphone/A80/AllSections/9creativefilter/bg.webm",
                type: "video/webm",
              },
            ]}
          />
        </div>
        <div className="w-full overflow-hidden block lg:hidden">
          <ReactPlayer
            playing
            controls={false}
            loop
            muted
            width="100%"
            height="100%"
            url={[
              {
                src: "/smartphone/A80/AllSections/9creativefilter/bgMobile.mp4",
                type: "video/mp4",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CreativeFilterA80;
