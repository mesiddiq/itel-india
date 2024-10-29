import React from "react";

const Bottom = () => {
  const data=[
    {
      img:"/static_page/Support2/Group%201973339728%20(1).png",
      title:"CALL US",
      reach:"1800-4190-525",
      link:"tel:18004190525"
    },
    {
      img:"/static_page/Support2/Group%201973339729%20(1).png",
      title:"CHAT WITH US",
      reach:"CLICK HERE",
      link: "https://wa.me/18004190525"
    },
    
    {
      img:"/static_page/Support2/Group%201973339730.png",
      title:"E-MAIL US",
      reach:"info.in@transsion.com",
      link:"mailto:info.in@transsion.com"

    },
    
  ]
  return (
    <div data-aos="fade-up" className=" content px-3 text-black font-markot ">
      <div className=" lg:grid   lg:gap-[20px]  lg:space-y-0 space-y-2  grid-cols-1">
        <div className=" lg:grid lg:gap-[36px] lg:space-y-0  space-y-2 lg:grid-cols-2">
          <div className=' lg:bg-[url("/static_page/Support2/Grid%20Block%201.webp")]   p-[14px] lg:p-[42px] space-y-2 lg:space-y-3  bg-[url("/static_page/Support2/Grid%20Bloack%201%20Mobile.webp")] bg-cover rounded-2xl   lg:bg-right bg-no-repeat min-h-[180px] lg:min-h-[300px]  '>
              <p className=" text-mobile/h5/medium lg:text-desktop/h3 text-brand/black">Find Your Nearest itel Store!</p>
              <p className=" text-desktop/body/2/regular text-grey/grey/4 ">We are here to help you find the right phone. </p>
          </div>
         
          <div className='lg:bg-[url("/static_page/Support2/Grid%20Block%202.webp")] p-[14px] lg:p-[42px]  space-y-2 lg:space-y-3    bg-[url("/static_page/Support2/Grid%20Bloack%202%20Mobile.webp")] rounded-2xl bg-cover bg-right bg-no-repeat min-h-[180px]  lg:min-h-[300px]  '>
          <p className="  text-mobile/h5/medium lg:text-desktop/h3  text-brand/black">Connect for Business Queries</p>
          <div className="  lg:space-y-[2px] space-y-[4px]">
          <p className=" text-mobile/small/button text-grey/grey/4 lg:text-desktop/title">MAIL US AT</p>
              <p className=" lg:text-desktop/body/1 text-desktop/body/2/regular text-grey/grey/4 ">itelmarketing.in@transsion.com</p>
   
          </div>
           </div>
        </div>

        <div className='lg:bg-[url("/static_page/Support2/Grid%20Block%203.webp")] rounded-xl space-y-9  lg:space-y-0   lg:px-[46px] items-center py-6 px-4 lg:py-9 lg:grid lg:grid-cols-2 font-markot   bg-[url("/static_page/Support2/Grid%20Bloack%203%20Mobile.webp")] bg-cover bg-center bg-no-repeat min-h-[319px] lg:min-h-[252px] '>
      
             <div className=" lg:space-y-[10px] space-y-[2px]">
              <p className=" text-grey/grey/5  text-desktop/body/2/regular lg:text-desktop/body/1">Need our help?</p>
              <p className=" text-mobile/h3  text-brand/black lg:text-desktop/h3">Contact us</p>
             </div>
             <div className=" lg:grid lg:space-y-0 space-y-5 lg:grid-cols-3">
                {
                  data.map((data)=>{
                    return(
                      <>
                      <div className=" flex lg:flex-col flex-row lg:items-start  items-center space-x-3 lg:space-x-0   lg:space-y-[26px]">
                        <img className=" h-[29px] w-[29px]" src={data.img} alt="" />
                        <div className="  space-y-[6px] lg:space-y-2">
                         <p className=" text-mobile/title lg:text-desktop/title text-grey/grey/4">{data.title}</p>
                         <a href={data.link}>
                           <p className=" text-brand/black text-mobile/h6 lg:text-desktop/button">{data.reach}</p>
                         </a>
                         
                        </div>
                       
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

export default Bottom;
