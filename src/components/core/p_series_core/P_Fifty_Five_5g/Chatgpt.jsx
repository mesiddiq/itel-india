import React from 'react'

const Chatgpt = () => {
  return (
    <div 
    className="relative h-max py-8 lg:h-[680px] flex justify-center items-center bg-cover bg-center" 
    style={{ backgroundImage: 'url(/smartphone/P55fiveg/Backgrounds/SmartAssistant.webp)' }}
  >
    <div className='content flex flex-col lg:flex-row gap-[24px] justify-center items-center'>
      <div className="flex flex-col gap-[48px] font-markot justify-center px-4 lg:px-0" data-aos="fade-right">
        <div className='flex flex-col gap-[12px]'>
          <h2 className='text-mobile/h3 md:text-desktop/h2 text-white'>Smart assistant: itel<br/> Aivana ChatGPT Bot</h2>
          <p className='text-mobile/body/2 md:text-[16px] text-white md:w-[413px] font-markot'>
            Personalize your experience and improve your task performance with itel Aivana ChatGPT bot.
          </p>
        </div>
        <div className='flex gap-[24px] text-white font-markot'>
          <div className="flex flex-col gap-[8px] border-r border-white pr-16">
            <h3 className='text-mobile/h5/medium md:text-desktop/h3 font-markot'>~34%</h3>
            <p className='text-mobile/body/large md:text-desktop/body/large'>Improved Task <br/>Efficiency</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className='text-mobile/h5/medium md:text-desktop/h3 font-markot'>~25%</h3>
            <p className='text-mobile/body/large md:text-desktop/body/large'>Faster Task <br/>Completion</p>
          </div>
        </div>
      </div>
      
      <div 
        className="relative h-[530px] w-[318px] sm:w-[500px] md:w-[550px] lg:w-[600px] flex justify-center items-center bg-cover bg-center overflow-hidden" 
      >
        <img 
          src='/smartphone/P55fiveg/Backgrounds/chatgpt_bg.png' 
          className='relative' 
          alt="ChatGPT background"
        />
        
        <img 
          src='/smartphone/P55fiveg/Backgrounds/robot.png' 
          className='absolute w-full max-w-[300px] sm:max-w-[400px] object-contain' 
          alt="Robot"
        />
      </div>
    </div>
  </div>
  
  )
}

export default Chatgpt