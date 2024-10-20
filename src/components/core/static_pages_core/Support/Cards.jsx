import React from "react";

const Cards = () => {
  const data = [
    {
      img: "/static_page/Support2/100%20Days%20Of%20Promise.webp",
      title: "Service Centers",
    },
    {
      img: "/static_page/Support2/Contact%20Us.webp",
      title: "Screen Replacement",
    },

    {
      img: "/static_page/Support2/E%20waste.webp",
      title: "100 Days Promise",
    },

    {
      img: "/static_page/Support2/FAQs.webp",
      title: "FAQ’s",
    },

    {
      img: "/static_page/Support2/Screen%20Replacement.webp",
      title: "E-Waste Management",
    },

    {
      img: "/static_page/Support2/Service%20Centers.webp",
      title: "Contact Us",
    },
  ];

  return (
    <div data-aos="fade-up"  className=" px-4  lg:content ">
      <div className=" lg:grid gap-[64px] lg:px-10 lg:space-y-0 space-y-4  lg:grid-cols-3">
        {data.map((data, index) => {
          return (
            <div
              className=" flex lg:flex-col space-x-4 lg:space-x-0 lg:items-center space-y-6"
              key={index}
            >
              <img
                className="  w-[144px] h-[132px] lg:w-[322px] lg:h-[290px] "
                src={data.img}
                alt=""
              />
              <div className=" flex flex-col justify-center lg:items-center space-y-2 ">
                <p className=" text-mobile/h5/medium text-desktop/h4  text-black/1">{data.title}</p>
                <div className=" flex  space-x-2 items-center ">
                  <p className=" text-center text-mobile/title lg:text-desktop/button text-brand/black">READ MORE</p>
                  <img className="lg:w-[20px] lg:h-[14px] "  src={"/Union.png"} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
