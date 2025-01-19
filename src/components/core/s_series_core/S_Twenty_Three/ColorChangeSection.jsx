
function ColorChangeSection() {
  return (
    <section
      className="relative h-[800px] overflow-hidden z-0 pb-4 max-w-full px-4 md:px-0 bg-cover bg-top"
      style={{ backgroundImage: 'url(/smartphone/S_Twenty_Three/ColorChangeBg.webp)' }}
    >
      <div className="flex gap-5 flex-col-reverse lg:flex-row md:items-center max-md:gap-0">
        
        {/* Phone Image Section */}
        <div className="relative flex flex-col lg:w-[41%] max-md:w-full max-md:justify-center max-md:mt-5 md:h-[400px]">
          <div className="absolute lg:top-[75px] lg:left-[227px] left-[-156px] top-0 w-[493px] h-[709px] max-md:static max-md:w-[80%] max-md:h-auto max-md:mx-auto ">
            <img
              src="/smartphone/S_Twenty_Three/ColorPhone.webp"
              alt="Vibrant Color Shift"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col ml-24 lg:w-[45%] max-md:ml-0 max-md:w-full max-md:pt-5 mb-10">
          <div className="flex flex-col px-14 pt-6 lg:pt-28  max-md:px-5 max-md:pb-0 max-md:max-w-full">
            <div className="flex flex-col justify-center max-md:max-w-full">
              <h2 className=" text-white text-desktop/h2 max-md:w-[308px] max-md:text-desktop/h4 max-md:text-left max-md:h-[62px]">
                Glow Up Guru: itel S23&apos;s Color Shift Swag!
              </h2>
              <p className="mt-3.5 text-desktop/body/1 text-zinc-100 max-md:max-w-full max-md:text-left max-md:text-desktop/body/2/regular">
                Get ready to stand out with itel  S23&apos;s colour-changing magic! Say goodbye to boredom with its photochromic effects that transform in sunlight or UV rays. Your phone, your style—it's always lit and never boring!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColorChangeSection;
