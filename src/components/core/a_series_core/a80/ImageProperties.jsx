import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageProperties = () => {
    const sectionRef = useRef(null);
    const imagesRef = useRef([]);
    const textsRef = useRef([]);
    const textMobileRef = useRef([]);

    const imageData = [
        { src: '/smartphone/A80/AllSections/upto/photos_left.webp', alt: 'Photos left side', zIndex: 50 },
        { src: '/smartphone/A80/AllSections/upto/vidoes_left.webp', alt: 'Videos left side', zIndex: 40 },
        { src: '/smartphone/A80/AllSections/upto/songs_left.webp', alt: 'Songs left side', zIndex: 30 },
        { src: '/smartphone/A80/AllSections/upto/memory_left.webp', alt: 'Memory left side', zIndex: 20 },
        { src: '/smartphone/A80/AllSections/upto/photos_right.webp', alt: 'Photos right side', zIndex: 50 },
        { src: '/smartphone/A80/AllSections/upto/vidoes_right.webp', alt: 'Videos right side', zIndex: 40 },
        { src: '/smartphone/A80/AllSections/upto/songs_right.webp', alt: 'Songs right side', zIndex: 30 },
        { src: '/smartphone/A80/AllSections/upto/memory_right.webp', alt: 'Memory right side', zIndex: 20 },
    ];

    const textData = [
        'Up to 40,000 Photos',
        'More than 85 Videos',
        'Up to 25,000 songs',
        'Up to 128 + 8 GB Extended Ram',
    ];

    useEffect(() => {
        if (!sectionRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                toggleActions: 'play reverse restart none',
            },
        });

        const images = imagesRef.current;
        const texts = textsRef.current;
        const textMobile = textMobileRef.current

        for (let i = 0; i < 3; i++) {
            tl.to(images[i], { xPercent: -100, duration: 1, ease: 'power1.inOut' })
                .to(images[i + 4], { xPercent: 100, duration: 1, ease: 'power1.inOut' }, '<')
                .to(texts[i], { opacity: 0, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to(textMobile[i], { opacity: 0, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to(texts[i + 1], { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
                .to(textMobile[i + 1], { opacity: 1, duration: 0.5, ease: 'power1.inOut' });
        }
    }, []);

    return (
        <section ref={sectionRef} className="h-[500vh] relative bg-[#F3F3F3]">
            <div className="sticky top-0 h-screen w-full">
                <div className=" h-full w-full overflow-hidden flex flex-col lg:flex-row md:pt-10 lg:pt-0 items-center justify-center">

                    {/* Text for mobile */}

                    <div className=" lg:hidden flex relative items-center flex-col w-full gap-2 max-w-[450px] px-4 md:px-0 my-8 md:my-0">
                        <p className="text-[10px] leading-3 tracking-[0.6px] uppercase text-a-80-dark text-center">Enhanced Smooth Performance</p>
                        <div className="h-[72px] w-full relative ">
                            {textData.map((text, index) => (
                                <h3
                                    key={text}
                                    ref={el => textMobileRef.current[index] = el}
                                    className={`absolute w-full font-medium text-[28px] leading-9  text-center text-a-80-dark top-0 ${index > 0 ? 'opacity-0' : ''}`}
                                >
                                    {text}
                                </h3>
                            ))}
                        </div>
                        <p className="text-mobile/body/2 text-center text-a-80-dark/80">
                            8GB Extended RAM offers 2 versions, both enabling up to 8 apps* to multitask seamlessly in the background.
                        </p>

                        <p className="lg:text-desktop/body/1 text-center text-[#101824] lg:hidden text-mobile/body/2">*With Memory Fusion Technology</p>

                    </div>
                    <div className="leftimage relative h-[203px] -translate-x-10 lg:translate-y-0 translate-y-12 lg:-translate-x-28 md:h-[500px] w-full overflow-hidden">
                        {imageData.slice(0, 4).map((img, index) => (
                            <img
                                key={img.src}
                                ref={el => imagesRef.current[index] = el}
                                src={img.src}
                                alt={img.alt}
                                className="absolute max-h-full w-auto"
                                style={{ zIndex: img.zIndex }}
                            />
                        ))}
                    </div>
                    <div className=" lg:flex hidden relative items-center flex-col w-full gap-6 max-w-[450px]  my-8 md:my-0">
                        <p className="lg:text-[14px] lg:leading-4 uppercase text-a-80-dark text-center">Enhanced Smooth Performance</p>
                        <div className="h-[116px] w-full relative">
                            {textData.map((text, index) => (
                                <h3
                                    key={text}
                                    ref={el => textsRef.current[index] = el}
                                    className={`absolute w-full lg:text-desktop/h2 text-center text-a-80-dark top-0 ${index > 0 ? 'opacity-0' : ''}`}
                                >
                                    {text}
                                </h3>
                            ))}
                        </div>
                        <p className="lg:text-desktop/body/1 text-center text-a-80-dark/80">
                            8GB Extended RAM offers 2 versions, both enabling up to 8 apps* to multitask seamlessly in the background.
                        </p>
                    </div>
                    <div className="rightimage relative translate-x-10  lg:translate-x-28 h-[203px] md:h-[500px] w-full overflow-hidden">
                        {imageData.slice(4).map((img, index) => (
                            <img
                                key={img.src}
                                ref={el => imagesRef.current[index + 4] = el}
                                src={img.src}
                                alt={img.alt}
                                className="absolute max-h-full w-auto right-0"
                                style={{ zIndex: img.zIndex }}
                            />
                        ))}
                    </div>

                    <p className="lg:text-desktop/body/1 text-center text-[#101824] hidden lg:block absolute bottom-10 text-mobile/body/2">*With Memory Fusion Technology</p>

                </div>
            </div>
        </section>
    );
};

export default ImageProperties;


