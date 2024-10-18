import React from 'react';

function SimilarProducts() {
  const products = [
    {
      name: 'S24',
      price: '₹10,999.00',
      originalPrice: null,
      image: '/smartphone/S_Twenty_Three/S24.webp' 
    },
    {
      name: 'P55+',
      price: '₹9,499',
      originalPrice: '₹13,999.00',
      image: '/smartphone/S_Twenty_Three/P55.webp' 
    },
    {
      name: 'S23',
      price: '₹8,199',
      originalPrice: '₹12,999.00',
      image: '/smartphone/S_Twenty_Three/S23.webp' 
    },
    {
      name: 'A70',
      price: '₹6,299',
      originalPrice: '₹7,299.00',
      image: '/smartphone/S_Twenty_Three/A70.webp' 
    }
  ];

  return (
    <section className="flex z-0 flex-col items-center pb-32 max-w-full">
      <div className="flex flex-col justify-center items-center py-10 w-full">
        <div className="flex flex-col max-w-full w-[1280px]">
          <h2 className="text-mobile/h4 md:text-desktop/h3 text-white px-8 md:px-2 ">
            Similar Products
          </h2>
          <div className="flex flex-wrap gap-5 items-start justify-center mt-9">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col px-8 gap-[32px] pt-8 pb-11 rounded-2xl bg-neutral-800 min-w-[240px] w-[304px] h-[452px]  max-md:px-5 max-md:w-1/2"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-[200px] w-[200px] " 
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex flex-col items-center whitespace-nowrap">
                    <h3 className="text-mobile/h6 md:text-desktop/h4  text-zinc-100">{product.name}</h3>
                    <div className="flex gap-2 items-center mt-3">
                      <p className="text-desktop/h6/medium font-bold tracking-normal leading-tight text-white">{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-desktop/stikethrough/text text-neutral-400 line-through">{product.originalPrice}</p>
                      )}
                    </div>
                  </div>
                  <button className="flex gap-3 justify-center items-center mt-4 w-full text-mobile/small/button md:text-desktop/button text-center uppercase text-stone-100">
                    <span className="flex overflow-hidden gap-2 items-center">
                      <span>Buy Now</span>
                      <img loading="lazy" src="/smartphone/S_Twenty_Three/arrow-right.webp" alt="" className="object-contain w-6" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimilarProducts;
