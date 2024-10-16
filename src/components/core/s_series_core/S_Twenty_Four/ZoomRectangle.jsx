/* eslint-disable react/prop-types */
const ZoomRectangle = ({ active }) => {
  return (
    <>
        <div className="hidden lg:flex flex-col gap-[7px] p-[6px] border-[0.7px] rounded-[50px] bg-white/30 backdrop-blur-[3px]">
            <span className={`text-desktop/h6/medium text-black/1 p-[15px] rounded-[50px] ${ active == "3X" ? 'bg-white/40 backdrop-blur-sm border' : ''}`}>3X</span>
            <span className="text-desktop/h6/medium text-black/1 p-[15px] rounded-[50px]">2X</span>
            <span className={`text-desktop/h6/medium text-black/1 p-[15px] rounded-[50px] ${ active == "1X" ? 'bg-white/40 backdrop-blur-sm border' : ''}`}>1X</span>
        </div>

        <div className="lg:hidden flex flex-col gap-[3px] p-[2px] rounded-[50px] bg-white/10 backdrop-blur-[3px]">
            <span className={`text-[5.63px] leading-[6.76px] font-bold tracking-[0.01em] text-black/1 p-[5px] rounded-[50px] ${ active == "3X" ? 'bg-white/20 backdrop-blur-sm border-[0.35px] border-white/10' : ''}`}>3X</span>
            <span className="text-[5.63px] leading-[6.76px] font-bold tracking-[0.01em] text-black/1 p-[5px] rounded-[50px]">2X</span>
            <span className={`text-[5.63px] leading-[6.76px] font-bold tracking-[0.01em] text-black/1 p-[5px] rounded-[50px] ${ active == "1X" ? 'bg-white/20 backdrop-blur-sm border-[0.35px] border-white/10' : ''}`}>1X</span>
        </div>
    </>
  )
}

export default ZoomRectangle