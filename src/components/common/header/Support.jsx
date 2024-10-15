import React, { useState, useRef } from "react";
import MainHeader from "./MainHeader";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Support = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Calls & Contacts");

  const data = [
    {
      category: "NEWS",
      title:
        "Itel India’s Heartwarming World Cup Campaign: Connecting India through the...",
      image: "./support/Frame 1973341043.png", // Replace with actual image URL
      type: "All",
    },
    {
      category: "BLOG",
      title: "Imagine a day with uninterrupted HiFi Sound.",
      image: "./support/Frame 1973341043 (1).png", // Replace with actual image URL
      type: "Latest",
    },
    {
      category: "BLOG",
      title: "Unleash the Power of Memory: Itel S23 Redefines Performance",
      image: "./support/Frame 1973341043 (2).png", // Replace with actual image URL
      type: "Services",
    },
  ];
  const Tabs = ["All", "Latest", "Services", "Useful Tips"];

  const [activeTab, setActiveTab] = useState("All");

  const filteredData =
    activeTab === "All" ? data : data.filter((item) => item.type === activeTab);

  const BlogCard = ({ category, title, image }) => {
    return (
      <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={image}
          alt={title}
          className="w-full  object-cover rounded-md"
        />
        <div className="mt-4">
          <p className="text-gray-500 text-xs">{category}</p>
          <h3 className=" font-semibold line-clamp-2 mt-2">{title}</h3>
          <a href="#" className=" mt-4 inline-block">
            <div className=" flex items-center">
              <p className=" text-sm font-semibold">VIEW</p>{" "}
              <img
                src={"./support/Union.png"}
                className=" w-5 h-3 ml-2"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    );
  };

  const buttons = [
    { label: "Calls & Contacts", id: "calls" },
    { label: "Camera & Picture", id: "camera" },
    { label: "Charging", id: "charging" },
    { label: "Internet & Network", id: "internet" },
  ];

  const handleClick = (label) => {
    setActiveButton(label);
  };

  const card_data = [
    {
      img: "./support/Frame 1973340763.png",
      service_name: "Service Center",
    },
    {
      img: "./support/Group 1973339760.png",
      service_name: "Screen Replacement",
    },
    {
      img: "./support/Frame 1973340762.png",
      service_name: "100 Days Promise",
    },
    {
      img: "./support/Frame 1973340762.png",
      service_name: "FAQ",
    },
    {
      img: "./support/Group 1973339760 (1).png",
      service_name: "E-Waste Management",
    },
    {
      img: "./support/Group 1973339765 (1).png",
      service_name: "Contact Us",
    },
  ];

  const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRef = useRef([]); // To store refs for each content

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle logic
    };

    const accordionData = [
      {
        question: "How to set music as a ringtone?",
        answer:
          "To set music as a ringtone, go to settings, select sounds, and choose your desired ringtone from your music files.",
      },
      {
        question: "Cannot make a call after activating data.",
        answer: `1. Whether or not all contacts cannot be called... 
        2. Make sure the SIM account has enough balance...
        3. Check if the phone is on 4G only mode...
        4. Try to reset factory settings...
        5. Visit the nearest customer service center.`,
      },
      {
        question: "Cannot add new contacts to phone book or view phone book.",
        answer:
          "This might be caused by storage issues or permissions. Check your settings and try again.",
      },
      {
        question: "Copy contacts to another phone.",
        answer: `1. Try resetting factory settings but remember to backup data.
        2. Ensure your SIM has enough balance and signal strength.
        3. Visit the nearest service center for further support.`,
      },
    ];

    return (
      <div data-aos="fade-up" className="max-w-2xl mx-auto">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-900 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            <div
              ref={(el) => (contentRef.current[index] = el)} // Store ref for each content
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight:
                  activeIndex === index
                    ? contentRef.current[index]?.scrollHeight
                    : 0,
              }}
            >
              <div className="pb-4 text-gray-700 px-4">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
        <div className=" flex justify-center py-4">
          <button className="text-red-500 hover:text-red-600 text-sm font-bold flex items-center justify-center">
            <p className=" text-black font-medium ">Read More</p>{" "}
            <FaChevronDown className="ml-1" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className=" overflow-hidden">
      <MainHeader />
      <div className=" flex flex-col justify-center items-center h-[550px] w-screen bg-red-500">
        <p className=" text-4xl text-white font-medium ">Welcome to</p>
        <p className=" text-7xl text-white  mt-5">itel Support</p>
        <p className=" text-white tracking-wide mt-5">
          We're here to help you tackle any tech troubles head-on.
        </p>
      </div>

      <div className=" px-10">
        <div data-aos="fade-up" className=" grid grid-cols-3 gap-5 px-20">
          {card_data.map((data) => {
            return (
              <>
                <div
                  onClick={() => navigate(data.service_name)}
                  className="  flex flex-col mt-10 items-center"
                >
                  <img className="  " src={data.img} />
                  <p className=" text-[#1C1B1B] text-2xl mt-5 tracking-wider  font-semibold">
                    {data.service_name}
                  </p>
                  <div className=" flex justify-center items-center  mt-2">
                    <p className=" text-[#1C1B1B] text-sm tracking-wider font-bold">
                      READ MORE
                    </p>
                    <img
                      src={"./support/Union.png"}
                      className=" w-5 h-3 ml-2"
                      alt=""
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <p
          data-aos="fade-up"
          className=" text-center mt-20 text-[#1C1B1B] font-medium text-4xl"
        >
          Frequently Asked Questions (FAQs)
        </p>

        <div
          data-aos="fade-up"
          className="flex  justify-center mt-10 space-x-4"
        >
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`px-6 py-2 rounded-full border transition-colors duration-300
            ${
              activeButton === button.label
                ? "bg-black text-white font-medium"
                : "bg-white text-black font-medium border-gray-400"
            }`}
              onClick={() => handleClick(button.label)}
            >
              {button.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div>
          <Accordion />
        </div>

        <div>
          <div className=" flex  items-center">
            <img src={"./support/Star.png"} alt="" className=" h-12" />
            <p className=" text-3xl font-medium ">
              Discover itel Mobile Insights
            </p>
          </div>
          <div className="container mx-auto py-8">
            {/* Tabs */}
            <div className="flex space-x-6 mb-6">
              {Tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {filteredData.map((item, index) => (
                <BlogCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" p-8">
          {/* Top Cards Section */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mb-8">
            {/* Left Card */}
            <div
              style={{
                backgroundImage: `url('./support/Group 1973339742 (2).png')`,
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat", // Prevents image repetition
              }}
              data-aos="slide-right"
              className="bg-[#EBE8E2] p-8 rounded-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-medium mb-2">
                  Find Your Nearest itel
                  <br /> Store!
                </h2>
                <p className="text-gray-600">
                  We are here to help you find the right phone.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a href="#" className="text-red-500 font-semibold">
                  SEE MORE &rarr;
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div
              data-aos="slide-left"
              className="bg-[#EBE8E2] p-8 rounded-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-medium mb-2">
                  Connect for
                  <br />
                  Business Queries
                </h2>
                <p className="text-gray-600 text-xs">
                  MAIL US AT <br />
                  <a
                    href="mailto:itelMarketing.in@transsion.com"
                    className="text-black font-thin tracking-wide mt-2"
                  >
                    itelMarketing.in@transsion.com
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <img
                  src="/path-to-image/person.png"
                  alt="Business Person"
                  className="w-24"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div
            data-aos="slide-up"
            className="bg-[#EBE8E2] p-8  h-48 grid grid-cols-2  rounded-lg "
          >
            <div className="  flex flex-col  justify-center space-y-1 ">
              <p className=" text-sm text-[#252525]">Need our help?</p>
              <p className=" text-2xl font-medium tracking-wider">Contact us</p>
            </div>
            <div className="  flex justify-between items-center ">
              <div>
                <img
                  src={"./support/Group 1973339728.png"}
                  className=""
                  alt=""
                />
                <p className=" mt-2 font-medium text-[#252525] opacity-70 tracking-wider">
                  CALL US
                </p>
                <p className=" font-bold  tracking-wide">1800-4190-525</p>
              </div>

              <div>
                <img
                  src={"./support/Group 1973339730.png"}
                  className=""
                  alt=""
                />
                <p className=" mt-2 font-medium text-[#252525] opacity-70 tracking-wider">
                  CHAT WITH US
                </p>
                <p className=" font-bold  tracking-wide">CLICK HERE</p>
              </div>

              <div>
                <img
                  src={"./support/Group 1973339729.png"}
                  className=" "
                  alt=""
                />
                <p className=" mt-2 font-medium text-[#252525] opacity-70 tracking-wider">
                  E-mail US
                </p>
                <p className=" font-bold  tracking-wide">
                  info.in@transsion.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Support;
