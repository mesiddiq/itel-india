import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const PureCinematic = () => {

    const sectionRef = useRef(null)

    const imageRef = useRef(null)
    const box1Ref = useRef(null)
    const box2Ref = useRef(null)

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set visibility to true when element is visible
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);



    useEffect(() => {
        if (isVisible) {
            const tl = gsap.timeline({
            })

            tl.to(imageRef.current, {
                scale: 0.3, duration: 1
            })
                .from(box1Ref.current, {
                    x: 100, opacity: 0, duration: 1
                })
                .from(box2Ref.current, {
                    x: -100, opacity: 0, duration: 1
                })
        }


    }, [isVisible])

    return (
        <section ref={sectionRef} className='h-[580px]  md:h-[750px] bg-[url("/smartphone/zeno10/display/bgcar.webp")] bg-cover bg-center bg-no-repeat overflow-hidden relative'>
            <div className="content flex flex-col lg:flex-row items-center h-full justify-between py-[54px] lg:py-0 px-4 md:px-0">
                <div ref={box1Ref} className="space-y-2 lg:space-y-4 font-clash">
                    <h6 className="lg:text-[17px] lg:tracking-[4px] text-center lg:text-left uppercase lg:leading-5 [text-shadow:_0_0px_4px_rgb(255_255_255_/_50%)] text-[12px] leading-[14px] tracking-[2.4px] ">
                        <span className="text-zeno-solid">//</span>
                        <span className="text-dull-white font-markot">display</span>
                    </h6>
                    <h3 className="lg:text-[64px] text-[32px] leading-8 font-bold uppercase lg:leading-[64px] text-center lg:text-left">
                        <span className="text-dull-white" >pure</span> <br className='hidden lg:block' />
                        <span className="text-zeno-solid">cinematic</span><br />
                        <span className="text-dull-white">experience</span>
                    </h3>
                </div>
                <img ref={imageRef} src="/smartphone/zeno10/display/mobileframe.webp" alt="Car in mobile frame" className='absolute w-full object-contain h-full left-1/2 -translate-x-1/2 z-50 hidden lg:block ' />
                <img src="/smartphone/zeno10/display/mobileframe.webp" alt="Car in mobile frame" className='max-w-[302px] md:max-w-[500px] object-contain h-full z-50 lg:hidden' />
                <div ref={box2Ref} className="relative max-w-[400px] lg:h-[250px] h-[205px] lg:p-10 p-[65px_32px_30px] ">
                    <img src="/smartphone/zeno10/display/glassmorphism.png" alt="Glassmorphism" className='object-fill absolute top-0 left-0' />
                    <p className="lg:text-desktop/body/large text-[14px] leading-5 text-[#f3f3f3] !tracking-wide">
                        With an immersive <span className="text-zeno-solid">6.6" HD+ Drop Notch Display</span>  with <span className="text-zeno-solid"> Dynamic Bar,</span> experience sharper visuals and richer colors that ensures everything looks cinematic.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PureCinematic