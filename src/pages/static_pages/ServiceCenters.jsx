import React from "react";
import MainHeader from "./header/MainHeader";




const ServiceCenters = () => {


  
  const card_data = [
    {
      img: "./support/Frame 1973340763.png",
      service_name: "Spare Parts Price",
    },
    {
      img: "./support/Group 1973339760.png",
      service_name: "Warranty Check",
    },
    {
      img: "./support/Frame 1973340762.png",
      service_name: "Repair Status",
    },
  
  ];


  return (
    <div className=" font-markot">
      <MainHeader />
      <div className='lg:bg-[url("/banners/Frame%201973341368.png")] bg-[url("/banners/moblie%20-%20service%20center%20BG.png")]  bg-cover bg-center lg:h-screen w-full lg:p-20 p-10'>
      <p className=" text-white lg:text-desktop/h1 lg:w-[851px] text-mobile/h1 w-[280px] font-markot ">
          Weekend Bonanza at itel Service Center
        </p>

        <div className=" lg:w-[751px] grid grid-cols-1 lg:grid-cols-3 mt-5  gap-7">
          <div className=" flex gap-3   items-center">
            <img
              src={"/static_page/setting.png"}
              className=" h-[42px]"
              alt=""
            />
            <div className=" text-white font-markot">
              <p className=" lg:text-desktop/h4">Free Service</p>
              <p className="  lg:text-desktop/body/large">Saturday</p>
            </div>
          </div>
          <div className=" flex gap-3   items-center">
            <img
              src={"/static_page/user-add.png"}
              className=" h-[42px]"
              alt=""
            />
            <div className=" text-white font-markot">
              <p className=" lg:text-desktop/h4">100% Discount</p>
              <p className="  lg:text-desktop/body/large">on Labor Charges</p>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <img
              src={"/static_page/clock.png"}
              className=" h-[42px]"
              alt=""
            />
            <div className=" text-white font-markot">
              <p className=" lg:text-desktop/h4">10% Discount</p>
              <p className="  lg:text-desktop/body/large">on Accessories</p>
            </div>
          </div>
        </div>

          <div className=" mt-10 p-4 flex rounded-full space-x-3 items-center  w-[365px] bg-white">

            <p className=" lg:text-mobile/small/button  ">Our Official Service Partner</p>
            <img className=" " src={'./static_page/f1c08f89cb24ebaf7ed62560f4388684 1.png'} alt="" />
            <img src={'./static_page/Buttons.png'} alt="" />


          </div>
      </div>



           
           <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 lg:p-20 p-5">
        
           {card_data.map((data) => {
            return (
              <>
                <div
                
                  className="  space-y-4  flex flex-col mt-10 items-center"
                >
                  <img className="  lg:w-[322px] lg:h-[290px] w-[141px] h-[127px] " src={data.img} />
                  <p className="  text-black/1  text-desktop/h4 ">
                    {data.service_name}
                  </p>
                  <div className=" flex justify-center items-center  mt-2">
                    <p className="  text-desktop/button font-markot text-brand/black">
                      LEARN MORE
                    </p>
                    <img
                      src={"./support/Union.png"}
                      className=" w-5 h-3 ml-2"
                      alt=""
                    />
                  </div>
                </div>
              </>
            );
          })}
        

           </div>


<div className="  bg-bg/primary/1 lg:space-y-0 space-y-10  p-0 lg:p-10 flex flex-col lg:flex-row items-center justify-between mb-10 ">

<div className=" space-y-6 lg:py-0 py-5">
<p className="  text-mobile/h4 lg:text-desktop/h2">Find itel Service Center</p>
<p className=" text-desktop/body/1 lg:text-desktop/body/large">1300+ Service Centers across India</p>
<div className=" space-y-2">
<img className=" lg:h-[52px] h-[32px]  w-[125px] lg:w-[204px]" src={'./static_page/f1c08f89cb24ebaf7ed62560f4388684 1.png'} alt="" />
<p className=" text-mobile/small/button text-grey/grey/5">Our Official Service Partner</p>
</div>

<div className=" flex p-3 lg:w-[275px] w-[198px]  justify-evenly rounded-full bg-brand/black text-white"><p  className=" text-mobile/button lg:text-desktop/button">Search on Carlcare</p><img className=" rotate-45 " src="/arrow.png" alt="" />
</div>
</div>

<img src={'/static_page/OBJECTS.png'} alt="" />



</div>
    </div>
  );
};

export default ServiceCenters;
