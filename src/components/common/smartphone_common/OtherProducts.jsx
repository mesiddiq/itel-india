import React from 'react';

function OtherProducts() {
  const products = [
    {
      title: "Smart Gadgets and Wearables, Exquisite Design and Power",
      image: "/SmartPhone/S_Twenty_Three/Watch2.webp",
      width: "w-[549px]"
    },
    {
      title: "Smart TV, Non-Stop Entertainment",
      image: "/SmartPhone/S_Twenty_Three/TV.webp",
      width: "w-[243px]"
    },
    {
      title: "Feature Phones- Stay Connected All Day Long",
      image: "/SmartPhone/S_Twenty_Three/Featurephone.webp",
      width: "w-[243px]"
    }
  ];

  return (
    <section className="flex flex-col bg-black items-center pt-10 w-full min-h-[461px] max-md:px-4">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="text-4xl font-medium tracking-tighter leading-tight text-white max-md:max-w-full">
          Check out our other Products
        </h2>
        <div className="flex flex-wrap gap-5 items-start self-center mt-9 w-full rounded-[32px]">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`flex overflow-hidden flex-col grow shrink rounded-2xl bg-neutral-800 min-w-[240px] ${product.width} max-md:max-w-full h-[258px]`} 
            >
              <div className="flex relative flex-col items-start px-8 pt-6 pb-28 w-full h-full max-md:px-5 max-md:pb-24">
                <img 
                  loading="lazy" 
                  src={product.image} 
                  alt={product.title} 
                  className="object-cover absolute bottom-0 right-0 w-1/2 h-auto" 
                />
                <div className="flex relative flex-col mb-0 max-w-full w-[258px] max-md:mb-2.5">
                  <h3 className="text-2xl font-medium tracking-tight leading-8 text-white">
                    {product.title}
                  </h3>
                  <a href="#" className="flex overflow-hidden gap-2 items-center self-start mt-3 text-base font-bold tracking-normal leading-tight text-center uppercase text-stone-100">
                    <span className="self-stretch my-auto">Read more</span>
                    <img loading="lazy" src="/SmartPhone/S_Twenty_Three/arrow-right.webp" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherProducts;
