function FeatureSection() {
  const features = [
    {
      icon: "/smartphone/P55/storageP55.svg",   
      title: "Blazing Speed: 24GB* (8GB + 16GB*) RAM + 128GB Storage",
      description: "Experience lightning-fast performance with 8GB RAM, expandable upto 24GB* using Memory Fusion. "
    },
    {
      icon: "/smartphone/P55/cameraP55.svg",  
      title: "Capture Brilliance: 50MP AI Dual Rear Camera",
      description: "Elevate your photography with an intelligent 50 MP AI dual camera to get stunning clarity in every frame."
    },
    {
      icon: "/smartphone/P55/gameP55.svg", 
      title: "Gaming Powerhouse: Unisoc T606 Octa-Core Processor with iBoost Tech",
      description: "Level up your seamless gaming experience with the T606 Octa-Core processor and iBoost gaming technology."
    }
  ];

  return (
    <section className="flex opacity-90 overflow-hidden z-0 flex-col justify-center px-5 md:px-0 pt-[40px] md:pt-40 pb-32 max-w-full max-md:py-24 " style={{
      backgroundImage: "url(/smartphone/P55/featureSectionBG.jpeg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>

      <div className="flex flex-col justify-center w-full max-md:max-w-full content">
        <div className="flex flex-wrap justify-between items-start w-full max-md:max-w-full max-md:flex-col">
          <h2 className="flex flex-col flex-1 shrink text-5xl font-medium tracking-tighter basis-0 leading-[58px] min-w-[240px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] md:gap-[24px]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-p55/from to-p55/to md:max-w-[90%] max-md:text-mobile/h4  text-desktop/h2  mt-6 font-markot">
            Zap, Play, Win: All Possible with 24GB* (8GB + 16GB*) RAM
            </span>
          </h2>
          <p className="text-desktop/body/2/regular md:text-desktop/body/1 text-zinc-300 w-[630px] max-md:w-full mt-6">
            Introducing the all-new itel P55 - your ultimate power play! With a whopping 8GB RAM, expandable up to 24GB* using Memory Fusion and 128GB ROM, capture every moment in stunning detail with the 50MP AI dual camera. Stay charged up with 18W- Type C fast charging and a massive 5000 mAh battery. Immerse yourself in a visual feast with the beautiful 6.6&quot; HD+ display boasting a smooth 90Hz refresh rate. Plus, the punch-hole display with a dynamic bar makes accessing notifications a breeze.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-start mt-32 w-full max-md:mt-10 max-md:flex-col ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col flex-1  shrink rounded-2xl basis-0 min-h-[316px] min-w-[240px] max-w-[337px] max-md:px-5 max-md:w-full h-[356px]">
              <img loading="lazy" src={feature.icon} alt="arrow icon" className="object-contain aspect-square w-[52px]" />
              <div className="flex flex-col mt-6 w-full">
                <h3 className="text-mobile/h5 md:text-desktop/h4  bg-clip-text text-transparent bg-gradient-to-r from-p55/from to-p55/to">{feature.title}</h3>
                <p className="mt-2 text-desktop/body/2/regular md:text-desktop/body/1 text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
