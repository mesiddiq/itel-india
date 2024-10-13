import threeXzoomImage from '/smartphone/S24/threeXzoomImage.png'

const SensorZoom = () => {
  return (
    <section className="text-markot h-full w-full bg-[#1c1b1b] px-[230px] py-[125px]">
        <div className="flex flex-row gap-5 justify-between items-center">
            <div className="w-[40%]flex flex-col gap-5 justify-between items-start">
                <div className="flex flex-col gap-6">
                    <h1 className="text-desktop/h2 text-white">
                        3X In-sensor <span className="bg-gradient-to-r from-[#FFCF92] via-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">Zoom</span>
                    </h1>
                    <h3 className="text-desktop/body/large text-grey/grey/1">With the 3X In-sensor Zoom, you can capture distant subjects with improved composition and quality.</h3>
                </div>
                <div className="w-[370px] h-[500px]">
                    <img src={threeXzoomImage} alt='threeXzoomImage' className='h-full object-cover'/>
                </div>
            </div>   

            <div className="w-[60%] overflow-hidden h-[650px]">
                <img src={threeXzoomImage} alt='threeXzoomImage' className='transform translate-y-1/2 scale-[200%] h-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default SensorZoom