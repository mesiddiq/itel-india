import { data } from "autoprefixer";
import React, { useState } from "react";

const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex items-center font-markot justify-between cursor-pointer">
        <p className=" text-mobile/h3 lg:text-desktop/h3 text-brand/black">
          {title}
        </p>
        <img
          onClick={() => setShow(!show)}
          src={"./static_page/Right%20Chevron.png"}
          className={` transform transition-transform duration-300 ease-in-out ${
            show ? "rotate-180" : "rotate-0"
          }`}
          alt=""
        />
      </div>

      {/* Accordion content with animation */}
      <div
        className={`overflow-hidden transition-all space-y-4 duration-300 ease-in-out ${
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
    </>
  );
};

const FAQ = () => {
  const item = [
    "At S Mobile Devices Private Limited, we understand that our responsibility doesn’t end with selling you our products. S Mobile Devices Private Limited has been working in the area of safe disposal of electronic waste. Since mobiles and other electronic items are made of hazardous constituents, our e-waste policy aligns with the legislation passed by the Ministry of Environment and Forests (MoEF & CC) called E-Waste (Management) Rules, 2016, which came into effect on 1st Oct 2016.",

    "S Mobile Devices Private Limited will seek shared responsibility and cooperation from customers in reducing the environmental impact of their products.",

    "S Mobile Devices Private Limited will comply with all applicable laws related to e-waste management. As a part of our e-waste recycling initiative, S Mobile Devices Private Limited has partnered with 3R Recycler and Exigo Recycling to comply with E-Waste (Management) Rules, 2016, in providing environmentally sound management of end-of-life electronics.",
  ];
  return (
    <>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">FAQ</h2>

        <div className=" space-y-5">
          <Accordian
            title="S Mobile Devices Private Limited - Recycling Program"
            data={item}
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
