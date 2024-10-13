import React from 'react';

const Home = () => {
  return (
    <div className="relative h-[536px] md:h-[800px] bg-blue-900 text-white">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(77, 143, 253, 0.7) 0%, rgba(27, 43, 84, 0.7) 100%), url("/P_Series/Home_bg.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8 md:gap-16 justify-center h-full p-6 md:p-8">
        {/* Series Tag */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[776px]">
          <div className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase">
            <span className="border-2 border-white px-3 py-1 rounded-full">
              Power Series ⚡
            </span>
          </div>

          {/* Product Name */}
          <h1 className="text-mobile/large md:text-desktop/large/h">
            P55 5G
          </h1>

          {/* Product Details */}
          <p className="text-mobile/body md:text-desktop/title text-[#D9D9D9] w-full md:w-[543px]">
            5G WITH NRCA | MEDIATEK DIMENSITY 6080 | 12GB* (6GB + 6GB*) RAM + 128GB ROM
          </p>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-4">
          <p className="text-xl md:text-2xl">
            Starting from{' '}
            <span className="font-bold text-yellow-400">₹9,999/-</span>
          </p>
        </div>
      </div>

      {/* Actor Image */}
      <div className="absolute bottom-5 md:bottom-0 right-5 md:right-8">
        <img
          src="/P_Series/hero.png"
          alt="Actor"
          className="h-[300px] md:h-[636.78px]"
        />
      </div>
    </div>
  );
};

export default Home;

