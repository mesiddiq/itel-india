import React from 'react'

const Chatgpt = () => {
  return (
    <div 
    className="relative h-max py-8 lg:h-[680px] flex justify-center items-center bg-cover bg-center px-20" 
    style={{ backgroundImage: 'url(/P_Series/smart-assistant.png)' }}
  >
    <div className='flex flex-col md:flex-row '>
        <div className="flex flex-col gap-[48px] justify-center">
           <div className='flex flex-col gap-[12px]'>
            <h2 className='text-mobile/h3 md:text-desktop/h2 text-white '>Smart assistant: itel Aivana ChatGPT Bot</h2>
       <p className='text-mobile/body/2 md:text-[16px] text-white'>Personalize your experience and improve your task performance with itel Aivana ChatGPT bot.</p>
        </div>
        <div className='flex gap-[24px] text-white'>
<div className="flex flex-col gap-[8px]">
<h3 className='text-mobile/h5/medium md:text-desktop/h3 font-markot'>~34%</h3>
<p className='text-mobile/body/large md:text-desktop/body/large'>Improved Task Efficiency</p>
</div>
<div className="flex flex-col gap-[8px]">
<h3 className='text-mobile/h5/medium md:text-desktop/h3 font-markot'>~25%</h3>
<p className='text-mobile/body/large md:text-desktop/body/large'>Faster Task Completion</p>
</div>
<div className=""></div>
        </div>
        
        </div>
        <div className="relative h-[530px] w-[326px] sm:w-[500px] md:w-[550px] lg:w-[600px] flex justify-center items-center bg-cover bg-center">
 
  <img 
    src='/P_Series/chatgpt_bg.png' 
    className='relative ' 
    alt="ChatGPT background"
  />

  
  <img 
    src='/P_Series/robot.png' 
    className='absolute w-full max-w-[400px] sm:max-w-[300px] ' 
    alt="Robot"
  />
</div>

        </div>
        </div>
  )
}

export default Chatgpt