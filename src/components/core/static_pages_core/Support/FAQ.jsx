import React, { useState } from "react";
import { data } from "./data,";

const Accordion = ({ data, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only the first 4 items if not expanded
  const displayedItems = isExpanded ? data : data.slice(0, 4);

  return (
    <div className=" space-y-2">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center font-markot justify-between cursor-pointer"
      >
        <p className="lg:text-desktop/h5/medium text-mobile/h5 text-brand/black">
          {title}
        </p>
        <img
          src={"/static_page/Right%20Chevron.png"}
          className={`transform transition-transform duration-300 ease-in-out ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
          alt="Expand/Collapse"
        />
      </div>

      {/* Accordion content with animation */}
      <div
        className={`overflow-hidden transition-all space-y-1 duration-300 ease-in-out ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {displayedItems.map((item, index) => (
          <p
            key={index}
            className="text-desktop/body/2/regular text-grey/grey/5 lg:text-desktop/body/1"
          >
            {item}
          </p>
        ))}

        {/* Read More / Read Less button */}
        {data.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-brand/black underline mt-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

const FAQ = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("Call");

  // Button data for the categories
  const buttons = [
    { id: "Call", title: "Calls & Contacts" },
    { id: "Camera", title: "Camera & Pictures" },
    { id: "Charging", title: "Charging" },
    { id: "Internet", title: "Internet & Network" },
    { id: "Other", title: "Other" },
  ];

  return (
    <div className="font-markot">
      <div className="lg:content px-4 lg:mb-[60px] space-y-5 lg:space-y-10">
        <p className="text-brand/black lg:text-center text-mobile/h4 lg:text-desktop/h2">
          Frequently Asked Questions (FAQs)
        </p>

        <div className="lg:space-y-[52px] space-y-[40px]">
          {/* Category buttons */}
          <div className="flex justify-between overflow-x-auto space-x-2">
            {buttons.map((button) => (
              <p
                key={button.id}
                onClick={() => setActiveCategory(button.id)}
                className={`lg:text-desktop/button cursor-pointer py-[6px] px-[12px] rounded-[16px] lg:py-4 lg:px-5 shrink-0 ${
                  activeCategory === button.id
                    ? "bg-brand/black text-white"
                    : "text-brand/black bg-bg/primary/1"
                }`}
              >
                {button.title}
              </p>
            ))}
          </div>

          {/* Accordions based on category selection */}
          <div className="space-y-5 lg:space-y-[40px]">
            {data[activeCategory].map((item, index) => (
              <Accordion key={index} data={item.solution} title={item.problem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
