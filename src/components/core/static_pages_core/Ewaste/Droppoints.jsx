import { useState } from "react";
const Droppoints = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [showpannel,setshowpannel] = useState(false)




  const EWasteCityData =[
    {
      "id": 1,
      "name": "Ahed Enterprises",
      "address": "14/4 Elite Academy Saroj Bhawan, Stanley Road near Patrika chauhara, Saroj Bhawan Civil Line, Allahabad, Uttar Pradesh 211002",
      "city": "Allahabad",
      "state": "Uttar Pradesh",
      "pincode": "211002"
    },
    {
      "id": 2,
      "name": "Yogi Communication",
      "address": "Shop No-1A/272, 1st Floor, Near 999 Restaurant, Nehru Ground, NIT, Faridabad, Haryana 121001",
      "city": "Faridabad",
      "state": "Haryana",
      "pincode": "121001"
    },
    {
      "id": 3,
      "name": "New Raj Associates",
      "address": "61, Hari Marg, Mansingh Pura, Tonk Road, Jaipur, Rajasthan 302015",
      "city": "Jaipur",
      "state": "Rajasthan",
      "pincode": "302015"
    },
    {
      "id": 4,
      "name": "A to Z Mobile Care",
      "address": "S-8, Sagar Hotel, Mata Rani Chowk, Ludhiana, Punjab 141005",
      "city": "Ludhiana",
      "state": "Punjab",
      "pincode": "141005"
    },
    {
      "id": 5,
      "name": "Ujjwal Telecom",
      "address": "42, Omkar Road Behind GPO, Chukuwala, Dehradun, Uttarakhand 248001",
      "city": "Dehradun",
      "state": "Uttarakhand",
      "pincode": "248001"
    },
    {
      "id": 6,
      "name": "The Care Point",
      "address": "B-85, Main Loni Road, Jyoti Colony, Durga Mandir, Shahdara, East Delhi, Delhi 110032",
      "city": "East Delhi",
      "state": "Delhi",
      "pincode": "110032"
    },
    {
      "id": 7,
      "name": "Quickserv Technology",
      "address": "131, B Block Anand Plaza, University Road Ayad, Udaipur, Rajasthan 313001",
      "city": "Udaipur",
      "state": "Rajasthan",
      "pincode": "313001"
    },
    {
      "id": 8,
      "name": "Aks Telecom",
      "address": "Quite Office No-1, 1st Floor, Sector-35 A, Chandigarh, Chandigarh 160022",
      "city": "Chandigarh",
      "state": "Chandigarh",
      "pincode": "160022"
    },
    {
      "id": 9,
      "name": "Maa Vaishno Enterprises",
      "address": "Ground Floor, Hasim Enclave, Bander Bagicha, Frase Road, Patna, Bihar 800001",
      "city": "Patna",
      "state": "Bihar",
      "pincode": "800001"
    },
    {
      "id": 10,
      "name": "Simran Electronics",
      "address": "21-A, Near Radha Krishna Mandir, Nehru Nagar, Agra, Uttar Pradesh 282004",
      "city": "Agra",
      "state": "Uttar Pradesh",
      "pincode": "282004"
    },
    {
      "id": 11,
      "name": "Agrima Enterprises",
      "address": "Upper Story, Shop No-4, 1114, Shimla, Himachal Pradesh-171001",
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "pincode": "171001"
    },
    {
      "id": 12,
      "name": "Maa Ambey Services",
      "address": "Redium Road, Leela Kutir, Near Maharaj Hotel, Upon Arihant shop, Kachahari, Ranchi, Jharkhand 834001",
      "city": "Ranchi",
      "state": "Jharkhand",
      "pincode": "834001"
    },
    {
      "id": 13,
      "name": "Restricted Systems",
      "address": "GF-14, Kunj Plaza, Near Polo Club, Lal Bhag Road, Vadodara, Gujarat 390001",
      "city": "Vadodara",
      "state": "Gujarat",
      "pincode": "390001"
    },
    {
      "id": 14,
      "name": "Kushal Services",
      "address": "Airport Circle, Behind Shani Mandir, Sanganer Road, Jaipur, Rajasthan 302033",
      "city": "Jaipur",
      "state": "Rajasthan",
      "pincode": "302033"
    },
    {
      "id": 15,
      "name": "New Mobile Care",
      "address": "2, 22 Ghatkappar Marg, Freeganj, Ujjain, Madhya Pradesh 456010",
      "city": "Ujjain",
      "state": "Madhya Pradesh",
      "pincode": "456010"
    },
    {
      "id": 16,
      "name": "Anika Enterprises",
      "address": "1st Floor, Opp. Muskaan Height Apartments, Old Nirmal Chhaya Barat Ghar, Napier Town, Jabalpur, Madhya Pradesh 482002",
      "city": "Jabalpur",
      "state": "Madhya Pradesh",
      "pincode": "482002"
    },
    {
      "id": 17,
      "name": "Friends Mobile Care",
      "address": "Bilal Mil Road, Ashoknagar, Madhya Pradesh 473331",
      "city": "Ashoknagar",
      "state": "Madhya Pradesh",
      "pincode": "473331"
    },
    {
      "id": 18,
      "name": "Maxcom",
      "address": "Shop No-4, Mahavir Tower, Near Ganesh Cinema, Edulji Road, Charai, Thane, Maharashtra 400601",
      "city": "Thane",
      "state": "Maharashtra",
      "pincode": "400601"
    },
    {
      "id": 19,
      "name": "Tech Mobile Services",
      "address": "205, 2nd Floor, Rajgor Empire, J V Road, Khot Lane, Ghatkopar West, Maharashtra 400086",
      "city": "Ghatkopar",
      "state": "Maharashtra",
      "pincode": "400086"
    },
    {
      "id": 20,
      "name": "Sai Mobiles",
      "address": "Shop No 18, Flat No. 124, 1st Floor, Hardy Complex, Opp. Chermas MG Road, Telangana 500003",
      "city": "Secunderabad",
      "state": "Telangana",
      "pincode": "500003"
    },
    {
      "id": 21,
      "name": "Megatronics",
      "address": "1st Floor, Door No-21, Thirumalairayar Padithurai Road, Simmakkal, Madurai, Tamil Nadu 625001",
      "city": "Madurai",
      "state": "Tamil Nadu",
      "pincode": "625001"
    },
    {
      "id": 22,
      "name": "Madura Check Point",
      "address": "No-458-463, Dr. Rajendra Prasad Road, Hundred Feet Road, Gandhipuram, Coimbatore, Tamil Nadu 641012",
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "pincode": "641012"
    },
    {
      "id": 23,
      "name": "Connecting Point",
      "address": "International Market, H/343/427/352, Sevoke Road, Ward No. 10, Siliguri, West Bengal 734001",
      "city": "Siliguri",
      "state": "West Bengal",
      "pincode": "734001"
    },
    {
      "id": 24,
      "name": "New Xperto",
      "address": "Shop No. G-13, Krishna Complex, Agra Road, Kap Kaneri, Bhiwandi, Maharashtra 421302",
      "city": "Bhiwandi",
      "state": "Maharashtra",
      "pincode": "421302"
    },
    {
      "id": 25,
      "name": "Halima Marketing & Solutions Pvt. Ltd.",
      "address": "104/A, 1st Floor, Sumit Samarth Arcade, Aarey Road, Opp. V Gold Jeweler, Goregaon, Maharashtra 400062",
      "city": "Goregaon",
      "state": "Maharashtra",
      "pincode": "400062"
    },
    {
      "id": 26,
      "name": "Smart Care",
      "address": "60/3771, Ground Floor, Happy Building, Puthiyara, Kozhikode, Kerala 673004",
      "city": "Calicut",
      "state": "Kerala",
      "pincode": "673004"
    },
    {
      "id": 27,
      "name": "Global Mobiles",
      "address": "20-4-48/1, A1, Saadi Complex, Old Bus Depot Charminar, Hyderabad, Telangana 500064",
      "city": "Hyderabad",
      "state": "Telangana",
      "pincode": "500064"
    },
    {
      "id": 28,
      "name": "Apace Solutions",
      "address": "2nd Floor, Munni Market, Opp. Hub, G S Road, Bhangagarh, Guwahati, Assam 781005",
      "city": "Guwahati",
      "state": "Assam",
      "pincode": "781005"
    },
    {
      "id": 29,
      "name": "One Stop Services",
      "address": "E Block, 1st Floor, Ranjit Studio Compound, Block No-1, D P S Road, Dadar East, Maharashtra 400014",
      "city": "Dadar",
      "state": "Maharashtra",
      "pincode": "400014"
    },
    {
      "id": 30,
      "name": "D N Electronics",
      "address": "Shop No B-13, Grand Bazar Market, Surajpur, Greater Noida, Uttar Pradesh 201306",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "pincode": "201306"
    },
    {
      "id": 31,
      "name": "Mobile Master",
      "address": "Shop No-201, 2nd Floor, Padmi Bai Tower, Manvel Pada Road, Virar, Maharashtra 401305",
      "city": "Virar",
      "state": "Maharashtra",
      "pincode": "401305"
    },
    {
      "id": 32,
      "name": "Gadget",
      "address": "DOMINOS, Laitumukhrah, Shillong, East Khasi Hills, Shillong, Meghalaya 793003",
      "city": "Shillong",
      "state": "Meghalaya",
      "pincode": "793003"
    },
    {
      "id": 33,
      "name": "Sourav Telecom",
      "address": "Chakkamla, Deulti, Bagnan, Howrah, West Bengal 711303",
      "city": "Howrah",
      "state": "West Bengal",
      "pincode": "711303"
    },
    {
      "id": 34,
      "name": "Madina Electronics",
      "address": "Room No.43, 1st Floor City Centre, Paradise Choumuni, Tripura 799001",
      "city": "Agartala",
      "state": "Tripura",
      "pincode": "799001"
    },
    {
      "id": 35,
      "name": "Jay Jagannath Ent.",
      "address": "Room No-W/18, Emanuel Shop Complex, Balasore, Orissa 756001",
      "city": "Balasore",
      "state": "Orissa",
      "pincode": "756001"
    },
    {
      "id": 36,
      "name": "William Mobile Clinic",
      "address": "B-57, Zarkawt, Main Street, Near ICICI Bank, Opp-Adidas Showroom, Aizawl, Mizoram 796007",
      "city": "Aizawl",
      "state": "Mizoram",
      "pincode": "796007"
    },
    {
      "id": 37,
      "name": "VB Communication",
      "address": "First Floor, No B1, Iyyanar Kovil Street, Raja Nagar Oralayanpet, Karaikal, Puducherry 605013",
      "city": "Karaikal",
      "state": "Puducherry",
      "pincode": "605013"
    },
    {
      "id": 38,
      "name": "Om Enterprise",
      "address": "Holding No.- 114(N), S.B. Raha Lane, Asansol, West Bengal 713303",
      "city": "Asansol",
      "state": "West Bengal",
      "pincode": "713303"
    },
    {
      "id": 39,
      "name": "A T Agency",
      "address": "PWD Housing Colony, PWD Road, Dimapur, Nagaland 797112",
      "city": "Dimapur",
      "state": "Nagaland",
      "pincode": "797112"
    },
    {
      "id": 40,
      "name": "Easy Cell Care",
      "address": "New No.1, Old No.21, Old Bank Of Baroda Street, Secretariat Colony, Ambattur, Chennai, Tamil Nadu 600053",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "pincode": "600053"
    }
  ]
  

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
    <>


{showpannel && 
  <div className="   bg-black font-markot bg-opacity-30  p-10 bg:opacity-10 flex flex-col items-center  absolute   justify-center w-full h-screen  ">

     <div className=" w-[990px] flex justify-end">
      <img className=" cursor-pointer" onClick={() => setshowpannel(false)} src="/add.png" alt="" />
     </div>
      <div className=" w-[990px] rounded-2xl  border border-grey/grey/3  overflow-x-scroll  h-full">
      <div className="  py-4 gap-5 border  border-grey/grey/2 px-5 bg-bg/primary/1  flex text-desktop/subtitle text-[#333333]" >
            <p className=" w-[31px] ">S.N</p>
            <p className=" w-[150px]">ASP Name</p>
            <p className=" w-[457px]">Address</p>
            <p className=" w-[120px]">City</p>
            <p className=" w-[128px]">State Name</p>
          </div>
       
          {
        EWasteCityData.map((data,index) => {
          return  <div className=" bg-white py-4 gap-5 border border-grey/grey/2 px-5 flex text-desktop/body/2/regular text-[#333333]" key={index}>
            <p className=" w-[31px] ">0{data.id}</p>
            <p className=" w-[150px]">{data.name}</p>
            <p className=" w-[457px]">{data.address}</p>
            <p className=" w-[120px]">{data.city}</p>
            <p className=" w-[128px]">{data.state}</p>
          </div>
        })
      }
      
  
      </div>


      </div>
    }



       <div className=" font-markot ">
      
    
    
        <div className= 'font-markot px-3  space-y-9 content '>
      <div className=' lg:bg-[url("/static_page/Ewaste/E-Waste%20Drop%20Points%20Banner.webp")] lg:py-[42px] lg:space-y-[32px] space-y-[16px] lg:px-0 px-[16px] py-[32px] rounded-2xl  flex flex-col items-center  bg-[url("/static_page/Ewaste/E-Waste%20Drop%20Points%20Banner%20Mobile.webp")]  bg-center bg-cover  lg:min-h-[432px]  min-h-[549px] '>
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

      <p onClick={() => setshowpannel(true)} className=" text-brand/black underline  cursor-pointer  text-desktop/tertiary/cta">See The Table</p>

        <div className=" w-full  space-y-4 lg:space-x-2  lg:w-[882px] lg:space-y-0 text-brand/black grid grid-cols-1 lg:grid-cols-2">
          {/* State Dropdown */}
          <div className="flex   flex-col items-start ">
            <label className="mb-2 text-grey/grey/5  font-medium text-mobile/h6 lg:text-desktop/h6/medium">
              State
            </label>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <div className="flex  flex-col items-start">
            <label className="mb-2 text-grey/grey/5 font-medium text-mobile/h6 lg:text-desktop/h6/medium">
              City
            </label>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </div>
  
    </>
 
  );
};

export default Droppoints;
