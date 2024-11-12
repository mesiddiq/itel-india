
const Cards = () => {
  const data = [
    {
      img: "/static_page/screenreplacement/Group 1973339797 (1).png",
      title: "Swap Guarantee",
      description:
        "If your itel phone screen gets damaged within 100 days, we'll hook you up with a new one.",
    },
    {
      img: "/static_page/screenreplacement/Group 1973339799.png",
      title: "Same Specs, Same Vibes",
      description:
        "Your replacement phone will be the same model or one with similar specs, so you won’t miss a beat.",
    },
    {
      img: "/static_page/screenreplacement/receipt-text.png",
      title: "Fresh Look",
      description:
        "The swapped phone might look just like your old one or even better—score!",
    },
    {
      img: "/static_page/screenreplacement/forbidden.png",
      title: "Normal Warranty After 100 Days",
      description: "Once 100 days are up, the usual repair warranty kicks in.",
    },
  ];
  return (
    <div className=" lg:content px-4 space-y-12  font-markot text-black">
      <p className=" text-center   text-mobile/h4 text-brand/black lg:text-desktop/h2">
        One-Time Screen Replacement
      </p>
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
