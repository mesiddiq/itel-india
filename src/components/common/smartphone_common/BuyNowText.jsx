/* eslint-disable react/prop-types */

const BuyNowText = ({ content }) => {
  return (
    <div className='font-markot flex flex-row gap-2 justify-center items-center'>
      <span className='text-black text-mobile/button lg:text-desktop/button uppercase'>
        { content }
      </span>
      <span>
        <img src='/static_page/homepage/Arrow_right.svg' alt="arrowRight" className='w-6 h-6'/>
      </span>
    </div>
  )
}

export default BuyNowText