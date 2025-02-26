import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const AutoPlayVideo = () => {
    const wrapperRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleVisibility = (entries) => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
            });
        };

        const observer = new IntersectionObserver(handleVisibility, {
            threshold: 0.5, // Adjust threshold if necessary
        });

        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }

        return () => {
            if (wrapperRef.current) {
                observer.unobserve(wrapperRef.current);
            }
        };
    }, []);

    return (
        <div ref={wrapperRef} style={{ width: "100%", height: "auto" }}>
            <ReactPlayer
                url="/videos/homepage/ad.webm"
                playing={isVisible}
                muted={!isVisible}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default AutoPlayVideo;

