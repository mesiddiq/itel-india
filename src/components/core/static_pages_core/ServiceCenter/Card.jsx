import { div } from "framer-motion/client";

const Card = () => {
  const card_data = [
    {
      img: "/static_page/ServiceC/SparePartsPrice.webp",
      service_name: "Spare Parts Price",
      link:"https://www.carlcare.in/in/spare-parts-price/"
    },
    {
      img: "/static_page/ServiceC/Warranty%20Check.webp",
      service_name: "Warranty Check",
      link:"https://www.carlcare.in/in/warranty-check/"

    },
    {
      img: "/static_page/ServiceC/RepairStatus.webp",
      service_name: "Repair Status",
      link:"https://www.carlcare.in/in/repair-status/"

    },

  ];

  return (
    <div className=" lg:content font-markot px-3">
      <div className=" grid lg:grid-cols-3 lg:space-y-0 space-y-4 text-black grid-cols-1">
        {card_data.map((data) => {
          return (
            <div className="  flex lg:flex-col  lg:p-3  lg:items-center lg:space-x-0  space-x-4  lg:space-y-[24px]">
              <img
                className=" lg:h-[290px] h-[132px] w-[144px] lg:w-[322px]  "
                src={data.img}
                alt=""
              />

              <div className=" flex flex-col  justify-evenly   lg:items-center fle lg:space-y-[24px]">
                 <p className="  text-black/1 text-mobile/h5/medium  lg:text-desktop/h4 ">
                {data.service_name}
              </p>
              <a target="_blank" href={data.link}>
                   <div className=" flex items-center">

                <p className="  text-mobile/title lg:text-desktop/button font-markot text-brand/black">
                  LEARN MORE
                </p>
                <img
                  src={"/static_page/homepage/Union.png"}
                  className=" w-5 h-3 ml-2"
                  alt=""
                />
              </div>
              </a>
             
              </div>
           
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
