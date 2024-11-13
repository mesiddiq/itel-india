import React from "react";

const HeroSection = () => {
  return (
    <div className='lg:bg-[url("/static_page/Ewaste/ewaste.png")] flex items-center font-markot  bg-[url("/static_page/Ewaste/ewastem.png")] bg-cover bg-center bg-no-repeat lg:min-h-[520px]  min-h-[450px] bg-url'>
      <div className=" lg:content px-3 ">
        <div className=" lg:w-[821px] text-white space-y-5">
          <p className=" text-mobile/h1 lg:w-[918px]  w-[221px] lg:text-desktop/h1">
            Ditch Your Old Gadgets with Us!
          </p>
          <p className="  text-desktop/body/1 lg:w-[821px]  w-[241px] lg:text-desktop/body/large">
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
