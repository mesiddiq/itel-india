import ZoomRectangle from './ZoomRectangle'

const SensorZoom = () => {
  return (
    <>
        <section className="font-markot lg:h-full lg:w-full bg-[#1c1b1b] px-4 py-9 lg:px-[230px] lg:py-[125px]">

            {/* Laptop */}
            <div className="content hidden lg:flex flex-row gap-5 h-[704px]">
                <div className='w-[50%] flex flex-col justify-between items-start overflow-hidden'>
                    <div className='flex flex-col items-start gap-6'>
                        <h1 className='text-desktop/h2 text-white'>3X In-sensor <span className='bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>Zoom</span></h1>
                        <p className='text-desktop/body/large text-grey/grey/2'>With the 3X In-sensor Zoom, you can capture distant subjects with improved composition and quality.</p>
                    </div>
                    <div className='w-[374px] h-[500px] overflow-hidden relative'>
                        <div className="absolute bottom-3 left-3 z-10">
                            <ZoomRectangle active="1X"/>
                        </div>
                        <img src='/smartphone/S24/threeXzoomImage.png' alt="threeXzoomImage" className='z-0 scale-[300%] translate-y-1/2'/>
                    </div>
                </div>

                <div className='w-[50%] overflow-hidden relative'>
                    <div className="absolute bottom-3 left-3 z-10">
                        <ZoomRectangle active="3X"/>
                    </div>
                    <img src='/smartphone/S24/threeXzoomImage.png' alt="threeXzoomImage" className='z-0 scale-[400%] translate-y-2/3'/>
                </div>
            </div>

            {/* Mobile */}
            <div className='content font-markot lg:hidden flex flex-col gap-5 h-[400px]'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-mobile/h4 text-white'>3X In-sensor <span className='bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>Zoom</span></h1>
                    <p className='text-mobile/body/2 text-grey/grey/1 text-center'>With the 3X In-sensor Zoom, you can capture distant subjects with improved composition and quality.</p>
                </div>

                <div className='flex flex-row gap-5 justify-between h-full'>
                    <div className="w-[40%] h-full overflow-hidden relative flex flex-col justify-end items-end">
                        <div className="absolute bottom-3 left-3 z-10">
                            <ZoomRectangle active="1X"/>
                        </div>
                        <div className='h-[80%] w-full'>
                            <img src='/smartphone/S24/threeXzoomImage.png' alt="threeXzoomImage" className='absolute z-0 scale-[300%] translate-y-full'/>
                        </div>
                    </div>

                    <div className='w-[60%] h-full overflow-hidden relative'>
                        <div className="absolute bottom-3 left-3 z-10">
                            <ZoomRectangle active="3X"/>
                        </div>
                        <img src='/smartphone/S24/threeXzoomImage.png' alt="threeXzoomImage" className='z-0 scale-[400%] translate-y-2/3'/>
                    </div>
                </div>
            </div>
            
        </section>
    </>
    
  )
}

export default SensorZoom