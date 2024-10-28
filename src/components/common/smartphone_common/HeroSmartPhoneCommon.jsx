/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useSize } from "react-haiku"
import { MdCurrencyRupee } from 'react-icons/md'

/**
 * @function HeroSmartPhoneCommon
 * @description A common component for smartphone hero sections, with animations and a gradient background.
 * @param {Object} props Component props
 * @prop {string} bgDesktop Hero Background url for desktop
 * @prop {string} bgMobile Hero Background url for mobile
 * @prop {number} price Product price
 * @prop {string} headingText Product Heading
 * @prop {string} tagText Tag text
 * @prop {string} theme Theme dark | light
 * @prop {string} purchaseLink Product purchase link
 * @prop {string} description Product description
 * @prop {string} [gradient1="#3a3358"] Gradient 1 HEX value (Default: #3a3358) [If you page dosen't have gradient then pass same color code in both values]
 * @prop {string} [gradient2="#3a3358"] Gradient 2 HEX value (Default: #3a3358) [If you page dosen't have gradient then pass same color code in both values]
 */
export default function HeroSmartPhoneCommon({
    bgDesktop, // Hero Background url for desktop
    bgMobile, // Hero Background url for mobile
    price, // Product price
    headingText, // Product Heading
    tagText, // Tag text
    theme, // Theme dark | light
    purchaseLink, // Product purchase link
    description, // Product description
    gradient1, // Gradient 1 HEX value (Default: #3a3358) [If you page dosen't have gradient then pass same color code in both values]
    gradient2 // Gradient 2 HEX value (Default: #3a3358) [If you page dosen't have gradient then pass same color code in both values]
}) {
    const textControls = useAnimation()
    const backgroundControls = useAnimation()
    const commonControl = useAnimation()

    const ref = useRef(null)
    const { width } = useSize(ref)

    useEffect(() => {
        const sequence = async () => {
            await textControls.start({ scale: 1.4, opacity: 1 })
            await new Promise(resolve => setTimeout(resolve, 200))
            await backgroundControls.start({ opacity: 1, y: 0 })
            await textControls.start({ x: 0, y: 0, scale: 1 })
            await commonControl.start({ opacity: 1, x: 0 })
        }
        sequence()
    }, [textControls, backgroundControls])

    return (
        <div ref={ref} className={`relative h-[521px] lg:min-h-[750px] w-full overflow-hidden ${theme == "dark" ?'bg-white':'bg-black'}`}>
            <motion.div
                className={`absolute min-h-[521px] lg:min-h-[750px] min-w-full bg-cover bg-center bg-no-repeat`}
                initial={{ opacity: 0, y: "100%" }}
                animate={backgroundControls}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                    background: `url(${width > 1024 ? bgDesktop : bgMobile}) center center/cover no-repeat`,
                }}
            />
            <div className="content h-full flex lg:items-center pt-11 lg:pt-0 px-4 md:px-0">
                <div className="relative z-10">
                    <motion.div
                        className=""
                        animate={commonControl}
                        initial={{ opacity: 0, x: -550 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {/* {tagElement} */}
                        <div className="flex items-center gap-[3px] border-2  rounded-full w-fit px-[6px]"
                            style={{ border: `2px solid ${gradient1}` }}
                        >
                            <h1 className="text-[14px] font-extrabold bg-clip-text text-transparent font-bricolage tracking-[0.14px] uppercase" style={{
                                background: `linear-gradient(to right, ${gradient1}, ${gradient2})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                {tagText}
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <g clip-path="url(#clip0_13925_38022)">
                                    <path d="M11.5 5.99832C11.5012 6.15951 11.4522 6.31708 11.3598 6.44913C11.2674 6.58118 11.1361 6.68116 10.9842 6.73515L7.8679 7.8684L6.73515 10.9842C6.67932 11.1346 6.57879 11.2643 6.44708 11.3559C6.31536 11.4475 6.15876 11.4966 5.99832 11.4966C5.83788 11.4966 5.68129 11.4475 5.54957 11.3559C5.41785 11.2643 5.31733 11.1346 5.2615 10.9842L4.12874 7.8679L1.01245 6.73515C0.862038 6.67932 0.732315 6.5788 0.640708 6.44708C0.549102 6.31536 0.5 6.15876 0.5 5.99832C0.5 5.83788 0.549102 5.68129 0.640708 5.54957C0.732315 5.41785 0.862038 5.31733 1.01245 5.2615L4.12874 4.12875L5.2615 1.01245C5.31733 0.862038 5.41785 0.732315 5.54957 0.640708C5.68129 0.549102 5.83788 0.5 5.99832 0.5C6.15876 0.5 6.31536 0.549102 6.44708 0.640708C6.57879 0.732315 6.67932 0.862038 6.73515 1.01245L7.86839 4.12875L10.9842 5.2615C11.1361 5.31549 11.2674 5.41547 11.3598 5.54752C11.4522 5.67957 11.5012 5.83714 11.5 5.99832Z" fill="url(#paint0_linear_13925_38022)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_13925_38022" x1="0.5" y1="0.5" x2="18.5476" y2="3.12013" gradientUnits="userSpaceOnUse">
                                        <stop stop-color={gradient1} />
                                        <stop offset="1" stop-color={gradient2} />
                                    </linearGradient>
                                    <clipPath id="clip0_13925_38022">
                                        <rect width="12" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: width > 786 ? 100 : 500, y: width > 1024 ? 50 : 20 }}
                        animate={textControls}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >

                        <h1 className="text-mobile/h1 font-markot lg:text-desktop/large/h uppercase"
                            style={{
                                background: `linear-gradient(to right, ${gradient1}, ${gradient2})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {headingText}
                        </h1>
                    </motion.div>
                    <motion.div
                        className={`max-w-[400px] mt-1 lg:mt-6 z-10 font-markot text-mobile/tile lg:text-desktop/title ${theme == "dark" ? "text-black/1" : "text-white/80"}  lg:max-w-[473px] uppercase`}
                        animate={commonControl}
                        initial={{ opacity: 0, x: -500 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {description}
                    </motion.div>

                    <motion.div
                        className="w-full mt-16"
                        animate={commonControl}
                        initial={{ opacity: 0, x: -550 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {/* Available at Price */}
                        <div
                            className="flex flex-col gap-[16px]"
                        >
                            <h1 className={`flex flex-row justify-start items-center gap-1 font-markot lg:text-[20px] lg:leading-[24px] lg:tracking-[0.01em] text-mobile/small/body ${theme == "dark" ? 'text-black/1' : 'text-white'}`}>
                                <span>Available at </span>
                                <span className="font-markot flex items-center font-bold text-[20px] leading-[26px] tracking-[0.01em] ">
                                    <MdCurrencyRupee /> {price} /-
                                </span>
                            </h1>

                            {/* Buy Now Button (Visible only on medium and larger screens) */}
                            <a href={purchaseLink} target="_blank">
                                <button className="hidden lg:block">
                                    <img src={theme == "dark" ? "/static_page/buynowdark.svg" : "/static_page/buynowlight.svg"} alt="Buy Now Button" />
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}