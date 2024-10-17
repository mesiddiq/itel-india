import React from 'react';

function MemoryFusionSection() {
  return (
    <section className="content flex overflow-hidden z-0 flex-col w-full bg-black max-w-[1440px] max-md:max-w-full gap-10">
      <div className="max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left Image Section */}
          <div className="flex flex-col w-[60%] max-md:w-full">
            <div className="flex shrink-0 max-w-full h-[800px] w-full max-md:h-auto md:mt-10">
              <img
                src="/smartphone/S_Twenty_Three/Memory.webp"  
                alt="Memory Fusion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Text Section */}
          <div className="flex flex-col w-[36%] max-md:w-full">
            <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col justify-center max-w-full w-full px-5">
                <h2 className="bg-clip-text bg-[linear-gradient(98deg,#DACFF9_0%,#5C5C7E_146.29%)]  text-purple-200 text-mobile/h4 md:text-desktop/h2">
                  Discover Memory Fusion Wonder
                </h2>
                <p className="mt-4 text-desktop/body/2/regular md:text-desktop/body/large text-zinc-100 mb-10">
                  Explore the benefits of 8GB RAM, expandable up to 16GB* RAM using Memory Fusion Technology for improved performance & multi-tasking.
                </p>
              </div>

              <div className="flex gap-10 items-start md:mt-12 max-w-full px-5 mb-16">
                <div className="flex flex-col justify-center w-full max-md:w-auto">
                  <h3 className="text-mobile/h5/medium md:text-desktop/h3 text-white opacity-80">
                    16GB* <br /> (8GB+8GB*)
                  </h3>
                  <p className="mt-2 text-mobile/small/body md:text-desktop/body/1 text-white opacity-80">
                    Customisable RAM with Memory Fusion Technology
                  </p>
                </div>
                <div className="shrink-0 self-stretch w-0 bg-white border border-white border-solid h-[154px] " />
                <div className="flex flex-col justify-center w-full max-md:w-auto">
                  <h3 className="text-mobile/h5/medium md:text-desktop/h3  text-white opacity-80">
                    128GB
                  </h3>
                  <p className="mt-2 text-mobile/small/body md:text-desktop/body/1  text-white opacity-80">
                    ROM, expandable up to 1TB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemoryFusionSection;
