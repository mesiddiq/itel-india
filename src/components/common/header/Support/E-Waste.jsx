import React from "react";
import { useState } from "react";
import MainHeader from "../MainHeader";

const EWaste = () => {
  const indianStates = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Pasighat"],
    Assam: ["Guwahati", "Dibrugarh", "Jorhat"],
    Bihar: ["Patna", "Gaya", "Bhagalpur"],
    Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur"],
    Goa: ["Panaji", "Margao", "Vasco da Gama"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    Haryana: ["Gurugram", "Faridabad", "Panipat"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    Manipur: ["Imphal", "Churachandpur", "Bishnupur"],
    Meghalaya: ["Shillong", "Tura", "Nongstoin"],
    Mizoram: ["Aizawl", "Lunglei", "Serchhip"],
    Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
    Punjab: ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar"],
    Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer"],
    Sikkim: ["Gangtok", "Namchi", "Pelling"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
    Tripura: ["Agartala", "Dharmanagar", "Udaipur"],
    Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh", "Nainital"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida"],
    "West Bengal": ["Kolkata", "Darjeeling", "Asansol", "Siliguri"],
    "Andaman and Nicobar Islands": ["Port Blair"],
    "Chandigarh (UT)": ["Chandigarh"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Silvassa", "Daman"],
    "Delhi (NCT)": ["New Delhi"],
    Lakshadweep: ["Kavaratti"],
    Puducherry: ["Pondicherry", "Karaikal", "Mahe"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Leh"],
    Ladakh: ["Leh", "Kargil"],
  };

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(indianStates[state] || []); // Update cities based on selected state
    setSelectedCity(""); // Reset city when state changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      alert(`Searching for ${selectedCity}, ${selectedState}`);
    } else {
      alert("Please select both state and city.");
    }
  };

  return (
    <div className=" overflow-hidden">
      <MainHeader />

      <div className="  p-20 flex items-center   bg-gray-500 h-screen w-screen border border-black">
        <div>
          <p className=" text-6xl text-white font-medium">
            Ditch Your Old <br /> Gadgets with Us!
          </p>

          <p className=" mt-5 text-white">
            Got old gadgets collecting dust? Don't just toss them! Drop off your
            outdated tech <br /> with us, and we'll recycle it responsibly. Save
            the planet, one gadget at a time!
          </p>
        </div>
      </div>

      <div className=" p-20">
        <div   className=" space-y-10">
          <p data-aos="fade-up">
            E-waste is a popular, informal name for electronic waste products
            nearing the end of their “useful life.” Telephones, pay phones,
            cordless phones, air conditioners, televisions, refrigerators,
            washing machines, mobile phones, computers, VCDs, stereos, copiers,
            and fax machines are common electronic products. Many of these
            products can be reused, refurbished, or recycled.
          </p>
          <p data-aos="fade-up" className="">
            E-waste has been one of the fastest-growing waste streams in the
            world. While e-waste contains valuable materials such as aluminium,
            copper, gold, palladium, and silver, it also contains harmful
            substances like cadmium, lead, and mercury. In the absence of proper
            awareness, disposing of e-waste in landfills can result in toxic
            emissions to the air, water, and soil and pose serious health and
            environmental hazards.
          </p>

          <img data-aos="fade-up" src={"/support/Banner Section.png"} alt="" className="" />

          <div className=" h-screen flex items-center ">
            <div className=" h-[80%] w-full p-10 border bg-[#F8F6F3]">
              <p data-aos="fade-up" className=" text-center font-medium text-4xl ">
                E-Waste Drop Points
              </p>
              <div className=" p-10  ">
                <p data-aos="fade-up" className="  tracking-wide">
                  Looking to get rid of your old electronics responsibly? Our
                  Eco Drop Zones make it easy. Find our collection and drop
                  points near you to safely dispose of e-waste. Together, we can
                  recycle and repurpose old gadgets, reducing harmful
                  environmental impact. Join us in making a greener future!
                </p>

                <div className="flex flex-col items-center justify-center mt-10">
                  <div className="flex w-full  flex-col md:flex-row justify-between ">
                    {/* State Dropdown */}
                    <div data-aos="fade-right" className="flex flex-col items-start">
                      <label className="mb-2 font-medium text-gray-700">
                        State
                      </label>
                      <select
                        value={selectedState}
                        onChange={handleStateChange}
                        className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select State</option>
                        {Object.keys(indianStates).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* City Dropdown */}
                    <div data-aos="fade-left" className="flex flex-col items-start">
                      <label className="mb-2 font-medium text-gray-700">
                        City
                      </label>
                      <select
                        value={selectedCity}
                        onChange={handleCityChange}
                        className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Search Button */}
                  <button data-aos="fade-in"
                    onClick={handleSearch}
                    className="mt-6 bg-black text-white py-3 px-8 rounded-full hover:bg-white hover:text-black hover:shadow-2xl hover:border hover:border-black  transition duration-300 flex items-center justify-center"
                  >
                    SEARCH
                    <span className="ml-2 text-red-500">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" space-y-10 text-[#252525]">
            <p data-aos="fade-up" className=" font-bold text-4xl">
              S Mobile Devices Private Limited - Recycling Program
            </p>

            <p data-aos="fade-up">
              At S Mobile Devices Private Limited, we understand that our
              responsibility doesn’t end at selling you our products. S Mobile
              Devices Private Limited has been working in the area of safe
              disposal of electronic waste. Since mobiles and other electronic
              items are made of hazardous constituents, our e-waste policy
              aligns with the legislation passed by the Ministry of Environment
              and Forests (MoEF & CC) called E-Waste (Management) Rules, 2016,
              which came into effect on 1st Oct 2016.
            </p>
            <p data-aos="fade-up">
              S Mobile Devices Private Limited will seek shared responsibility
              and cooperation from customers in reducing the environmental
              impact of their products.
            </p>
            <p data-aos="fade-up">
              S Mobile Devices Private Limited will comply with all applicable
              laws related to e-waste management. As a part of our e-waste
              recycling initiative, S Mobile Devices Private Limited has
              partnered with 3R Recycler and Exigo Recycling to comply with
              E-Waste (Management) Rules, 2016, in providing environmentally
              sound management of end-of-life electronics.
            </p>
          </div>

          <div className=" space-y-10 pt-10  text-[#252525]">
            <p data-aos="fade-up" className=" font-bold text-4xl">3R Recycler</p>

            <p data-aos="fade-up">
              As part of this partnership with 3R Recycler, the company will
              ensure environmentally sound management of electronics that have
              reached their end-of-life phase. 3R Recycler has obtained all the
              necessary authorizations from the appropriate governmental
              agencies for their processing facilities. 3R Recycler ensures
              proper recycling and disposal of e-waste. This helps us protect
              the environment from any hazardous consequences, which would
              otherwise be caused by the inappropriate waste management of
              e-waste.
            </p>
          </div>

          <div className=" space-y-10 pt-10  text-[#252525]">
            <p data-aos="fade-up" className=" font-bold text-4xl">Exigo Recycling Pvt Ltd</p>

            <p data-aos="fade-up">
              Exigo Recycling Pvt. Ltd. is an initiative started to remove the
              complexity out of the process of electronic assets management and
              recycling. Our aim is to provide a simple,
              straightforward, transparent, and sustainable way to recycle and
              manage your e-waste and electronic assets. We collect all types of
              IT, electronics, electrical, media, and communications equipment.
              We are authorized by the State Pollution Boards and the Government
              of India to safely collect, transport, dismantle, segregate, and
              dispose of e-waste.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-[#F8F6F3] p-20">
        <p  data-aos="fade-up" className=" font-bold text-4xl">Do's</p>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-20 mt-10">
          <div data-aos="fade-up" className=" space-y-4">
            <img src="https://dummyimage.com/30" alt="" />
            <p className=" text-[#252525]">
              Follow the instructions for proper handling of end-of-life
              equipment in our catalogs.
            </p>
          </div>
          <div  data-aos="fade-up" className=" space-y-4">
            <img src="https://dummyimage.com/30" alt="" />
            <p className=" text-[#252525]">
              Make sure that your electronic products are recycled only by
              authorized recyclers/dismantlers.
            </p>
          </div>
          <div  data-aos="fade-up" className=" space-y-4">
            <img src="https://dummyimage.com/30" alt="" />
            <p className=" text-[#252525]">
              Consult your nearest itel Collection Point for disposing products
              that have reached end-of- life.
            </p>
          </div>
          <div  data-aos="fade-up" className=" space-y-4">
            <img src="https://dummyimage.com/30" alt="" />
            <p className=" text-[#252525]">
              Drop-off used Mobile Phones, batteries or any accessories at the
              nearest itel Collection Point.
            </p>
          </div>
          <div  data-aos="fade-up" className=" space-y-4">
            <img src="https://dummyimage.com/30" alt="" />
            <p className=" text-[#252525]">
              Follow the instructions for proper handling of end-of-life
              equipment in our catalogs.
            </p>
          </div>
          <div data-aos="fade-up"  className=" space-y-4">
            <img src="https://dummyimage.com/30" alt="" />
            <p className=" text-[#252525]">
              Protect the glass surface of any electronic product to avoid
              breakage.
            </p>
          </div>
        </div>

        <p data-aos="fade-up" className=" mt-20 font-bold text-4xl">Don’ts</p>

        <div data-aos="fade-up" className=" mt-10  grid grid-cols-1  gap-10 md:grid-cols-4">
          <div className=" space-y-4">
            <img src="https://dummyimage.com/50" alt="" />
            <p  className=" text-[#252525]">
              Never <b>bdismantle</b> your electronic <b>products yourself</b>{" "}
              at home.
            </p>
          </div>
          <div data-aos="fade-up" className=" space-y-4">
            <img src="https://dummyimage.com/50" alt="" />
            <p  className=" text-[#252525]">
              Never dispose electronic products in bins having{" "}
              <b>‘Do Not Dispose’ sign.</b>
            </p>
          </div>
          <div data-aos="fade-up" className=" space-y-4">
            <img src="https://dummyimage.com/50" alt="" />
            <p  className=" text-[#252525]">
              <b>Never sell</b> or give e-waste to informal and unorganized
              sectors like <b>local scrap dealer/</b> rag pickers.
            </p>
          </div>
          <div data-aos="fade-up" className=" space-y-4">
            <img src="https://dummyimage.com/50" alt="" />
            <p  className=" text-[#252525]">
              Never throw your electronic waste{" "}
              <b>along with municipal waste</b> as they end up reaching
              landfills.
            </p>
          </div>
        </div>
      </div>

      <div className=" space-y-10 pt-10 p-20  text-[#252525]">
        <p data-aos="fade-up" className=" font-bold text-4xl">Lifecycle of our Products</p>

        <p data-aos="fade-up">
          As defined under the New E-waste (Management) Rules, 2016, the
          lifecycle of our Feature Phone is 7 years and Smartphone is 5
          years. <br /><br />In case of any queries regarding the proper disposal and/or
          recycling of electronics, consumers can contact the helpdesk. <br /> (Toll
          free) at:
        </p>
        <p data-aos="fade-up">
          <a href=""> 1800-3000-8198 or 1800-102-5018</a>  |
          <a href=""> Email – info@3rrecycler.com</a>
        
        </p>
      </div>
    </div>
  );
};

export default EWaste;
