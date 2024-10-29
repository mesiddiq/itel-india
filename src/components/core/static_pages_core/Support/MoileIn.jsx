import { div } from "framer-motion/client";
import React from "react";
import { useState } from "react";

const BlogCard = ({ category, title, image }) => {
  return (
    <div className="bg-white space-y-[12px] lg:space-y-[16px] ">
      <img
        src={image}
        alt={title}
        className=" lg:w-[412px] w-[328px] h-[337px] lg:h-[424px]"
      />
      <div className=" space-y-3 lg:space-y-4">
        <div className=" space-y-2 ">
          <p className=" text-desktop/body/2/regular text-grey/grey/5">{category}</p>
        <p className=" tlg:ext-desktop/h5/medium  text-mobile/h6 line-clamp-2 text-brand/black">{title}</p>
        </div>
        
        <a href="#" className=" inline-block">
          <div className=" flex items-center">
            <p className=" lg:text-desktop/button text-mobile/button text-brand/black">VIEW</p>{" "}
            <img src={"/static_page/homepage/Union.png"} className=" w-5 h-3 ml-2" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

const MoileIn = () => {
  const [activeButton, setActiveButton] = useState("Calls & Contacts");
  const [activeTab, setActiveTab] = useState("All");

  const data = [
    {
      category: "NEWS",
      title:
        "Itel India’s Heartwarming World Cup Campaign: Connecting India through the...",
      image: "/static_page/Support2/Frame 1973341043 (3).png", // Replace with actual image URL
      type: "All",
    },
    {
      category: "BLOG",
      title: "Imagine a day with uninterrupted HiFi Sound.",
      image: "/static_page/Support2/Frame 1973341043 (4).png", // Replace with actual image URL
      type: "Latest",
    },
    {
      category: "BLOG",
      title: "Unleash the Power of Memory: Itel S23 Redefines Performance",
      image: "/static_page/Support2/Frame 1973341043 (5).png", // Replace with actual image URL
      type: "Services",
    },
  ];
  const Tabs = ["All", "Latest", "Services", "Useful Tips"];
  const filteredData =
    activeTab === "All" ? data : data.filter((item) => item.type === activeTab);

  return (
    <div data-aos="fade-up"  className=" content lg:space-y-[40px] space-y-[24px] px-4  font-markot">
      <div className=" flex items-center  lg:space-x-4 ">
        <div className=" ">
            <img src={"static_page/Support2/Star.png"} alt="" className="   animate-spin lg:h-[60px]  " />
        </div>
      
        <p className=" text-brand/black text-mobile/h4 lg:text-desktop/h2">Discover itel Mobile Insights</p>
      </div>
   
      <div className=" lg:space-y-6  space-y-[20px]">
        {/* Tabs */}
        <div className="  flex">
          {Tabs.map((tab) => (
            <button
              key={tab}
              className={`lg:py-3 lg:px-5 py-[6px] px-[12px]  rounded-full text-desktop/body/2/medium  lg:text-desktop/button ${
                activeTab === tab
                  ? " lg:bg-bg/secondry bg-brand/black  lg:text-brand/black"
                  : "  text-brand/black "
              } transition-colors duration-300`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          data-aos="fade-up"
          className="lg:grid space-y-[20px] lg:space-y-0 lg:grid-cols-3 gap-5"
        >
          {filteredData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoileIn;
