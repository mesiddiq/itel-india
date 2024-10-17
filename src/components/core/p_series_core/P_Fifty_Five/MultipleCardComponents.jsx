const MultipleCardComponents = () => {
  return (
    <section className='font-markot w-full h-full py-[40px] px-[16px] lg:py-[120px] bg-[#181818] flex flex-col gap-5'>
      {/* upper-half-3-divs */}
      <section className='content upper-half-3-divs flex flex-col lg:flex-row gap-5 justify-between'>
        
          {/* Card 1 */}
          <div className='w-full lg:w-[40%] min-h-[506px] h-[506px] lg:h-[784px] rounded-2xl overflow-hidden flex flex-col relative bg-multipleCardComponentsGradient group'>
            
            <div className='text-white w-full h-auto px-[36px] pt-[40px] gap-3 lg:gap-10 flex flex-col z-10'>
                <div className='flex flex-col gap-2 lg:gap-3 max-w-[409px]'>
                  <img src='/smartphone/P55/powerPlay.svg' alt='powerPlay' className='w-[100px]'/>
                  <span className='text-mobile/small/body lg:text-desktop/h3 bg-gradient-to-r from-[#D5EEF9] to-[#70A2E1] bg-clip-text text-transparent'>
                  Pixel Prodigy: 50MP AI Dual Rear Camera & 8MP Front Camera
                  </span>
                </div>

              <div className='w-full flex flex-row '>
                <div className="w-1/2 flex flex-col justify-start items-start gap-[12px]">
                  <img src='/smartphone/P55/multipleModes.svg' className="w-[34px] h-[34px]"/>
                  <span className="uppercase text-[22px] font-medium leading-[28px] tracking-[0.02em] text-left">Ai<br/>Powered</span>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-start gap-[12px]">
                  <img src='/smartphone/P55/aiPowered.svg' className="w-[34px] h-[34px]"/>
                  <span className="uppercase text-[22px] font-medium leading-[28px] tracking-[0.02em] text-left">Multiple<br/>Modes</span>
                </div>
              </div>
            </div>

            <img
              src="/smartphone/P55/pixelProdigy.png"
              alt="pixelProdigy"
              className='absolute z-0 left-0 bottom-0 group-hover:scale-[110%] transition-transform duration-700'
            />

          </div>



          <div className='w-full lg:w-[60%] flex flex-col gap-5'>
              {/* Card 2 */}
              <div className='flex flex-col w-full min-h-[329.02px] h-[329.02px] lg:h-1/2 rounded-2xl p-4 lg:p-10 bg-black group relative overflow-hidden'>
                <div className='flex flex-col h-full gap-2 justify-between w-[292px] z-10 rounded-lg'>

                  <div className='flex flex-col gap-2 lg:gap-3 max-w-[219px]'>
                    <img src='/smartphone/P55/powerPlay.svg' alt='powerPlay' className='w-[100px]'/>
                    <span className='text-mobile/small/body lg:text-desktop/h3 bg-gradient-to-r from-[#D5EEF9] to-[#70A2E1] bg-clip-text text-transparent'>
                    Supreme Battery
                    </span>
                  </div>

                  <span className='flex flex-col text-[22px] font-bold leading-[28px] tracking-[0.02em] text-left'>
                    <h1>
                      5000 mAh
                      <span className="text-[22px] font-normal leading-[28px] tracking-[0.02em]"> Battery Lab with </span> 
                      18W <span className="text-[22px] font-normal leading-[28px] tracking-[0.02em]">Type-C Fast Charging </span> 
                    </h1>
                  </span>

                </div>
                
                {/* Image added here */}
                <img
                  src='/smartphone/P55/supremeBattery.png'
                  alt='supremeBattery'
                  className='absolute w-full z-0 top-0 left-0 group-hover:scale-[130%] lg:group-hover:scale-[110%] transition-transform duration-700'
                />
              </div>

              {/* Card 3 */}
              <div className='flex flex-col justify-between w-full min-h-[380px] h-[380px] rounded-2xl px-[32px] py-[40px] group relative overflow-hidden'>
                
                <div className='flex flex-col h-full gap-2 justify-between w-[292px] z-10 rounded-lg'>

                  <div className='flex flex-col gap-2 lg:gap-3 max-w-[219px]'>
                    <img src='/smartphone/P55/powerPlay.svg' alt='powerPlay' className='w-[100px]'/>
                    <span className='text-mobile/small/body lg:text-desktop/h3 bg-gradient-to-r from-[#D5EEF9] to-[#70A2E1] bg-clip-text text-transparent'>
                    Screen Sizzle
                    </span>
                  </div>
                  
                  <span className='flex flex-col text-[22px] font-bold leading-[28px] tracking-[0.02em] text-left'>
                    <h1>6.6” HD+</h1>
                    <h1><span className="text-[22px] font-normal leading-[28px] tracking-[0.02em]">Punch Hole Display</span> with 90 Hz Refresh Rate</h1>
                  </span>

                </div>

                <img
                  src='/smartphone/P55/screenSizzle.png'
                  alt='screenSizzle'
                  className='absolute w-full z-0 top-0 left-0 group-hover:scale-[130%] lg:group-hover:scale-[110%] transition-transform duration-700'
                />
              </div>

          </div>

      </section>

      {/* lower-half-3-divs */}
      <section className='content font-markot lower-half-3-divs flex flex-col gap-5 justify-between'>
        
        {/* Card 4 */}
        <div className='group overflow-hidden w-full rounded-2xl flex flex-col lg:flex-row p-4 lg:p-[40px] bg-black h-[430px] lg:h-[451px] relative'>
          
          <div className='relative z-10 flex flex-col gap-2 lg:justify-between lg:w-[400px] lg:mt-0 mt-[50px]'>
            <div className='flex flex-col gap-2 lg:gap-3 max-w-[339px]'>
              <img src='/smartphone/P55/powerPlay.svg' alt='powerPlay' className='w-[100px]'/>
              <span className='text-mobile/small/body lg:text-desktop/h3 bg-gradient-to-r from-[#D5EEF9] to-[#70A2E1] bg-clip-text text-transparent'>
                Gamers Grind:  Unisoc T606 Octa-Core
              </span>
            </div>

            <span className='max-w-[220px] text-[22px] font-bold leading-[28px] tracking-[0.02em] text-left text-white'>iBoost Gaming Technology</span>
          </div>

          <img src="/smartphone/P55/gridGaming.png" alt='gridGaming' className='absolute w-full left-0 z-0 bottom-0 group-hover:scale-[110%] transition-transform duration-700'/>
        </div>

      </section>

      </section>
  )
}

export default MultipleCardComponents