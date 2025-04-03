import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

const CreativeFilterA80 = () => {

  const images = [
    '/smartphone/A80/AllSections/creativefilter/1.webp',
    '/smartphone/A80/AllSections/creativefilter/2.webp',
    '/smartphone/A80/AllSections/creativefilter/3.webp',
    '/smartphone/A80/AllSections/creativefilter/4.webp',
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [images]);


  return (
    <div className="bg-[#161410] ">
      <div className="content overflow-hidden h-[480px] lg:h-[620px] relative flex flex-col justify-between lg:flex-row items-center gap-6 pt-8 px-4">
        {/* Text Section */}
        <div className="w-full lg:max-w-[496px] relative  text-center lg:text-left">
          <h3
            className="text-mobile/h3 lg:text-desktop/h2 text-white py-4"
            data-aos="fade-up"
          >
            Creative Filters
          </h3>
          <p
            className="text-mobile/body/2 lg:text-desktop/body/large text-white"
            data-aos="fade-left"
          >
            Enhance your photos with 8 different filters, adding a professional
            touch to every shot. Fresh, Forest, Flames, Fade, Nature, Baby,
            Blues, Mono.
          </p>
        </div>

        <div className="">
          <img  src={currentImage} alt="" />
        </div>

        {/* Video Section */}

      </div>
    </div>
  );
};

export default CreativeFilterA80;
