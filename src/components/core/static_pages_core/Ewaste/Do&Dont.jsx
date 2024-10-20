const DoDont = () => {
  const data1 = [
    " Follow the instructions for proper handling of end-of-life equipment in our catalogs.",
    " Make sure that your electronic products are recycled only by authorized recyclers/dismantlers.",
    " Consult your nearest itel Collection Point for disposing products that have reached end-of- life.",
    "Drop-off used Mobile Phones, batteries or any accessories at the nearest itel Collection Point.",
    "Separate the packaging materials from the electronic products as per safe waste disposal options.",
    "Protect the glass surface of any electronic product to avoid breakage.",
  ];

  const data2 = [
    {
        img:"https://dummyimage.com/50",
        description:"Never dismantle your electronic products yourself at home."
    },
    {
        img:"https://dummyimage.com/50",
        description:"Never dispose electronic products in bins having ‘Do Not Dispose’ sign."
    },
    {
        img:"https://dummyimage.com/50",
        description:"Never sell or give e-waste to informal and unorganized sectors like local scrap dealer/ rag pickers."
    },
    {
        img:"https://dummyimage.com/50",
        description:"Never throw your electronic waste along with municipal waste as they end up reaching landfills."
    }
  ]
  return (
    <div className='lg:bg-[url("/static_page/Ewaste/doBackground.webp")] font-markot lg:py-[42px] lg:space-y-[32px]  space-y-[16px] lg:px-0 px-[16px] py-[32px]    flex flex-col items-center  bg-[url("/static_page/Ewaste/doBackgroundMobile.webp")]  bg-center bg-cover  lg:min-h-[432px]  min-h-[549px] '>
      <div className=" lg:py-[120px]  lg:space-y-[100px] space-y-[32px] py-[32px] content">
        <div className=" lg:space-y-[36px]">
          <p className=" lg:text-desktop/h3 text-brand/black text-mobile/h3">Do’s</p>
          <div className=" grid grid-cols-1 gap-[52px] lg:grid-cols-3  text-grey/grey/5 ">
            {data1.map((data, index) => {
              return (
                <div key={index}>
                  <div className="  space-y-2 lg:space-y-3">
                    <img
                      className=" h-[35px]"
                      src={"/static_page/Frame 1973341441.png"}
                      alt="check image"
                    />
                    <p className=" text-desktop/body/2/regular lg:text-desktop/body/1">
                      {data}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
        <p className="lg:text-desktop/h3 text-brand/black  text-mobile/h3">Don’ts</p>

        <div  className=" mt-10  lg:grid lg:grid-cols-4 space-y-6  lg:space-y-0 lg:gap-10 ">
           {
            data2.map((data,index)=>{
                return(
                    <>
                      <div key={index} className=" flex flex-row lg:flex-col  lg:space-y-4">
            <img className="h-[48px] w-[48px] lg:h-[64px] lg:w-[64px] " src="https://dummyimage.com/50" alt="" />
            <p  className=" ml-3 lg:ml-0  text-grey/grey/5 lg:text-desktop/body/1 text-desktop/body/2/regular">
             {data.description}
            </p>
          </div>
                    </>
                )
            })
           }
        </div>

        </div>
      </div>
    </div>
  );
};

export default DoDont;
