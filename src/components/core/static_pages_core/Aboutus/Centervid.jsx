import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Centervid = () => {
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
<<<<<<< HEAD
    <div className="relative h-[202px] lg:h-[810px] font-markot">
      <video
        autoPlay
        muted
        loop
        src="https://res.cloudinary.com/djwj42mic/video/upload/v1730285171/-742e-4df3-a8ad-7f3c47b7ac98_qvm6da.mp4"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <p className="absolute lg:w-[883px] w-[260px] bottom-2 lg:bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white text-mobile/h7 lg:text-desktop/h2">
        Connecting Hearts, Everyday with itel!
      </p>
    </div>
=======
      <div ref={wrapperRef} className="lg:h-[810px] w-screen relative font-markot h-[202px]">
        <ReactPlayer
          url="https://res.cloudinary.com/djwj42mic/video/upload/v1730285171/-742e-4df3-a8ad-7f3c47b7ac98_qvm6da.mp4"
          playing={isVisible}
          muted={!isVisible}
          width={"100%"}
          height={"100%"}
        />
        <p className=' absolute bottom-10 text-mobile/h7 pb-3 z-10 lg:text-desktop/h2 text-white left-1/2 -translate-x-1/2 text-nowrap '>Connecting Hearts, Everyday with itel!</p>
      </div>
>>>>>>> 4a11beb4c9df640cb8cec12d2ad2ed14ea70824b
  )
}

export default Centervid
