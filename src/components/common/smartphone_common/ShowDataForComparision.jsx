import DropDownComponent from "./DropDownComponent"
import { AllFeaturePhoneData } from '../../../data/AllFeaturePhoneData'
import { AllPhonesData } from '../../../data/AllPhoneData'

const mergedData = AllPhonesData.concat(AllFeaturePhoneData.map((phone, index) => ({
    ...phone,
    id: AllPhonesData.length + index + 1
})))
import { useEffect, useState } from "react"
import BuyNowText from "../../../components/common/smartphone_common/BuyNowText"
import { MdCurrencyRupee } from "react-icons/md"

const ShowDataForComparision = () => {

    const [currentPhone, setCurrentPhone] = useState(mergedData[0].title)
    const [dataOfCurrentPhone, setDataOfCurrentPhone] = useState(mergedData[0])

    useEffect(() => {
        const phoneData = mergedData.find((phone) => phone.title === currentPhone)
        setDataOfCurrentPhone(phoneData)
    }, [currentPhone])

    return (
        <div className="w-1/2 flex flex-col gap-3 ">
            {/* Dropdown to select phones */}
            <DropDownComponent data={mergedData} setCurrentPhone={setCurrentPhone} />

            {dataOfCurrentPhone && (
                <div className="w-full bg-[#F8F6F3] rounded-[10px] p-4 flex flex-col gap-3">
                    {/* Product Image */}
                    <div className="w-full flex flex-col justify-center items-center max-h-[200px] ">
                        <img src={dataOfCurrentPhone.thumbnail} alt={dataOfCurrentPhone.title} className="h-full"/>
                    </div>
                    
                    {/* Product Title  */}
                    <div className="flex flex-col gap-1">
                        <p className="text-mobile/h5/medium text-[#1A1A1A]">{dataOfCurrentPhone.title}</p>
                        <p className="text-mobile/title text-itel-red flex items-center"><MdCurrencyRupee />  {dataOfCurrentPhone.specification.price}</p>
                    </div>
                    
                    {/* Product Specifications */}
                    <div className="flex flex-col gap-2">
                        {dataOfCurrentPhone.specification.primaryCamera &&
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Camera:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.primaryCamera}</span>
                        </div>}
                        {dataOfCurrentPhone.specification.storage &&
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Memory:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.storage}</span>
                        </div>}
                        {dataOfCurrentPhone.specification.screenSizeForCompare &&
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Dimensions:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.screenSizeForCompare}</span>
                        </div>}
                        
                        {
                        dataOfCurrentPhone.specification.processor &&
                            <div className="flex flex-col gap-[2px]">
                                <span className="text-mobile/h7">Processor:</span>
                                <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.processor}</span>
                            </div>
                        }

                        {dataOfCurrentPhone.specification.battery &&
                        <div className="flex flex-col gap-[2px]">
                            <span className="text-mobile/h7">Battery:</span>
                            <span className="text-mobile/small/body">{dataOfCurrentPhone.specification.battery}</span>
                        </div>}
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