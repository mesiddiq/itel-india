/* eslint-disable react/prop-types */

const CustomFeatureSpecifications = ({featureMetric, featureMetricDescription}) => {
    return (
      <div className='flex flex-col gap-[4px] lg:gap-2 '>
          <span className='font-markot opacity-80 text-mobile/h6 lg:text-desktop/h4'>
              {featureMetric}
          </span>
          <span className='font-markot opacity-80 text-mobile/small/body lg:text-desktop/body/1'>
              {featureMetricDescription}
          </span>
      </div>
    )
  }

const QuickBoost = () => {
  return (
    <>
        {/* Laptop */}
        <div className="border border-black/10 hidden sm:block relative font-markot overflow-hidden rounded-2xl md:rounded-[56px] ">
            <div className="h-full w-full rounded-2xl md:rounded-[56px]">
                <img src="/smartphone/A05i/quickBoost.png"/>
            </div>
            
            <div className="flex flex-col sm:gap-[20px] responsive-width-Qb lg:gap-[36px] absolute top-0 w-full h-full sm:p-5 lg:px-[90px] lg:pt-[60px] ">

                <div className="sm:max-w-[250px] responsive-width-Qb2 lg:max-w-[402px] 2xl:max-w-[482px]">
                    <h1 className="sm:text-desktop/h4 lg:text-desktop/h2 text-[#232323]">Quick Boost: 10W Type-C Fast Charging Support</h1>
                </div>

                <div className="flex flex-col sm:gap-3 lg:gap-5 text-black w-[153px] max-w-[153px] lg:w-[253px] lg:max-w-[253px]">
                    <CustomFeatureSpecifications featureMetric="4000 mAh" featureMetricDescription="Battery" />
                    <div className="lg:w-full border border-grey/grey/3"></div>
                    <CustomFeatureSpecifications featureMetric="32 Days*" featureMetricDescription="Standby Time" />
                    <div className="lg:w-full border border-grey/grey/3"></div>
                    <CustomFeatureSpecifications featureMetric="7.5 Hours*" featureMetricDescription="Talktime" />
                </div>

                <h1 className="text-[#6F7384] absolute sm:bottom-6 lg:bottom-12 sm:text-desktop/body/2/regular lg:text-desktop/body/1">*5W charger available inside the box</h1>
            </div>
        </div>

        {/* Mobile */}
        <div className="border border-black/10 block sm:hidden relative font-markot overflow-hidden rounded-2xl md:rounded-[56px] ">
            <div className="h-full w-full rounded-2xl md:rounded-[56px]">
                <img src="/smartphone/A05i/quickBoostMobile.jpg" className="object-cover w-full"/>
            </div>
            
            <div className="flex mx-5 flex-col absolute top-2/3 items-center gap-4 max-w-[296px] w-full h-full ">

                <div className="max-w-[296px]">
                    <h1 className="text-mobile/h5/medium text-[#232323]">Quick Boost: 10W Type-C Fast Charging Support</h1>
                </div>

                <div className="flex flex-row gap-[12px] text-black w-[296px] max-w-[296px]">
                    <CustomFeatureSpecifications featureMetric="4000 mAh" featureMetricDescription="Battery" />
                    <div className="lg:w-full border border-grey/grey/3"></div>
                    <CustomFeatureSpecifications featureMetric="32 Days*" featureMetricDescription="Standby Time" />
                    <div className="lg:w-full border border-grey/grey/3"></div>
                    <CustomFeatureSpecifications featureMetric="7.5 Hours*" featureMetricDescription="Talktime" />
                </div>

            </div>
                
            <h1 className="mx-5 text-[#6F7384] absolute bottom-6 text-mobile/small/body">*5W charger available inside the box</h1>
        </div>
    </>
  )
}

export default QuickBoost