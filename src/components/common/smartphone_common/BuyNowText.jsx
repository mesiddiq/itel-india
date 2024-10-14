/* eslint-disable react/prop-types */

const BuyNowText = ({ content }) => {
  return (
    <div className='flex flex-row gap-2 justify-center items-center'>
      <span className='text-mobile/button lg:text-desktop/button uppercase'>
        { content }
      </span>
      <span>
        <img src='/smartphone/S24/rightArrow.svg' alt="arrowRight" className='w-6 h-6'/>
      </span>
    </div>
  )
}

export default BuyNowText