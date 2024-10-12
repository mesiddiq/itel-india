import HeroBanner from '/smartphone/S24/Hero Banner 2.png'

const HeroSection = () => {
  return (
    <div className='relative w-screen h-full bg-black flex flex-col justify-center items-center'>
        <img src={HeroBanner} alt='Hero Banner' className='top-0 left-0'/>

        <div className='text-white'>
            hello
        </div>
        <div className='absolute bottom-[15px] right-[15px] text-grey/grey/3 text-desktop/caption'>
            *Memory Fusion Technology
        </div>
    </div>
  )
}

export default HeroSection