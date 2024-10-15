import React from 'react';

function StyleSection() {
  return (
    <section
      className="flex overflow-hidden z-0 flex-col w-full bg-black bg-opacity-20 max-w-[1440px] h-[652px] md:h-[800px] "
      style={{
        backgroundImage: 'url(/smartphone/S_Twenty_Three/StyleBg.webp)', 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="px-16 pt-4 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:items-center max-md:text-center">
          
          {/* Text Section */}
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full max-md:items-center max-md:justify-center">
            <div className="flex flex-col justify-center self-stretch mt-48 mr-0 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-mobile/h4 md:text-desktop/h2  text-white max-md:max-w-full  max-md:text-center">
                Elevate Your Style with the itel S23
              </h2>
              <p className="mt-3.5 text-[#F2F2F2] max-md:text-center text-desktop/body/2/regular md:text-desktop/body/large">
                Explore our range of sleek monochromes S23 models, featuring timeless black and white designs tailored to complement your elegance.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col ml-32 w-[59%] max-md:ml-0 max-md:w-full max-md:items-center">
            <img
              loading="lazy"
              src="/smartphone/S_Twenty_Three/StyleImg.webp"
              alt="itel S23 color variants"
              className="object-contain grow w-full aspect-[1.11]  max-md:mt-28  md:h-[879px] md:w-[871px]  max-md:max-w-full max-md:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StyleSection;
