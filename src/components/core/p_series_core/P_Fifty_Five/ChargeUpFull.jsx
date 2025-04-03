import FeatureSpecifications from "../../../common/smartphone_common/FeatureSpecifications"

const ChargeUpFull = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden md:block h-screen w-full relative" style={{
            backgroundImage: 'url(/smartphone/P55/chargeUpFull.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'    
        }}>
            
            {/* <img src='/smartphone/P55/chargeUpFull.png' alt="chargeUpFull" className="absolute w-full h-full object-cover z-0" /> */}

            <div className="font-markot content h-full py-[95px] relative z-10 flex flex-col justify-between">
                <div className="flex flex-col gap-[24px] max-w-[353px]">
                    <h3 className="text-desktop/h2 bg-gradient-to-r from-[#D5EEF9] to-[#70A2E1] bg-clip-text text-transparent">Charge Up Full in 170mins</h3>
                    <h3 className="text-desktop/body/large text-white  max-w-[342px]">41 Days Standby Time, 60 Hours Talk time, 24 Hours Video Time </h3>
                </div>

                <div className="flex flex-col gap-[36px] text-white">
                    <div className="flex flex-row gap-[28px] justify-between items-center max-w-[433px]">
                        <FeatureSpecifications featureMetric="5000mAh" featureMetricDescription="High-Endurance Battery" />
                        <div className="h-[37px] lg:h-[81px] border"></div>
                        <FeatureSpecifications featureMetric="18 W" featureMetricDescription="Type-C Fast Charging" />
                    </div>

                    <h3 className="text-desktop/body/1">
                        Battery : Power Boost | Ultra Power Saving | Battery Optimization
                    </h3>
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden min-h-[583px] h-[583px] w-full relative" style={{
            backgroundImage: 'url(/smartphone/P55/chargeUpFullMobile.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right'    
        }}>
            
            {/* <img src='/smartphone/P55/chargeUpFull.png' alt="chargeUpFull" className="absolute right-0 w-full h-full object-cover z-0" /> */}
            <div className="content h-full">
            <div className="font-markot px-4 h-full w-full py-[27px] relative z-10 flex flex-col gap-[24px] max-h-[300px]">
                <div className="flex flex-col gap-[12px] max-w-[353px]">
                    <h3 className="text-mobile/h4 bg-gradient-to-r from-[#D5EEF9] to-[#70A2E1] bg-clip-text text-transparent">Charge Up Full in 170mins</h3>
                    <h3 className="text-mobile/body/large text-white  max-w-[342px]">41 Days Standby Time, 60 Hours Talk time, 24 Hours Video Time </h3>
                </div>

                <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-row gap-[20px] justify-between items-center max-w-[239px]">
                        <FeatureSpecifications featureMetric="5000mAh" featureMetricDescription="High-Endurance Battery" />
                        <div className="h-[37px] lg:h-[81px] border"></div>
                        <FeatureSpecifications featureMetric="18 W" featureMetricDescription="Type-C Fast Charging" />
                    </div>

                    <h3 className="text-mobile/body/2 max-w-[256px]">
                        Battery Lab: Power Boost | Ultra Power Saving | Battery Optimization
                    </h3>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default ChargeUpFull