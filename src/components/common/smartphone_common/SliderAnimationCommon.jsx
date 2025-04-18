/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

// import '../../../../pages/s_series/style.css';

/**
 * @function SliderAnimationCommon
 * @description A common component for creating a marquee slider with a icon in the middle. The component also supports a text gradient if required.
 * @prop {string} text1 Text 1 for the marquee
 * @prop {string} text2 Text 2 for the marquee
 * @prop {string} icon Pass the icon (You can pass the svg code no need to download it)
 * @prop {string} svgCode If you are passing the svg code then pass the svg code
 * @prop {string} bgColor Pass the background color
 * @prop {string} textColor Pass the text color (if not gradient then pass the text color)
 * @prop {string} textGradient1 Pass the text gradient (if not gradient then pass the text color)
 * @prop {string} textGradient2 Pass the text gradient (if not gradient then pass the text color)
 * @returns {ReactElement} SliderAnimationCommon component
 */
const SliderAnimationCommon = ({
    text1, // Text 1 for the marquee
    text2, // Text 2 for the marquee
    icon, // Pass the icon (You can pass the svg code no need to download it)
    svgCode, // If you are passing the svg code then pass the svg code
    bgColor, // Pass the background color
    textColor, // Pass the text color (if not grdient then pass the text color)
    textGradient1, // Pass the text gradient (if not grdient then pass the text color)
    textGradient2, // Pass the text gradient (if not grdient then pass the text color)
    svgBgColor
}) => {
    return (
        <div className='overflow-x-hidden py-[10px]'
            style={{ backgroundColor: bgColor ? bgColor : '#ebe9e2' }}
        >
            <Marquee speed='50' direction='right' autoFill={true}>
                <h3 className="font-bricolage uppercase text-[16px] lg:text-[20px] lg:leading-6  text-grey/grey/4 font-extrabold -tracking-[0.16px]"
                    style={{
                        color: textColor ? textColor : 'black',
                        backgroundImage: textGradient1 ? `linear-gradient(to right, ${textGradient1}, ${textGradient2})` : 'none',
                        WebkitBackgroundClip: textColor ? 'initial' : 'text',
                        WebkitTextFillColor: textColor ? 'initial' : 'transparent'
                    }}
                >{text1}</h3>
                {
                    svgCode ?
                        <span className={`mx-4 block rounded-[38px] py-[3.7px] px-[13.32px] ${svgBgColor}`}>
                            {svgCode}
                        </span>
                        :
                        <img src={icon} alt="Slider Icon" className='w-7 h-[17px] mx-4' />
                }
                <h3 className="font-bricolage uppercase text-[16px] lg:text-[20px] lg:leading-6  text-grey/grey/4 font-extrabold -tracking-[0.16px]"
                    style={{
                        color: textColor ? textColor : 'black',
                        backgroundImage: textGradient1 ? `linear-gradient(to right, ${textGradient1}, ${textGradient2})` : 'none',
                        WebkitBackgroundClip: textColor ? 'initial' : 'text',
                        WebkitTextFillColor: textColor ? 'initial' : 'transparent'
                    }}
                >{text2}</h3>
                {
                    svgCode ?
                        <span className={`mx-4 block rounded-[38px] py-[3.7px] px-[13.32px] ${svgBgColor}`}>
                            {svgCode}
                        </span>
                        :
                        <img src={icon} alt="Slider Icon" className='w-7 h-[17px] mx-4' />
                }
            </Marquee>
        </div >
    );
};

export default SliderAnimationCommon;
