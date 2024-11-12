import React from "react";

const AssuranceCard = () => {
  return (
    <div className="  lg:content px-4 font-markot">
      <div className='lg:bg-[url("/static_page/screenreplacement/Itel%20Assurance%20Banner.webp")]   rounded-lg   flex lg:items-center items-end py-5 lg:py-0  font-markot  bg-[url("/static_page/screenreplacement/Itel%20Assurance%20Banner%20Mobile.webp")] bg-cover bg-center bg-no-repeat lg:min-h-[352px]  min-h-[328px]'>
        <div className=" lg:px-[55px] px-[21px] flex lg:flex-row flex-col lg:gap-[40px] ">
          <img
            className=" lg:w-[155px] lg:h-[152px] h-[100px] w-[100px]"
            src={"/static_page/screenreplacement/Shape.webp"}
            alt=""
          />
          <div className=" lg:space-y-5 text-white space-y-2  lg:max-w-[562px]">
            <p className=" lg:text-desktop/h3 text-mobile/h4">itel Assurance</p>
            <p className=" text-desktop/body/2/regular lg:text-desktop/body/large">
              Get free original screen replacement: Enjoy your phone without the
              stress—itel's got your back!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssuranceCard;
