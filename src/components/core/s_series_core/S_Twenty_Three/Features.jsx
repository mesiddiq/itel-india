export default function SmartphoneFeatures() {
  return (
    <section className='font-markot w-full h-full py-[40px] px-[16px] lg:py-[120px] lg:px-[80px] bg-[#1c1b1b] flex flex-col gap-5'>
    
    <section className='upper-half-3-divs flex flex-col lg:flex-row gap-5 justify-between'>
      
      <div className='w-full lg:w-[40%] h-[784px] rounded-2xl overflow-hidden flex flex-col relative bg-black'>
        <div className='text-white w-full h-auto p-10 gap-10 flex flex-col'>
          <span className='text-desktop/h3 text-markot  bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent'>
            Endless Possibilities; Immersive Display
          </span>
          <div className='flex flex-col gap-5 text-desktop/h4 text-nowrap'>
            <span>16.66cm(6.6)HD+ IPS Display</span>
            <span>90Hz Refresh Rate | 180Hz Touch Sampling Rate</span>
          </div>
        </div>
        {/* <img src="/smartphone/S_Twenty_Three/Card1.webp"alt="" className='absolute bottom-[1%]'/> */}
      </div>

      <div className='w-[60%] flex flex-col gap-5'>
        <div className='w-full h-1/2 rounded-2xl p-10 bg-black bg-cover bg-top '>
          <div className='flex flex-col justify-between h-full w-[328px]'>
            <div className='flex flex-col gap-4'>
              <span className='text-desktop/h3 bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent'>Long Lasting Experience </span>
              <span className='text-desktop/h4 text-grey/grey/2 w-[257px]'>5000mAh Battery with 10W Fast Charging Support</span>
            </div>
            {/* <img src="/smartphone/S_Twenty_Three/Battery.webp" alt="" className='absolute '/> */}
          </div>
        </div>

        <div className='w-full h-1/2 rounded-2xl p-10 bg-black bg-cover bg-top'>
          <div className='flex flex-col justify-between h-[292px] w-[292px]'>
            <span className='text-desktop/h3 bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent'>Effortless Multi-Tasking </span>
            <span className='flex flex-col gap-5 text-desktop/h4 text-grey/grey/2 w-[257px]'>
              <span>UNISOC T606 Octa-Core 
              </span>
            </span>
            {/* <img src="/smartphone/S_Twenty_Three/Processor.webp" alt="" className='absolute'/> */}
          </div>
        </div>
      </div>

    </section>

    
    <section className='flex flex-col gap-5 justify-between'>
      
      <div className='w-full flex flex-row gap-5'>
        
        <div className='w-[40%] rounded-2xl bg-black p-[40px]'>
          <div className='flex flex-col gap-4'>
            <span className='text-desktop/h3 bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent'>
              Side-mounted Fingerprint Lock
            </span>
            {/* <img src="/smartphone/S_Twenty_Three/p2.webp"alt="" className='absolute   '/> */}
          </div>
        </div>
        
        <div className='w-[60%] rounded-2xl bg-black py-[42px] px-[40px]'>
          <div className='flex flex-col justify-between w-[334px] h-[292px]'>
            <div className='flex flex-col gap-4'>
              <span className='text-desktop/h3 bg-gradient-to-r from-[#DACFF9] to-[#5C5C7E] bg-clip-text text-transparent'>itel S23's HD Pixel Lens!</span>
              <span className='text-desktop/h4 text-white'>Color Changing Technology</span>
            </div>
            <span className='text-desktop/h4 text-white'>50MP Al Dual Rear Camera 8 MP Front Camera</span>
            {/* <img src="/smartphone/S_Twenty_Three/p1.webp"alt="" className='absolute'/> */}
          </div>
          
        </div>
      
      </div>
    </section>

  </section>
)
}