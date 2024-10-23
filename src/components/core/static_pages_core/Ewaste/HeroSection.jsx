import React from "react";

const HeroSection = () => {
  return (
    <div className='lg:bg-[url("/static_page/Ewaste/e-waste%20banner%20Bg.webp")] flex items-center font-markot  bg-[url("/static_page/Ewaste/e-waste%20banner%20Bg%20mobile.webp")] bg-cover bg-center bg-no-repeat lg:min-h-[520px]  min-h-[450px] bg-url'>
      <div className=" lg:content px-3 ">
        <div className=" lg:w-[918px] text-white space-y-5">
          <p className=" text-mobile/h1  lg:text-desktop/h1">
            Ditch Your Old Gadgets with Us!
          </p>
          <p className="  text-desktop/body/1 lg:text-desktop/body/large">
            Are old gadgets collecting dust? Don't just toss them! Drop off your
            outdated tech with us, and we'll recycle it responsibly. Save the
            planet, one gadget at a time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
