import React from "react";



import { useState } from "react";


const Accordian = () => {
  const [show, setShow] = useState(true);

  return (
    <>
    <div className=" space-y-4">
          <div onClick={() => setShow(!show)} className=" flex items-center font-markot justify-between cursor-pointer">
        <p className=" text-mobile/h3 lg:text-desktop/h3 text-brand/black">
        Lifecycle of our Products
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
      
            <p
          
              className=" text-desktop/body/2/regular text-grey/grey/5  lg:text-desktop/body/1"
            >
            As defined under the New E-waste (Management) Rules, 2016, the lifecycle of our Feature Phone is 7 years and Smartphone is 5 years.
            </p>

            <p
              
              className=" text-desktop/body/2/regular text-grey/grey/5  lg:text-desktop/body/1"
            >
           In case of any queries regarding the proper disposal and/or recycling of electronics, consumers can contact the helpdesk.
            </p>


            <p
              
              className=" text-desktop/body/2/regular text-grey/grey/5  lg:text-desktop/body/1"
            >
              <a href="tel:800-3000-8198">  1800-3000-8198  </a> or  <a href="tel:1800-102-5018">  1800-102-5018</a> 
       

         <a href="mailto:info@3rrecycler.com">Email – info@3rrecycler.com</a>
          
           </p>




            
         
      </div>
    </div>
    
    </>
  );
};





const Endinformation = () => {
  const data = [
    {
      title: "Lifecycle of our Products",
      content: [
        "As defined under the New E-waste (Management) Rules, 2016, the lifecycle of our Feature Phone is 7 years and Smartphone is 5 years.",
        "In case of any queries regarding the proper disposal and/or recycling of electronics, consumers can contact the helpdesk.",
        " 1800-3000-8198 or 1800-102-5018 | Email – info@3rrecycler.com",
      ],
    },
  ];
  return (
    <div className="lg:content px-3  font-markot text-brand/black ">
      <div className=" lg:space-y-[120px]  space-y-[60px]">
       <Accordian/>
      </div>
    </div>
  );
};

export default Endinformation;
