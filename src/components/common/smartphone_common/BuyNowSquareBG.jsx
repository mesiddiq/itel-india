/* eslint-disable react/prop-types */
import BuyNowText from "./BuyNowText"

const BuyNowSquareBG = ({ purchaseLink, content }) => {
  return (
    <a href={purchaseLink} target="_blank">
      <div className="bg-BuyNowSquareBG bg-contain bg-no-repeat relative w-[160px] h-[48px] flex flex-col justify-center items-center cursor-pointer">
        <BuyNowText content={content} className="" />
      </div>
    </a>
  )
}

export default BuyNowSquareBG

