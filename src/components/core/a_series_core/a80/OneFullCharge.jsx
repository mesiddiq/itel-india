import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const OneFullCharge = () => {

    const sectionRef = useRef(null)
    const batteryRef = useRef(null)
    const skeletonRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                toggleActions: 'play reverse restart none',
            },
        })

        tl.to(batteryRef.current, { y: -10, x: -20, scale: 0.8 })
            .to(batteryRef.current, { y: 50, x: 20, scale: 0.6 }, 0)
            .to(skeletonRef.current, { y: -35, x: -40 })

    }, [])

    return (
        <section ref={sectionRef} className='relative overflow-hidden bg-[url("/smartphone/A80/AllSections/onedaybattery/text.svg")] lg:h-[600px]  bg-contain lg:bg-right bg-bottom bg-no-repeat px-4 md:px-0' >
            <div className="content h-full flex items-center  lg:justify-center  relative pt-6 md:pt-0 flex-col lg:flex-row">
                <div className="space-y-1 lg:space-y-4 lg:max-w-[450px] xl:max-w-[500px]">
                    <h4 className="text-[10px] leading-3 lg:text-[14px] lg:leading-4  uppercase font-medium tracking-[0.6px] text-[#161410]/40 text-center lg:text-left ">all-day play to the fullest</h4>
                    <h2 className="text-[28px] leading-9 lg:text-desktop/h2 font-medium -tracking-[0.28px] text-center lg:text-left text-a-80-dark">One Full Charge Lasts 3 Days.</h2>
                    <p className="text-mobile/body/2 lg:text-desktop/body/1 text-a-80-dark text-center lg:text-left">The 5,000mAh battery meets or exceeds the usage expectations of various users. One full charge lasts up to 3 days, 1-2 days for heavy users, and has an impressive lifespan of over 4 years.
                    </p>
                    <div className="flex gap-10 items-center justify-center lg:justify-start">
                        <div className="pl-3 flex flex-col border-l border-[#ffbd6d] ">
                            <h2 className="lg:text-[32px] text-[20px] leading-9 font-bold lg:leading-[57px] tracking-[0.32px] text-a-80-dark">
                                35 Days
                            </h2>
                            <p className="lg:text-[20px] text-[12px] leading-5 lg:leading-9 uppercase tracking-[0.2px] text-a-80-dark">
                                Standby Time
                            </p>
                        </div>
                        <div className="pl-3 flex flex-col border-l border-[#ffbd6d] ">
                            <h2 className="lg:text-[32px] text-[20px] leading-9 font-bold lg:leading-[57px] tracking-[0.32px] text-a-80-dark">
                                31 Hours
                            </h2>
                            <p className="lg:text-[20px] text-[12px] leading-5 lg:leading-9 uppercase tracking-[0.2px] text-a-80-dark">
                                Length of calls
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] lg:max-h-[600px] lg:h-full max-w-[320px] lg:max-w-[700px]  mx-auto w-full">
                    <img ref={batteryRef} className='absolute z-20 top-0 lg:-top-10 right-12 lg:right-4 max-w-[380px] lg:max-w-[700px] ' src="/smartphone/A80/AllSections/onedaybattery/battery.svg" alt="" />
                    <img ref={skeletonRef} className='absolute max-w-[300px] lg:max-w-[500px] bottom-0 right-0' src="/smartphone/A80/AllSections/onedaybattery/batteryskeleton.webp" alt="" />
                </div>
            </div>
        </section>
    )
}

export default OneFullCharge