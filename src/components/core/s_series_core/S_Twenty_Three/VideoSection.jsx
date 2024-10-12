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
    <div className="relative cursor-pointer" onClick={handleVideoClick}>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djwj42mic/video/upload/v1728628180/itel___itel_S23_smartphone_1080p_talia7.mp4" 
        className="w-full h-auto" 
        controls // Optional: Show controls if you want
      />
      <h3 className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 rounded-md">
        {videoTitle}
      </h3>
      <a href={videoSrc} target="_blank" rel="noopener noreferrer" className="absolute inset-0" />
    </div>
  );
};

export default VideoComponent;
