const MultipleCardComponents = () => {
  return (
    <section className='bg-white font-markot w-full h-full py-[40px] pb-0 px-[16px] lg:pt-[120px] flex flex-col gap-5'>
      {/* upper-half-3-divs */}
      <section className=' content upper-half-3-divs flex flex-col lg:flex-row gap-5 justify-between'>
        
          {/* Card 1 */}
          <div className='w-full border border-[#D7F1FE] lg:w-[40%] min-h-[506px] h-[506px] lg:h-[784px] rounded-2xl overflow-hidden flex flex-col relative group' style={{
            backgroundImage: 'url("")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className='text-white w-full h-auto p-4 lg:p-6 gap-3 lg:gap-[14px] flex flex-col z-10'>
              <span className='text-mobile/h5/medium lg:text-desktop/h3 text-markot text-[#050036] max-w-[470px]'>
              Your Compact AI Cam: 
              5MP Front Camera & 5 MP AI Rear Dual Camera
              </span>

              <div className='text-mobile/body/large lg:text-desktop/body/large text-[#252525] max-w-[450px]'>
                <span>Portrait Mode | Pro Mode | HDR Mode | Low Light | Panorama | Wide Selfie Mode</span>
              </div>
            </div>
            <img
              src="/smartphone/A05i/Backgrounds/yourCompactAI.webp"
              alt="crystal-clear-shots"
              className='absolute z-0 -bottom-[10%] scale-[90%] group-hover:scale-[100%] transition-transform duration-700'
            />
          </div>

          <div className='w-full lg:w-[60%] flex flex-col gap-[24px]'>
              {/* Card 2 */}
              <div className='border border-[#D7F1FE] flex flex-col w-full min-h-[380px] h-[380px] lg:h-1/2 rounded-2xl p-4 lg:p-5 group relative overflow-hidden' style={{
                backgroundImage: 'url(/smartphone/A05i/Backgrounds/DualSecurityGridBG.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
                <div className='flex flex-col lg:justify-between gap-2 h-full lg:w-full z-10'>
                    <span className='text-mobile/h5/medium lg:text-desktop/h3 text-[#050036]'>
                    Big Battery backed with 10W Type-C Fast Charge Support
                    </span>
                </div>
                
                {/* Image added here */}
                <img
                  src='/smartphone/A05i/Backgrounds/BatteryPhone.webp'
                  alt='Ultra Storage Vault'
                  className='absolute left-1 bottom-0 group-hover:scale-[105%] transition-transform duration-700'
                />
              </div>

              {/* Card 3 */}
              <div className='border border-[#D7F1FE] flex flex-col w-full min-h-[380px] h-[380px] rounded-2xl p-4 lg:p-5 group relative overflow-hidden' style={{
                backgroundImage: 'url(/smartphone/A05i/Backgrounds/DualSecurityGridBG.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
                <div className='flex flex-col gap-2 lg:justify-between lg:h-[292px] z-10 rounded-lg'>
                  <span className='text-mobile/h5/medium lg:text-desktop/h3 text-[#050036]'>
                  Dual Security <span className="text-[36px] font-medium leading-[46.8px] tracking-[-0.02em]">•</span> Fingerprint + Face Unlock
                  </span>
                </div>


                {/* Image added here */}
                <img
                  src='/smartphone/A05i/Backgrounds/dualSecurityPhones.webp'
                  alt='quickCharge'
                  className='absolute left-0 scale-[120%] lg:scale-[90%] group-hover:scale-[100%] lg:group-hover:scale-[100%] transition-transform duration-700'
                />
              </div>

          </div>

      </section>

      </section>
  )
}

export default MultipleCardComponents