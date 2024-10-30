/* eslint-disable react/prop-types */
const ColorSelectorButtonInactive = ({textColor, buttonText, buttonGradient }) => {
  return (
    <>
        <span className={` hidden lg:block border-[2px] border-itel-red rounded-[100px] h-10 w-10 p-[2px] `}>
            <div className={`h-full w-full ${buttonGradient} rounded-full`}></div>
        </span>
        <div className="block lg:hidden w-screen">
            <div className={` flex flex-row-reverse lg:flex-row justify-center lg:justify-between items-center pl-4 p-[7px] gap-2 lg:gap-5 rounded-full`}>
                <span className={` ${textColor} text-mobile/body/2 lg:text-desktop/button uppercase `}>
                {buttonText}
                </span>
                <div className={`h-[26px] w-[26px] ${buttonGradient} rounded-full`}></div>
            </div>
        </div>   
    </>
  )
}

export default ColorSelectorButtonInactive