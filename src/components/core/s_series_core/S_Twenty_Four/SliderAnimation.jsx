import sliderAnimationStar from '/smartphone/S24/sliderAnimationStar.svg'

const SliderAnimation = () => {
  return (
    <div className="FFMarkBold w-full h-[52px] bg-[#120F0D] flex flex-col justify-center items-center overflow-hidden">
        <div className='flex flex-row justify-center items-center gap-[10px]'>
            <span className='w-full text-nowrap bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                INCREDIBLY SUPER
            </span>
            <img src={sliderAnimationStar} alt="sliderAnimationStar" className='' />
            <span className='w-full text-nowrap bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                SUPER SERIES
            </span>
            <img src={sliderAnimationStar} alt="sliderAnimationStar" className='' />
            <span className='w-full text-nowrap bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                INCREDIBLY SUPER
            </span>
            <img src={sliderAnimationStar} alt="sliderAnimationStar" className='' />

            <span className='w-full text-nowrap bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                INCREDIBLY SUPER
            </span>
            <img src={sliderAnimationStar} alt="sliderAnimationStar" className='' />

        </div>
    </div>
  )
}

export default SliderAnimation