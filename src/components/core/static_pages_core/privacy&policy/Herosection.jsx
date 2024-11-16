import React from 'react'

const Herosection = () => {
  return (
    <div className='lg:bg-[url("/static_page/CSR/Banner%20BG.webp")] flex items-center font-markot  bg-[url("/static_page/CSR/Banner%20BG%20-%20Mobile.webp")] bg-cover bg-center bg-no-repeat lg:min-h-[520px]  min-h-[400px]'>
    <div className=" flex justify-center items-center lg:content text-white px-4 ">

      <div className=' flex flex-col lg:space-y-[32px] items-center justify-center space-y-4'>
        <img src={"/static_page/heart.png"} alt="" />
       
              <p className=' text-mobile/h1 text-center lg:text-desktop/h1'>Privacy Policy
              </p>
     
       
           </div>
     
    </div>
  </div>

  )
}

export default Herosection