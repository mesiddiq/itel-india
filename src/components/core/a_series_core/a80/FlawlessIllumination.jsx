import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FlawlessIllumination = () => {

    const sectionRef = useRef(null)

    const smartPhoneRef = useRef(null)
    const smartPhoneMobileRef = useRef(null)
    const ringLightRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '50%',
                scrub: true,
                toggleActions: 'play reverse restart none',
            },
        });

        tl.to(ringLightRef.current, { scale: 0.3, opacity: 1 })
        tl.from(smartPhoneRef.current, { opacity: 0 })
        tl.to(ringLightRef.current, { opacity: 0 })
        tl.from(textRef.current, { y: -300, opacity: 0,duration:2 })

    }, [])

    return (
        <div className='bg-black h-[400vh] relative' ref={sectionRef}>
            <div className="h-screen sticky top-0 w-full ">
                <div className="relative h-full w-full overflow-hidden lg:pt-[60px] pt-8">
                    <img ref={ringLightRef} className='h-full z-10 scale-150 object-contain opacity-0 absolute top-32 -left-10  md:left-0 w-full' src="/smartphone/A80/AllSections/flashlight/o.png" alt="Flawless Illumination" />
                    <img ref={smartPhoneRef} className='w-full -z-10 h-full object-cover absolute top-0 hidden md:block' src="/smartphone/A80/AllSections/flashlight/smartphone.webp" alt="Flawless Illumination" />
                    <img ref={smartPhoneMobileRef} className='w-full -z-10 h-full object-cover absolute top-0 md:hidden ' src="/smartphone/A80/AllSections/flashlight/smartphone_mobile.webp" alt="Flawless Illumination" />
                    <div ref={textRef} className="lg:space-y-4 space-y-2 text-center z-30 content max-w-[296px] md:max-w-max">
                        <h4 className='bg-gradient-to-r from-[#FFBD6D] to-[#FF8657] text-transparent bg-clip-text font-medium lg:text-[14px] lg:leading-4 text-[10px] uppercase'>Stunning Details. Vibrant Colors.</h4>
                        <h1 className="lg:text-desktop/h2 text-[28px] leading-9 tracking-[-0.28px]">Flawless Illumination with Unique Ring Light</h1>
                        <p className="lg:text-desktop/body/1  text-mobile/body/2  text-white/70"> Beyond functionality, the sleek and stylish ring light adds a modern touch to your device.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlawlessIllumination
