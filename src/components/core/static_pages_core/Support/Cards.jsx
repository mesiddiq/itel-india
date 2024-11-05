import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const data = [
    {
      img: "/static_page/Support2/ServiceCentre.png",
      
      title: "Service Centers",
      link:"/support/service-center-locator"
    },
    {
      img: "/static_page/Support2/ScreenReplacement.png",
     
      title: "Screen Replacement",
      link:"/support/1-time-screen-replacement"
    },

    {
      img: "/static_page/Support2/100dayspromise.png",
      
      title: "100 Days Promise",
      link:"/support/100-days-service-promise"
    },

    {
      img: "/static_page/Support2/FAQs.png",
      title: "FAQ’s",
      link:"/support/faqs"
    },

    {
      img: "/static_page/Support2/eWasteManagement.png",
      
      title: "E-Waste Management",
      link:"/support/e-waste-management"
    },

    {
      img: "/static_page/Support2/Contactus.png",
      title: "Contact Us",
      link:"/contact-us"
    },
  ];

  return (
    <div data-aos="fade-up"  className=" px-4 font-markot  lg:content ">
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
              <div className=" flex flex-col justify-center lg:items-center space-y-4 ">
                <p className=" text-mobile/h5/medium text-desktop/h4  text-black/1">{data.title}</p>
                <Link to={data.link}> <div className=" flex  space-x-2 items-center ">
                  <p className=" text-center text-mobile/title lg:text-desktop/button text-brand/black">READ MORE</p>
                  <img className="lg:w-[24px] lg:h-[15px] "  src={"/static_page/homepage/Union.png"} alt="" />
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
