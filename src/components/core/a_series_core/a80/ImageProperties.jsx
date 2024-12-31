import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageProperties = () => {
    const sectionRef = useRef(null);
    const imagesRef = useRef([]);
    const textsRef = useRef([]);

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

        for (let i = 0; i < 3; i++) {
            tl.to(images[i], { xPercent: -100, duration: 1, ease: 'power1.inOut' })
                .to(images[i + 4], { xPercent: 100, duration: 1, ease: 'power1.inOut' }, '<')
                .to(texts[i], { opacity: 0, duration: 0.5, ease: 'power1.inOut' }, '<')
                .to(texts[i + 1], { opacity: 1, duration: 0.5, ease: 'power1.inOut' });
        }
    }, []);

    return (
        <section ref={sectionRef} className="h-[400vh] relative bg-[#F3F3F3]">
            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
                <div className="leftimage relative h-[250px] md:h-[497px] w-full md:w-[500px] overflow-hidden">
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
                <div className="text flex relative items-center flex-col gap-6 max-w-[400px] mx-auto text-center my-8 md:my-0">
                    <p className="text-sm md:text-base">Enhanced Smooth Performance</p>
                    <div className="">
                        {textData.map((text, index) => (
                            <h1
                                key={text}
                                ref={el => textsRef.current[index] = el}
                                className={`text-2xl md:text-4xl font-semibold ${index > 0 ? 'opacity-0' : ''}`}
                            >
                                {text}
                            </h1>
                        ))}
                    </div>
                    <p className="text-sm md:text-base">
                        8GB Extended RAM offers 2 versions, both enabling up to 8 apps* to multitask seamlessly in the background.
                    </p>
                </div>
                <div className="rightimage relative h-[250px] md:h-[497px] w-full md:w-[500px] overflow-hidden">
                    {imageData.slice(4).map((img, index) => (
                        <img
                            key={img.src}
                            ref={el => imagesRef.current[index + 4] = el}
                            src={img.src}
                            alt={img.alt}
                            className="absolute max-h-full w-auto"
                            style={{ zIndex: img.zIndex }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageProperties;


