import React from 'react';

const Home = () => {
  return (
    <div className="relative h-[536px] md:h-[800px] text-white bg-cover "  style={{ backgroundImage: 'url(/P_Series/banner-image-1.png)' }}>
    

  
      <div className="relative z-10 flex flex-col gap-8 md:gap-16 justify-center h-full p-6 md:p-8">
       
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[776px]">
          <div className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase">
            <span className="border-2 border-white px-3 py-1 rounded-full">
              Power Series ⚡
            </span>
          </div>

       
          <h1 className="text-mobile/large md:text-desktop/large/h">
            P55 5G
          </h1>

          <p className="text-mobile/body md:text-desktop/title text-[#D9D9D9] w-full md:w-[543px]">
            5G WITH NRCA | MEDIATEK DIMENSITY 6080 | 12GB* 6GB + 6GB* RAM + 128GB ROM
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xl md:text-2xl">
            Starting from{' '}
            <span className="font-bold text-yellow-400">₹9,999/-</span>
          </p>
        </div>
      </div>

      
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

