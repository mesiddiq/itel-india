import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG'
import HeroBanner from '/smartphone/S24/Hero Banner 2.png'

const HeroSection = () => {
  return (
    // <div className='relative w-screen h-full bg-black flex flex-col justify-center items-center'>
    //     <img src={HeroBanner} alt='Hero Banner' className='top-0 left-0'/>

    //     <div className='text-white'>
    //         hello
    //     </div>
    //     <div className='absolute bottom-[15px] right-[15px] text-grey/grey/3 text-desktop/caption'>
    //         *Memory Fusion Technology
    //     </div>
    // </div>
    <section className="relative flex flex-col items-center bg-black justify-betweenw-screen h-screen overfl"
    style={{
      backgroundImage: `url(${HeroBanner})`,
      backgroundSize: 'cover',
      backgroundPositionY: 'bottom',
      backgroundPositionX: 'right',
      backgroundRepeat: 'no-repeat',
    }}>  
    
        <div className=" flex flex-col gap-[64px] z-10 px-20 w-full h-full justify-center items-start">
          
          {/* Text Section */}
          <div className="flex flex-col gap-[24px] w-full justify-center text-left">
            
            {/* Super Series Badge */}
            <div className="font-markot w-[140px] flex flex-row justify-between items-center gap-[3px] border-[2px] border-s24-gradient-border rounded-full px-[6px] py-[3px]">
                <h1 className="bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent uppercase text-[14px] font-markot leading-[16.8px] tracking-[0.01em] ">
                  Super Series
                </h1>
                <img src="/smartphone/S24/superSeriesStar.svg" alt="Super Series Star" className="w-3"/>
            </div>

            {/* S24 Text */}
            <h1 className="font-markot text-desktop/large/h bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
              S24
            </h1>

            {/* Description */}
            <p className="text-desktop/title text-grey/grey/2 w-[473px] font-markot uppercase">
              108MP AI Camera | 16GB* (8GB+8GB*) RAM + 128GB ROM | Helio G91 Processor
            </p>

          </div>

          {/* Available at Price */}
          <div className='w-full flex flex-col gap-[16px]'>
            <div className="text-white">
              <h1 className="text-[20px] font-markot leading-[24px] tracking-[0.01em]">
                Available at <span className="text-[20px] font-markot  leading-[26px] tracking-[0.01em] ">
                ₹10,999
                </span>
              </h1>
            </div>

            {/* Buy Now Button (Visible only on medium and larger screens) */}
            <div className="">
              <BuyNowSquareBG />
            </div>
          </div>

        </div>

        {/* Memory Fusion Technology text */}
        <p className="absolute bottom-6 right-6 font-markot text-desktop/caption text-grey/grey/3">
          *Memory Fusion Technology
        </p>
    </section>
  )
}

export default HeroSection