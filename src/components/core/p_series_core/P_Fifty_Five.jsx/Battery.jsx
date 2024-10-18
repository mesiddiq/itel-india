const Battery = () => {
  return (
    <div className="bg-[#D0E1FC] h-[813px] w-full md:px-[80px] flex items-center justify-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(/P_Series/vector2.png)' }}>

      <div className="content relative flex  items-center h-full w-full">

        {/* Background image as a background cover, centered */}
        <div className="absolute inset-0 bg-no-repeat bg-center bg-contain transform w-full rotate-90 md:rotate-0"
          style={{ backgroundImage: 'url(/P_Series/battery_charging.png)' }} />

        {/* Content Section */}
        <div className="relative left-[100px] hidden md:flex flex-col gap-[24px] w-[90%] md:w-[50%] px-4 lg:px-0 z-10">
          <div className="flex">
            <h3 className="text-white text-mobile/h3 md:text-desktop/h3 font-markot">
              Ultimate power<br/> boost performance for all day
            </h3>
          
          </div>

          {/* Stats Section */}
          <div className="flex gap-[24px] text-white font-markot">
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-3xl font-bold">5000mh</h3>
              <p className="text-sm md:text-base">High endurance battery</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-3xl font-bold">18W</h3>
              <p className="text-sm md:text-base">Type C Charger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battery;
