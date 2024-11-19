import { useState, useEffect } from "react";
import axios from "axios";
import { tr } from "framer-motion/client";

const Mainbody = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [loader1,setloader1]= useState(true)
  const [loader2,setloader2]= useState(false)
  const [store, setStores] = useState([]);
  const [state, setState] = useState([]);
  const [showPanel, setShowPanel] = useState(false);

  // Fetch all states
  const fetchStates = async () => {
    try {

      const response = await axios.get(
        "https://itel-backend.onrender.com/api/store/getStates"
      );
      setState(response.data.states || []);
setloader1(false)

    } catch (error) {
      console.error("Error fetching states:", error);
      setState(error)
      setloader1(false)
      
    }
  };

  // Fetch cities based on state
  const fetchCities = async (stateName) => {
    try {
      if (stateName) {
        const response = await axios.get(
          `https://itel-backend.onrender.com/api/store/getCitiesByState/${stateName}`
        );
        setCities(response.data.cities || []);
        setloader2(false)
      
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities(false)
      setloader2(false)
     
    }
  };

  // Fetch stores based on city
  const fetchStores = async (cityName) => {
    try {
      if (cityName) {
        const response = await axios.get(
          `https://itel-backend.onrender.com/api/store/getStoresByCity/${cityName}`
        );
        setStores(response.data.stores || []);
      }
    } catch (error) {
      console.error("Error fetching stores:", error);
    }
  };

  // Handle state selection
  const handleStateChange = (e) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
    setSelectedCity(""); // Reset city when state changes
    setStores([]); // Clear stores when state changes
    fetchCities(stateName); // Fetch cities for the selected state
  };

  // Handle city selection
  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
    fetchStores(cityName); // Fetch stores for the selected city
  };

  // Fetch states on component mount
  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <>
 {showPanel && (
  <div onClick={() => setShowPanel(false)}   style={{ backdropFilter: "blur(8px)" }} className="font-markot  overflow-hidden bg-black  bg-opacity-30 p-10 flex flex-col items-center absolute   justify-center w-full  h-screen  z-50">
    {/* Close Button */}
    <div onClick={(e) => e.stopPropagation()}  className="w-[90%] flex justify-end">
      <img
        className="cursor-pointer w-8 h-8"
        onClick={() => setShowPanel(false)}
        src="/add.png"
        alt="Close"
      />
    </div>

    {/* Panel Container */}
    <div onClick={(e) => e.stopPropagation()}  className="w-[90%] h-[80%] rounded-2xl border bg-white shadow-lg flex flex-col">
      {/* Header */}
      <div className="py-4 gap-5 border-b px-5 rounded-2xl  bg-bg/primary/1 flex text-lg font-semibold text-gray-800">
        <p className="w-[50px]">S.N</p>
        <p className="w-[150px]">Shop Name</p>
        <p className="w-[200px]">Location</p>
        <p className="w-[150px]">City</p>
        <p className="w-[150px]">State</p>
        <p className="w-[150px]">Status</p>
      </div>

      {/* Data Rows */}
      <div className="overflow-y-auto">
        {store.length > 0 ? (
          store.map((data, index) => (
            <div
              className="py-4 gap-5 border-b px-5 flex text-sm text-gray-700"
              key={index}
            >
              <p className="w-[50px]">{index + 1}</p>
              <p className="w-[150px]">{data.shopName}</p>
              <p className="w-[200px]">{data.location}</p>
              <p className="w-[150px]">{data.city}</p>
              <p className="w-[150px]">{data.state}</p>
              <p className="w-[150px]">{data.Status}</p>
            </div>
          ))
        ) : (
          <div className="py-4 px-5 animate-pulse text-center text-gray-500">
           Loading....
          </div>
        )}
      </div>
    </div>
  </div>
)}


      <div className="font-markot ">
        <div className="px-3 overflow-hidden space-y-9 content">
          <div className="lg:bg-[url('/static_page/Ewaste/E-Waste%20Drop%20Points%20Banner.webp')] lg:py-[42px] lg:space-y-[32px] space-y-[16px] lg:px-0 px-[16px] py-[32px] rounded-2xl flex flex-col items-center bg-[url('/static_page/Ewaste/E-Waste%20Drop%20Points%20Banner%20Mobile.webp')] bg-center bg-cover lg:min-h-[432px] min-h-[549px]">
            <p className="text-brand/black text-center font-medium text-mobile/h4 lg:text-desktop/h3">
              Store Locator
            </p>
            <p className="lg:w-[711px] text-center text-grey/grey/5 text-desktop/body/2/regular">
              Looking to get rid of your old electronics responsibly? Our Eco
              Drop Zones make it easy. Find our collection and drop points near
              you to safely dispose of e-waste. Together, we can recycle and
              repurpose old gadgets, reducing harmful environmental impact. Join
              us in making a greener future!
            </p>
            <div className="w-full space-y-4 lg:space-x-2 lg:w-[882px] lg:space-y-0 text-brand/black grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col items-start">
                <label className="mb-2 text-grey/grey/5 font-medium text-mobile/h6 lg:text-desktop/h6/medium">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{loader1 == false ? "Select State" : <p className=" text-desktop/body/1 text-black/1 animate-pulse">Loading....</p>}</option>
                  { state.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-start">
                <label className="mb-2 text-grey/grey/5 font-medium text-mobile/h6 lg:text-desktop/h6/medium">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={handleCityChange}
                  className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{loader2 == false ?  "Select City" :"Loading"}</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => setShowPanel(true)}
              className="w-full lg:w-[220px] bg-[#1A1A1A] lg:text-desktop/button text-mobile/button text-white py-3 px-8 rounded-full hover:bg-white hover:text-black hover:shadow-2xl hover:border hover:border-black transition duration-300 flex items-center justify-center"
            >
              SEARCH
              <img
                className="lg:w-[24px] ml-2 lg:h-[15px]"
                src={"/static_page/homepage/Union.png"}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainbody;
