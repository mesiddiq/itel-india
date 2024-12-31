import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

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

        tl.to(mobileFrameRef.current, { opacity: 1 })
            .to(videoRef.current, { scale: 0.46, duration: 1, borderRadius: '100px' })
            .to(headingRef.current, { top: 0 });

        cardRefs.forEach((cardRef, index) => {
            tl.to(cardRef.current, {
                translateY: 0,
                opacity: 1,
                duration: index + 1,
            });
        });
    }, []);

    return (
        <div className=''>
            <div ref={sectionRef} style={{ height: '400vh', position: 'relative' }} className="bg-[#161410]">
                <div className=" h-screen sticky top-0 bg-[url('/smartphone/A80/AllSections/120HZdisplay/text.svg')] bg-no-repeat bg-center">
                    <h1 ref={headingRef} className="text-[48px] leading-[57px] font-normal text-[#ffbd6d] absolute left-1/2 -translate-x-1/2 -top-20">
                        A Bigger, Better Viewing Experience
                    </h1>
                    <video
                        ref={videoRef}
                        className="border object-cover sticky top-0 w-full h-full z-10"
                        autoPlay
                        loop
                    >
                        <source src="/smartphone/A80/AllSections/120HZdisplay/120hz video.webm" type="video/webm" />
                    </video>
                    <img
                        ref={mobileFrameRef}
                        src="/smartphone/A80/AllSections/120HZdisplay/Mobile landscape.webp"
                        className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 z-10"
                        alt="mobile landscape"
                    />
                    <div className="flex justify-between text-white absolute bottom-0">
                        {cardRefs.map((cardRef, index) => (
                            <div key={index} className="card translate-y-96 opacity-0" ref={cardRef}>
                                <h1 className="text-[48px] leading-[57px] font-normal text-[#ffbd6d]">
                                    120HZ" refresh rate
                                </h1>
                                <p className="text-[#ffffff] text-[20px] leading-[24px] font-normal">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iusto ducimus totam officia iste recusandae, sapiente magni at accusantium necessitatibus saepe molestias? Alias eligendi possimus, quos esse, culpa, repellendus harum ratione enim saepe vero architecto maiores sint nisi illum tenetur?
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFrame;

