import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ExperienceTheCamera = () => {

    const images = [
        '/smartphone/A80/AllSections/experiencethecamera/1.webp',
        '/smartphone/A80/AllSections/experiencethecamera/2.webp',
        '/smartphone/A80/AllSections/experiencethecamera/3.webp',
        '/smartphone/A80/AllSections/experiencethecamera/4.webp',
        '/smartphone/A80/AllSections/experiencethecamera/5.webp',
        '/smartphone/A80/AllSections/experiencethecamera/6.webp',
        '/smartphone/A80/AllSections/experiencethecamera/7.webp',
        '/smartphone/A80/AllSections/experiencethecamera/8.webp',
        '/smartphone/A80/AllSections/experiencethecamera/9.webp',
        '/smartphone/A80/AllSections/experiencethecamera/10.webp',
    ]
    const imagesMobile = [
        '/smartphone/A80/AllSections/experiencethecamera/m1.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m2.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m3.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m4.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m5.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m6.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m7.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m8.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m9.webp',
        '/smartphone/A80/AllSections/experiencethecamera/m10.webp',
    ]


    const sectionRef = useRef(null)
    const imagesRef = useRef([])
    const textRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                onUpdate: self => {
                    const index = Math.min(Math.floor(self.progress * images.length), images.length - 1)
                    imagesRef.current.src = images[index]
                },
                toggleActions: 'play reverse restart none',
            },
        })

        tl.to(imagesRef.current, { display: 'none' })
        tl.from(textRef.current, { y: -50, opacity: 0 })

    }, [sectionRef])

    return (
        <>
            <section ref={sectionRef} className='lg:h-[450vh] lg:block hidden relative font-markot '>
                <div className='h-screen sticky top-0 w-full lg:bg-[url("/smartphone/A80/AllSections/experiencethecamera/10.webp")] bg-center bg-no-repeat bg-cover overflow-hidden'>
                    <div className="h-full w-full absolute top-0 left-0 z-10">
                        <img ref={imagesRef} src={images[0]} className='h-full w-full object-cover' />
                    </div>
                    <div className="content h-full flex items-center ">
                        <div ref={textRef} className="flex flex-col justify-between max-w-[496px] lg:gap-[110px]">
                            <div className="lg:space-y-[18px]">
                                <h3 className="lg:text-desktop/h2 text-white">Experience the full of life in every shot.</h3>
                                <p className="lg:text-desktop/body/large bg-gradient-to-br from-[#FFEFDD] to-[#FFD8D6] bg-clip-text text-transparent">From lighting to color balance, the AI optimises your photos, make them sharp and full of detail, so you can focus on the moment, not the settings.</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                {/* <h3 className="bg-gradient-to-br from-[#FFEFDD] to-[#FFD8D6] bg-clip-text text-transparent opacity-80">
                                    <span className="lg:text-[32px] lg:leading-10 lg:tracking-[0.32px] font-bold ">
                                        13MP &nbsp;
                                    </span>
                                    <span className="lg:text-desktop/h5">
                                        Super HDR Camera
                                    </span>
                                </h3> */}
                                <h3 className="bg-gradient-to-br from-[#FFEFDD] to-[#FFD8D6] bg-clip-text text-transparent opacity-80">
                                    <span className="lg:text-[32px] lg:leading-10 lg:tracking-[0.32px] font-bold ">
                                        50MP &nbsp;
                                    </span>
                                    <span className="lg:text-desktop/h5">
                                        Super HDR Camera
                                    </span>
                                </h3>
                                <h3 className="bg-gradient-to-br from-[#FFEFDD] to-[#FFD8D6] bg-clip-text text-transparent opacity-80">
                                    <span className="lg:text-desktop/h5">
                                        Unique Ring Light
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-screen px-4 md:px-0 pt-6 text-center lg:hidden w-full bg-[url("/smartphone/A80/AllSections/experiencethecamera/m10.webp")] bg-center bg-no-repeat bg-cover overflow-hidden'>
                <div className="flex flex-col justify-between max-w-[496px] gap-10 lg:gap-[110px]">
                    <div className="lg:space-y-[18px] space-y-4">
                        <h3 className="lg:text-desktop/h2 text-mobile/h3 text-white">Experience the full of life in every shot.</h3>
                        <p className="lg:text-desktop/body/large text-mobile/body/large bg-gradient-to-br from-[#FFEFDD] to-[#FFD8D6] bg-clip-text text-transparent">From lighting to color balance, the AI optimises your photos, make them sharp and full of detail, so you can focus on the moment, not the settings.</p>
                    </div>
                    <div className="flex flex-col gap-5">     
                        <h3 className="bg-gradient-to-br from-[#FFEFDD] to-[#FFD8D6] bg-clip-text text-transparent opacity-80">
                            <span className="lg:text-[32px] lg:leading-10 lg:tracking-[0.32px] font-bold ">
                                50MP &nbsp;
                            </span>
                            <span className="lg:text-desktop/h5">
                                Super HDR Camera
                            </span>
                        </h3>
                        <h3 className="bg-gradient-to-br from-[#FFEFDD] to-[#FFD8D6] bg-clip-text text-transparent opacity-80">
                            <span className="lg:text-desktop/h5">
                                Unique Ring Light
                            </span>
                        </h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExperienceTheCamera

