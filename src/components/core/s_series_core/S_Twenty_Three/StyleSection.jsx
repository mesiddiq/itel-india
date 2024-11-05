
function StyleSection() {
  return (
    <section
      className="flex overflow-hidden z-0 flex-col px-4 md:px-0 w-full bg-black bg-opacity-20 h-[452px] md:h-[800px] "
      style={{
        backgroundImage: 'url(/smartphone/S_Twenty_Three/StyleBg.webp)', 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="pt-4 content max-md:max-w-full">
        <div className="flex gap-5 flex-col lg:flex-row max-md:items-center max-md:text-center">
          
          {/* Text Section */}
          <div className="flex flex-col lg:w-[30%] max-md:ml-0 max-md:w-full max-md:items-center max-md:justify-center">
            <div className="flex flex-col justify-center self-stretch mr-0  lg:mt-10 max-md:max-w-full">
              <h2 className="text-mobile/h4 md:text-desktop/h2  text-white max-md:max-w-full  max-md:text-center">
                Elevate Your Style with the itel S23
              </h2>
              <p className="mt-3.5 text-[#F2F2F2] max-md:text-center text-desktop/body/2/regular md:text-desktop/body/large">
                Explore our range of sleek monochromes S23 models, featuring timeless black and white designs tailored to complement your elegance.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col lg:ml-32 lg:w-[59%] max-md:ml-0 max-md:w-full max-md:items-center">
            <img
              loading="lazy"
              src="/smartphone/S_Twenty_Three/StyleImg.webp"
              alt="itel S23 color variants"
              className="object-contain grow w-full aspect-[1.11] lg:h-[879px] lg:w-[871px]  max-md:max-w-full max-md:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StyleSection;
