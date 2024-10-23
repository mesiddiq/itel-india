
const Cards = () => {
    const data = [
      {
        img: "/static_page/screenreplacement/Group 1973339797 (1).png",
        title: "100-Day Service Guarantee",
        description:
          "Enjoy peace of mind with our 100-day warranty, ensuring your satisfaction within the initial period of use.",
      },
      {
        img: "/static_page/screenreplacement/Group 1973339799.png",
        title: "Model-to-Model Swaps",
        description:
          "Exchange your device within our similar models, ensuring you always find the perfect fit for your needs.",
      },
      {
        img: "/static_page/screenreplacement/receipt-text.png",
        title: "Headset Hassle-Free Replacement",
        description:
          "Experience seamless service as defective headsets are swiftly swapped out, ensuring your listening experience remains uninterrupted.",
      },
      {
        img: "/static_page/screenreplacement/forbidden.png",
        title: "Extended Repair Coverage",
        description: "Beyond the initial 100 days, rest assured with our comprehensive repair warranty, providing continued support for your device.",
      },
    ];
    return (
      <div className=" lg:content px-4 space-y-12  font-markot text-black">
      
        <div className=" lg:grid lg:gap-[68px] lg:grid-cols-4  flex flex-col lg:space-y-0 space-y-10  ">
          {data.map((data, index) => {
            return (
              <div className=" space-y-3  lg:space-y-5" key={index}>
                <div className=" flex lg:justify-start justify-center">
                  <img className=" " src={data.img} alt="" />
                </div>
  
                <div className="  lg:space-y-1 space-y-3">
                  <p className="text-mobile/h5 lg:text-start text-center text-brand/black lg:text-desktop/h4">
                    {data.title}
                  </p>
                  <p className=" text-grey/grey/5 lg:text-start text-center text-desktop/body/1">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Cards;
  