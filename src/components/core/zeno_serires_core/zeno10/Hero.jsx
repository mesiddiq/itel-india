import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const sectionRef = useRef(null)
    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)


    useEffect(() => {

        const tl = gsap.timeline()

        tl.from(image1.current, {
            y: 100, opacity: 0, duration: 1
        })

        tl.from(image2.current, {
            opacity: 0, duration: 1, rotate: 0
        }).from(image3.current, {
            opacity: 0, duration: 1, rotate: 0
        })
    }, [])


    return (
        <section ref={sectionRef} className="relative overflow-hidden">
            <div className="lg:h-[824px] -z-10 h-[480px] md:h-[580px] bg-[url('/smartphone/zeno10/hero/bghero.webp')] bg-cover bg-center relative">
                <img ref={image1} src="/smartphone/zeno10/hero/frontglass.webp" alt="Zeno Front Face" className="absolute bottom-0  left-1/2 -translate-x-1/2 lg:max-h-[716px] md:max-h-[400px] max-h-[265px] z-30" />
                <img ref={image2} src="/smartphone/zeno10/hero/greenback.webp" alt="Zeno Green Back" className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:max-h-[650px] md:max-h-[350px] max-h-[235px] rotate-[35deg] origin-bottom-right" />
                <img ref={image3} src="/smartphone/zeno10/hero/purpleback.webp" alt="Zeno Purple Back" className="absolute bottom-0  left-1/2 -translate-x-1/2 lg:max-h-[650px] md:max-h-[350px] max-h-[235px] -rotate-[35deg] origin-bottom-left" />
                <div className="w-full lg:h-56 h-10 md:h-16 text-white absolute bottom-0 bg-gradient-to-t from-black via-black  to-transparent z-40"></div>
            </div>
            <div className="font-markot bg-black z-50">
                <div className="content flex flex-col items-center space-y-2 text-center">
                    <img src="/smartphone/zeno10/hero/symbol.webp" alt="Zeno 10 symbol" className="max-w-[60px] md:max-w-[80px] lg:max-w-[112px]" />
                    <img src="/smartphone/zeno10/hero/zeno10.png" alt="Zeno 10 Text" className="max-w-[246px] lg:max-w-[529px]" />
                    <h5 className="lg:text-[24px] font-normal text-white">6.6" HD+ Display with Dynamic Bar | 5000mAh Massive Battery | 64GB Big Memory </h5>
                    <p className="text-white/90 lg:text-desktop/h6/medium">A better vision for the future that holds.</p>
                </div>
                <div className="flex items-center gap-4 justify-center py-6 lg:py-12">
                    <a href="https://amzn.in/d/hDpj5DV" target="_blank" className="hidden md:block">
                        <img src="/smartphone/zeno10/hero/BuyNowbutton.png" alt="Buy now button" className="lg:max-w-[160px] max-w-[80px]" />
                    </a>
                    <h5 className="lg:text-desktop/h5 text-white ">
                        <span className="font-normal">
                            Available at
                        </span>
                        <span className="font-bold"> ₹ 5,699/-</span>
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Hero;
