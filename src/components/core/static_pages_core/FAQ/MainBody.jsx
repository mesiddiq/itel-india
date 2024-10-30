import React, { useState } from "react";
import { data } from "./data,";



const CallsAndContact = ({active}) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M29.7927 24.4396C29.7927 24.9196 29.686 25.4129 29.4593 25.8929C29.2327 26.3729 28.9394 26.8263 28.5527 27.2529C27.8994 27.9729 27.1793 28.4929 26.366 28.8263C25.566 29.1596 24.6994 29.3329 23.766 29.3329C22.406 29.3329 20.9527 29.0129 19.4193 28.3596C17.886 27.7063 16.3527 26.8263 14.8327 25.7196C13.2993 24.5996 11.846 23.3596 10.4593 21.9863C9.08602 20.5996 7.84602 19.1463 6.73935 17.6263C5.64602 16.1063 4.76602 14.5863 4.12602 13.0796C3.48602 11.5596 3.16602 10.1063 3.16602 8.71959C3.16602 7.81293 3.32602 6.94626 3.64602 6.14626C3.96602 5.33293 4.47268 4.58626 5.17935 3.91959C6.03268 3.07959 6.96602 2.66626 7.95268 2.66626C8.32602 2.66626 8.69935 2.74626 9.03268 2.90626C9.37935 3.06626 9.68602 3.30626 9.92602 3.65293L13.0193 8.01293C13.2593 8.34626 13.4327 8.65293 13.5527 8.94626C13.6727 9.22626 13.7393 9.50626 13.7393 9.75959C13.7393 10.0796 13.646 10.3996 13.4593 10.7063C13.286 11.0129 13.0327 11.3329 12.7127 11.6529L11.6993 12.7063C11.5527 12.8529 11.486 13.0263 11.486 13.2396C11.486 13.3463 11.4993 13.4396 11.526 13.5463C11.566 13.6529 11.606 13.7329 11.6327 13.8129C11.8727 14.2529 12.286 14.8263 12.8727 15.5196C13.4727 16.2129 14.1127 16.9196 14.806 17.6263C15.526 18.3329 16.2193 18.9863 16.926 19.5863C17.6193 20.1729 18.1927 20.5729 18.646 20.8129C18.7127 20.8396 18.7927 20.8796 18.886 20.9196C18.9927 20.9596 19.0993 20.9729 19.2193 20.9729C19.446 20.9729 19.6193 20.8929 19.766 20.7463L20.7793 19.7463C21.1127 19.4129 21.4327 19.1596 21.7393 18.9996C22.046 18.8129 22.3527 18.7196 22.686 18.7196C22.9393 18.7196 23.206 18.7729 23.4993 18.8929C23.7927 19.0129 24.0994 19.1863 24.4327 19.4129L28.846 22.5463C29.1927 22.7863 29.4327 23.0663 29.5793 23.3996C29.7127 23.7329 29.7927 24.0663 29.7927 24.4396Z" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-miterlimit="10"/>
</svg>
  )
}

const Camera = ({active}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M9.51421 29.3327H23.4875C27.1675 29.3327 28.6342 27.0793 28.8075 24.3327L29.5009 13.3193C29.6875 10.4393 27.3942 7.99935 24.5009 7.99935C23.6875 7.99935 22.9409 7.53268 22.5675 6.81268L21.6075 4.87935C20.9942 3.66602 19.3942 2.66602 18.0342 2.66602H14.9809C13.6075 2.66602 12.0075 3.66602 11.3942 4.87935L10.4342 6.81268C10.0609 7.53268 9.31421 7.99935 8.50087 7.99935C5.60754 7.99935 3.31421 10.4393 3.50087 13.3193L4.19421 24.3327C4.35421 27.0793 5.83421 29.3327 9.51421 29.3327Z" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.501 10.666H18.501" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.5003 23.9997C18.887 23.9997 20.8337 22.053 20.8337 19.6663C20.8337 17.2797 18.887 15.333 16.5003 15.333C14.1137 15.333 12.167 17.2797 12.167 19.6663C12.167 22.053 14.1137 23.9997 16.5003 23.9997Z" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

const Battery = ({active}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M27.833 12.666C29.833 12.666 29.833 13.3327 29.833 14.666V17.3327C29.833 18.666 29.833 19.3327 27.833 19.3327" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.00684 13.333C9.44684 15.0797 9.44684 16.9197 9.00684 18.6663" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.6738 13.333C14.1138 15.0797 14.1138 16.9197 13.6738 18.6663" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.3398 13.333C18.7798 15.0797 18.7798 16.9197 18.3398 18.6663" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.8327 25.3327H9.83268C4.49935 25.3327 3.16602 23.9993 3.16602 18.666V13.3327C3.16602 7.99935 4.49935 6.66602 9.83268 6.66602H17.8327C23.166 6.66602 24.4993 7.99935 24.4993 13.3327V18.666C24.4993 23.9993 23.166 25.3327 17.8327 25.3327Z" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

const Internet = ({active}) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M7.04688 15.7856C12.7802 11.3589 20.2335 11.3589 25.9669 15.7856" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.16699 11.1457C11.247 4.9057 21.7537 4.9057 29.8337 11.1457" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.55176 20.6528C13.7518 17.3994 19.2318 17.3994 23.4318 20.6528" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.0342 25.5323C15.1408 23.9056 17.8742 23.9056 19.9809 25.5323" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

const Other = ({active}) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M16.5003 29.3333C23.8337 29.3333 29.8337 23.3333 29.8337 16C29.8337 8.66663 23.8337 2.66663 16.5003 2.66663C9.16699 2.66663 3.16699 8.66663 3.16699 16C3.16699 23.3333 9.16699 29.3333 16.5003 29.3333Z" stroke={active ? "#fff" :"#ff0037"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.8283 16H21.8403" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.4943 16H16.5063" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.1593 16H11.1713" stroke={active ? "#fff" :"#ff0037"} stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

const Accordian = ({ data, title, isExpanded, onToggle }) => {
  return (
    <div className="border-t-2 space-y-2">
      <div
        onClick={onToggle}
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
          alt=""
        />
      </div>

      {/* Accordion content with animation */}
      <div
        className={`overflow-hidden transition-all space-y-1 duration-300 ease-in-out ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {data.map((item, index) => (
          <p
            key={index}
            className="text-desktop/body/2/regular text-grey/grey/5 lg:text-desktop/body/1"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const MainBody = () => {
  // State to track the active button and the search query
  const [activeCategory, setActiveCategory] = useState("Call");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Button data for the categories
  const buttons = [
    { id: "Call", title: "Calls & Contacts", img: "" },
    { id: "Camera", title: "Camera & Pictures", img: ""},
    { id: "Charging", title: "Charging", img:"" },
    { id: "Internet", title: "Internet & Network", img:""},
    { id: "Other", title: "Other", img: "" },
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
              <div  className={` cursor-pointer space-x-2  flex  items-center rounded-[16px] lg:py-4 lg:px-5 ${
                activeCategory === button.id
                  ? " bg-brand/black text-white" // Add your active button style here
                  : " text-brand/black bg-bg/primary/1 "
              }`}>

                {/* Calls and contacts */}
                {button.id == "Call" && <CallsAndContact active={activeCategory == "Call"} /> } 

                {/* Camera & Pictures */}

                {button.id == "Camera" && <Camera active={activeCategory == "Camera"}/>}
       
                {button.id == "Charging" && <Battery active={activeCategory == "Charging"}/> }
                {/* Chargeing */}
                
                {button.id == "Internet" && <Internet active={activeCategory=="Internet"}/> }
                {/* Internet */}
                
                {button.id == "Other" &&   <Other active={activeCategory == "Other"}/>}
                {/* Other */}
               
                <p
                  key={button.id}
                  onClick={() => setActiveCategory(button.id)}
                  className={`lg:text-desktop/button cursor-pointer  shrink-0 ${
                    activeCategory === button.id
                      ? " bg-brand/black text-white" // Add your active button style here
                      : " text-brand/black bg-bg/primary/1 "
                  }`}
                >
                  {button.title}
                </p>
              </div>
            ))}
          </div>

          {/* Accordions based on search or category selection */}
          <div className="space-y-5 lg:space-y-[40px]">
            {(searchQuery ? filteredData(data[activeCategory]) : data[activeCategory]).map(
              (item, index) => (
                <Accordian
                  key={index}
                  data={item.solution}
                  title={item.problem}
                  isExpanded={activeAccordion === index}
                  onToggle={() => setActiveAccordion(activeAccordion === index ? null : index)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
