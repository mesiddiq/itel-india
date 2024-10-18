import React from "react";
import Accordian from "../Reusable/Accordian";

const Informations = () => {
  const data = [
    {
      title: "S Mobile Devices Private Limited - Recycling Program",
      content: [
        "At S Mobile Devices Private Limited, we understand that our responsibility doesn’t end with selling you our products. S Mobile Devices Private Limited has been working in the area of safe disposal of electronic waste. Since mobiles and other electronic items are made of hazardous constituents, our e-waste policy aligns with the legislation passed by the Ministry of Environment and Forests (MoEF & CC) called E-Waste (Management) Rules, 2016, which came into effect on 1st Oct 2016.",

        "S Mobile Devices Private Limited will seek shared responsibility and cooperation from customers in reducing the environmental impact of their products.",

        "S Mobile Devices Private Limited will comply with all applicable laws related to e-waste management. As a part of our e-waste recycling initiative, S Mobile Devices Private Limited has partnered with 3R Recycler and Exigo Recycling to comply with E-Waste (Management) Rules, 2016, in providing environmentally sound management of end-of-life electronics.",
      ],
    },
    {
      title: "3R Recycler",
      content: [
        "As part of this partnership with 3R Recycler, the company will ensure environmentally sound management of electronics that have reached their end-of-life phase. 3R Recycler has obtained all the necessary authorizations from the appropriate governmental agencies for their processing facilities. 3R Recycler ensures proper recycling and disposal of e-waste. This helps us protect the environment from any hazardous consequences, which would otherwise be caused by the inappropriate waste management of e-waste.",

        ],
    },
    {
      title: "Exigo Recycling Pvt Ltd",
      content: [
        "Exigo Recycling Pvt. Ltd. is an initiative started to remove the complexity out of the process of electronic assets management and recycling. Our aim is to provide a simple, straightforward, transparent, and sustainable way to recycle and manage your e-waste and electronic assets. We collect all types of IT, electronics, electrical, media, and communications equipment. We are authorized by the State Pollution Boards and the Government of India to safely collect, transport, dismantle, segregate, and dispose of e-waste."
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

export default Informations;
