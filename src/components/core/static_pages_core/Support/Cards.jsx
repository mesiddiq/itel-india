import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const data = [
    {
      img: "/static_page/Support2/100dayspromise.png",
      title: "Service Centers",
      link:"/support"
    },
    {
      img: "/static_page/Support2/Contactus.png",
      title: "Screen Replacement",
      link:"/screenreplacement"
    },

    {
      img: "/static_page/Support2/eWasteManagement.png",
      title: "100 Days Promise",
      link:"/100-days-promise"
    },

    {
      img: "/static_page/Support2/FAQs.png",
      title: "FAQ’s",
      link:"/FAQ"
    },

    {
      img: "/static_page/Support2/ScreenReplacement.png",
      title: "E-Waste Management",
      link:"/e-waste-management"
    },

    {
      img: "/static_page/Support2/ServiceCentre.png",
      title: "Contact Us",
      link:"/contactus"
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
                <Link to={data.link}> <div className=" flex  space-x-2 items-center ">
                  <p className=" text-center text-mobile/title lg:text-desktop/button text-brand/black">READ MORE</p>
                  <img className="lg:w-[20px] lg:h-[14px] "  src={"/static_page/homepage/Union.png"} alt="" />
                </div>
                </Link>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
