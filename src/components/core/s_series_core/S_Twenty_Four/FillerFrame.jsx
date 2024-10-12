import fillerPattern from '/smartphone/S24/fillerPattern.svg'

const FillerFrame = () => {
  return (
    <div className="w-full bg-[#161616] h-[80px] hidden lg:flex flex-row">
        <img src={fillerPattern} alt="fillerPattern" className="w-1/2 h-full object-cover"/>
        <img src={fillerPattern} alt="fillerPattern" className="w-1/2 h-full object-cover"/>
    </div>
  )
}

export default FillerFrame