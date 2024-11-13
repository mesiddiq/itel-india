import React from 'react'

const Customer = () => {
  return (
    <div className=' content'>
      <div className='lg:bg-[url("/static_page/Aboutus/StatsBGVector.webp")] flex  lg:flex-row flex-col items-center justify-evenly font-markot bg-[url("/static_page/Aboutus/StatsBGVector.webp")]  bg-cover bg-center bg-no-repeat lg:min-h-[486px] h-[280px]  min-h-[400px]'>
      <div className=' lg:hidden flex flex-col items-center justify-center  space-y-[2px]  lg:space-y-2'>
         <p className=' text-mobile/h1 lg:text-desktop/h1 text-itel-red'>70+</p>
         <p className='  text-black/1 text-desktop/body/2/regular lg:text-desktop/h4'>Countries</p>
      </div> 
      <img className=' hidden lg:block  lg:w-[289px] lg:h-[403px]' src="/static_page/Aboutus/contury.png" alt="" /> 

  
      <div className=' flex flex-col items-center justify-center  space-y-[2px]  lg:space-y-2'>
      <p className=' text-mobile/h1 lg:text-desktop/h1 text-itel-red'>10 Cr+</p>
      <p className='  text-black/1 text-desktop/body/2/regular lg:text-desktop/h4'>Customers across India</p>
      </div>
      <div className=' flex flex-col items-center justify-center  space-y-[2px]  lg:space-y-2'>
      <p className=' text-mobile/h1 lg:text-desktop/h1 text-itel-red'>1300+</p>
      <p className='  text-black/1 text-desktop/body/2/regular lg:text-desktop/h4'>Service Centers</p>
      </div>
    </div>
    </div>
    
  )
}

export default Customer



