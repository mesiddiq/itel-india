import React from 'react'

const Gaming = () => {
  return (
    <div 
      className="relative h-[700px] md:h-[800px] lg:h-[701px] flex justify-center bg-cover bg-center" 
      style={{ backgroundImage: 'url(/P_Series/game.png)' }}
    >
      {/* Content Wrapper */}
      <div className="absolute flex flex-col md:flex-row gap-8 justify-center items-center px-4 md:px-0 w-full lg:w-auto">
        {/* Text Section */}
        <div className='flex flex-col gap-[114px]'>
        <div className="flex flex-col gap-4 text-center md:text-left pt-10 md:pt-[120px] pl-0 md:pl-[73px] w-full md:w-[542px]">
          <h2 className="text-3xl md:text-4xl lg:text-desktop/h2 font-bold text-white">Gaming Made Easy</h2>
          <p className="text-sm md:text-lg lg:text-desktop/body/large text-white">
            Faster & Reliable Network Response | Longer Gameplay | Hassle-free Gaming
          </p>
          <p className="text-xs md:text-base lg:text-desktop/body/2/regular text-white max-w-[350px] md:max-w-none mx-auto md:mx-0">
            Experience the best of both worlds with the enormous 6.6" HD+ IPS display and lightning-fast MediaTek Dimensity 6080 processor - perfect for avid gamers.
          </p>
        </div>
        <div className='flex justify-between md:pl-[73px] gap-[8px]'>
 <div className='flex flex-col'>
<img src='/P_Series/game_icon.png' className='h-[40px] w-[40px]'></img>
<h6 className='text-desktop/h6/medium text-white'>Hyper Engine</h6>
 </div>
 <div className='flex flex-col'>
 <img src='/P_Series/game_icon2.png' className='h-[40px] w-[40px]'></img>
 <h6 className='text-desktop/h6/medium text-white'>3.0 Lite Gaming Technology</h6>
 </div>
        </div>
        </div>
        {/* Phone Image Section */}
        <div className="relative w-full max-w-[320px] md:max-w-[780px] lg:max-w-[822px] mt-4">
          <img src="/P_Series/gaming.png" alt="Gaming" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Gaming
