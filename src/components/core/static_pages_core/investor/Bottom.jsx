import { div } from 'framer-motion/client';
import React from 'react'

import { useState } from "react";


const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(true);

  return (
    <>
    <div className=" space-y-4">
          <div onClick={() => setShow(!show)} className=" flex items-center font-markot justify-between cursor-pointer">
        <p className=" text-mobile/h3 lg:text-desktop/h3 text-brand/black">
          {title}
        </p>
        <img
          
          src={"/static_page/Right%20Chevron.png"}
          className={` transform transition-transform duration-300 ease-in-out ${
            show ? "rotate-180" : "rotate-0"
          }`}
          alt=""
        />
      </div>

      {/* Accordion content with animation */}
      <div
        className={`overflow-hidden transition-all  lg:space-y-2  duration-300 ease-in-out ${
          show ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {data.map((data, index) => {
          return (
            <div className=' flex items-start'>
              <div className='  scale-50 text-black'>
              ●
              </div>
                <p
              key={index}
              className=" text-desktop/body/2/regular text-grey/grey/5  lg:text-desktop/body/1"
            >
              {data}
            </p>
            </div>
          
          );
        })}
      </div>
    </div>
    
    </>
  );
};



const data = {
  title:"General Notice",
  description:[
    
  
    
    " Mr. Ravi Garg, Director of the Company, resigned from the Board of Directors of the company wef 11th October 2022.",
"Mrs. Rekha Diwan, Director of the Company, resigned from the Board of Directors of the Company wef 12th October 2022.",
"Ta Wei Ku, Director of the Company, resigned from the Board of Directors of the company wef 8th June 2022.",
"Arijeet Talapatra, Director of the Company, resigned from the Board of Directors of the company wef 20th December 2021.",
"Tushar Goel, Director of the Company, resigned from the Board of Directors of the company wef 19th December 2021.",
"Wang Jiaqiang and Mr. Ming Ma, Directors of the company, resigned from the Board of Directors of the Company wef 28th October, 2020",
"Rashmi Rastogi, Director of the Company, resigned from the Board of Directors of the company wef 16th March, 2020",
"As the Company has been converted into Private Limited from Public Limited, therefore, the requirement of Section 149 of the Companies Act, 2013 of having Independent Directors on the board of the Company is not applicable. Accordingly, Mr. Ghanshyam Das Gupta, Independent Director of the company, and Mr. Ranjeet Kumar Verma, Independent Director of the Company, resigned from the Board of Directors of the Company wef 22nd November, 2019",
 "Lin Qin, Director of the Company, resigned from the Board of Directors of the company wef 22nd September, 2019.",
  ]
}
const Bottom = () => {
  return (
    <div className=" content px-4 lg:pb-[120px] pb-[60px] space-y-[60px] font-markot ">
      <Accordian title={data.title} data={data.description}/>
      <div className=' space-y-[24px]'>
        <p className=' lg:text-desktop/h3  text-brand/black text-desktop/h4'>Corporate Social Responsibility Policy</p>
        <div className=' lg:space-y-6 lg:bg-[url("/investor/CSR%20Policy%20Banner.webp")] bg-[url("/investor/CSR%20Policy%20Banner%20Mobile.webp")]  flex items-end justify-center bg-cover bg-center min-h-[400px] lg:min-h-[532px] rounded-xl'>
           <div className=' w-[296px] mb-[30px] lg:mb-[50px] space-y-[16px] lg:space-y-4 flex flex-col items-center lg:w-[468px]'>
            <p className='  text-center text-mobile/h2 lg:text-desktop/h2 '>Corporate Social Responsibility</p>
            <p className=' text-desktop/body/1 text-center lg:text-desktop/body/large'>Pathway to a Better India - CSR Endeavor</p>
            <div className=' space-x-2 py-[6px] px-[14px] lg:py-[12px] lg:px-[24px] bg-brand/black rounded-full cursor-pointer flex items-center'>
              <p className='lg:text-desktop/button text-mobile/button'>READ MORE</p>
              <img src={"/static_page/homepage/arrow.png"} alt="" />
            </div>

           </div>
        </div>
      </div>
      
      </div>
  )
}

export default Bottom