/* eslint-disable react/prop-types */
import BuyNowText from "../../../components/common/smartphone_common/BuyNowText"
import DropDownComponent from "./DropDownComponent"

const ShowDataForComparision = ({allPhoneData,currentPhoneData,setCurrentPhone}) => {
    
    return (
        <div className="w-1/2 flex flex-col gap-3 ">
            {/* Dropdown to select phones */}
            <DropDownComponent data={allPhoneData} setCurrentPhone={setCurrentPhone} />

            {currentPhoneData && (
                <div className="w-full bg-[#F8F6F3] rounded-[10px] p-4 flex flex-col gap-3">
                    {/* Product Image */}
                    <div className="w-full flex flex-col justify-center items-center max-h-[200px] ">
                        <img src={currentPhoneData.image} alt={currentPhoneData.name} className="h-full" />
                    </div>

                    {/* Product Title  */}
                    <div className="flex flex-col gap-1">
                        <p className="text-mobile/h5/medium text-[#1A1A1A]">{currentPhoneData.name}</p>
                        <p className="text-mobile/title text-itel-red">₹ {currentPhoneData.price}</p>
                    </div>

                    {/* Product Specifications */}
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-1">
                            <span className="text-mobile/h7">Camera:</span>
                            <span className="text-mobile/small/body">{currentPhoneData.camera}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-1">
                            <span className="text-mobile/h7">Ram:</span>
                            <span className="text-mobile/small/body">{currentPhoneData.ram}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-1">
                            <span className="text-mobile/h7">Dimensions:</span>
                            <span className="text-mobile/small/body">{currentPhoneData.screenSize}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-1">
                            <span className="text-mobile/h7">Processor:</span>
                            <span className="text-mobile/small/body">{currentPhoneData.processor}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-1">
                            <span className="text-mobile/h7">Battery:</span>
                            <span className="text-mobile/small/body">{currentPhoneData.battery}</span>
                        </div>
                    </div>

                    {/* Buy Now */}
                    <a href={currentPhoneData.pageUrl} target="_blank">
                        <div className="cursor-pointer bg-white rounded-3xl py-2 px-[14px] border-[0.75px] border-black">
                            <BuyNowText content="BUY NOW" />
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default ShowDataForComparision