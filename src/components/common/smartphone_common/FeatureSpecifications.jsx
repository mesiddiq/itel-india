/* eslint-disable react/prop-types */
const FeatureSpecifications = ({featureMetric, featureMetricDescription}) => {
  return (
<<<<<<< HEAD
    <div className='flex flex-col gap-[4px] lg:gap-2 justify-center items-center '>
=======
    <div className='flex flex-col gap-[4px] lg:gap-2 items-center lg:items-start '>
>>>>>>> 4a11beb4c9df640cb8cec12d2ad2ed14ea70824b
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