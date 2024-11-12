import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function SupportChannels({ theme = 'light' }) {
  const isLightTheme = theme === 'light';

  const supportChannels = [
    {
      image: "/smartphone/S_Twenty_Three/Support1.webp",
      title: "100 Days Promise",
      link: "/support/100-days-service-promise",
    },
    {
      image: "/smartphone/S_Twenty_Three/Support2.webp",
      title: "Screen Replacement",
      link: "/support/1-time-screen-replacement",
    },
    {
      image: "/smartphone/S_Twenty_Three/Support3.webp",
      title: "Service Centre",
      link: "/support/service-center-locator",
    },
  ];

  return (
    <section className={`flex flex-col font-markot justify-center items-center w-full font-medium text-center pb-24 ${isLightTheme ? 'bg-white' : 'bg-[#131313]'}`}>
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className={`text-mobile/h4 md:text-desktop/h3 max-md:pt-10 ${isLightTheme ? 'text-black' : 'text-white'} max-md:max-w-full max-md:text-left max-md:px-8`}>
          Support Channels
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-start mt-9 max-w-full">
          {supportChannels.map((channel, index) => (
            <div key={index} className="flex flex-col min-w-[240px] w-[322px] max-md:w-1/2">
              <img 
                loading="lazy" 
                src={channel.image} 
                alt={channel.title} 
                className="object-contain max-w-full aspect-[1.11] rounded-lg"
              />
              <div className="flex flex-col items-center mt-6 w-full">
                <h3 className={`text-desktop/body/2/medium md:text-desktop/h4 ${isLightTheme ? 'text-black' : 'text-stone-100'}`}>
                  {channel.title}
                </h3>
                <Link to={channel.link} className={`flex gap-0.5 items-center mt-2 md:text-base md:tracking-tight md:leading-tight ${isLightTheme ? 'text-black' : 'text-white'}`}>
                  <span className="self-stretch my-auto text-mobile/small/body md:text-desktop/body/1">Read more</span>
                  <img loading="lazy" src="/smartphone/S_Twenty_Three/arrow-right.webp" alt="" className="object-contain w-6 aspect-square" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportChannels;
