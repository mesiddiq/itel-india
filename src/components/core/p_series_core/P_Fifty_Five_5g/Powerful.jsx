import React from 'react';

const Powerful = () => {
  return (
    <div className='bg-white'>
    <div className="w-full h-max content lg:py-[120px] p-10 lg:px-0  bg-white overflow-hidden">
  <div className={`
    flex flex-col items-end md:justify-center w-full h-[660px] 
    bg-cover overflow-hidden rounded-[16px] 
    bg-[url('/smartphone/P55fiveg/Backgrounds/PowerfulBGMobile.webp')]  
    md:bg-[url('/smartphone/P55fiveg/Backgrounds/PowerfulBG.webp')]  
    bg-center bg-no-repeat 
  `}>
        <div className='content flex flex-row md:flex-col justify-center h-full items-end text-center md:text-left rounded-[16px]  p-1 md:p-0' data-aos="fade-left">
          <div className='flex flex-col items-between md:justify-around pt-5 p-2 md:pt-0 h-full'>
          <div className=' flex flex-col gap-3 md:gap-6'>
            <div className=" flex items-center justify-center md:justify-start">
              <img src="/smartphone/P55fiveg/Backgrounds/media.png" className='h-[19px] md:h-[40px] ' alt="Media Icon" /> 
             <p className='font-markot text-[12px] md:text-[16px] font-normal md:font-semibold '> Dimensity <span className='font-normal '>6080 Octa Core</span> </p>
            </div>
            <div className=' flex flex-col gap-2 md:gap-3'>
            <h1 className="font-medium font-markot text-mobile/h4 md:text-desktop/h2">
              Powerful Processing <br /> like Never Before
            </h1>

            <p className="font-markot text-mobile/body/2 md:text-desktop/body/large">
              Low Power Consumption | Faster Running Speed | <br/> Better Image Processing
            </p></div>
          </div>

          <div className="flex text-white/80 gap-3.5 md:gap-[52px] p-2 md:p-0  font-markot">
  <div className="flex flex-col p-1">
    <p className="text-mobile/body/2 md:text-desktop/h3 font-bold">6nm</p>
    <span className="text-mobile/body/2 md:text-desktop/body/1 font-normal">Fast and Efficient Chipset</span>
  </div>
  <div className="flex flex-col p-1 relative before:content-[''] before:absolute before:top-0 before:left-[-12px] md:before:left-[-24px] before:h-full before:w-px before:bg-white/50">
    <p className="text-mobile/body/2 md:text-desktop/h3 font-bold">2.4 GHz</p>
    <span className="text-mobile/body/2 md:text-desktop/body/1 font-normal">Primary Clock Speed</span>
  </div>
</div>

        </div>
      </div>
    </div></div></div>
  );
};

export default Powerful;
