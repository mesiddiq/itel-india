import React from 'react'

const Gaming = () => {
  return (
    <div 
    className="h-[632px] md:h-[770px] lg:h-[720px] bg-cover w-full" 
   
  >
    <div className={`
    flex flex-col items-end md:justify-center w-full h-full
    bg-cover
    bg-[url('/P_Series/gaming_mobile.png')]   // For small screens (default)
    md:bg-[url('/P_Series/gaming.png')]       // For md and larger screens
    bg-center bg-no-repeat
  `}>
    <div className="content flex flex-col md:flex-row gap-8 w-full p-4 lg:p-0 "  data-aos="fade-right">
      <div className='flex flex-col justify-between md:gap-[114px] py-8'>
        <div className="flex flex-col gap-4 w-full md:w-[542px]">
          <img src="/P_Series/media2.png" className='h-[23px] w-[92px]' alt="Media Icon"/>
          <h2 className="text-3xl md:text-4xl lg:text-desktop/h2 font-bold text-white">Gaming Made Easy</h2>
          <p className="text-sm md:text-lg lg:text-desktop/body/large text-white">
            Faster & Reliable Network Response | Longer Gameplay | Hassle-free Gaming
          </p>
          <p className="text-xs md:text-base lg:text-desktop/body/2/regular text-white  mx-auto md:mx-0">
            Experience the best of both worlds with the enormous 6.6" HD+ IPS display and lightning-fast MediaTek Dimensity 6080 processor - perfect for avid gamers.
          </p>
        </div>
        <div className='flex justify-between gap-[8px]'>
          <div className='flex flex-col gap-[8px]'>
            <img src='/P_Series/game_icon.png' className='h-[40px] w-[40px]' alt="Game Icon"/>
            <h6 className='text-desktop/h6/medium text-white'>Hyper Engine</h6>
          </div>
          <div className='flex flex-col gap-[8px]'>
            <img src='/P_Series/game_icon2.png' className='h-[40px] w-[40px]' alt="Game Icon 2"/>
            <h6 className='text-desktop/h6/medium text-white'>3.0 Lite Gaming Technology</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Gaming
