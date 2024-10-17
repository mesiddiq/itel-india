import FeatureSpecifications from "../../../common/smartphone_common/FeatureSpecifications"

const ChargeUpFull = () => {
  return (
    <div className="h-screen w-full relative">
        
        <img src='/smartphone/P55/chargeUpFull.png' alt="chargeUpFull" className="absolute w-full h-full object-cover z-0" />

        <div className="font-markot content h-full w-full py-[95px] relative z-10 flex flex-col justify-between">
            <div className="flex flex-col gap-[24px] max-w-[353px]">
                <h1 className="text-desktop/h2 bg-gradient-to-r from-[#D5EEF9] to-[#70A2E1] bg-clip-text text-transparent">Charge Up Full in 170mins</h1>
                <h1 className="text-desktop/body/large text-white  max-w-[342px]">41 Days Standby Time, 60 Hours Talk time, 24 Hours Video Time </h1>
            </div>

            <div className="flex flex-col gap-[36px]">
                <div className="flex flex-row gap-[28px] justify-between items-center max-w-[433px]">
                    <FeatureSpecifications featureMetric="5000mAh" featureMetricDescription="High-Endurance Battery" />
                    <div className="h-[37px] lg:h-[81px] border"></div>
                    <FeatureSpecifications featureMetric="18 W" featureMetricDescription="Type-C Fast Charging" />
                </div>

                <h1 className="text-desktop/body/1">
                    Battery Lab: Power Boost | Ultra Power Saving | Battery Optimization
                </h1>
            </div>
        </div>
    </div>
  )
}

export default ChargeUpFull