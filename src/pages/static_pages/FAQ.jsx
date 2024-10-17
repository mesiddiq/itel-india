import React, { useState } from "react";

const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between cursor-pointer">
        <p className="text-lg font-semibold">{title}</p>
        <img
          onClick={() => setShow(!show)}
          src={"./static_page/Right%20Chevron.png"}
          className={`h-10 w-10 transform transition-transform duration-300 ease-in-out ${
            show ? "rotate-180" : "rotate-0"
          }`}
          alt=""
        />
      </div>

      {/* Accordion content with animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          show ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{data}</p>
      </div>
    </>
  );
};

const FAQ = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">FAQ</h2>

        <div className=" space-y-5">
          <Accordian
            title="S Mobile Devices Private Limited - Recycling Program"
            data="At S Mobile Devices Private Limited, we understand that our responsibility doesn’t end with selling you our products. S Mobile Devices Private Limited has been working in the area of safe disposal of electronic waste. Since mobiles and other electronic items are made of hazardous constituents, our e-waste policy aligns with the legislation passed by the Ministry of Environment and Forests (MoEF & CC) called E-Waste (Management) Rules, 2016, which came into effect on 1st Oct 2016. S Mobile Devices Private Limited will seek shared responsibility and cooperation from customers in reducing the environmental impact of their products. S Mobile Devices Private Limited will comply with all applicable laws related to e-waste management. As a part of our e-waste recycling initiative, S Mobile Devices Private Limited has partnered with 3R Recycler and Exigo Recycling to comply with E-Waste (Management) Rules, 2016, in providing environmentally sound management of end-of-life electronics."
          />

          <Accordian
            title="What is e-waste?"
            data="E-waste refers to electronic products that are at the end of their useful life."
          />

          <Accordian
            title="Where to recycle old devices?"
            data="You can drop your old devices at our authorized recycling centers."
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
