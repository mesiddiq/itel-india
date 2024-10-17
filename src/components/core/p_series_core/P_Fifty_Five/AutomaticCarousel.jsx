import { useState, useEffect } from 'react';

const images = [
  {
    src: 'https://example.com/image1.jpg',
    alt: 'New York City skyline',
    text: 'Capture all in a single image',
    title: 'panorama'
  },
  {
    src: 'https://example.com/image2.jpg',
    alt: 'London cityscape',
    text: 'Experience the urban jungle',
    title: 'cityscape'
  },
  {
    src: 'https://example.com/image3.jpg',
    alt: 'Tokyo at night',
    text: 'Embrace the neon nights',
    title: 'metropolis'
  }
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
    <div className=" w-full h-screen overflow-hidden rounded-lg">
        <div className='relative content'>

            {images.map((image, index) => (
                <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                >
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30">
                    <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold opacity-50">
                    {image.title}
                    </h2>
                </div>
                <div className="absolute bottom-8 left-8 text-white text-2xl font-semibold transition-all duration-500 ease-in-out transform translate-y-0">
                    {image.text}
                </div>
                <div className="absolute bottom-8 right-8 flex space-x-2">
                    {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === currentIndex ? 'w-6 bg-white' : 'bg-white/50'
                        }`}
                    ></div>
                    ))}
                </div>
                </div>
            ))}
    
        </div>
        
    </div>
  );
};

export default AutomaticCarousel