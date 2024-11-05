import React from 'react'

const IdealCamera = () => {
  return (
    <div className="bg-[#D0E1FC] h-max py-12 md:py-12 lg:h-[720px] w-full flex items-center justify-center bg-no-repeat bg-cover"
    style={{ backgroundImage: 'url(/smartphone/P55+/Backgrounds/IdealCameraBG.webp)' }}>
      <div className="content md:flex-row-reverse flex flex-col w-full h-full items-center">
      <div className="flex flex-col font-markot gap-[48px] w-full p-4 md:pl-12 md:w-1/2">
        <div className='flex flex-col gap-[12px]'>
 <h2 className='text-mobile/h3 md:text-desktop/h2 text-[#B3D98E]'>Ideal Camera for All<br/> Your Needs</h2>
 <p className='text-[16px] lg:w-[500px]'>Click exceptional photos that showcase intricate details and unparalleled clarity, ensuring every aspect of your subjects shines with remarkable precision.</p>
      </div>
      <div className='flex flex-col gap-[32px] font-markot'>
    <div className="flex gap-[12px] items-center">
      <img src='/smartphone/P55+/Backgrounds/icon1.png'></img>
<h4 className='text-mobile/title md:text-desktop/h4'>50MP AI Dual Rear Camera</h4>
    </div>
    <div className="flex flex-col gap-[12px]">
    <div className="flex gap-[12px] items-center">
      <img src='/smartphone/P55+/Backgrounds/icon1.png'></img>
<h4 className='text-mobile/title md:text-desktop/h4'>8MP Front Camera</h4>
    </div>
<p className='text-mobile/body/2 md:text-desktop/body/1'>AI Clear Portrait | Super Night Mode | Panorama Mode</p>
    </div>
     </div> </div>
      <div className=" flex justify-center items-center w-full px-4 md:p-0 md:w-1/2">
      <img src='/smartphone/P55+/Backgrounds/IdealCameraGraphic.webp' className='lg:h-[600px]'></img>
      </div>
      </div></div>
  )
}

export default IdealCamera