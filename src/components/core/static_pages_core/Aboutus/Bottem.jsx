import React from "react";

const Bottem = () => {
  return (
    <div className=" content px-4">
      <div className='lg:bg-[url("/static_page/Aboutus/LogoExplainationBG.webp")] px-8 flex items-center  lg:pl-[79px] font-markot bg-[url("/static_page/Aboutus/LogoExplainationBGMobile.webp")] bg-cover  bg-center bg-no-repeat lg:min-h-[478px]    min-h-[840px]'>
        <div className="">
          <div className=" flex lg:flex-col-reverse   flex-col lg:items-start   items-center">
            <p className=" lg:w-[784px] text-black/1   lg:text-desktop/body/large ">
              Our logo "Stylized Speech Bubble" shape is not just a design
              element; it embodies our commitment to empathetic communication.
            </p>
            <div className=" ">
                <img
              className=" w-[215px] lg:hidden h-[169px]"
              src="/static_page/Aboutus/Group1973340143(1).png"
              alt=""
            />
            <img
              className=" hidden lg:block"
              src="/static_page/Aboutus/Group1973340143.png"
              alt=""
            />
            </div>
          
          </div>
          <p className="lg:w-[754px]  text-grey/grey/4 lg:text-desktop/body/1">
            By integrating this shape into an abstract human face, we elevate
            its significance. This design enables deeper and more empathetic
            connections with users.
          </p>
          <p className="lg:w-[734px]  text-grey/grey/4 lg:text-desktop/body/1">
            Fluid waves (design element) symbolizes seamless connectivity and
            dynamic interactions, reflecting the intuitive flow of data and
            communication. Highlighting itel's mission to smoothly integrate
            affordable and smart solutions for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottem;
