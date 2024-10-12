import React from 'react';

function SupportChannels() {
  const supportChannels = [
    {
      image: "/SmartPhone/S_Twenty_Three/Support1.webp",
      title: "100 Days Promise",
      link: "#"
    },
    {
      image: "/SmartPhone/S_Twenty_Three/Support2.webp",
      title: "Screen Replacement",
      link: "#"
    },
    {
      image: "/SmartPhone/S_Twenty_Three/Support3.webp",
      title: "Service Centre",
      link: "#"
    }
  ];

  return (
    <section className="flex flex-col bg-black justify-center items-center w-full font-medium text-center pb-24">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="text-4xl tracking-tighter leading-tight text-white max-md:max-w-full tracking-wide max-md:text-left max-md:px-8">
          Support Channels
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-start mt-9 max-w-full">
          {supportChannels.map((channel, index) => (
            <div key={index} className="flex flex-col min-w-[240px] w-[322px] max-md:w-1/2">
              <img 
                loading="lazy" 
                src={channel.image} 
                alt={channel.title} 
                className="object-contain max-w-full aspect-[1.11] rounded-lg" // Adjusted for rounded corners
              />
              <div className="flex flex-col items-center mt-6 w-full">
                <h3 className="text-2xl tracking-tight leading-8 text-stone-100">{channel.title}</h3>
                <a href={channel.link} className="flex gap-0.5 items-center mt-2 text-base tracking-tight leading-tight text-white">
                  <span className="self-stretch my-auto">Read more</span>
                  <img loading="lazy" src="/SmartPhone/S_Twenty_Three/arrow-right.webp" alt="" className="object-contain w-6 aspect-square" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportChannels;
