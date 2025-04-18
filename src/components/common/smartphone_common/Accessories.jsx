import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Accessories = ({ theme = 'light' }) => {
  const isLightTheme = theme === 'light';

  const accessoriesData = [
    {
      imageSrc: '/smartphone/P555g/bg2.png',
      title: 'Earbuds T1Pro',
      price: '₹849.00',
      url: '',
    },
    {
      imageSrc: '/smartphone/P555g/bg3.png',
      title: 'Icon 2',
      price: '₹1,099.00',
      url: '',
    },
    {
      imageSrc: '/smartphone/P555g/bg4.png',
      title: 'N82',
      price: '₹999.00',
      url: '',
    },
    {
      imageSrc: '/smartphone/P555g/bg5.png',
      title: 'Smartwatch 2 Ultra',
      price: '₹2,099.00',
      url: '',
    },
  ];

  return (
    <div className={`h-auto flex justify-center w-full py-[40px] ${isLightTheme ? 'bg-white text-black' : 'bg-[#0A0C08] text-white'} font-markot`}>
      <div className="content w-full flex flex-col gap-[36px] px-4">
        <h3 className={`text-mobile/h4 md:text-desktop/h3 ${isLightTheme ? 'text-black' : 'text-white'}`}>
          Level Up Your Experience with Accessories!
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] justify-center">
          {accessoriesData.map((accessory, index) => (
            <div
              key={index}
              className={`rounded-[16px] min-h-[202px] flex flex-col md:p-3 py-1 justify-between  items-center text-center ${isLightTheme ? 'bg-gray-100 text-black' : 'bg-[#232323] text-white'}`}
            >
              <div className="flex justify-center items-center">
                <img
                  src={accessory.imageSrc}
                  alt={accessory.title}
                  className="w-full h-auto max-w-[150px] md:max-w-[220px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-[12px]">
                  <h4 className="text-mobile/h6 md:text-desktop/h4 mt-4 font-markot">
                    {accessory.title}
                  </h4>
                  <h6 className="text-desktop/h6 font-markot">{accessory.price}</h6>
                </div>

                <Link to={'/coming-soon'} className="flex gap-3 justify-center items-center mt-4 w-full text-mobile/small/button md:text-desktop/button text-center uppercase text-stone-100">
                  {/* <Link href={'/commingsoon'} className="cursor-pointer"> */}

                    <span className="flex overflow-hidden gap-2 items-center">
                      <span className={` ${isLightTheme ? ' text-black' : ' text-white'}`}>Buy Now</span>
                      <img loading="lazy" src="/smartphone/P555g/arrow-right.png" alt="" className="object-cover w-6" />
                    </span>
                  {/* </Link> */}
                </Link>
              </div></div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
