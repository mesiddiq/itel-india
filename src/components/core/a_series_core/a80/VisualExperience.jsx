import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VisualExperience = () => {

    const sectionRef = useRef(null)
    const frontRef = useRef(null)
    const backRef = useRef(null)
    const side1Ref = useRef(null)
    const side2Ref = useRef(null)

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
        tl.from(frontRef.current, { y: 200, opacity: 0 })
        tl.from(backRef.current, { y: 300, opacity: 0 , duration:1})
        tl.from(side1Ref.current, { y: 300,x:100, opacity: 0 , duration:1})
        tl.from(side2Ref.current, { y: 300,x:-100, opacity: 0 , duration:1})
    })

    return (
        <div ref={sectionRef} className=" bg-[#161410] h-[300vh] relative px-4 md:px-0">
            <div className="content flex flex-col-reverse lg:flex-row h-screen sticky  pt-8 lg:pt-0 top-0 justify-between items-center overflow-hidden">
                <div className="relative h-full lg:w-1/2 w-full max-w-[400px]">
                    <img ref={side1Ref} className='absolute max-w-[150px] lg:max-w-[220px] top-32' src="/smartphone/A80/AllSections/breathtaking/side1.webp" alt="Side 1" />
                    <img ref={side2Ref} className='absolute max-w-[180px] right-0 lg:max-w-[250px] top-20 lg:left-52' src="/smartphone/A80/AllSections/breathtaking/side2.webp" alt="Side 1" />
                    <img ref={backRef} className='absolute max-w-[200px] lg:max-w-[288px] object-contain bottom-0 z-20' src="/smartphone/A80/AllSections/breathtaking/back.webp" alt="A80 Back" />
                    <img ref={frontRef} className='absolute max-w-[250px] lg:max-w-[360px] bottom-0 z-10 left-20' src="/smartphone/A80/AllSections/breathtaking/front.webp" alt="A80 Front" />
                </div>
                <div className=''>
                    <div className="right max-w-[496px] flex flex-col gap-2 lg:gap-4 lg:text-left text-center ">
                        <h1 className="lg:text-desktop/h2 text-mobile/h3 ">Enjoy a Breathtaking Visual Experience</h1>
                        <p className="text-mobile/body/2 text-white/70 lg:text-desktop/body/large">
                            Dynamic Bar get your essential notifications more seamlessly than ever, such as battery status, calling, and unlocking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisualExperience