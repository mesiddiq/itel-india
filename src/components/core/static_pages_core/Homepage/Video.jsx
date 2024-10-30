// import React, { useState, useEffect, useRef } from 'react'
// import ReactPlayer from 'react-player'

// const Video = () => {
//     const playerRef = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const handleVisibility = (entries) => {
//             entries.forEach((entry) => {
//                 setIsVisible(entry.isIntersecting);
//             });
//         };

//         const observer = new IntersectionObserver(handleVisibility, {
//             threshold: 0.5, // Adjust this threshold as needed
//         });

//         if (playerRef.current) observer.observe(playerRef.current.wrapper);

//         return () => {
//             if (playerRef.current) observer.unobserve(playerRef.current.wrapper);
//         };
//     }, []);

//     return (
//         <div ref={playerRef} className='w-full'>
//             <ReactPlayer
//                 playing
//                 controls={false}
//                 loop={true}
//                 muted={!isVisible}
//                 width='100%'
//                 height='100%'
//                 url={[{ src: 'https://res.cloudinary.com/djwj42mic/video/upload/v1729068884/-e95e-405f-954a-79e66b2ea7ac_udufbr.mp4', type: 'video/mp4' }]}
//             />
//             <div className='absolute w-full bottom-[16px] text-center'>
//                 <h3 className='lg:text-desktop/h3 text-mobile/h7 font-markot text-white'>Dream Big with itel: Join Us in Sparking India's Digital Revolution</h3>
//             </div>
//         </div>
//     )
// }

// export default Video
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
                url="https://res.cloudinary.com/djwj42mic/video/upload/v1729068884/-e95e-405f-954a-79e66b2ea7ac_udufbr.mp4"
                playing={isVisible}
                muted={!isVisible}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default AutoPlayVideo;

