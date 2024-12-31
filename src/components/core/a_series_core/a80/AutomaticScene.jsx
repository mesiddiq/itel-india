import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger);
const AutomaticScene = () => {

    const CardData = [
        { src: '/smartphone/A80/AllSections/autosence/beach.webp', alt: 'Beach', caption: 'Beach', icon: 'icons' },
        { src: '/smartphone/A80/AllSections/autosence/building.webp', alt: 'Buidling', caption: 'Buidling', icon: 'icons' },
        { src: '/smartphone/A80/AllSections/autosence/food.webp', alt: 'Food', caption: 'Food', icon: 'icons' },
        { src: '/smartphone/A80/AllSections/autosence/potrait.webp', alt: 'Potrait', caption: 'Potrait', icon: 'icons' },
        { src: '/smartphone/A80/AllSections/autosence/pets.webp', alt: 'Pet', caption: 'Pet', icon: 'icons' },
        { src: '/smartphone/A80/AllSections/autosence/sky.webp', alt: 'Sky', caption: 'Sky', icon: 'icons' },
    ]

    const sectionRef = useRef(null)
    const imagesRef = useRef([])

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                toggleActions: 'play reverse restart none',
            },
        });

        const images = imagesRef.current

        for (let i = 0; i < 6; i++) {
            tl.to(images[i], { opacity: 1 })
        }
    })

    return (
        <div ref={sectionRef} className='bg-[#010101] h-[1100vh] relative'>
            <div className="h-screen flex items-center justify-center sticky top-0 lg:py-24 px-4 md:px-0">
                <div className="bg-[#161410] rounded-[32px] content flex-col-reverse lg:flex-row lg:h-[calc(100vh-192px)] max-h-[620px] h-auto lg:p-[60px] flex justify-between items-center pt-6 lg:pt-0  ">
                    <div className="left relative h-[380px] lg:w-2/4 w-full max-w-[500px]">
                        {
                            CardData.map(({ src, alt, caption, icon }, index) => {
                                return (
                                    <div ref={el => imagesRef.current[index] = el} key={index} className={`absolute h-full w-full flex flex-col items-center gap-4 py-6 px-3 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}>
                                        <img src={src} alt={alt} className='w-full lg:h-[420px] h-[296px] object-cover rounded-3xl' />
                                        <div className="flex gap-2 bg-[#161410] w-full items-center justify-center ">
                                            {/* <span className="icon">
                                                {icon}
                                            </span> */}
                                            <div className="">
                                                <caption className='bg-gradient-to-r from-[#FFBD6D] to-[#FF8657] text-transparent bg-clip-text font-medium lg:text-[24px] lg:leading-9 '>{caption}</caption>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="right flex flex-col gap-4 relative  max-w-[350px] xl:max-w-[500px] text-center lg:text-left">
                        <h4 className="uppercase font-medium lg:text-[14px] lg:leading-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFBD6D] to-[#FF8657] ">
                            awesome intelligence
                        </h4>
                        <h1 className="font-medium lg:text-[48px] lg:leading-[57px] lg:tracking-tight text-[#f3f3f3]">
                            Automatic Scene Classification
                        </h1>
                        <p className="lg:text-desktop/body/1 text-mobile/body/2 text-white/70 ">
                            The camera can automatically classify and optimize over 16+
                            scenes, including portraits, pets, sky, food, buildings and
                            more, ensuring every shot is perfectly tuned.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutomaticScene