import React from 'react';
import BuyNowText from '../../../common/smartphone_common/BuyNowText';

const Home = () => {
  return (
    <div className="relative h-[536px]  md:h-[800px] text-white bg-cover " 
     style={{ backgroundImage: 'url(/P_Series/banner-image-1.png)' }}>
    <div className='flex content w-full items-center h-full py-8'>
  
      <div className=" z-10 flex flex-col gap-[16px] md:gap-[64px] md:justify-center h-full px-4 lg:p-0">
       
        <div className="flex flex-col gap-[16px] md:gap-[24px] ">
          <div className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase">
            <span className="border-2 border-white px-1.5 py-3 rounded-full font-bricolage">
              Power Series 
            </span>
          </div>

       
          <h1 className="text-mobile/h1 md:text-desktop/large/h">
            P55 5G
          </h1>

          <p className="text-mobile/title font-markot md:text-desktop/title text-grey/grey/2 w-full md:w-[543px]">
            5G WITH NRCA | MEDIATEK DIMENSITY 6080 | 12GB* 6GB<br/> + 6GB* RAM + 128GB ROM
          </p>
        </div>

        <div className="flex flex-col gap-[4px]">
          <p className="text-xl md:text-2xl font-markot">
            Starting from{' '}
            <span className="font-bold text-desktop/h5">₹9,999/-</span>
          </p>
          <div className="bg-BuyNowSquareBG bg-contain bg-no-repeat relative w-[160px] h-[48px] flex flex-col justify-center items-center">
          <button className="flex gap-3 items-center mt-4 w-full text-mobile/small/button md:text-desktop/button text-center uppercase text-stone-100">
                    <span className="flex overflow-hidden gap-2 items-center">
                      <span>Buy Now</span>
                      <img loading="lazy" src="/P_Series/arrow-right.png" alt="" className="object-contain w-6" />
                    </span>
                  </button>
    </div>
        
        </div>
      </div>

      
      <div className="absolute bottom-0 right-5 md:right-8">
        <img
          src="/P_Series/hero.png"
          alt="Actor"
          className="h-[300px] w-[320px] lg:w-[730px]  lg:h-[638px]"
        />
      </div>
   
</div>

</div>
  );
};

export default Home;

