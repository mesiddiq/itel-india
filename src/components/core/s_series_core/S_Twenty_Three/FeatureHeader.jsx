import React from "react";

const FeatureHeader = () => {
  return (
    <div className="content w-full  h-[96px] bg-[#161616] flex justify-between px-4 md:px-16 items-center m-0">
      {/* Left side: Logo and Model Name */}
      <div className="flex items-center">
        <img
          src="/smartphone/S_Twenty_Three/HeadIcon.webp"
          alt="itel S23 Hero Icon"
          className="w-10 h-10 object-contain"
        />
        <span className="ml-2 text-white text-mobile/h3 md:text-desktop/h3 font-markot">S23</span>
      </div>

      {/* Center: Links (Overview, Tech specs) - hidden on smaller screens */}
      <div className="hidden md:flex space-x-5 text-white md:text-desktop/h6/medium font-markot">
        <span>Overview</span>
        <span>Tech specs</span>
      </div>

      {/* Right side: Button */}
      <button
        className="flex items-center bg-white rounded-full px-4 py-2"
        aria-label="Buy Now"
        onClick={() =>
          (window.location.href =
            "https://www.amazon.in/dp/B0C6B25FQ3?ie=UTF8&ref_=itel_Website_ProductPage")
        }
      >
        <span className="text-black mr-2 font-bold">BUY NOW</span>
        <img
          src="/smartphone/S_Twenty_Three/arrow-right.webp"
          alt="Arrow Icon"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default FeatureHeader;
