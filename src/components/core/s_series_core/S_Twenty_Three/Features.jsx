import React from "react";

export default function SmartphoneFeatures() {
  return (
    <section className="content font-markot w-full h-full py-[40px]  lg:py-[120px]  bg-[#1c1b1b] flex flex-col gap-5">
      
      <section className="flex flex-col lg:flex-row gap-5 justify-between">
        <div
          className="w-full lg:w-[40%] h-[600px] md:h-[784px] rounded-2xl overflow-hidden flex flex-col relative bg-cover bg-top"
          style={{ backgroundImage: "url('/smartphone/S_Twenty_Three/PhCard1.webp')" }}
        >
          <div className="text-white w-full h-auto p-6 sm:p-10 gap-6 sm:gap-10 flex flex-col">
            <span className="text-mobile/h4 sm:text-desktop/h3 text-markot bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent">
              Endless Possibilities; Immersive Display
            </span>
            <div className="flex flex-col gap-2 sm:gap-5 text-mobile/h5 sm:text-desktop/h4">
              <span>16.66cm (6.6) HD+ IPS Display</span>
              <span className="w-full sm:w-[391px]">90Hz Refresh Rate | 180Hz Touch Sampling Rate</span>
            </div>
          </div>
          <img
            src="/smartphone/S_Twenty_Three/Card1.webp"
            alt="Stunning Immersive Screen"
            className="absolute bottom-[1%] md:bottom-[-25%] lg:bottom-[1%] left-0 w-full h-auto object-cover"
          />
        </div>

        
        <div className="w-full lg:w-[60%] flex flex-col gap-5">
          <div
            className="w-full h-[258px] md:h-[400px] sm:h-[350px] lg:h-1/2 rounded-2xl p-6 sm:p-10 bg-cover bg-top relative"
            style={{ backgroundImage: "url('/smartphone/S_Twenty_Three/PhCard2.webp')" }}
          >
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex flex-col gap-2 sm:gap-4">
                <span className="text-mobile/h4 sm:text-desktop/h3 bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent">
                  Long Lasting Experience
                </span>
                <span className="text-mobile/h5 sm:text-desktop/h4 text-grey/grey/2 w-full">
                  5000mAh Battery with 10W Fast Charging Support
                </span>
              </div>
            </div>
            <img
              src="/smartphone/S_Twenty_Three/Battery.webp"
              alt="Long Lasting Experience"
              className="absolute bottom-0 right-0.5  md:right-9 object-cover"
            />
          </div>

          <div
             className="w-full h-[400px] lg:h-1/2 bg-black rounded-2xl bg-cover bg-top relative flex flex-col-reverse md:flex-row md:items-center bg-none md:bg-[url('/smartphone/S_Twenty_Three/PhCard4.webp')]"
          >
            <img
              src="/smartphone/S_Twenty_Three/Processor.webp"
              alt=""
              className="w-full h-[269px] md:w-[459px] md:h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 md:bg-gradient-to-r bg-gradient-to-t from-transparent to-[#1c1b1b]/90 rounded-2xl"></div>
            <div className="flex flex-col md:justify-between justify-start h-[150px] sm:h-[180px] w-[300px] sm:w-[350px] lg:w-[539px] ml-8 md:ml-auto mr-[20px] sm:mr-[30px] z-20 ">
              <span className="text-mobile/h4 sm:text-desktop/h3 bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent -ml-2 sm:-ml-8 lg:mr-[40px] mt-4 mr-[40px]md:mt-0 ">
                Effortless Multi-Tasking
              </span>
              <span className="text-mobile/h5 sm:text-desktop/h4 text-grey/grey/2 -ml-2 sm:-ml-8 md:mb-4 mt-4 md:mt-0">
                UNISOC T606 Octa-Core
              </span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="flex flex-col lg:flex-row gap-5">
        <div
          className="w-full lg:w-[40%] h-[400px] sm:h-[500px] rounded-2xl bg-cover p-6 sm:p-[40px] relative"
          style={{ backgroundImage: "url('/smartphone/S_Twenty_Three/PhCard3.webp')" }}
        >
          <div className="flex flex-col gap-4 w-[254px]">
            <span className="text-mobile/h4 sm:text-desktop/h3 bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent">
              Side-mounted Fingerprint Lock
            </span>
          </div>
          <img
            src="/smartphone/S_Twenty_Three/p2.webp"
            alt=""
            className="absolute max-md:h-[296px]   bottom-0 right-28 md:-right-1 object-cover"
          />
        </div>

        <div
          className="w-full lg:w-[60%] h-[400px] sm:h-[500px] rounded-2xl bg-cover py-6 sm:py-[42px] px-6 sm:px-[40px] relative"
          style={{ backgroundImage: "url('/smartphone/S_Twenty_Three/PhCard2.webp')" }}
        >
          <div className="flex flex-col justify-between w-full sm:w-[330px] h-full sm:h-[292px]">
            <div className="flex flex-col gap-4">
              <span className="text-mobile/h4 sm:text-desktop/h3 bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent">
                itel S23's HD Pixel Lens!
              </span>
              <span className="text-mobile/h5 sm:text-desktop/h4 text-white md:w-[314px] w-[272px]">
                50MP AI Dual Rear Camera  8MP Front Camera
              </span>
            </div>
          </div>
          <img
            src="/smartphone/S_Twenty_Three/p1.webp"
            alt="itel S23's HD Pixel Lens"
            className="absolute bottom-0 right-0 object-cover"
          />
        </div>
      </section>
    </section>
  );
}
