import React from 'react';

function NightModeSection() {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 bg-black opacity-90 md:h-[956px] h-auto overflow-x-auto"> 
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 bg-black opacity-90 md:h-[956px] h-auto overflow-x-auto">
      <div className="relative w-full max-w-3xl mx-auto bg-black text-white p-6 rounded-lg shadow-lg">
        <div className="absolute top-6 left-6 z-10">
          <h2 className="text-3xl font-bold">Nightlife Alive:</h2>
          <h3 className="text-2xl font-semibold">Super Night Mode Engaged!</h3>
        </div>
        <div className="relative mt-24">
          <img
            src="/smartphone/S_Twenty_Three/Night1.webp"
            alt="Night cityscape with illuminated buildings"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute left-0 top-0 bottom-0 flex items-center">
            <p className="transform -rotate-90 text-7xl font-bold text-transparent stroke-white stroke-2 opacity-30 ml-[-30px]">
              Night
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex items-center">
            <p className="transform -rotate-90 text-7xl font-bold text-transparent stroke-white stroke-2 opacity-30 mr-[-30px]">
              Mode
            </p>
          </div>
        </div>
      </div>
    </div>
  
     
      {/* <div className="relative flex items-center flex-shrink-0 md:w-auto min-w-[300px] h-full"> 
        <div className="w-3/4 relative">
          <img 
            src="/smartphone/S_Twenty_Three/Night2.webp" 
            alt="Mosque architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 p-2">
            <span className="text-2xl font-bold text-purple-300">
              Ultra HD Mode with 10X Zoom
            </span>
          </div>
          <div className="absolute bottom-0 left-0 p-2">
            <span className="text-4xl font-bold text-purple-300">Zoom</span>
          </div>
        </div>
        <div className="w-1/4 h-full flex items-center justify-center">
          <span className="text-6xl font-bold text-purple-300 transform rotate-90 origin-center whitespace-nowrap">
            10x
          </span>
        </div>
      </div> */}
  
      
      {/* <div className="relative flex items-center flex-shrink-0 md:w-auto min-w-[300px] h-full"> 
        <div className="w-1/4 h-full flex items-center justify-center">
          <span className="text-6xl font-bold text-purple-300 transform -rotate-90 origin-center whitespace-nowrap">
            50MP
          </span>
        </div>
        <div className="w-3/4 relative">
          <img 
            src="/smartphone/S_Twenty_Three/Night3.webp" 
            alt="Lotus flower" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 p-2">
            <span className="text-2xl font-bold text-purple-300">
              Click Each Image with Incredible Detail
            </span>
          </div>
          <div className="absolute bottom-0 right-0 p-2">
            <span className="text-4xl font-bold text-purple-300">Rear</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NightModeSection;
