import React from 'react';

function FeatureSection() {
  const features = [
    {
      icon: "/smartphone/S_Twenty_Three/instagram.webp",   
      title: "Snap Magic: itel S23's 50MP Wonder!",
      description: "Say cheese and let the memories unfold in vibrant colours and sharpness with the itel S23's 50MP AI dual rear camera."
    },
    {
      icon: "/smartphone/S_Twenty_Three/cpu-charge.webp",  
      title: "Boost Performance: 16GB* (8GB + 8GB*) RAM with Memory Fusion",
      description: "Enjoy faster app performance and smoother operations for all your needs powered by Memory Fusion Technology."
    },
    {
      icon: "/smartphone/S_Twenty_Three/slider.webp", 
      title: "Magic Hue: Colour Change Tech",
      description: "Witness the magic of colour changing seamlessly in sunlight with photochromic technology for a unique visual delight."
    }
  ];

  return (
    <section className="flex bg-black opacity-90  overflow-hidden z-0 flex-col justify-center px-5 md:px-0 pt-[40px] md:pt-40 pb-32 max-w-full max-md:py-24 ">

      <div className="flex flex-col justify-center w-full max-md:max-w-full content">
        <div className="flex flex-wrap justify-between items-start w-full max-md:max-w-full max-md:flex-col">
          <h2 className="flex flex-col flex-1 shrink text-5xl font-medium tracking-tighter basis-0 leading-[58px] min-w-[240px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] md:gap-[24px]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-s23/from to-s23/to md:max-w-[90%] max-md:text-mobile/h4  text-desktop/h2  mt-6 font-markot">
              Flaunt your Style: Photochromic Colour Change Technology
            </span>
          </h2>
          <p className="text-desktop/body/2/regular md:text-desktop/body/1 text-zinc-300 w-[630px] max-md:w-full mt-6">
            Meet the itel S23 - Capture every moment with its 50MP AI Dual Rear Camera and enjoy seamless multitasking with 8GB RAM, expandable up to 16GB* with Memory Fusion Technology. Flaunt the colour-changing back panel and stay entertained with the 6.6" HD+ Display for an immersive experience. With a 5000 mAh battery and Type-C charger, this slim, sleek phone has it all. Discover the ultimate blend of style and performance with itel S23.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-32 w-full max-md:mt-10 max-md:flex-col ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col flex-1 shrink px-10 py-12 rounded-2xl basis-0 min-h-[316px] min-w-[240px] max-md:px-5 max-md:w-full border-2 border-gray-200 border-opacity-10 h-[356px]">
              <img loading="lazy" src={feature.icon} alt="arrow icon" className="object-contain aspect-square w-[52px]" />
              <div className="flex flex-col mt-6 w-full">
                <h3 className="text-mobile/h5 md:text-desktop/h4  text-white">{feature.title}</h3>
                <p className="mt-2 text-desktop/body/2/regular md:text-desktop/body/1 text-zinc-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
