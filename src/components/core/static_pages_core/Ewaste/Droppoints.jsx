import { useState } from "react";
const Droppoints = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

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
    <div className=" font-markot px-3 space-y-9 content ">
      <div className='lg:bg-[url("/static_page/Ewaste/E-Waste%20Drop%20Points%20Banner.webp")] lg:py-[42px] lg:space-y-[32px] space-y-[16px] lg:px-0 px-[16px] py-[32px] rounded-2xl  flex flex-col items-center  bg-[url("/static_page/Ewaste/E-Waste%20Drop%20Points%20Banner%20Mobile.webp")]  bg-center bg-cover  lg:min-h-[432px]  min-h-[549px] '>
        <p className="   text-brand/black text-center font-medium  text-mobile/h4 lg:text-desktop/h3 ">
          E-Waste Drop Points
        </p>
        <p className=" lg:w-[711px] text-center text-grey/grey/5 text-desktop/body/2/regular">
          Looking to get rid of your old electronics responsibly? Our Eco Drop
          Zones make it easy. Find our collection and drop points near you to
          safely dispose of e-waste. Together, we can recycle and repurpose old
          gadgets, reducing harmful environmental impact. Join us in making a
          greener future!
        </p>

        <div className=" grid lg:grid-cols-2 space-y-2 lg:space-y-0 text-brand/black grid-cols-1">
          {/* State Dropdown */}
          <div className="flex   flex-col items-start ">
            <label className="mb-2 text-grey/grey/5  font-medium text-mobile/h6 lg:text-desktop/h6/medium">
              State
            </label>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full md:w-64 px-4 py-2 border border-gray-600 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <div className="flex flex-col items-start">
            <label className="mb-2 text-grey/grey/5 font-medium text-mobile/h6 lg:text-desktop/h6/medium">
              City
            </label>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full md:w-64 px-4 py-2 border border-gray-600 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <button
          onClick={handleSearch}
          className=" w-full lg:w-[220px] bg-[#1A1A1A] lg:text-desktop/button text-mobile/button text-white py-3 px-8 rounded-full hover:bg-white hover:text-black hover:shadow-2xl hover:border hover:border-black  transition duration-300 flex items-center justify-center"
        >
          SEARCH
          <span className="ml-2 text-red-500">→</span>
        </button>
      </div>
    </div>
  );
};

export default Droppoints;
