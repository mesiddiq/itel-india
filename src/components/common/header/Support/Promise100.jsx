import React from "react";
import MainHeader from "../MainHeader";
import Footer from "../../Footer";

const Promise100 = () => {
  return (
    <div className=" overflow-hidden">
      <MainHeader />
      <div className="  p-20 flex items-center   bg-gray-500 h-screen w-screen border border-black">
        <div>
          <p className=" text-6xl text-white font-medium">
            100 Days Service <br /> Promise
          </p>

          <p className=" mt-5 text-white">
            No hassle, no stress—just seamless service with our 100-day
            replacement <br /> promise. Should your mobile show any defects
            within the first 100 days, <br /> we'll swap it out for a brand-new
            one, absolutely free.
          </p>
        </div>
      </div>

      <div className=" h-screen p-20 flex items-center">
        <div className=" mt-10  grid grid-cols-1  gap-16 md:grid-cols-4">
          <div data-aos="fade-up" className=" ">
            <img src="https://dummyimage.com/50" alt="" />
            <p className=" pt-4 font-medium text-xl">
              100-Day Service Guarantee
            </p>
            <p className=" pt-2 text-[#252525]">
              Enjoy peace of mind with our 100-day warranty, ensuring your
              satisfaction within the initial period of use.
            </p>
          </div>
          <div data-aos="fade-up" className=" ">
            <img src="https://dummyimage.com/50" alt="" />
            <p className=" pt-4 font-medium text-xl">Model-to-Model Swaps</p>
            <p className=" pt-2 text-[#252525]">
              Exchange your device within our similar models, ensuring you
              always find the perfect fit for your needs.
            </p>
          </div>
          <div data-aos="fade-up" className=" ">
            <img src="https://dummyimage.com/50" alt="" />
            <p className=" pt-4 font-medium text-xl">
              Headset Hassle-Free Replacement
            </p>
            <p className=" pt-2 text-[#252525]">
              Experience seamless service as defective headsets are swiftly
              swapped out, ensuring your listening experience remains
              uninterrupted.{" "}
            </p>
          </div>
          <div data-aos="fade-up" className=" ">
            <img src="https://dummyimage.com/50" alt="" />
            <p className=" pt-4 font-medium text-xl">
              Extended Repair Coverage
            </p>
            <p className=" pt-2 text-[#252525]">
              Beyond the initial 100 days, rest assured with our comprehensive
              repair warranty, providing continued support for your device.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className=" bg-[#EBE8E2] p-10 py-20 ">
        <p className=" text-3xl text-center text-black font-medium">
          Terms & Conditions
        </p>
        <div className=" px-10 mt-10  space-y-1 text-sm text-[#252525]">
          <p>
            1. Certified defective handsets complying to warranty conditions will
            be swapped with similar units within 100 days of purchase.
          </p>
          <p>2. Swap units will be same or similar spec model.</p>
          <p>
            3. Cosmetic of swap units might be similar if not better than earlier
            unit.
          </p>
          <p>
            4. Beyond 100 days, the normal repair warranty terms would be
            applicable.
          </p>
        </div>
      </div>


      
      <div className=" h-screen flex items-center p-20  justify-center   ">
            <div data-aos="fade-up" className=" w-full p-20  bg-gray-500 flex items-center rounded-xl  h-[80%]">
              <div>
                <p className=" text-4xl text-white font-medium">
                Unparalleled Service Guaranteed

                </p>
                <p className=" text-white mt-4">
                With our commitment to excellence, expect unparalleled <br /> support and service throughout your journey with us. 
                </p>

                <button 
                    
                    className="mt-6 py-3 px-8 tracking-wider  font-semibold rounded-full bg-white flex items-center justify-center"
                  >
                    CONTACT US
                    <img src="/arrow.png" className=" scale-75" alt="" />
                  </button>
              </div>
            </div>
          </div>
      <Footer />
    </div>
  );
};

export default Promise100;
