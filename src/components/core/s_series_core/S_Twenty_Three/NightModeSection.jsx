import React from 'react';

function NightModeSection() {
  return (
    <section className="flex z-0 gap-10 items-start px-20 py-28 w-full text-5xl font-medium tracking-tighter text-white leading-[58px] max-w-[1440px] min-h-[956px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] bg-black opacity-90">
      <div className="flex relative justify-between min-h-[720px] min-w-[240px] w-[1280px] max-md:text-4xl max-md:leading-[54px]">
        <div className="flex absolute bottom-4 z-0 shrink-0 self-start rounded-none h-[529px] left-[53px] min-w-[240px] w-[432px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef440154659eef0e8192ca886df325f1c7a3dcfe12833f3bc7b5b4317dac41f6?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Night mode photography showcase" className="object-contain absolute right-0 bottom-0 z-0 self-start aspect-[1.85] h-[540px] min-w-[240px] w-[1000px] max-md:max-w-full" />
        <h2 className="z-0 w-[798px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Nightlife Alive: <br /> Super Night Mode Engaged!
        </h2>
        <div className="flex z-0 shrink-0 self-end h-[540px] min-w-[240px] w-[1000px]" />
      </div>
    </section>
  );
}

export default NightModeSection;