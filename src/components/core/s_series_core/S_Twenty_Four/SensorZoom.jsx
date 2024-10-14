import ZoomRectangle from './ZoomRectangle'
import threeXzoomImage from '/smartphone/S24/threeXzoomImage.png'

const SensorZoom = () => {
  return (
    <section className="font-markot h-full w-full bg-[#1c1b1b] py-9 lg:px-[230px] lg:py-[125px]">

        <div className="flex flex-row gap-5 h-[704px]">
            <div className='w-[40%] flex flex-col justify-between overflow-hidden'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-desktop/h2 text-white'>3X In-sensor <span className='bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>Zoom</span></h1>
                    <p className='text-desktop/body/large text-grey/grey/2'>With the 3X In-sensor Zoom, you can capture distant subjects with improved composition and quality.</p>
                </div>
                <div className='w-[374px] h-[500px] overflow-hidden relative'>
                    <div className="absolute bottom-3 left-3 z-10">
                        <ZoomRectangle active="1X"/>
                    </div>
                    <img src={threeXzoomImage} alt="threeXzoomImage" className='z-0 scale-[300%] translate-y-1/2'/>
                </div>
            </div>

            <div className='w-[60%] overflow-hidden relative'>
                <div className="absolute bottom-3 left-3 z-10">
                    <ZoomRectangle active="3X"/>
                </div>
                <img src={threeXzoomImage} alt="threeXzoomImage" className='z-0 scale-[400%] translate-y-2/3'/>
            </div>
        </div>

    </section>
  )
}

export default SensorZoom