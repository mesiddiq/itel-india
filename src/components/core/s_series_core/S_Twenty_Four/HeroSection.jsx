import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG'
import HeroBanner from '/smartphone/S24/Hero Banner 2.png'

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center bg-black justify-between h-screen overflow-hidden"
    style={{
      backgroundImage: `url(${HeroBanner})`,
      backgroundSize: 'cover',
      backgroundPositionY: 'bottom',
      backgroundPositionX: 'right',
      backgroundRepeat: 'no-repeat',
    }}>  
    
        <div className=" flex flex-col gap-4 lg:gap-[64px] z-10 px-4 lg:px-20 w-full h-full kg:mt-0 mt-[45px] lg:justify-center items-start">
          
          {/* Text Section */}
          <div className="flex flex-col gap-4 lg:gap-[24px] w-full justify-center text-left">
            
            {/* Super Series Badge */}
            <div className="font-markot w-[140px] flex flex-row justify-between items-center gap-[3px] border-[2px] border-s24-gradient-border rounded-full px-[6px] py-[3px]">
                <h1 className="font-bold bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent uppercase text-[14px] leading-[16.8px] tracking-[0.01em] ">
                  Super Series
                </h1>
                <img src="/smartphone/S24/superSeriesStar.svg" alt="Super Series Star" className="w-3"/>
            </div>

            <div className='flex flex-col gap-1'>
                {/* S24 Text */}
                <h1 className="font-markot text-mobile/h1 lg:text-desktop/large/h bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
                  S24
                </h1>

                {/* Description */}
                <p className="font-markot text-mobile/tile lg:text-desktop/title text-grey/grey/2 lg:text-grey/grey/2 lg:w-[473px] uppercase">
                  108MP AI Camera | 16GB* (8GB+8GB*) RAM + 128GB ROM | Helio G91 Processor
                </p>
            </div>

          </div>

          {/* Available at Price */}
          <div className='w-full flex flex-col gap-[16px]'>
            <div className="text-white ">
              <h1 className="flex flex-row justify-start items-center gap-1 font-markot lg:text-[20px] lg:leading-[24px] lg:tracking-[0.01em] text-mobile/small/body">
                <span>Available at </span>
                <span className="font-markot font-bold text-[20px] leading-[26px] tracking-[0.01em] ">
                  ₹10,999
                </span>
              </h1>
            </div>

            {/* Buy Now Button (Visible only on medium and larger screens) */}
            <div className="hidden lg:block">
              <BuyNowSquareBG />
            </div>
          </div>

        </div>

        {/* Memory Fusion Technology text */}
        <p className="absolute font-markot text-desktop/caption text-grey/grey/3 lg:bottom-6 lg:right-6 lg:rotate-0 lg:translate-x-0 lg:translate-y-0 lg:top-auto lg:left-auto  -left-[14%] top-[82%] -rotate-[90deg]">
          *Memory Fusion Technology
        </p>
    </section>
  )
}

export default HeroSection