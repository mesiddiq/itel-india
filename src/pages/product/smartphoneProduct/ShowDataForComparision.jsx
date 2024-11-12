import DropDownComponent from "./DropDownComponent"
import { AllPhonesData } from '../../../data/AllPhoneData'
import { useEffect, useState } from "react"
import BuyNowText from "../../../components/common/smartphone_common/BuyNowText"

const ShowDataForComparision = () => {
    const [currentPhone, setCurrentPhone] = useState(AllPhonesData[0].title)
    const [dataOfCurrentPhone, setDataOfCurrentPhone] = useState(AllPhonesData[0])

    useEffect(() => {
        const phoneData = AllPhonesData.find((phone) => phone.title === currentPhone)
        setDataOfCurrentPhone(phoneData)
    }, [currentPhone])

    return (
        <div className="w-1/2 flex flex-col gap-3 ">
            {/* Dropdown to select phones */}
            <DropDownComponent data={AllPhonesData} setCurrentPhone={setCurrentPhone} />

            {dataOfCurrentPhone && (
                <div className="w-full bg-[#F8F6F3] rounded-[10px] p-4 flex flex-col gap-3">
                    {/* Product Image */}
                    <div className="w-full flex flex-col justify-center items-center max-h-[200px] ">
                        <img src={dataOfCurrentPhone.thumbnail} alt={dataOfCurrentPhone.title} className="h-full"/>
                    </div>
                    
                    {/* Product Title  */}
                    <div className="flex flex-col gap-1">
                        <p className="text-mobile/h5/medium text-[#1A1A1A]">{dataOfCurrentPhone.title}</p>
                        <p className="text-mobile/title text-itel-red">₹ {dataOfCurrentPhone.specification.price}</p>
                    </div>
                    
                    {/* Product Specifications */}
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Camera:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.primaryCamera}</span>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Memory:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.storage}</span>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Dimensions:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.screenSize}</span>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Processor:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.processor}</span>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Battery:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.battery}</span>
                        </div>
                    </div> 
                    
                    {/* Buy Now */}
                    <a href={dataOfCurrentPhone.purchaseLink} target="_blank">
                        <div className="cursor-pointer bg-white rounded-3xl py-3 px-[14px border-[0.75px] border-black">
                            <BuyNowText content="BUY NOW" />
                        </div>    
                    </a>
                </div>
            )}
        </div>
    )
}

export default ShowDataForComparision