import React, { useState } from "react";
import Smartphone from "./Smartphone";
import SmartTv from "./SmartTv";
import Support from "./Support";
import { useNavigate } from "react-router-dom";
const MainHeader = () => {

  const navigate = useNavigate()
  const [showtab, setshowtab] = useState("");
  console.log(showtab);
  return (
    <>
      <div className=" w-screen flex-1 flex   p-4  justify-between bg-[#1C1B1B]">
      <img src={'./footer/itel.png'} alt="" className=" h-12" />
      
        <div className=" flex items-center px-4 w-[55%]  bg-[#2e2d2d]">
          <img  alt="" className=" h-6 w-6 bg-red-500" />
          <input
            placeholder=" What are you looking for..."
            type="text"
            className=" tracking-wide  text-lg  w-full outline-none pl-4 text-white  bg-[#2e2d2d]   h-full "
          />
        </div>
        <div className="flex justify-center items-center">
          <img src="" alt="" className=" bg-red-300 h-10  w-10" />
          <div className=" flex flex-col ml-2">
            <p className=" text-white tracking-wider text-sm ">
              itel customer Care
            </p>
            <p className=" text-white tracking-wider  ">1800-4190-525</p>
          </div>
        </div>
        <div className="flex justify-center mr-3 items-center">
          <img src="" alt="" className=" bg-red-300 h-10  w-10" />
          <div className=" flex flex-col  ml-2">
            <p className=" text-white tracking-wider text-sm">Nearby Stores</p>
            <p className=" text-white tracking-wider ">Get direction</p>
          </div>
        </div>
      </div>

      <div className=" h-14 w-screen flex justify-center bg-[#1F1F1F]">
        <div className=" flex  justify-between items-center w-[80%]">
          <p
            onMouseEnter={() => {
              setshowtab("Smartphone");
            }}
            className=" hover:text-red-500  duration-300 cursor-pointer tracking-wide text-white"
          >
            Smartphone
          </p>
          <p className="hover:text-red-500  duration-300  cursor-pointer tracking-wide text-white">
            Feature phone
          </p>
          <p   onMouseEnter={() => {
              setshowtab("Smart Tv");
            }}
            className="hover:text-red-500  duration-300  cursor-pointer tracking-wide text-white">
            SmartTV
          </p>
          <p className="hover:text-red-500  duration-300  cursor-pointer tracking-wide text-white">
            Smart Gadgets
          </p>
          <p className="hover:text-red-500  duration-300  cursor-pointer tracking-wide text-white">
            Homecare
          </p>
          <p className="hover:text-red-500  duration-300 cursor-pointer tracking-wide text-white">
            Personal care
          </p>
          <p className="hover:text-red-500  duration-300  cursor-pointer tracking-wide text-white">
            About us
          </p>
          <p onClick={()=>{navigate("/support")}}  className="hover:text-red-500  duration-300  cursor-pointer tracking-wide text-white">
            Support
          </p>
        </div>
      </div>

      <div    className=" w-screen bg-[#1A1A1A]">
        {showtab == "Smartphone" && <Smartphone />}

        {showtab == "Smart Tv" && <SmartTv />}
        {showtab == "Support" && <Support />}
      </div>
    </>
  );
};

export default MainHeader;

