import React from "react";

const HeroSection = () => {
  return (
    <div className='lg:bg-[url("/static_page/storelocator/bgdesktop.webp")] flex items-center font-markot  bg-[url("/static_page/storelocator/bgmobile.webp")] bg-cover bg-center bg-no-repeat lg:min-h-[520px]  min-h-[450px] bg-url'>
      <div className=" lg:content px-3 ">
        <div className=" lg:w-[821px] text-white space-y-5">
          <p className=" text-mobile/h1 lg:w-[918px]  w-[221px] lg:text-desktop/h1">
          Find the nearest itel store
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
