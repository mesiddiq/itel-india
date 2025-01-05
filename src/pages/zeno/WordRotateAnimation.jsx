import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function WordRotate({
    words,
    duration = 2500,
    className,
}) {
    const [index, setIndex] = useState(0)
    const containerRef = useRef(null)
    const wordRef = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, duration)

        return () => clearInterval(interval)
    }, [words, duration])

    useEffect(() => {
        if (containerRef.current && wordRef.current) {
            gsap.fromTo(
                wordRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.to(wordRef.current, {
                            opacity: 0,
                            y: -50,
                            duration: 0.25,
                            ease: 'power2.in',
                            delay: (duration / 1000) - 0.5, // Start exit animation 0.5 seconds before next word
                        })
                    }
                }
            )
        }
    }, [index, duration])

    return (
        <div ref={containerRef} className="overflow-hidden py-2">
            <h1
                ref={wordRef}
                className={className}
            >
                {words[index]}
            </h1>
        </div>
    )
}

