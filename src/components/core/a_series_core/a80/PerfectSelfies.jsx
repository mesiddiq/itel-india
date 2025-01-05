import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PerfectSelfies = () => {
    const sectionRef = useRef(null)
    const selfieRef = useRef(null)
    const selfieMobileRef = useRef(null)
    const handRef = useRef(null)
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
        })

        tl.to(selfieRef.current, { scale: 1.1, duration: 1 })
        tl.to(selfieMobileRef.current, { scale: 1.1, duration: 1 })
        tl.to(selfieRef.current, { scale: 0.23, left: 350, top: -50, opacity: 0, duration: 1 })
        tl.to(selfieMobileRef.current, { scale: 0.23, y: 150, opacity: 0, duration: 1 })
        tl.from(handRef.current, { opacity: 0 })
        tl.from(textRef.current, { y: -300, opacity: 0, duration: 2 })
    }, [])

    return (
        <div className='bg-[#161410] h-[300vh] relative' ref={sectionRef} >
            <div className="h-screen sticky top-0 w-full overflow-hidden">
                <div className="h-full w-full relative overflow-hidden flex pt-8 lg:pt-0 justify-center lg:items-center ">
                    <div className="content flex justify-center lg:justify-start">
                        <div className="space-y-2 lg:space-y-4 max-w-[436px] text-center lg:text-left  " ref={textRef}>
                            <h2 className="lg:text-desktop/h2 text-mobile/h3 text-[#f3f3f3]">
                                Perfect Selfies, <br /> Every Time
                            </h2>
                            <p className="lg:text-desktop/body/large text-mobile/body/2 text-white/80">
                                With the 8MP Portrait Selfie camera, your selfies
                                are well-lit and beautifully enhanced, making you
                                look your best in any lighting condition.
                            </p>
                        </div>
                    </div>
                    <img ref={handRef} className='xl:max-w-[682px] lg:max-w-[600px] w-11/12 absolute bottom-0 lg:-translate-y-1/2 right-0 lg:top-1/2 z-10' src="/smartphone/A80/AllSections/perfectselfies/phoneinhand.webp" alt="Phone In Hand" />
                    <img ref={selfieRef} src="/smartphone/A80/AllSections/perfectselfies/selfie.webp" alt="Selfie" className='z-20 absolute w-full hidden lg:block' />
                    <img ref={selfieMobileRef} src="/smartphone/A80/AllSections/perfectselfies/selfie.webp" alt="Selfie" className='z-20 absolute w-full h-full object-cover lg:hidden top-0' />
                </div>
            </div>
        </div>
    )
}

export default PerfectSelfies
