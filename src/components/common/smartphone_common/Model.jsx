import React from 'react';

const Model = () => {
  // Define the data for models
  const models = [
    {
      id: 1,
      image: '/P_Series/bg6.png',
      title: 'S23+',
      price: '₹12,999.00',
      features: [
        { label: 'Camera', value: '50MP AI Dual Rear Camera' },
        { label: 'Display', value: '6.5" Super AMOLED' },
        { label: 'Battery', value: '5000mAh' },
        { label: 'Processor', value: 'Octa-Core 2.2GHz' },
      ],
    },
    {
      id: 2,
      image: '/P_Series/bg7.png',
      title: 'S24',
      price: '₹10,999.00',
      features: [
        { label: 'Camera', value: '108MP Quad Rear Camera' },
        { label: 'Display', value: '6.8" Dynamic AMOLED' },
        { label: 'Battery', value: '6000mAh' },
        { label: 'Processor', value: 'Snapdragon 8 Gen 1' },
      ],
    },
    {
      id: 3,
      image: '/P_Series/bg8.png',
      title: 'A70',
      price: '₹6,799.00',
      features: [
        { label: 'Camera', value: '32MP Dual Rear Camera' },
        { label: 'Display', value: '6.1" IPS LCD' },
        { label: 'Battery', value: '4500mAh' },
        { label: 'Processor', value: 'MediaTek Helio G95' },
      ],
    },
  ];

  return (
    <div className="bg-black py-[60px] h-auto flex justify-center">
      <div className="w-full content flex flex-col gap-[36px] px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-mobile/h5/medium md:text-desktop/h3">Compare Models</h3>
          <div className="flex gap-[8px] mt-4 md:mt-0">
            <img src="/P_Series/red_model.png" className="h-[24px] w-[25px]" alt="Model" />
            <h2 className="text-white md:text-desktop/tertiary/cta">Compare other models</h2>
          </div>
        </div>

        {/* Responsive card container */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[24px] justify-center">
          {models.map((model, index) => (
            <div
              key={model.id}
              className={`w-full bg-[#232323] rounded-[16px] p-4 md:p-6 lg:p-[24px] ${
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
                    <h4 className="text-white text-mobile/h7 md:text-desktop/h4">{model.title}</h4>
                    <h5 className="text-[#FF99AF] text-mobile/h7 md:text-desktop/h4">{model.price}</h5>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] md:gap-4">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row justify-center md:justify-between gap-[12px] text-center md:gap-[20px] items-center">
                      <p className="text-[#F8F6F3] font-markot text-desktop/caption md:text-desktop/subtitle">{feature.label}</p>
                      <p className="text-[#D9D9D9] font-markot text-mobile/small/body md:text-desktop/body/2/regular">{feature.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;
