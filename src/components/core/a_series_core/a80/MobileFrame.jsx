import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CardData = [
    { title: '120HZ"', description: `Whether you're scrolling, gaming, or streaming, the 120Hz display adapts effortlessly, delivering ultra-smooth visuals without lags or stutters.`, subTitle: 'refresh rate' },
    { title: '6.7"', description: 'Experience the immersive ultra-smooth visuals, large enough to enjoy great cinematic-quality media with vibrant colors and crisp clarity.', subTitle: 'punch-hole display' },
    { title: '90%', description: 'With a 90% screen-to-body ratio, maximize your viewing area with an edge-to-edge display with a stunning clarity and a great full-screen experience.', subTitle: 'screen-to-body ratio' },
]

const MobileFrame = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const mobileFrameRef = useRef(null);
    const headingRef = useRef(null);
    const cardRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '50%',
                scrub: 1,
                toggleActions: 'play reverse restart none',
            },
        });

        tl.from(mobileFrameRef.current, { y: 200, opacity: 0 })
            .to(videoRef.current, { scale: 0.46, duration: 1, objectFit: 'contain', borderRadius: '100px' })
            .from(headingRef.current, { y: -100, opacity: 0 });

        cardRefs.forEach((cardRef, index) => {
            tl.from(cardRef.current, {
                y: 300,
                opacity: 1,
                duration: index + 1,
            });
        });
    }, []);

    return (
        <div className=''>
            <div ref={sectionRef} style={{ height: '400vh', position: 'relative' }} className="bg-[#161410] hidden md:block">
                <div className=" h-screen sticky top-0 bg-[url('/smartphone/A80/AllSections/120HZdisplay/text.svg')] bg-no-repeat bg-center bg-contain">

                    <h1 ref={headingRef} className="bg-gradient-to-r from-[#FFBD6D] to-[#FF8657] bg-clip-text text-transparent w-full lg:text-desktop/h2 absolute top-10 text-center left-1/2 -translate-x-1/2 !font-normal text-mobile/h4">
                        <span className="">A </span>
                        <span className="font-bold">
                            Bigger, Better
                        </span>
                        <span className=""> Viewing Experience</span>
                    </h1>
                    <video
                        ref={videoRef}
                        className="object-cover h-full top-0 sticky w-full overflow-hidden -z-10"
                        autoPlay={true}
                        loop
                    >
                        <source src="/smartphone/A80/AllSections/120HZdisplay/beachvideo.mp4" type="video/mp4" />
                    </video>
                    <img
                        ref={mobileFrameRef}
                        src="/smartphone/A80/AllSections/120HZdisplay/Mobile landscape.webp"
                        className="md:w-1/2 w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 max-w-[880px]"
                        alt="mobile landscape"
                    />
                    <div className="content relative">
                        <div className="grid grid-cols-3 gap-10 place-items-center text-white absolute bottom-10  w-full">
                            {CardData.map((item, index) => (
                                <div key={index} className="card lg:space-y-2" ref={cardRefs[index]}>
                                    <h1 className='uppercase' >
                                        <span className="lg:text-[32px] lg:leading-10 font-bold tracking-[0.32px]">
                                            {item.title} &nbsp;
                                        </span>
                                        <span className="lg:text-desktop/h5 !font-medium">
                                            {item.subTitle}
                                        </span>
                                    </h1>
                                    <p className="text-white/70 lg:text-desktop/body/1 ">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden px-4 content bg-a-80-dark pt-6  bg-[url('/smartphone/A80/AllSections/120HZdisplay/text.svg')] bg-no-repeat bg-[20%_20%] bg-contain">
                <h1 className="bg-gradient-to-r from-[#FFBD6D] to-[#FF8657] bg-clip-text text-transparent  text-center !font-normal text-mobile/h4">
                    <span className="">A </span>
                    <span className="font-bold">
                        Bigger, Better
                    </span>
                    <span className=""> Viewing Experience</span>
                </h1>

                <div className="relative">
                    <video
                        className="object-cover h-full top-0 sticky w-full overflow-hidden scale-[0.85] border rounded-3xl"
                        autoPlay
                        loop
                    >
                        <source src="/smartphone/A80/AllSections/120HZdisplay/120hz video.mp4" type="video/mp4" />
                    </video>
                    <img
                        src="/smartphone/A80/AllSections/120HZdisplay/Mobile landscape.webp"
                        className="md:w-1/2 w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10"
                        alt="mobile landscape"
                    />
                </div>


                <div className="py-5 flex flex-col gap-6">
                    {
                        CardData.map((item, index) => (
                            <div className="space-y-2">
                                <h1 className="">
                                    <span className="text-[24px] leading-8 uppercase font-bold tracking-[0.24px]">
                                        {item.title} &nbsp;
                                    </span>
                                    <span className="text-[16px] font-medium leading-5 tracking-[0.16px] text-white uppercase">
                                        {item.subTitle}
                                    </span>
                                </h1>
                                <p className="text-[16px] leading-6 -tracking-[0.16px] text-white/80 ">
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MobileFrame;

