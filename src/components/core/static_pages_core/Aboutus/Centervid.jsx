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
    <div ref={wrapperRef} className="lg:h-[810px] w-screen relative font-markot h-[202px]">
      <ReactPlayer
        url="/videos/aboutus.webm"
        playing={isVisible}
        muted={!isVisible}
        width={"100%"}
        height={"100%"}
      />
      <p className=' absolute bottom-10 text-mobile/h7 pb-3 z-10 lg:text-desktop/h2 text-white left-1/2 -translate-x-1/2 text-nowrap '>Connecting Hearts, Everyday with itel!</p>
    </div>
  )
}

export default Centervid
