/* eslint-disable react/prop-types */
const Model = ({ theme = 'light' }) => {
  const isLightTheme = theme === 'light';

  const models = [
    {
      id: 1,
      image: '/smartphone/P555g/bg6.png',
      title: 'S23+',
      price: '₹12,999.00',
      path:'/product/s23-p',
      features: [
        { label: 'Camera', value: '108MP Ultra Clear AI Camera' },
        {label: 'Memory', value: 'Upto 16GB* RAM + 128GB ROM'},
        { label: 'Dimension', value: '163.5 x 75.5 x 8.3 mm' },
        { label: 'Processor', value: 'Octa-core Processor' },
        { label: 'Battery', value: '5000mAh' },
       
      ],
    },
    {
      id: 2,
      image: '/smartphone/P555g/bg7.png',
      title: 'S24',
      price: '₹10,999.00',
      path:'/product/s24',
      features: [
        { label: 'Camera', value: '50MP Dual Rear' },
        {label: 'Memory', value: '8GB + 8GB* + 256GB Memory'},
        { label: 'Dimension', value: '164.4 x 75.1 x 7.9mm' },
        { label: 'Processor', value: 'Octa-core Processor' },
        { label: 'Battery', value: '5000mAh' },
        
      ],
    },
    {
      id: 3,
      image: '/smartphone/P555g/bg8.png',
      title: 'A70',
      price: '₹6,799.00',
      path:'/product/a70',
      features: [
        { label: 'Camera', value: '32MP Dual Rear Camera' },
        {label: 'Memory', value: 'Upto 12GB RAM'},
        { label: 'Dimensions', value: '163.9 * 75.7 * 8.6 mm' },
        { label: 'Processor', value: 'Octa-core Processor' },
        { label: 'Battery', value: '5000mAh' },
        
        
      ],
    },
  ];

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
              className={`w-full ${isLightTheme ? 'bg-gray-100 text-black' : 'bg-[#232323] text-white'} rounded-[16px] p-4 md:p-6 lg:p-[24px] ${
                index === 2 ? 'hidden lg:block' : 'block'
              }`}
            >
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-[20px]">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center items-center">
                    <img
                      src={model.image}
                      className="w-full h-auto max-w-[250px] md:max-w-[300px] lg:max-w-[360px] object-contain"
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
                <button
                  className={`flex gap-3 justify-center border ${isLightTheme ? 'border-black' : 'border-white/50'} py-[12px] px-[24px] rounded-full items-center mt-4 w-full text-mobile/small/button md:text-desktop/button text-center uppercase ${
                    isLightTheme ? 'text-black' : 'text-stone-100'
                  }`}
                >
                  <span className="flex overflow-hidden gap-2 items-center">
                    <span>Buy Now</span>
                    <img loading="lazy" src="/P_Series/arrow-right.png" alt="" className="object-contain w-6" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;
