import React from "react";

const Bottem = () => {
  return (
    <div className="lg:content px-4 font-markot">
      <div className=" lg:h-[478px] overflow-hidden max-h-[730px] flex justify-between bg-[#f8f6f3] border-[#ebe8e2]    rounded-3xl lg:rounded-lg border-[24px] ">
        <div className=" flex flex-col justify-between   lg:pl-[60px]  p-3  h-full py-[20px] lg:max-w-[784px]">
          
          <div className="  flex flex-col-reverse  lg:space-y-3 lg:flex-col ">
          <img className=" self-center lg:hidden max-h-[169px] max-w-[215px]" src="/static_page/Aboutus/Group1973340143(1).png" alt="" />
             
             <img className=" hidden lg:block lg:h-[115px] lg:w-[90%]" src="/static_page/Aboutus/Group1973340143.png" alt="" />
          <p className="  text-desktop/body/1   lg:text-desktop/body/large text-black/1">
            Our logo "Stylized Speech Bubble" shape is not just a design
            element; it embodies our commitment to empathetic communication.
          </p>
          </div>
          
         

          <div className=" lg:space-y-12 space-y-3 text-desktop/body/1 text-grey/grey/4">
            <p className=" lg:max-w-[750px]">
              By integrating this shape into an abstract human face, we elevate
              its significance. This design enables deeper and more empathetic
              connections with users.
            </p>
            <p className="  lg:max-w-[737px]">
              Fluid waves (design element) symbolizes seamless connectivity and
              dynamic interactions, reflecting the intuitive flow of data and
              communication. Highlighting itel's mission to smoothly integrate
              affordable and smart solutions for everyone.
            </p>
          </div>
        </div>
        <img className=" hidden lg:block h-full" src="/static_page/Aboutus/pattern-2.png" alt="" />
      </div>
    </div>
  );
};

export default Bottem;
