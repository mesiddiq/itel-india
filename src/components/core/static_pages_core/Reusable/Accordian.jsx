import { useState } from "react";


const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(true);

  return (
    <>
    <div className=" space-y-4">
          <div onClick={() => setShow(!show)} className=" flex items-center font-markot justify-between cursor-pointer">
        <p className=" text-mobile/h3 lg:text-desktop/h3 text-brand/black">
          {title}
        </p>
        <img
          
          src={"/static_page/Right%20Chevron.png"}
          className={` transform transition-transform duration-300 ease-in-out ${
            show ? "rotate-180" : "rotate-0"
          }`}
          alt=""
        />
      </div>

      {/* Accordion content with animation */}
      <div
        className={`overflow-hidden transition-all space-y-5 duration-300 ease-in-out ${
          show ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {data.map((data, index) => {
          return (
            <p
              key={index}
              className=" text-desktop/body/2/regular text-grey/grey/5  lg:text-desktop/body/1"
            >
              {data}
            </p>
          );
        })}
      </div>
    </div>
    
    </>
  );
};

  export default Accordian