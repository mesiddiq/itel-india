import React from 'react'

const CoreProcessor = () => {
  return (
    <div className="bg-[#D0E1FC] h-[780px] lg:h-[730px] relative w-full flex items-center justify-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(/smartphone/P55+/Backgrounds/juiceUpBG.webp)' }}>
      <div className='content flex h-full font-markot p-4 lg:p-0'>
        <div className=' flex flex-col justify-between md:w-3/4 py-8 md:py-20 text-white'>
          <div className="flex flex-col gap-3 md:gap-7  ">
            <h2 className='text-mobile/h3 md:text-desktop/h2 text-[#B3D98E]'>Juice Up Fast:<br /> Supercharge with 45W!</h2>
            <p className='text-desktop/body/2/regular md:text-desktop/body/1 md:w-[396px]'>With the incredible 45W PowerCharge, your phone zips to 25% charge in just 10 minutes, faster than grabbing a coffee! Get ready for hours of calls, work, and play in a flash. </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-[47px] font-markot">
            <div className="flex flex-col gap-[8px]">
              <img src="/smartphone/P55+/Backgrounds/icon3.png" className='h-10 w-10'></img>
              <span className='font-[12px] md:text-desktop/body/large'>Hyper Charge</span>
              <h4 className='text-mobile/h5/medium md:text-desktop/h4'>During Urgency 25% <br />charge in 10 min</h4>
            </div>
            <div className="flex flex-col gap-[8px]">
              <img src="/smartphone/P55+/Backgrounds/icon2.png" className='h-10 w-10'></img>
              <span className='font-[12px] md:text-desktop/body/large'>Smart Charge</span>
              <h4 className='text-mobile/h5/medium md:text-desktop/h4'>Basis Usage Pattern <br />AI Optimization</h4>
            </div>
            <div className="flex flex-col gap-[8px]">
              <img src="/smartphone/P55+/Backgrounds/icon4.png" className='h-10 w-10'></img>
              <span className='font-[12px] md:text-desktop/body/large'>Low-temp Charge</span>
              <h4 className='text-mobile/h5/medium md:text-desktop/h4'>Booyah Mode<br /> No Overheating</h4>
            </div>
          </div>
        </div>
        <div className='absolute bottom-1/4 lg:bottom-0 t  md:right-0 right-[-90px]'
        ><img src="/smartphone/P55+/Backgrounds/coreimage.png" alt='Rapid 45W Charging' className='hidden lg:flex max-w-[600px]'></img>
          <img src="/smartphone/P55+/Backgrounds/coremobile.png" className='flex lg:hidden h-[371px] max-w-[567px]'></img>
        </div>
      </div></div>
  )
}

export default CoreProcessor
