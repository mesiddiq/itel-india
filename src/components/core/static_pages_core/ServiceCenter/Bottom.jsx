import React from "react";

const Bottom = () => {
  return (
    <div className=" overflow-hidden lg:content font-markot">
      <div className='   flex flex-col lg:justify-center   lg:bg-[url("/static_page/ServiceC/Find%20Service%20Center.webp")] lg:space-y-12  space-y-9  rounded-lg  lg:py-[32px] lg:px-[60px] py-6 px-4  font-markot  bg-[url("/static_page/ServiceC/Find%20Service%20Center%20Mobile.webp")]  bg-cover lg:bg-right bg-no-repeat  lg:min-h-[483px]  min-h-[653px]'>
        <div className=" text-brand/black  space-y-4 lg:space-y-5">
          <p className=" lg:text-desktop/h2 text-mobile/h4">
            Find itel Service Center
          </p>
          <p className=" lg:text-desktop/body/large text-desktop/body/1">
            <b>1300+</b> Service Centers across India
          </p>
        </div>
        <div className=" lg:space-y-5  space-y-4">
          <div className="  lg:space-y-3 space-y-[10px]">
            <img
              className="  h-[32px] lg:w-[204px] lg:h-[52px]"
              src={"/static_page/Support2/f1c08f89cb24ebaf7ed62560f43886841(1).png"}
              alt=""
            />
            <p className=" text-grey/grey/5 text-mobile/small/button">
              Our Official Service Partner
            </p>
          </div>
          <div>
             <a target="_blank" href="https://www.carlcare.in/in/service-center/">
             <div className=" flex p-3 lg:w-[275px] h-10 lg:h-12  justify-evenly items-center rounded-full bg-brand/black text-white">
            <p className=" text-mobile/button lg:text-desktop/button">
              SEARCH ON CARLCARE
            </p>
            <img className=" -rotate-45 " src={"/static_page/homepage/Union.png"} alt="" />
          </div>
          </a>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Bottom;
