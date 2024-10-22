import React from 'react'

const BatteryLab = () => {
  return (
    <div className='bg-cover w-full h-[860px] flex justify-center items-center bg-white py-20 px-[10px] lg:px-0'>
        <div className='content flex flex-col justify-between items-center font-markot w-full h-full rounded-[16px] bg-[#212F1C]'>
<div className='flex flex-col justify-start gap-[26px] w-full p-[15px]'>
<h2 className='text-mobile/h4 md:text-desktop/h2 text-center'>Stay Supercharged; Battery Lab</h2>
<div className='flex flex-col md:flex-row gap-[16px] justify-around '>
  <div className="flex gap-[8px]">
    <img src='/smartphone/P55plus/one.png' alt='one' className='h-[25px] w-[25px]'></img>
    <span className='text-[#B3D98E] text-mobile/button md:text-desktop/h4'>PowerBoost</span>
  </div>
  <div className="flex gap-[8px]">
  <img src='/smartphone/P55plus/two.png' alt='one' className='h-[25px] w-[25px]'></img>
    <span className='text-[#B3D98E] text-mobile/button md:text-desktop/h4'>Ultra Power Saving</span>
  </div>
  <div className="flex gap-[8px]">
  <img src='/smartphone/P55plus/three.png' alt='one' className='h-[25px] w-[25px]'></img>
    <span className='text-[#B3D98E] text-mobile/button md:text-desktop/h4'>Battery Saving Setting</span>
  </div>
</div>
</div>
<div className='overflow-hidden'>
  <img src='/smartphone/P55plus/mobile.png' className='md:w-[900px] md:h-[500px] h-[350px]'></img>
</div>
        </div>
    </div>
  )
}

export default BatteryLab