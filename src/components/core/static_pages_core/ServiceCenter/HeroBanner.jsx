import React from "react";

const HeroBanner = () => {
  const data = [
    {
      img: "/static_page/setting.png",
      title: "Free Service",
      subtile: "Saturday",
    },
    {
      img: "/static_page/clock.png",
      title: "100% Discount",
      subtile: "on Labor Charges",
    },
    {
      img: "/static_page/clock.png",
      title: "10% Discount",
      subtile: "on Accessories",
    },
  ];
  return (
    
    <div className='lg:bg-[url("/banners/Frame%201973341368.png")] flex items-center font-markot   bg-[url("/banners/moblie%20-%20service%20center%20BG.png")] bg-cover bg-center bg-no-repeat lg:min-h-[520px]  min-h-[400px] bg-url'>
      <div className=" lg:content px-3 ">
        <div className=" lg:w-[918px] py-[22px] text-white w-[280px] lg:space-y-[52px]  space-y-[12px]  ">
          <p className=" text-mobile/h1  lg:text-desktop/h1">
            Weekend Bonanza at itel Service Center
          </p>
       
          <div className=" lg:w-[751px] grid grid-cols-1 lg:grid-cols-3  gap-7">
            {data.map((data) => {
              return (
                <>
                  <div className=" flex gap-3   items-center">
                    <img src={data.img} className=" h-[42px]" alt="" />
                    <div className=" text-white font-markot">
                      <p className=" lg:text-desktop/h4">{data.title}</p>
                      <p className="  lg:text-desktop/body/large">
                        {data.subtile}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>


          <div className=" mt-10 lg:py-4 py-[10px]  px-4 text-[10px] lg:px-5 flex rounded-full space-x-3 items-center  w-[264px] lg:h-[60px] h-[48px]  lg:w-[365px] bg-white">
          <p className=" text-grey/grey/5  lg:text-mobile/small/button   ">
            Our Official Service Partner
          </p>
          <img
            className=" lg:w-[110px] w-[77px]"
            src={"./static_page/f1c08f89cb24ebaf7ed62560f4388684 1.png"}
            alt=""
          />
          <img src={"./static_page/Buttons.png"} alt="" />
        </div>


        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
