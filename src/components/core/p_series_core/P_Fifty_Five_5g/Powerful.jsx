import React from 'react';

const Powerful = () => {
  return (
    <div className="w-full h-max  lg:px-[80px] lg:py-[120px] p-[40px]">
  <div className={`
    flex flex-col items-end md:justify-center w-full  h-[660px] 
    bg-cover overflow-hidden rounded-[16px] 
    bg-[url('/P_Series/chip_mobile.png')]  
    md:bg-[url('/P_Series/powerful.png')]  
    bg-center bg-no-repeat bg-[#090F1B]
  `}>
        <div className='content flex flex-row md:flex-col justify-center gap-[56px] items-end rounded-[16px] '>
          <div className='flex flex-col justify-between text-center md:text-left  pt-8' data-aos="fade-left">
          <div className=' text-white'>
            <div className="text-mobile/h6 font-bold mb-2 flex items-center justify-center md:justify-start">
              <img src="/P_Series/media.png" className='h-[21px] md:h-[40px] ' alt="Media Icon" /> 
              Dimensity 6080 Octa Core
            </div>

            <h1 className="font-medium text-mobile/h4 md:text-desktop/h2 mb-4">
              Powerful Processing <br /> like Never Before
            </h1>

            <p className="text-mobile/body/2 md:text-desktop/body/large mb-6">
              Low Power Consumption | Faster Running Speed | <br/> Better Image Processing
            </p>
          </div>

          <div className="flex text-white gap-[14px] font-markot md:gap-[48px]">
            <div className="text-desktop/body/1">
              <span className="text-mobile/body/2 md:text-desktop/h3 font-bold">6nm</span><br />
              Fast and Efficient Chipset
            </div>
            <div className="text-desktop/body/1">
              <span className="text-mobile/body/2 md:text-desktop/h3 font-bold">2.4 GHz</span><br />
              Primary Clock Speed
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Powerful;
