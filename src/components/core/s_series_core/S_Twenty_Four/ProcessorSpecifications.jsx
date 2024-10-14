import processor from '/smartphone/S24/processor.png'
import processorBG from '/smartphone/S24/processor-background.png'
import FeatureSpecifications from '../../../common/smartphone_common/FeatureSpecifications'

const CameraSpecifications = () => {
    return (
        <div className='relative font-markot lg:h-[1020px] h-[454px] bg-black overflow-hidden'>
            <img src={processorBG} alt="Processor Background" className="absolute bottom-0 w-full"/>
            <img src={processor} alt="Processor Image" className="w-1/2 lg:w-auto absolute top-[80%] lg:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            
            <div className='flex flex-col justify-center items-center gap-4 lg:gap-[42px] text-white absolute top-[40px] lg:top-[90px] w-full left-1/2 lg:transform -translate-x-1/2'>
                
                <div className='flex flex-col justify-center items-center gap-2 lg:gap-[14px]'>
                    <div className='text-mobile/h5/medium lg:text-desktop/h2 text-center'>
                        Game Like a Pro<br/> 
                        <span className='bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                            Helio G91 Processor
                        </span>
                    </div>
                    <div className='text-mobile/small/body lg:text-desktop/body/large'>
                        Play your favourite games like pro with lightning-fast responsiveness.
                    </div>
                </div>
                
                <div className='w-[350px] lg:w-[779px] lg:max-w-[779px] lg:text-nowrap text-center lg:text-left flex flex-row gap-4 lg:gap-12 justify-between items-center'>
                    <FeatureSpecifications featureMetric="12nm" featureMetricDescription="TSMC High-efficiency Process"/>
                    <div className='h-[56px] lg:h-[107px] border'></div>
                    <FeatureSpecifications featureMetric="Upto 2.0GHz" featureMetricDescription="Octa-core CPU"/>
                    <div className='h-[56px] lg:h-[107px] border'></div>
                    <FeatureSpecifications featureMetric="260000+" featureMetricDescription="AnTuTu Score"/>
                </div>

            </div>
            
        </div>
    )
}

export default CameraSpecifications