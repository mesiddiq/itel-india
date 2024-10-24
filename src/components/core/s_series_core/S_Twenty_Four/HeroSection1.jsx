import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import BuyNowSquareBG from "../../../common/smartphone_common/BuyNowSquareBG"

export default function HeroSection1() {
    const textControls = useAnimation()
    const backgroundControls = useAnimation()
    const commonControl = useAnimation()

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
        <div className="relative h-screen w-full overflow-hidden bg-black">
            <motion.div
                className="absolute bg-[url('/smartphone/S24/herobanner.png')] min-h-[750px] min-w-full bg-cover bg-center bg-no-repeat"
                initial={{ opacity: 0, y: "100%" }}
                animate={backgroundControls}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="content h-full flex items-center">
                <div className="relative z-10 flex flex-col px-4">
                    <motion.div
                        className="font-markot w-[140px] flex flex-row justify-between items-center gap-[3px] rounded-full px-[6px] py-[3px] border-2 border-transparent bg-clip-padding border-white"
                        animate={commonControl}
                        initial={{ opacity: 0, x: -550 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1 className="font-bold bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent uppercase text-[14px] leading-[16.8px] tracking-[0.01em]">
                            Super Series
                        </h1>
                        <img src="/smartphone/S24/superSeriesStar.svg" alt="Super Series Star" className="w-3" />
                    </motion.div>

                    <motion.h1
                        className="font-markot mt-6 text-mobile/h1 lg:text-desktop/large/h bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent"
                        initial={{ scale: 0, opacity: 0, x: 550, y: 50 }}
                        animate={textControls}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        S24
                    </motion.h1>
                    <motion.div
                        className="max-w-[400px] mt-6 z-10  lg:max-w-full font-markot text-mobile/tile lg:text-desktop/title text-grey/grey/2 lg:text-grey/grey/2 lg:w-[473px] uppercase"
                        animate={commonControl}
                        initial={{ opacity: 0, x: -500 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        108MP AI Camera | 16GB* (8GB+8GB*) RAM + 128GB ROM | Helio G91 Processor
                    </motion.div>

                    <motion.div
                        className="w-full mt-16"
                        animate={commonControl}
                        initial={{ opacity: 0, x: -550 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {/* Available at Price */}
                        <div
                            className="text-white flex flex-col gap-[16px]"
                        >
                            <h1 className="flex flex-row justify-start items-center gap-1 font-markot lg:text-[20px] lg:leading-[24px] lg:tracking-[0.01em] text-mobile/small/body">
                                <span>Available at </span>
                                <span className="font-markot font-bold text-[20px] leading-[26px] tracking-[0.01em] ">
                                    ₹10,999
                                </span>
                            </h1>

                            {/* Buy Now Button (Visible only on medium and larger screens) */}
                            <div className="hidden lg:block">
                                <BuyNowSquareBG />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}