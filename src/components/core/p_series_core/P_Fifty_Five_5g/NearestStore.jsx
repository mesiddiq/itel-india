import React from 'react'

const NearestStore = () => {
  return (
    <div className='relative flex justify-center w-full content h-[180px] md:h-[260px] rounded-[16px] items-center content px-2 lg:px-0'>
    <div className='
      flex w-full h-full bg-cover rounded-[16px]
bg-[url("/smartphone/P55fiveg/Backgrounds/store_mobile.png")] 
      md:bg-[url("/smartphone/P55fiveg/Backgrounds/store.png")] 
      bg-center bg-no-repeat
      relative overflow-hidden
    '>
           <div className="
        absolute inset-0 rounded-[16px]
        bg-[linear-gradient(90deg,_#232323_24.87%,_rgba(217,217,217,0.1)_53.02%,_rgba(217,217,217,0.05)_58.5%,_rgba(217,217,217,0)_65.97%)]
      ">
      </div>
        <div className='relative font-markot p-4 md:p-12 flex flex-col gap-[8px] md:gap-[12px] text-white z-99'>
        <h3 className='text-mobile/h5/medium md:text-desktop/h3 '>Find Your Nearest itel Store!</h3>
        <p className='text-mobile/body/2 md:text-desktop/body/1'>We are here to help you find the right phone. </p>
      </div>
      {/* Gradient overlay using ::before */}
   
      
    </div>
    
  </div>
  
  )
}

export default NearestStore
