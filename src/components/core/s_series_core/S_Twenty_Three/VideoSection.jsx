import React, { useRef } from 'react';

const VideoComponent = ({ videoSrc, thumbnailSrc, videoTitle }) => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative cursor-pointer content" onClick={handleVideoClick}>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djwj42mic/video/upload/v1728628180/itel___itel_S23_smartphone_1080p_talia7.mp4"
        className="w-full h-auto"
        autoPlay
        muted
        loop
      />
      
      
      <a
        href={videoSrc}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 opacity-0"
      />
    </div>
  );
};


export default VideoComponent;
