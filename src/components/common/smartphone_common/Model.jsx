import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Model = ({ theme = 'light', models }) => {
  const isLightTheme = theme === 'light';

  return (
    <div className={`py-[60px] font-markot h-auto flex justify-center ${isLightTheme ? 'bg-white text-black' : 'bg-[#0A0C08] text-white'}`}>
      <div className="w-full content flex flex-col gap-[36px] px-4">
        <div className="flex justify-between items-center">
          <h3 className={`${isLightTheme ? 'text-black' : 'text-white'} text-mobile/h5/medium md:text-desktop/h3`}>
            Compare Models
          </h3>
          <div className="flex gap-[8px] mt-4 md:mt-0">
            <img src="/P_Series/red_model.png" className="h-[24px] w-[25px]" alt="Model" />
            <h2 className={`${isLightTheme ? 'text-black' : 'text-white'} md:text-desktop/tertiary/cta`}>
              Compare other models
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[24px] justify-center">
          {models.map((model, index) => (
            <div
              key={model.id}
              className={`w-full ${isLightTheme ? 'bg-gray-100 text-black' : 'bg-[#232323] text-white'} rounded-[16px] p-4 md:p-6 lg:p-[24px] ${index === 2 ? 'hidden lg:block' : 'block'
                }`}
            >
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-[20px]">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center items-center">
                    <img
                      src={model.image}
                      className="w-full h-auto max-w-[250px] md:max-w-[300px] lg:max-w-[360px] object-contain max-h-[320px]"
                      alt={model.title}
                    />
                  </div>
                  <div className="flex justify-between">
                    <h4 className={`${isLightTheme ? 'text-black' : 'text-white'} text-mobile/h7 md:text-desktop/h4`}>
                      {model.title}
                    </h4>
                    <h5 className="text-[#FF99AF] text-mobile/h7 md:text-desktop/h4">{model.price}</h5>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] md:gap-4">
                  {model.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row justify-center md:justify-between gap-[12px] text-center md:gap-[20px] items-center"
                    >
                      <p className={`${isLightTheme ? 'text-black' : 'text-[#F8F6F3]'} font-markot text-desktop/caption md:text-desktop/subtitle`}>
                        {feature.label}
                      </p>
                      <p className={`${isLightTheme ? 'text-gray-800' : 'text-[#D9D9D9]'} font-markot text-mobile/small/body md:text-desktop/body/2/regular`}>
                        {feature.value}
                      </p>
                    </div>
                  ))}
                </div>
                <Link to={model.path}>
                  <button
                    className={`flex gap-3 justify-center border ${isLightTheme ? 'border-black' : 'border-white/50'} py-[12px] px-[24px] rounded-full items-center mt-4 w-full text-mobile/small/button md:text-desktop/button text-center uppercase ${isLightTheme ? 'text-black' : 'text-stone-100'
                      }`}
                  >
                    <span className="flex overflow-hidden gap-2 items-center">
                      <span>Buy Now</span>
                      <img loading="lazy" src="/P_Series/arrow-right.png" alt="" className="object-contain w-6" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;
