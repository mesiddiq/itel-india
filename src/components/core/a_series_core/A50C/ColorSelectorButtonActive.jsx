/* eslint-disable react/prop-types */
const ColorSelectorButtonActive = ({ bg, textColor, buttonText, buttonGradient }) => {
  return (
    <div className="lg:w-auto w-screen px-5 lg:px-0">
        <div className={` ${bg} border-[2px] border-itel-red flex flex-row-reverse lg:flex-row justify-center lg:justify-between items-center pl-4 p-[7px] gap-2 lg:gap-5 rounded-full `}>
            <span className={`text-mobile/h6 lg:text-desktop/button uppercase ${textColor}`}>
                {buttonText}
            </span>
            <div className={`h-[26px] w-[26px] ${buttonGradient} rounded-full`}></div>
        </div>
    </div> 
  )
}

export default ColorSelectorButtonActive