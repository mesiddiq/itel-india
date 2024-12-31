import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'


gsap.registerPlugin(ScrollTrigger);

const BuiltForLife = () => {

    const sectionRef = useRef(null)
    const firstImageRef = useRef(null)
    const ip54Ref = useRef(null)
    const splashImageRef = useRef(null)
    const dustImageRef = useRef(null)
    const lastImage = useRef(null)


    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '80%',
                scrub: 1,
                toggleActions: 'play reverse restart none',
            },
        });

        tl
            .to(firstImageRef.current, {
                translateY: 0,
                opacity: 1
            })
            .to(ip54Ref.current, {
                top: '400px'
            })
            .to([firstImageRef.current, ip54Ref.current], {
                opacity: 0, display: 'none'
            })
            .to(splashImageRef.current, {
                opacity: 1
            })
            .to(splashImageRef.current, {
                opacity: 0
            })
            .to(dustImageRef.current, {
                opacity: 1
            })
            .to(dustImageRef.current, {
                opacity: 0
            })
            .to(lastImage.current, {
                opacity: 1, top: 240
            })
    }, [])

    return (
        <section ref={sectionRef} className='h-[1200vh] relative bg-[#fafafa]  '>
            <div className="sticky pt-10 top-0 h-screen">
                <div className="flex justify-between content flex-col gap-2 lg:flex-row text-center lg:text-left">
                    <h1 className="lg:text-desktop/h2 text-mobile/h4 text-black/1 max-w-[496px]">Built for Life’s Unexpected Moments</h1>
                    <p className="lg:text-desktop/body/large text-mobile/body/2 text-[#6F7384] max-w-[486px] ">
                        A80's built to handle the challenges of an active lifestyle, whether you’re caught in a rain or out in a dusty environment.
                    </p>
                </div>
                <div className="">
                    <img src="/smartphone/A80/AllSections/builtfor/first.webp" alt="" className='opacity-0 absolute' ref={firstImageRef} />
                    <img ref={ip54Ref} src="/smartphone/A80/AllSections/builtfor/ip54.svg" alt="" className='absolute top-full left-1/2 -translate-x-1/2' />
                    <img ref={splashImageRef} src="/smartphone/A80/AllSections/builtfor/splash.webp" className='absolute top-60 left-1/2 -translate-x-1/2 opacity-0' alt="" />
                    <img ref={dustImageRef} src="/smartphone/A80/AllSections/builtfor/dust.webp" alt="" className='absolute top-60 left-1/2 -translate-x-1/2 opacity-0' />
                    <img ref={lastImage} src="/smartphone/A80/AllSections/builtfor/phonewithtext.png" alt="" className='absolute top-full left-1/2 -translate-x-1/2 opacity-0' />
                </div>
            </div>
        </section>
    )
}

export default BuiltForLife