/* eslint-disable react/prop-types */
const FeatureSpecifications = ({featureMetric, featureMetricDescription}) => {
  return (
    <div className='flex flex-col gap-[4px] lg:gap-2 md:items-center lg:items-start '>
        <span className='font-markot opacity-80 text-mobile/h6 lg:text-desktop/h3'>
            {featureMetric}
        </span>
        <span className='font-markot opacity-80 text-mobile/small/body lg:text-desktop/body/1'>
            {featureMetricDescription}
        </span>
    </div>
  )
}

export default FeatureSpecifications