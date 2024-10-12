import arrowRight from '/smartphone/S24/rightArrow.svg'

const BuyNowText = () => {
  return (
    <div className='flex flex-row gap-2 justify-center items-center'>
      <span className='font-medium text-[12px] leading-[19.2px] tracking-[-0.02em] lg:text-desktop/button'>BUY NOW</span>
      <span>
        <img src={arrowRight} alt="arrowRight" className='w-6 h-6'/>
      </span>
    </div>
  )
}

export default BuyNowText