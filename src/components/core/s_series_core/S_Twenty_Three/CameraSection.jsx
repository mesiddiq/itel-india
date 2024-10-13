import React from 'react';

function CameraSection() {
  return (
    <section className="flex overflow-hidden z-0 flex-col max-w-full w-[1440px]">
      {/* Full-width image before the camera section */}
      <img
        loading="lazy"
        src="/smartphone/S_Twenty_Three/Patterns.webp" 
        alt="Full-width image"
        className="object-cover w-full h-[80px]"
      />
      
      <div className="flex relative flex-col pt-10 md:pt-24 pl-8 w-full min-h-[831px] max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="/smartphone/S_Twenty_Three/CamBg.webp"
          alt="Background image for camera section"
          className="object-cover absolute inset-0 size-full"
        />
        
        <div className="flex relative flex-wrap gap-6 items-start self-start text-5xl font-medium tracking-tighter leading-tight max-md:text-4xl">
          {/* Hide CamIcon on small screens */}
          <img
            loading="lazy"
            src="/smartphone/S_Twenty_Three/CamIcon.webp"
            alt=""
            className="object-contain shrink-0 aspect-[0.87] w-[49px] max-md:hidden" // Hide on small screens
          />
          <h2 className="bg-clip-text text-[linear-gradient(98deg,#DACFF9_0%,#5C5C7E_146.29%)] text-purple-300 md:w-[661px] max-md:max-w-full max-md:text-4xl w-[400px]">
            itel S23's Ultra Snap Wonder!
          </h2>
        </div>
        
        <div className="relative z-10 self-end  -mt-6 md:-mt-12 w-full max-w-[1314px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <p className="text-xl tracking-normal leading-8 text-zinc-100 max-md:mr-2.5 max-md:max-w-full">
                  Capture every detail with its HD Pixel Photo System and F1.6 aperture.
                </p>

                <div className="flex flex-col justify-center items-start mt-44 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col justify-center max-w-full text-4xl font-medium tracking-tighter leading-10 text-white w-[327px]">
                    <h3 className="opacity-80">50MP AI Dual Rear Camera</h3>
                  </div>
                  <div className="flex flex-col justify-center mt-12 max-w-full w-[335px] max-md:mt-10">
                    <div className="flex flex-col justify-center w-full">
                      <h4 className="text-2xl font-medium tracking-tight leading-8 text-white opacity-80">
                        50MP high definition pixel photo system
                      </h4>
                      <p className="mt-2 text-base leading-relaxed text-white opacity-80">
                        To capture every moment of beauty
                      </p>
                    </div>
                    <div className="flex flex-col justify-center mt-8 max-w-full w-[230px]">
                      <h4 className="text-2xl font-medium tracking-tight leading-tight text-white opacity-80">
                        F1.6 Aperture
                      </h4>
                      <p className="mt-2 text-base leading-7 text-white opacity-80">
                        Bigger aperture, clearer and brighter pictures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/smartphone/S_Twenty_Three/Camphone.webp"
                alt="itel S23 camera showcase"
                className="object-contain grow w-full aspect-[1.11] max-md:mt-4 max-md:ml-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CameraSection;
