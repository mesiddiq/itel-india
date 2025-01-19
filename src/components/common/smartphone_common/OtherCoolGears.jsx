import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const GearCard = ({ theme, title, imageSources }) => {
  const isDarkTheme = theme === 'dark';
  return (
    <div className={`group col-span-1 ${isDarkTheme ? 'bg-[#232322]' : 'bg-bg/primary/1'} p-[20px] rounded-[16px] h-[332px] relative overflow-hidden`}>
      <div className="grid grid-cols-2">
        <div className="col-span-1 w-[200%] z-10">
          <h3 className={`text-mobile/h5/medium md:text-desktop/h4 font-markot ${isDarkTheme ? 'text-[#FFFFFF]' : 'text-black'} pb-[10px]`}>{title}</h3>
          <Link to={'/coming-soon'} className="cursor-pointer ">
            <p  className="flex items-center text-mobile/button md:text-desktop/button font-markot">
              READ MORE <img src="/static_page/homepage/Arrow_right.svg" alt="arrow" className="ml-2 mt-1" />
            </p>

          </Link>
        </div>
        <div className="col-span-1 flex justify-center items-center h-full">
          {imageSources.map((src, index) => (
            <img
              key={index}
              src={src.src}
              alt={src.alt}
              className={src.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const OtherCoolGears = ({ theme = 'light' }) => {
  const isDarkTheme = theme === 'dark';

  const gearCardsData = [
    {
      title: 'Smart Gadgets, Exquisite Design',
      imageSources: [
        { src: '/static_page/homepage/EnjoyBetterLifeCol2Bg.png', alt: 'Background', className: `max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110 ${isDarkTheme ? 'filter brightness-50' : ''}` },
        { src: '/static_page/homepage/OtherCoolGearsCardOne.svg', alt: 'Foreground One', className: 'max-w-[50%] md:max-w-auto h-auto absolute bottom-[-15px] right-0 transition-transform duration-300 transform scale-100 group-hover:scale-105' },
        { src: '/static_page/homepage/OtherCoolGearsCardOneTwo.svg', alt: 'Foreground Two', className: 'max-w-[50%] md:max-w-auto h-auto absolute bottom-0 right-32 md:right-[5rem] transition-transform duration-300 transform scale-100 group-hover:scale-105' },
      ],
    },
    {
      title: 'Smart TV, Non-Stop Entertainment',
      imageSources: [
        { src: '/static_page/homepage/EnjoyBetterLifeCol3Bg.png', alt: 'Background', className: `max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110 ${isDarkTheme ? 'filter brightness-50' : ''}` },
        { src: '/static_page/homepage/EnjoyBetterLifeCol3.png', alt: 'Endless entertainment experience', className: 'max-w-full h-auto absolute bottom-0 right-5 transition-transform duration-300 transform scale-100 group-hover:scale-105' },
      ],
    },
    {
      title: 'Feature Phones - Stay Connected All Day Long',
      imageSources: [
        { src: '/static_page/homepage/EnjoyBetterLifeCol3Bg.png', alt: 'Background', className: `max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110 ${isDarkTheme ? 'filter brightness-50' : ''}` },
        { src: '/static_page/homepage/OtherCoolGearsCardThree.svg', alt: 'Foreground', className: 'max-w-full h-auto absolute bottom-0 transition-transform duration-300 transform scale-100 group-hover:scale-105' },
      ],
    },
  ];

  return (
    <div className={`content font-markot ${isDarkTheme ? 'bg-[#0A0C08]' : 'bg-white'}`}>
      <div className="flex px-[16px] md:px-0 pt-[40px] pb-[20px]" style={{ marginTop: '0px' }}>
        <h3 className={`text-mobile/h4 md:text-desktop/h3 font-markot ${isDarkTheme ? 'text-[#FFFFFF]' : 'text-black'}`}>
          Take a quick Peep on our other cool gears!
        </h3>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-[16px] md:px-0 pb-[40px] ${isDarkTheme ? 'text-[#F8F6F3]' : 'text-black'}`} style={{ marginTop: '0px' }}>
        {gearCardsData.map((card, index) => (
          <GearCard key={index} theme={theme} title={card.title} imageSources={card.imageSources} />
        ))}
      </div>
    </div>
  );
};

export default OtherCoolGears;
