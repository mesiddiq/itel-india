import React from "react";
// import designImg from "../../assets/designImg.png";

function DesignSection() {
  return (
    <section className="relative w-full bg-stone-900 overflow-hidden">
      <img
        src="/O.png"
        alt=""
        className="object-contain absolute  md:top-0 md:left-0 top-[-50px] left-[-50px] "
      />
      <div className=" flex flex-col max-w-[1440px] h-[720px] mx-auto p-6 md:py-6 md:px-20 max-md:px-5">
        <div className="flex flex-1 gap-5 max-md:flex-col">
          {/* Text Column */}
          <div className="flex flex-col w-[41%] max-md:w-full max-md:mt-10 z-10">
            <div className="self-stretch my-auto max-md:max-w-full">
              <div className="w-full max-w-[514px]">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-[54px] md:leading-[58px]">
                  Design Innovation: Unique Round Screen Display
                </h2>
                <p className="mt-6 text-sm md:text-base leading-6 text-zinc-300">
                  A feature-rich phone with a unique round screen display that
                  stands out from the crowd. Available in two attractive colors,
                  it is a perfect choice for those seeking innovation and
                  elegance in their phone.
                </p>
              </div>
              <div className="mt-12 text-xl font-bold tracking-wider leading-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FF998F] to-[#FFF7E8] max-md:mt-10">
                Black | Rose Gold
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-grow">
            <img
              loading="lazy"
              src={''}
              className="object-contain w-full h-full aspect-[1.1] max-md:max-w-full max-md:h-auto max-md:mt-10"
              alt="Circle 1 phone in black and rose gold colors"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignSection;
