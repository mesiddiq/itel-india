import React from "react";

const Cards = () => {
  return (
    <div className='lg:bg-[url("/static_page/Aboutus/OurMissionBGVector.webp")] font-markot bg-[url("/static_page/Aboutus/OurMissionBGVector.webp")]  bg-cover bg-center bg-no-repeat '>
      <div className=" flex flex-col justify-between content lg:space-y-0  space-y-[60px] px-4 text-black ">
        <div className=" flex  lg:flex-row flex-col-reverse items-center  lg:space-y-0  lg:justify-end">
          <p className=" lg:text-desktop/h1 text-desktop/h2 text-brand/black">
            Enjoy Better <p className=" text-itel-red">Life</p>
          </p>
          <img
            className=" w-[290px] h-[360px]  lg:h-[468px]"
            src="/static_page/Aboutus/OurMissionGraphic1.webp"
            alt=""
          />
        </div>
        <div className=" flex  lg:flex-row  flex-col items-center lg:justify-between lg:items-baseline">
          <img
            className=" lg:w-[448px] w-[283px] h-[275px] lg:h-[436px]"
            src="/static_page/Aboutus/OurMissionGraphic2.webp"
            alt=""
          />

          <div className="  lg:-rotate-2 lg:w-[490px] lg:space-y-4">
            <p className=" lg:text-balance text-end text-mobile/h2 lg:text-desktop/h2">Dream Big with itel</p>
            <p className=" text-grey/grey/4  text-desktop/body/1 lg:text-balance text-end lg:text-desktop/body/large">
              We're here to turn your dreams into reality. Let us be your
              companion in progress, unlocking potential and transforming your
              hopes into achievements.
            </p>
          </div>
        </div>
        <div className=" flex  lg:flex-row   flex-col-reverse lg:justify-between">
          <div className=" lg:-rotate-2  lg:w-[442px]  space-y-4">
            <p className="  text-mobile/h5 lg:text-desktop/h4">
              With itel's affordable and high-performing smartphones, feature
              phones, gadgets, home care, and personal care products, you can
            </p>
            <p className=" lg:text-desktop/h1  text-mobile/h1 text-itel-red">
              reach for the stars!
            </p>
          </div>

          <img
            className=" lg:w-[728px] w-[319px] h-[199px] lg:h-[451px]"
            src="/static_page/Aboutus/OurMissionGraphic3.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
