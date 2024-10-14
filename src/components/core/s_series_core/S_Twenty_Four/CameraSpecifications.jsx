import FeatureSpecifications from '../../../common/smartphone_common/FeatureSpecifications'

const CameraSpecifications = () => {
    return (
        <div className='font-markot relative lg:h-full h-[454px] bg-black overflow-hidden'>
            <img src="/smartphone/S24/s23Camera.png" alt="Camera Specifications" className="w-full"/>
            
            <div className='flex flex-col justify-center items-center gap-4 lg:gap-[42px] text-white absolute bottom-16 md:bottom-8 lg:bottom-16 w-full left-1/2 lg:transform -translate-x-1/2'>
                
                <div className='content flex flex-col justify-center items-center gap-2 lg:gap-[14px]'>
                    <div className='text-mobile/h5/medium lg:text-desktop/h2 text-center'>
                        Capturing Clarity<br/> 
                        <span className='bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                            108MP Ultra Clear Camera
                        </span>
                    </div>
                    <div className='text-mobile/small/body lg:text-desktop/h5'>
                        Samsung HM6 ISOCELL Sensor
                    </div>
                </div>
                
                <div className='flex flex-row gap-4 lg:gap-16 justify-between items-center'>
                    <FeatureSpecifications featureMetric="1.93 µm" featureMetricDescription="Fusion Pixel"/>
                    <div className='h-[37px] lg:h-[81px] border'></div>
                    <FeatureSpecifications featureMetric="12000 * 9000" featureMetricDescription="Fusion Pixel"/>
                    <div className='h-[37px] lg:h-[81px] border'></div>
                    <FeatureSpecifications featureMetric="f/1.6" featureMetricDescription="Large Aperture"/>
                </div>

            </div>
            
        </div>
    )
}

export default CameraSpecifications