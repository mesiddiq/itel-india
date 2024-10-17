import { useState, useEffect } from 'react';

const images = [
  {
    src: '/smartphone/P55/CameraMode1.png',
    alt: 'panorama',
    text: 'Capture all in a single image',
  },
  {
    src: '/smartphone/P55/CameraMode2.png',
    alt: 'timelapse',
    text: 'Compress hours into seconds',
  },
  {
    src: '/smartphone/P55/CameraMode3.png',
    alt: 'nightmode',
    text: 'City lights, in low lights. All night.',
  },
];

const AutomaticCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[860px] w-full bg-white py-[120px]">
        <div className="content w-full h-full relative">

            {
              images.map((image, index) => (
                  <div
                  key={index}
                  className={`font-markot object-cover w-full absolute transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  >
                  <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full transition-transform duration-1000 ease-in-out transform"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-30">
                      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold opacity-50">
                      {image.title}
                      </h2>
                  </div> */}
                  <div className="max-w-[400px] text-desktop/h2 absolute bottom-12 left-16 text-white transition-all duration-500 ease-in-out transform translate-y-0">
                      {image.text}
                  </div>
                  <div className="absolute bottom-12 right-16 flex space-x-2">
                      {images.map((_, i) => (
                      <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === currentIndex ? 'w-9 bg-white' : 'bg-white/50'
                          }`}
                      ></div>
                      ))}
                  </div>
                  </div>
              ))
            }
    
        </div>
        
    </div>
  );
};

export default AutomaticCarousel