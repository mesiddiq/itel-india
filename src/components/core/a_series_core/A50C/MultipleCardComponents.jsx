const MultipleCardComponents = () => {
  return (
    <section className='bg-white font-markot w-full h-full pb-0 pt-[40px] px-[16px] md:pt-[120px] flex flex-col gap-5'>
      {/* upper-half-3-divs */}
      <section className=' content upper-half-3-divs flex flex-col md:flex-row gap-3 md:gap-6 justify-between'>
        
          {/* Card 1 */}
          <div className='w-full border border-[#93BBFF] md:w-[40%] h-[360px] xs:h-[410px] xms:h-[480px] md:h-[800px] rounded-2xl overflow-hidden flex flex-col relative group' style={{
            background: 'linear-gradient(180.08deg, rgba(175, 203, 255, 0) 0.07%, #AFCBFF 126.64%)'
          }}>
            <div className='w-full h-auto px-3 pt-[26px] md:p-10 gap-[14px] md:gap-[14px] flex flex-col z-10 '>
              <span className='text-mobile/h5/medium md:text-desktop/h3 font-markot text-[#050036] md:text-[#050036] '>
              8MP AI Rear Camera with 5MP Selfie Camera
              </span>

              <div className='text-mobile/body/large md:text-desktop/h4 text-[#0E0E0E] '>
                <span>Capture stunning photos and selfies with AI-enhanced technology</span>
              </div>
            </div>

            <img
              src="/smartphone/A50C/rearCamera.png"
              alt="yourCompactAI"
              className='absolute z-0 md:right-auto right-0 -bottom-[25%] md:-bottom-[0%] left-1/2 -translate-x-1/2 scale-75 md:scale-[100%] group-hover:scale-[85%] md:group-hover:scale-[105%] transition-transform duration-700'
            />
          </div>

          <div className='w-full md:w-[60%] flex flex-col gap-3 md:gap-6'>
              {/* Card 2 */}
              <div className=' border border-[#93BBFF] flex flex-col w-full md:min-h-[260px] md:h-[396px] h-[260px] rounded-2xl p-4 md:px-10 md:pt-10 group relative overflow-hidden' style={{
                background: 'linear-gradient(121.19deg, #FFFFFF 15.86%, #AFCBFF 89.45%)'
              }}>
                <div className='flex flex-col md:max-w-[271px] max-w-[150px] gap-2 md:gap-[18px] h-full md:w-full z-10'>
                    <span className='text-mobile/h5/medium md:text-desktop/h3 text-[#050036]'>
                    Fast Charging, Long-Lasting Power
                    </span>
                    <span className='text-mobile/body/large md:text-desktop/h5/medium text-[#232323]'>
                    4000 mAh Battery | Type-C Charging | 10W Fast Charging Support*
                    </span>
                </div>

                <h1 className="text-[#050036] text-desktop/overline md:text-desktop/caption">*5W charger available inside the box</h1>

                {/* Image added here */}
                <img
                  src='/smartphone/A50C/fastCamera.png'
                  alt='BatteryPhone'
                  className='absolute -right-[30%] scale-[150%] -bottom-16 sm:-bottom-56 sm:scale-110 md:-bottom-[60%]   md:scale-[125%] group-hover:scale-[105%] md:group-hover:scale-[135%] transition-transform duration-700'
                />
              </div>

              {/* Card 3 */}
              <div className='border border-[#93BBFF] flex flex-col w-full h-[220px] xms:h-[240px] sm:h-[250px] md:min-h-[380px] md:h-[380px] rounded-2xl p-4 md:p-5 group relative overflow-hidden' style={{
                background: 'linear-gradient(164.65deg, rgba(175, 203, 255, 0.8) 16.92%, rgba(175, 203, 255, 0) 76.36%)',
              }}>
                <div className='flex flex-col gap-2 md:justify-between md:h-[292px] z-10 rounded-lg'>
                  <span className='text-mobile/h5/medium md:text-desktop/h3 text-black/1 md:text-[#050036]'>
                  Back Fingerprint & Face Unlock
                  </span>
                </div>

                {/* Image added here */}
                <img
                  src='/smartphone/A50C/backFingerprint.png'
                  alt='quickCharge'
                  className='absolute -bottom-[10%] left-1/2 -translate-x-1/2 md:bottom-0 scale-[80%] sm:scale-[70%] sm:-bottom-[20%] md:scale-[100%] group-hover:scale-[90%] md:group-hover:scale-[110%] transition-transform duration-700'
                />
              </div>

          </div>

        </section>

      </section>
  )
}

export default MultipleCardComponents