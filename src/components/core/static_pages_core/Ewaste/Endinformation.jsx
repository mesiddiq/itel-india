import React from "react";
import Accordian from "../Reusable/Accordian";

const Endinformation = () => {
  const data = [
    {
      title: "Lifecycle of our Products",
      content: [
        "As defined under the New E-waste (Management) Rules, 2016, the lifecycle of our Feature Phone is 7 years and Smartphone is 5 years.",
        "In case of any queries regarding the proper disposal and/or recycling of electronics, consumers can contact the helpdesk.",
        " 1800-3000-8198 or 1800-102-5018 | Email – info@3rrecycler.com",
      ],
    },
  ];
  return (
    <div className="content  font-markot text-brand/black ">
      <div className=" lg:space-y-[120px] space-y-[60px]">
        {data.map((data, index) => {
          return (
            <Accordian key={index} title={data.title} data={data.content} />
          );
        })}
      </div>
    </div>
  );
};

export default Endinformation;
