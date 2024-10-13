import React from 'react'

const Chatgpt = () => {
  return (
    <div 
    className="relative h-[680px] flex justify-center items-center bg-cover bg-center px-20" 
    style={{ backgroundImage: 'url(/P_Series/chatgpt.png)' }}
  >
    <div className='flex '>
        <div className="flex flex-col gap-[48px] justify-center">
           <div className='flex flex-col gap-[12px] w-[529px]'>
            <h2 className='text-desktop/h2 text-white '>Smart assistant: itel Aivana ChatGPT Bot</h2>
       <p className=' text-[16px] text-white'>Personalize your experience and improve your task performance with itel Aivana ChatGPT bot.</p>
        </div>
        <div className='flex gap-[24px] text-white'>
<div className="flex flex-col gap-[8px]">
<h3 className='text-desktop/h3 font-markot'>~34%</h3>
<p className='text-desktop/body/large'>Improved Task Efficiency</p>
</div>
<div className="flex flex-col gap-[8px]">
<h3 className='text-desktop/h3 font-markot'>~25%</h3>
<p className='text-desktop/body/large'>Faster Task Completion</p>
</div>
<div className=""></div>
        </div>
        
        </div>
        <div className=" h-[530px] flex justify-center items-center bg-cover bg-center" >

<img src='/P_Series/chatgpt_bg.png' className='relative'></img>
<img src='/P_Series/robot.png' className='absolute'></img>

        </div>
        </div>
        </div>
  )
}

export default Chatgpt