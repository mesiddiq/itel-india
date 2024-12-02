import { MdCurrencyRupee } from "react-icons/md";

/* eslint-disable react/prop-types */
function SimilarProducts({ theme = 'light' }) {
  const isLightTheme = theme === 'light';

  const products = [
    {
      name: 'S24',
      price: '10,999.00',
      originalPrice: null,
      image: '/smartphone/S_Twenty_Three/S24.webp',
      link:'/product/s24'
    },
    {
      name: 'P55+',
      price: '9,499',
      originalPrice: '₹13,999.00',
      image: '/smartphone/S_Twenty_Three/P55.webp',
      link:'/product/p55-plus'
    },
    {
      name: 'S23',
      price: '8,199',
      originalPrice: '₹12,999.00',
      image: '/smartphone/S_Twenty_Three/S23.webp',
      link:'/product/s23'
    },
    {
      name: 'A70',
      price: '6,299',
      originalPrice: '₹7,299.00',
      image: '/smartphone/S_Twenty_Three/A70.webp',
      link:'/product/a70'
    },
  ];

  return (
    <section className={` font-markot z-0  items-center px-2 md:px-0 pb-32 max-w-full ${isLightTheme ? 'bg-white' : 'bg-[#0A0C08]'}`}>
        <div className="flex flex-col gap-6 content py-10 ">
          <h2 className={`text-mobile/h4 text-center md:text-start md:text-desktop/h3 ${isLightTheme ? 'text-black' : 'text-white'} px-8 md:px-2`}>
            Similar Products
          </h2>
          <div className="grid grid-cols-2  w-full  lg:mx-0 lg:grid-cols-4 gap-[6px] md:gap-[14px] justify-center">
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center gap-[26px] rounded-lg ${
                  isLightTheme ? 'bg-gray-100' : 'bg-neutral-800'
                } h-[320px] md:h-[452px] max-md:px-5  md:w-full lg:w-full`}
              >
                <div className="flex justify-center ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-[135px] w-[100px] md:h-[200px] md:w-[200px]"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex flex-col items-center whitespace-nowrap">
                    <h3 className={`${isLightTheme ? 'text-black' : 'text-zinc-100'} text-mobile/h6 md:text-desktop/h4`}>
                      {product.name}
                    </h3>
                    <div className="flex gap-2 flex-wrap items-center mt-3">
                      <p className={`text-desktop/h6/medium  font-bold flex items-center tracking-normal leading-tight ${isLightTheme ? 'text-black' : 'text-white'}`}>
                       <MdCurrencyRupee/>   {product.price}
                      </p>
                      {/* {product.originalPrice && (
                        <p className="text-desktop/strikethrough/text text-neutral-400 line-through">
                          {product.originalPrice}
                        </p>
                      )} */}
                    </div>
                  </div>
                  <button
                    className={`flex gap-3 justify-center items-center mt-4 w-full text-mobile/small/button md:text-desktop/button text-center uppercase ${
                      isLightTheme ? 'text-black' : 'text-stone-100'
                    }`}
                  >
                    <span className="flex overflow-hidden gap-2 items-center">
                      <a href={product.link} >
                        <span>Buy Now</span>
                      </a>
                      <img loading="lazy" src="/smartphone/S_Twenty_Three/arrow-right.webp" alt="" className="object-contain w-6" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    
    </section>
  );
}

export default SimilarProducts;
