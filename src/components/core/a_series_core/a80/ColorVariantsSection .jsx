const ColorVariantsSection = () => {
  return (
    <div className="content text-black py-10 ">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-full gap-4  p-4 flex flex-col items-center"> 
          <img
            src="/smartphone/A80/AllSections/phoneColors/white.webp"
            alt="Glacier White"
            className=" object-cover rounded-md mb-4"
          />
          <h2 className="text-mobile/h4 md:text-desktop/h4 text-start">GLACIER WHITE</h2>
        </div>

        <div className="w-full gap-4   p-4 flex flex-col-reverse lg:flex-col   items-center">
          <h2 className="text-mobile/h4 md:text-desktop/h4 text-start">SANDSTONE BLACK</h2>
          <img
            src="/smartphone/A80/AllSections/phoneColors/black.webp"
            alt="Sandstone Black"
            className=" object-cover rounded-md mb-4"
          />
        </div>

        <div className="w-full  gap-4  p-4 flex flex-col items-center">
          <img
            src="/smartphone/A80/AllSections/phoneColors/blue.webp"
            alt="Wavy Blue"
            className=" object-cover rounded-md mb-4"
          />
          <h2 className="text-mobile/h4 md:text-desktop/h4 text-start">WAVY BLUE</h2>
        </div>
      </div>
    </div>
  );
};

export default ColorVariantsSection;
