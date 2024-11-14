import React from 'react'

const Herosection = () => {
  return (
    <div className='lg:bg-[url("/static_page/CSR/Banner%20BG.webp")] flex items-center font-markot  bg-[url("/static_page/CSR/Banner%20BG%20-%20Mobile.webp")] bg-cover bg-center bg-no-repeat lg:min-h-[520px]  min-h-[400px]'>
    <div className=" flex justify-center items-center lg:content text-white px-4 ">

      <div className=' flex flex-col lg:space-y-[32px] items-center justify-center space-y-4'>
        <img src={"/static_page/heart.png"} alt="" />
       
              <p className=' text-mobile/h1 text-center lg:text-desktop/h1'>Privacy Policy
              </p>
        <p className=' lg:w-[719px] text-center text-desktop/body/1 lg:text-desktop/body/large'>Welcome to our Investor Relations hub! Dive into our annual returns, catch up on our general meetings, and explore our CSR initiatives. It's all about transparency and keeping you in the loop!
        </p>
 
       
           </div>
     
    </div>
  </div>

  )
}

export default Herosection