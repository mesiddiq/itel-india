import React from "react";

import { useState } from "react";

const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className=" space-y-4 lg:space-y-3 ">
        <div
          onClick={() => setShow(!show)}
          className=" flex items-center font-markot justify-between cursor-pointer"
        >
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
          className={`overflow-hidden transition-all space-y-[12px] lg:space-y-6 duration-300 ease-in-out ${
            show ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {data.map((data, index) => {
            return (
              <div className=" flex space-x-4  w-[277px] justify-between items-center ">
               
                  <p
                    key={index}
                    className="cursor-pointer text-desktop/body/large text-[#FF073C] lg:text-desktop/body/1"
                  >
                    {data.undertitle}
                  </p>
                
 <a href={data.link} target="_blank" rel="noopener noreferrer">
                <img src={"/download.png"} className=" h-4 w-4" alt="hi" /></a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const pdfdata1 = {
  title: "Annual Return",
  data: [
    {
      undertitle: "Annual Return 2021-22",
      link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
    },
    {
      undertitle: "Annual Return 2020-21",
      link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
    },
    {
      undertitle: "Annual Return 2019-20",
      link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
    },
    {
      undertitle: "Annual Return 2018-19",
      link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
    },
  ],
};

const pdfdata2 = 
  {
    title: "Notice of General Meeting",
    data: [
      {
        undertitle: "EGM Notice",
        link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
      },
      {
        undertitle: "AGM Notice 2022",
        link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
      },
      {
        undertitle: "EGM Notice 2021",
        link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
      },
      {
        undertitle: "EGM Notice 2021",
        link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
      },
      {
        undertitle: "AGM Notice 2019",
        link: "https://www.youtube.com/watch?v=iuJDhFRDx9M",
      },
    ],
  }


const PDFs = () => {
  return (
    <div className=" content px-4 space-y-[60px] font-markot ">
      <Accordian title={pdfdata1.title} data={pdfdata1.data} />
      <Accordian title={pdfdata2.title} data={pdfdata2.data} />

    </div>
  );
};

export default PDFs;
