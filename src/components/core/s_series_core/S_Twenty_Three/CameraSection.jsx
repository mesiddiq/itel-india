
function CameraSection() {
  return (
    <section className=" flex overflow-hidden z-0 flex-col max-w-full">
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



        <div className="relative z-10 self-end  -mt-6 md:-mt-12 w-full content max-md:max-w-full">
          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex relative flex-wrap gap-6 items-start self-start text-5xl font-medium tracking-tighter leading-tight max-md:text-4xl">
                  {/* Hide CamIcon on small screens */}
                  <div className='absolute hidden md:block top-[7px] left-[-55px]'>
                    <img
                      loading="lazy"
                      src="/smartphone/S_Twenty_Three/CamIcon.webp"
                      alt=""
                      className="object-contain shrink-0 w-[49px] " // Hide on small screens
                    />
                  </div>

                  <h2 className="bg-clip-text text-[linear-gradient(98deg,#DACFF9_0%,#5C5C7E_146.29%)] text-purple-300 md:w-[661px] max-md:max-w-full max-md:text-mobile/h4 text-desktop/h2 w-[328px] font-markot">
                    itel S23&apos;s Ultra Snap Wonder!
                  </h2>
                </div>

                <p className="text-mobile/body/large md:text-desktop/body/large  text-zinc-100 max-md:mr-2.5 max-md:max-w-full font-markot">
                  Capture every detail with its HD Pixel Photo System and F1.6 aperture.
                </p>

                <div className="flex flex-col justify-center items-start lg:mt-44 mt-10 max-md:max-w-full">
                  <div className="flex flex-col justify-center max-w-full text-desktop/h5/medium md:text-desktop/h3 font-markot text-white lg:w-[327px]">
                    <h3 className="opacity-80">50MP AI Dual Rear Camera</h3>
                  </div>
                  <div className="flex flex-col justify-center md:mt-12 max-w-full lg:w-[335px] mt-5">
                    <div className="flex flex-col justify-center w-full">
                      <h4 className="text-mobile/h5/medium md:text-desktop/h4 font-markot text-white opacity-80">
                        50MP high definition pixel photo system
                      </h4>
                      <p className="mt-2 text-mobile/body/2 md:text-desktop/body/1 text-white opacity-80 font-markot">
                        To capture every moment of beauty
                      </p>
                    </div>
                    <div className="flex flex-col justify-center mt-8 max-w-full lg:w-[230px]">
                      <h4 className="text-mobile/h5/medium md:text-desktop/h4 font-markot text-white opacity-80">
                        F1.6 Aperture
                      </h4>
                      <p className="mt-2 text-mobile/body/2 md:text-desktop/body/1 text-white opacity-80 font-markot">
                        Bigger aperture, clearer and brighter pictures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative top-[12rem] flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full hidden lg:flex">
              <img
                loading="lazy"
                src="/smartphone/S_Twenty_Three/Camphone.webp"
                alt="50MP AI Dual Rear Camera"
                className="object-contain grow w-full hidden lg:block aspect-[1.11] max-md:mt-4 max-md:ml-10 max-md:max-w-full"
              />
       
            </div>

            <div className="flex flex-col  w-[64%] max-md:ml-0 max-md:w-full lg:hidden">
         
              <img
                loading="lazy"
                src="/smartphone/S_Twenty_Three/imgMobileS23Section.png"
                alt="itel S23 camera showcase"
                className=" grow w-full lg:hidden max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CameraSection;
