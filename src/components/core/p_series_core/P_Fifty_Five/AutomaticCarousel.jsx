import { useState, useEffect } from 'react';

const imagesLaptop = [
  {
    src: '/smartphone/P55/CameraMode1.png',
    alt: 'panorama',
    text: 'Capture all in a single image',
    hollowText: 'single',
  },
  {
    src: '/smartphone/P55/CameraMode2.png',
    alt: 'timelapse',
    text: 'Compress hours into seconds.',
    hollowText: 'seconds.',
  },
  {
    src: '/smartphone/P55/CameraMode3.png',
    alt: 'nightmode',
    text: 'City lights, in low lights. All night.',
    hollowText: 'All night.',
  },
];

const imagesMobile = [
  {
    src: '/smartphone/P55/CameraMode1Mobile.png',
    alt: 'panorama',
    text: 'Capture all in a single image',
    hollowText: 'single',
  },
  {
    src: '/smartphone/P55/CameraMode1Mobile.png',
    alt: 'timelapse',
    text: 'Compress hours into seconds.',
    hollowText: 'seconds.',
  },
  {
    src: '/smartphone/P55/CameraMode3Mobile.png',
    alt: 'nightmode',
    text: 'City lights, in low lights. All night.',
    hollowText: 'All night.',
  },
];

const AutomaticCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLaptop.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(timer);
    }, []);

    const renderTextWithHollowEffect = (text, hollowText) => {
      // Split the text around the hollowText and map it with the span if necessary
      return text.split(hollowText).map((part, index, arr) => (
        <span key={index}>
          {part}
          {index < arr.length - 1 && (
            <span className="font-outline-1">{hollowText}</span>
          )}
        </span>
      ));
    };

    return (
      <>
        {/* Laptop */}
        <div className="hidden md:block h-[860px] w-full bg-white py-[120px]">
          <div className="flex flex-col justify-center items-center content h-full rounded-2xl relative">
            
            {
              imagesLaptop.map((image, index) => (
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
                  <div className="max-w-[400px] text-desktop/h2 absolute bottom-12 left-16 text-white transition-all duration-500 ease-in-out transform translate-y-0">
                    {renderTextWithHollowEffect(image.text, image.hollowText)}
                  </div>
                  <div className="absolute bottom-12 right-16 flex space-x-2">
                    {
                      imagesLaptop.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === currentIndex ? 'w-9 bg-white' : 'bg-white/50'
                          }`}
                        ></div>
                      ))
                    }
                  </div>
                </div>
              ))
            }

          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden bg-white p-[40px]">
          <div className="flex flex-col justify-center items-center rounded-2xl overflow-hidden w-full h-full min-h-[360px] relative">
            
            {
              imagesMobile.map((image, index) => (
                <div
                  key={index}
                  className={`font-markot object-cover h-full absolute transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full transition-transform duration-1000 ease-in-out transform"
                  />
                  <div className="max-w-[200px] text-mobile/h5/medium absolute bottom-8 left-8 text-white transition-all duration-500 ease-in-out transform translate-y-0">
                    {renderTextWithHollowEffect(image.text, image.hollowText)}
                  </div>
                  <div className="absolute bottom-8 right-8 flex space-x-2">
                    {
                      imagesMobile.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === currentIndex ? 'w-8 h-2 bg-white' : 'bg-white/50'
                          }`}
                        ></div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </>
    );
};

export default AutomaticCarousel;
