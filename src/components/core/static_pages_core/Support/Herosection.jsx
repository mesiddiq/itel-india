import React from 'react'

const Herosection = () => {
  return (
    <div className='lg:bg-[url("/static_page/Support2/Support%20Banner%20BG.webp")] flex items-center font-markot  bg-[url("/static_page/Support2/Support%20Banner%20BG%20Mobile.webp")] bg-cover bg-center bg-no-repeat lg:min-h-[520px]  min-h-[450px]'>
    <div className=" flex justify-center items-center lg:content text-white px-4 ">

      <div className=' flex flex-col items-center justify-center space-y-4'>
        <p className=' text-mobile/h5/medium lg:text-desktop/h3'>Welcome to</p>
        <p className=' text-mobile/h1 lg:text-desktop/h1'>itel Support</p>
        <p className=' text-center  text-desktop/body/1 lg:text-desktop/body/large'> We're here to help you tackle any tech troubles head-on.</p>
      </div>
     
    </div>
  </div>

  )
}

export default Herosection