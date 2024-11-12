import React from 'react'

const Gaming = () => {
  return (
    <div 
    className="h-[672px] md:h-[770px] lg:h-[720px] bg-cover w-full" 
   
  >
    <div className={`
    flex flex-col items-end md:justify-center w-full h-full
    bg-cover
    bg-[url('/smartphone/P55fiveg/Backgrounds/GamingMobile.webp')]   // For small screens (default)
    md:bg-[url('/smartphone/P55fiveg/Backgrounds/GamingBG.webp')]       // For md and larger screens
    bg-center bg-no-repeat
  `}>
    <div className="content flex flex-col md:flex-row gap-8 w-full p-4 lg:p-0 "  data-aos="fade-right">
      <div className='flex flex-col justify-between gap-[28px] md:gap-[114px] py-8 font-markot'>
        <div className="flex flex-col gap-4 w-full md:w-[542px]">
          <img src="/smartphone/P55fiveg/Backgrounds/media2.png" className='h-[23px] w-[92px]' alt="Media Icon"/>
          <h2 className="text-mobile/h3 md:text-desktop/h2 font-bold text-white">Gaming Made Easy</h2>
          <p className="text-mobile/body/large lg:text-desktop/body/large text-white">
            Faster & Reliable Network Response | Longer <br/>Gameplay | Hassle-free Gaming
          </p>
          <p className="text-mobile/body/2 md:text-desktop/body/2/regular text-white font-markot md:mx-0">
            Experience the best of both worlds with the enormous <br/>6.6" HD+ IPS display and lightning-fast MediaTek<br/> Dimensity 6080 processor - perfect for avid gamers.
          </p>
        </div>
        <div className='flex gap-[28px] font-markot'>
          <div className='flex flex-col gap-[8px]'>
            <img src='/smartphone/P555g/game_icon.png' className='h-[40px] w-[40px]' alt="Game Icon"/>
            <h6 className='text-[13px] md:text-desktop/h6/medium text-white'>Hyper Engine</h6>
          </div>
          <div className='flex flex-col gap-[8px]'>
            <img src='/smartphone/P555g/game_icon2.png' className='h-[40px] w-[40px]' alt="Game Icon 2"/>
            <h6 className='text-[13px] md:text-desktop/h6/medium text-white'>3.0 Lite Gaming Technology</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Gaming
