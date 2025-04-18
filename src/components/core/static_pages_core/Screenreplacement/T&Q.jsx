const Terms = () => {
  const data = [
    " The policy is not valid after 100 days of product purchase only, except for the original purchaser of the product(customer).",

    " Valid proof of purchase is required to avail of the policy.",
    " Labor costs INR 500 + Taxes to be borne by the customer.**",
    " Phones must be in an identifiable condition by its IMEI no./IMEI sticker.",
    " Other parts besides the screen if found damaged/defective for whatsoever reason are chargeable to the customer.",
    " If the device is repaired by an unauthorized person, water damage, abuse, misuse, fire, earthquake, war, other natural disasters, or force majeure caused by the damage are not covered under the itel Mobile Warranty.",

    " The itel Mobile phone suffering from catastrophic damage such as being crushed or bent for whatever reason is not eligible for free screen replacement.",

    " Only the screen cannot be claimed by the customer without repair at an authorized service center.",

    " Kindly refer to the box package for the offer available with the product. Policies/Offers can be model-specific.",
  ];

  const data2 = [
    "*itel mobiles reserves the right to change or withdraw the above-mentioned policies without prior notice.",
    "** Labor cost is not applicable for Vision Series, P series and S Series products.",
  ];
  return (
    <div className=" lg:bg-bg/secondry  font-markot bg-bg/primary/1">
      <div className=" lg:py-[120px]  py-[42px]  lg:px-20 lg:space-y-10 space-y-8  lg:content px-4 ">
        <p className=" text-center text-mobile/h4 text-brand/black lg:text-desktop/h2">
          Terms & Conditions
        </p>
        <div className=" lg:space-y-2">
          {data.map((data, index) => {
            return (
              <div className=" space-x-1 flex items-start" key={index+1}>
                  <p className="  text-desktop/body/1 text-grey/grey/5">{index+1}. </p>
                <p className="  text-desktop/body/1 text-grey/grey/5">{data}</p>
              </div>
            );
          })}
        </div>

        <div className=" space-y-5  lg:space-y-6 ">
          <p className=" text-brand/black lg:text-desktop/h4 ">Disclaimer</p>
          <div className=" lg:space-y-2">
            {data2.map((data, index) => {
              return (
                <div className=" flex items-start" key={index+1}>
                 
                  <p className="  text-desktop/body/1 text-grey/grey/5">
                    {data}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
