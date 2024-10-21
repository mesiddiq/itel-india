import BuyNowText from "./BuyNowText"

const BuyNowSquareBG = () => {
  return (
    <div className="bg-[url('/SmartPhone/S24/ButtonBackground.png')] bg-contain bg-no-repeat relative w-[160px] h[48px] md:flex flex-col justify-center items-center hidden">
        <BuyNowText content="Buy Now" className=""/>
    </div>
  )
}

export default BuyNowSquareBG

