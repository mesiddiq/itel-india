import React from 'react';

const Connectivity = () => {
  return (
    <div
      className="font-markot relative w-full h-[336px] md:h-[758px] flex items-center justify-center overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: "url(/smartphone/P55fiveg/Backgrounds/5g-revolution.png)" }}
    >
      <div className="content absolute inset-0 flex text-white h-full flex-col items-center py-7 text-center ">
        <div className="flex flex-col gap-3" >
          <h2 className="text-mobile/h4 md:text-desktop/h2">
            5G Revolution:<br /> Redefining Connectivity
          </h2>
          <p className="text-mobile/body/2 md:text-base font-normal">
            itel P55 5G is all set to transform the way you connect,
            <br /> communicate, and create.
          </p>
        </div>
        <img
          src="/smartphone/P55fiveg/Backgrounds/5GGraphic.webp"
          className="absolute bottom-[-7rem] md:bottom-[-14rem] left-1/2 transform -translate-x-1/2 max-w-[380px] md:max-w-[999px]"
          alt="Horizontal phone"
        />
      </div>
    </div>
  );
};

export default Connectivity;
