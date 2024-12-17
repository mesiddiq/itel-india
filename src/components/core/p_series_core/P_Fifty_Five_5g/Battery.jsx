const Battery = () => {
  return (
  <>
  <div className="hidden lg:flex h-[710px] bg-[#D0E1FC] w-full  justify-center items-center py-12"
  
  >
<div className="bg-[url('/smartphone/P55fiveg/Backgrounds/PowerBG.webp')] content bg-contain bg-no-repeat h-full">

    <div className="relative font-markot h-full w-full flex flex-col justify-center items-start bg-contain bg-center bg-no-repeat">
        <div className="absolute left-[80px] flex flex-col gap-[9px]">
        <div className="flex flex-col gap-[24px] w-[100%] px-4 lg:px-0 text-white font-markot">
          <div className="flex">
            <h3 className="text-mobile/h3 md:text-desktop/h3">
            Ultimate Power Boost  <br/>for All-Day Performance
            </h3>
          </div>


          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-[8px] border-r pr-8 border-r-white">
              <h3 className="text-mobile/h5 md:text-desktop/h3 ">5000mAh</h3>
              <p className="text-mobile/body/large md:text-desktop/body/1">High endurance battery</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-mobile/h5 md:text-desktop/h3">18W</h3>
              <p className="text-mobile/body/large  md:text-desktop/body/1">Type C Charger</p>
            </div>
          </div>
          </div>
  
    </div>
</div></div>

</div>
<div className="lg:hidden flex justify-center items-center h-[810px] bg-[#D0E1FC] w-full py-12 px-1">
 

    <div className="flex justify-center items-center bg-[url('/smartphone/P55fiveg/Backgrounds/PowerBGMobile.webp')] bg-center bg-contain bg-no-repeat h-full w-full">
      <div className="content h-full flex justify-center items-center">
        <div className="relative font-markot h-full w-full flex flex-col justify-start items-center bg-center bg-contain bg-no-repeat">
          <div className="absolute pt-[80px] flex flex-col gap-[9px]">
          <div className="flex flex-col gap-[24px] px-4 text-white font-markot">
          <div className="flex">
            <h3 className="text-mobile/h3 pt-10 md:pt-0 text-left">
              Ultimate power<br /> boost performance<br/> for all day
            </h3>
          </div>

  
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-3xl font-bold">5000mh</h3>
              <p className="text-sm ">High endurance battery</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-3xl font-bold">18W</h3>
              <p className="text-sm">Type C Charger</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div></div>
  </div>



</>

  
  );
};

export default Battery;
