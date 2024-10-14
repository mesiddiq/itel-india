import React from "react";
import MainHeader from "../MainHeader";


const ScreenReplacement = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <MainHeader />
        <div className="  p-20 flex items-center   bg-gray-500 h-screen w-screen border border-black">
          <div>
            <p className=" text-6xl text-white font-medium">
              Get a Free <br /> Screen Replacement
            </p>

            <p className=" mt-5 text-white">
              Got a new itel phone? No worries about cracks! With our One-Time
              Screen <br />
              Replacement Promise, if your screen gets damaged within the first
              100 days, we’ll
              <br /> replace it for free*
            </p>
          </div>
        </div>

        <div className=" w-screen mt-10 p-10">
          <p className="  font-medium text-4xl text-center">
            One-Time Screen Replacement
          </p>

          <div className=" mt-12 grid gap-10 grid-cols-4">
            <div>
              <img
                src=""
                alt=""
                className=" h-10 w-10 border border-black rounded-full"
              />
              <p className=" mt-3 text-[#1C1B1B] text-lg font-medium">
                Swap Guarantee
              </p>
              <p className=" text-[#252525] text-sm">
                If your Itel phone screen gets damaged within 100 days, we'll
                hook you up with a new one.
              </p>
            </div>
            <div>
              <img
                src=""
                alt=""
                className=" h-10 w-10 border border-black rounded-full"
              />
              <p className=" mt-3 text-[#1C1B1B] text-lg font-medium">
                Swap Guarantee
              </p>
              <p className=" text-[#252525] text-sm">
                If your Itel phone screen gets damaged within 100 days, we'll
                hook you up with a new one.
              </p>
            </div>
            <div>
              <img
                src=""
                alt=""
                className=" h-10 w-10 border border-black rounded-full"
              />
              <p className=" mt-3 text-[#1C1B1B] text-lg font-medium">
                Swap Guarantee
              </p>
              <p className=" text-[#252525] text-sm">
                If your Itel phone screen gets damaged within 100 days, we'll
                hook you up with a new one.
              </p>
            </div>
            <div>
              <img
                src=""
                alt=""
                className=" h-10 w-10 border border-black rounded-full"
              />
              <p className=" mt-3 text-[#1C1B1B] text-lg font-medium">
                Swap Guarantee
              </p>
              <p className=" text-[#252525] text-sm">
                If your Itel phone screen gets damaged within 100 days, we'll
                hook you up with a new one.
              </p>
            </div>
          </div>

          <div className=" h-screen flex items-center   justify-center   ">
            <div className=" w-full p-20  bg-gray-500 flex items-center rounded-xl  h-[70%]">
              <div>
                <p className=" text-4xl text-white font-medium">
                  itel Assurance
                </p>
                <p className=" text-white mt-4">
                  Get free original screen replacement: Enjoy your phone
                  <br /> without the stress— itel's got your back!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#EBE8E2] p-10 ">
          <p className=" text-3xl text-center text-black font-medium">
            Terms & Conditions
          </p>
          <div className=" px-10 mt-10  space-y-1 text-sm text-[#252525]">
            <p>
              1. The policy is not valid after 100 days of product purchase
              only, except for the original purchaser of the product(customer).
            </p>
            <p>
              2. Valid proof of purchase is required to avail of the policy.
            </p>
            <p>3. Labor costs INR 500 + Taxes to be borne by the customer.**</p>
            <p>
              4.Phones must be in an identifiable condition by its IMEI no./IMEI
              sticker
            </p>
            <p>
              5.Other parts besides the screen if found damaged/defective for
              whatsoever reason are chargeable to the customer.
            </p>
            <p>
              6.If the device is repaired by an unauthorised person, water
              damage, abuse, misuse, fire, earthquake, war and other natural
              disasters, or force majeure caused by the damage are not covered
              under the itel Mobile Warranty.
            </p>
            <p>
              7.The itel Mobile phone suffering from catastrophic damage such as
              being crushed or bent for whatever reason is not eligible for free
              screen replacement.
            </p>
            <p>
              7.Only the screen cannot be claimed by the customer without repair
              at an authorized service center.
            </p>
            <p>
              8.Kindly refer to the box package for the offer available with the
              product. Policies/Offers can be model-specific.
            </p>
          </div>
          <div className=" px-10">
            <p className=" text-lg mt-5 font-medium">Disclaimer </p>

            <div className=" text-sm text-[#252525] mt-5">
              <p>
                * itel mobiles reserves the right to change or withdraw the
                above-mentioned policies without prior notice.
              </p>
              <p>
                ** Labor cost is not applicable for Vision Series, P series and
                S Series products.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default ScreenReplacement;
