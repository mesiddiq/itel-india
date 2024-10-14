import React from 'react'

const Powerful = () => {
  return (
    <div className='w-full h-[960px] px-[80px] py-[120px]'>
 <div className="flex flex-col items-end justify-center w-full h-full bg-cover overflow-hidden rounded-[16px]" style={{backgroundImage: "url(/P_Series/powerful.png)"}}>
 <div className='flex flex-col justify-between gap-[56px] pr-[70px]'>
 <div className=' text-white'>
     
          <div className=" text-lg font-bold mb-2 flex items-center">
            <img src="/P_Series/media.png" className='h-[40px]'></img> Dimensity 6080 Octa Core
          </div>


          <h1 className=" font-medium text-desktop/h2 mb-4">
            Powerful Processing <br /> like Never Before
          </h1>

          <p className="text-desktop/body/large mb-6">
            Low Power Consumption | Faster Running Speed | <br/> Better Image Processing
          </p>
         </div>
         
          <div className="flex text-white gap-[48px]">
            <div className="text-desktop/body/1">
              <span className="text-desktop/h3 font-bold">6nm</span><br />
              Fast and Efficient Chipset
            </div>
            <div className="text-desktop/body/1">
              <span className="text-desktop/h3 font-bold">2.4 GHz</span><br />
              Primary Clock Speed
            </div>
          </div>
       
      </div>
    
      </div>
</div>
  )
}

export default Powerful