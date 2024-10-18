import React from 'react'


const Bottom = () => {
  return (
    <div className=" overflow-hidden  lg:content px-3 font-markot">
    <div className='lg:bg-[url("/static_page/promise/Unparalleled%20Service%20Background.webp")]  mb-[72px] lg:mb-[100px]  rounded-lg   flex lg:items-center items-end py-5 lg:py-0  font-markot  bg-[url("/static_page/promise/Unparalleled%20Service%20Background%20Mobile.webp")] bg-cover bg-center bg-no-repeat lg:min-h-[352px]  min-h-[450px]'>
      <div className=" lg:px-[55px] px-[21px] flex lg:flex-row flex-col lg:gap-[40px] ">
        <img
          className=" lg:w-[155px] lg:h-[193px] h-[100px] w-[80px]"
          src={"/static_page/promise/Shape.webp"}
          alt=""
        />
        <div className=" lg:space-y-5 text-white space-y-2 w-[286px] lg:min-w-[562px]">
          <p className=" lg:text-desktop/h3 text-mobile/h4">Unparalleled Service Guaranteed</p>
          <p className=" text-desktop/caption  lg:text-desktop/body/large">
          With our commitment to excellence, expect unparalleled support and service throughout your journey with us. 
          </p>
          
          <button
         
          className="lg:text-desktop/button bg-white h-[40px] lg:h-[48px] text-mobile/button text-brand/black lg:py-3 lg:px-8 py-[12px] px-[14px]   rounded-full hover:bg-brand/black  hover:text-white hover:shadow-2xl hover:border hover:border-black  transition duration-300 flex items-center justify-center"
        >
          CONTACT US
          <span className="ml-2 text-red-500">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Bottom