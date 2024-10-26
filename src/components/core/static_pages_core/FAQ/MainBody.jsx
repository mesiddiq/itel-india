import React, { useState } from "react";
import { data } from "./data,";



const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="   border-t-2 space-y-2 ">
        <div
          onClick={() => setShow(!show)}
          className=" flex items-center font-markot justify-between cursor-pointer"
        >
          <p className=" lg:text-desktop/h5/medium   text-mobile/h5 text-brand/black">
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
          className={`overflow-hidden transition-all space-y-1  duration-300 ease-in-out ${
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
      </div>
    </>
  );
};


const MainBody = () => {
  // State to track the active button and the search query
  const [activeCategory, setActiveCategory] = useState("Call");
  const [searchQuery, setSearchQuery] = useState("");

  // Button data for the categories
  const buttons = [
    { id: "Call", title: "Calls & Contacts" },
    { id: "Camera", title: "Camera & Pictures" },
    { id: "Charging", title: "Charging" },
    { id: "Internet", title: "Internet & Network" },
    { id: "Other", title: "Other" },
  ];

  // Data for each category


  // Combine all data into a single array for search across all categories
  const allData = Object.values(data).flat();

  // Function to handle search filtering
  const filteredData = (categoryData) => {
    return categoryData.filter((item) => {
      const problemContainsQuery = item.problem
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const solutionContainsQuery = item.solution.some((sol) =>
        sol.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return problemContainsQuery || solutionContainsQuery;
    });
  };

  return (
    <div className="font-markot ">
      <div className="lg:content px-4 lg:mb-[60px] space-y-5 lg:space-y-10">
        {/* Search input */}
        <div>
          <input
            type="text"
            placeholder="Enter your query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-desktop/body/1 text-brand/black no-underline outline-none w-full lg:rounded-xl lg:p-5 border-grey/grey/3 border-[1.5px]"
          />
        </div>
        <div className="lg:space-y-[52px]">
          {/* Category buttons */}
          <div className="flex justify-between overflow-x-auto space-x-2">
            {buttons.map((button) => (
              <p
                key={button.id}
                onClick={() => setActiveCategory(button.id)}
                className={`lg:text-desktop/button cursor-pointer py-[6px] px-[12px] rounded-[16px] lg:py-4 lg:px-5 shrink-0 ${
                  activeCategory === button.id
                    ? " bg-brand/black text-white" // Add your active button style here
                    : " text-brand/black bg-bg/primary/1 "
                }`}
              >
                {button.title}
              </p>
            ))}
          </div>

          {/* Accordions based on search or category selection */}
          <div className=" space-y-5  lg:space-y-[40px]">
            {searchQuery
              ? filteredData(allData).map((item, index) => (
                  <Accordian
                    key={index}
                    data={item.solution}
                    title={item.problem}
                  />
                ))
              : activeCategory &&
                filteredData(data[activeCategory]).map((item, index) => (
                  <Accordian
                    key={index}
                    data={item.solution}
                    title={item.problem}
                  />
                ))}

            {/* Show all filtered results if no search query and no category selected */}
            {!searchQuery &&
              !activeCategory &&
              Object.keys(data).map((category) =>
                filteredData(data[category]).map((item, index) => (
                  <Accordian
                    key={index}
                    data={item.solution}
                    title={item.problem}
                  />
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;



