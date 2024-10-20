import { div, p } from "framer-motion/client";
import React from "react";
import { useState } from "react";

const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className=" space-y-4">
        <div
          onClick={() => setShow(!show)}
          className=" flex items-center font-markot justify-between cursor-pointer"
        >
          <p className=" lg:text-desktop/h5/medium  text-brand/black">
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
          className={`overflow-hidden transition-all space-y-4 duration-300 ease-in-out ${
            show ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {data.map((data, index) => {
            return (
              <p
                key={index}
                className=" text-desktop/body/2/regular text-grey/grey/5  lg:text-desktop/body/2/regular"
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

const FAQ = () => {
  const Buttondata = [
    "Calls & contacts",
    "Camera & picture",
    "Charging",
    "internet & network",
  ];

  const accordiandata = [
    {
      title: "lorem ipsum",

      description: [
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
      ],
    },
    {
      title: "lorem ipsum",
      description: [
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
      ],
    },
    {
      title: "lorem ipsum",
      description: [
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
      ],
    },
    {
      title: "lorem ipsum",
      description: [
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
      ],
    },
  ];
  return (
    <div data-aos="fade-up"  className=" lg:content px-4 lg:space-y-10 lg:px-32 space-y-3   font-markot ">
      <p className="   text-brand/black lg:text-center text-mobile/h4 lg:text-desktop/h2">
        Frequently Asked Questions (FAQs)
      </p>
      <div className=" space-y-3 lg:space-y-10">
        {
          //buttons
        }
        <div className="flex overflow-x-auto justify-between space-x-2">
          {Buttondata.map((data, index) => {
            return (
              <p
                className="lg:text-desktop/button text-white py-[6px] px-[12px] rounded-[50px] lg:py-4 lg:px-5 bg-brand/black shrink-0"
                key={index}
              >
                {data}
              </p>
            );
          })}
        </div>

        {
          //faq accordians
        }

        <div className="  ">
          {accordiandata.map((data) => {
            return (
              <div className=" border-t-2 py-[10px]  border-grey/grey/2">
                <Accordian data={data.description} title={data.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
