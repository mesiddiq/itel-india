const MultipleCardComponents = () => {
  return (
    <section className='bg-white font-markot w-full h-full pb-0 pt-[40px] px-[16px] lg:pt-[120px] flex flex-col gap-5'>
      {/* upper-half-3-divs */}
      <section className=' content upper-half-3-divs flex flex-col lg:flex-row gap-5 justify-between'>
        
          {/* Card 1 */}
          <div className='w-full border responsoveCard1A05 border-[#D7F1FE] lg:w-[40%] min-h-[380px] h-[350px] md:h-[824px] rounded-2xl overflow-hidden flex flex-col relative group' style={{
            backgroundImage: 'url("/smartphone/A05i/Backgrounds/CameraGrid.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className='w-full h-auto p-3 lg:p-6 gap-3 lg:gap-[14px] flex flex-col z-10'>
              <span className='text-mobile/h5/medium md:text-desktop/h3 font-markot text-black/1 lg:text-[#050036] md:max-w-full max-w-[300px]'>
              Your Compact AI Cam: 5MP Front Camera & 5 MP AI Rear Dual Camera
              </span>

              <div className='text-mobile/small/body md:text-desktop/body/large text-grey/grey/5 max-w-[250px] md:max-w-[450px]'>
                <span>Portrait Mode | Pro Mode | HDR Mode | Low Light | Panorama | Wide Selfie Mode</span>
              </div>
            </div>

            <img
              src="/smartphone/A05i/Backgrounds/yourCompactAI.webp"
              alt="yourCompactAI"
              className='absolute z-0 -bottom-[20%] lg:right-auto right-0 lg:-bottom-[10%] scale-75 md:scale-50 md:-bottom-[250px] lg:scale-[90%] group-hover:scale-[85%] lg:group-hover:scale-[100%] transition-transform duration-700'
            />
          </div>

          <div className='w-full lg:w-[60%] flex flex-col gap-[24px]'>
              {/* Card 2 */}
              <div className='border border-[#D7F1FE] flex flex-col w-full lg:min-h-[380px] lg:h-[380px] h-[260px] sm:h-[280px] rounded-2xl p-4 lg:p-5 group relative overflow-hidden' style={{
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
                  alt='BatteryPhone'
                  className='absolute left-1 bottom-0 sm:-bottom-2 md:-bottom-[10%] lg:bottom-0 sm:scale-90 lg:scale-90 group-hover:scale-[105%] lg:group-hover:scale-[95%] transition-transform duration-700'
                />
              </div>

              {/* Card 3 */}
              <div className='border responsoveCardA05 border-[#D7F1FE] flex flex-col w-full responsive-cards h-[280px] sm:h-[350px] md:min-h-[420px] lg:h-[380px] rounded-2xl p-4 lg:p-5 group relative overflow-hidden' style={{
                backgroundImage: 'url(/smartphone/A05i/Backgrounds/DualSecurityGridBG.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
                <div className='flex flex-col gap-2 lg:justify-between lg:h-[292px] z-10 rounded-lg'>
                  <span className='text-mobile/h5/medium lg:text-desktop/h3 text-black/1 lg:text-[#050036]'>
                  Dual Security <span className="text-[36px] font-medium leading-[46.8px] tracking-[-0.02em]">•</span> Fingerprint + Face Unlock
                  </span>
                </div>


                {/* Image added here */}
                <img
                  src='/smartphone/A05i/Backgrounds/dualSecurityPhones.webp'
                  alt='quickCharge'
                  className='absolute  left-0 bottom-[-20%] sm:bottom-[-60%] md:-bottom-[40%] lg:-bottom-[50%] scale-[80%] lg:scale-[90%] group-hover:scale-[90%] lg:group-hover:scale-[95%] transition-transform duration-700'
                />
              </div>

          </div>

        </section>

      </section>
  )
}

export default MultipleCardComponents