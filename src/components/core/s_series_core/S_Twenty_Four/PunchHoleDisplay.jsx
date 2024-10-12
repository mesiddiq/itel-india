import s24_display from '/smartphone/S24/s24_display.png'
import FeatureSpecifications from '../../../common/smartphone_common/FeatureSpecifications'

const PunchHoleDisplay = () => {
    return (
        <div className='relative lg:h-[1000px] h-[400px] bg-black overflow-hidden'>
            <img src={s24_display} alt="Camera Specifications" className="w-full"/>
            
            <div className='flex flex-col justify-center items-center gap-4 lg:gap-[42px] text-white absolute bottom-8 lg:top-[600px] w-[328px] text-center lg:text-left lg:w-full left-1/2 lg:transform -translate-x-1/2'>
                
                <div className='flex flex-col justify-center items-center gap-2 lg:gap-4'>
                    <div className='FFMarkMedium text-mobile/h5/medium lg:text-desktop/h2 text-center'>
                        Seamless Sliding<br/> 
                        <span className='bg-gradient-to-r from-[#FFCF92] via-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                        90Hz Punch-Hole Display
                        </span>
                    </div>
                    <div className='FFMarkRegular text-mobile/small/body lg:text-desktop/body/large text-center'>
                        <span className='block lg:hidden'>
                            Dive into an effortlessly smooth touch experience<br/>every time with the 6.6” HD+ punch-hole display<br/>phone featuring a 90Hz refresh rate. 
                        </span>
                        <span className='hidden lg:block'>
                            Dive into an effortlessly smooth touch experience every time with the<br/>6.6” HD+ punch-hole display phone featuring a 90Hz refresh rate. 
                        </span>
                    </div>
                </div>
                
                <div className='flex flex-row gap-4 lg:gap-16 justify-between items-center'>
                    <FeatureSpecifications featureMetric="1612*720" featureMetricDescription="HD+ Resolution"/>
                    <div className='h-[37px] lg:h-[81px] border'></div>
                    <FeatureSpecifications featureMetric="480 nits" featureMetricDescription="Peak Brightness"/>
                </div>

            </div>
            
        </div>
    )
}

export default PunchHoleDisplay