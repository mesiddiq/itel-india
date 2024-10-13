import BuyNowText from "../../../common/smartphone_common/BuyNowText"
import s24Logo from '/smartphone/S24/s24Logo.svg'

const OverViewBanner = () => {
  return (
    // <div className="bg-[#161616] w-full py-3 px-4 lg:px-20 lg:py-6 sticky top-0 z-50">
    <div className="bg-[#161616] w-full py-3 px-4 lg:px-20 lg:py-6">
        <div className="flex flex-row justify-between items-center">
            
            <div className="flex flex-row justify-center items-center gap-3">
              <img src={s24Logo} alt="s24Logo" className="w-10 lg:w-full"/>
              <span className="text-mobile/h3 lg:text-desktop/h3 text-white">S24</span>
            </div>
            
            <div className="hidden lg:flex flex-row gap-8 text-desktop/h6/medium text-[#E8E8E8]">
                <span className="cursor-pointer">Overview</span>
                <span className="cursor-pointer">Specifications</span>
            </div>
            
            <div className="bg-white py-3 px-[14px] lg:px-6 rounded-3xl">
              <BuyNowText />
            </div>

        </div>
    </div>
  )
}

export default OverViewBanner