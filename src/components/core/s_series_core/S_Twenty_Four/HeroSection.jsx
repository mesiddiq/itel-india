import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG';

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start('showFirst');
      await controls.start('showSecond');
      await controls.start('showThird');
      await controls.start('showFourth');
      await controls.start('showFifth');
      await controls.start('showBackground');
    };

    sequence();
  }, [controls]);

  return (
    <motion.section
      className="relative flex flex-col bg-130 lg:bg-85 items-center justify-between max-h-[550px] h-[550px] lg:h-screen lg:max-h-screen overflow-hidden"
      style={{
        backgroundColor: 'black',
        backgroundImage: `url('/smartphone/S24/S24 Banner.png')`,
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'right',
        backgroundRepeat: 'no-repeat',
      }}
      initial="hidden"
      animate={controls}
      variants={{
        showBackground: { backgroundColor: 'black', transition: { duration: 0.3 }, opacity: 1 },
        hidden: { opacity: 1 },
      }}
    >
      {/* Background Image Reveal */}
      <motion.div
        className="absolute"
        style={{
        }}
        initial={{ opacity: 0 }} // Start hidden
        animate={controls}
        variants={{
          showBackground: { opacity: 1, transition: { duration: 0.8 } }, // Faster reveal
        }}
      />

      <div className="md:content flex flex-col gap-4 lg:gap-[64px] z-10 px-4 lg:px-0 w-full h-full lg:mt-0 mt-[45px] lg:justify-center items-start">
        <div className='flex flex-col gap-1'>
          {/* Super Series Badge */}
          <motion.div
            className="font-markot w-[140px] flex flex-row justify-between items-center gap-[3px] rounded-full px-[6px] py-[3px] border-2 border-transparent bg-clip-padding"
            style={{
              background:
                'linear-gradient(#000, #000) padding-box, linear-gradient(107.83deg, #FFCF92 23.83%, #FFE8CB 75.66%) border-box',
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            variants={{
              showFirst: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Faster slide-in
              hidden: { opacity: 0, x: -100 },
            }}
          >
            <h1 className="font-bold bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent uppercase text-[14px] leading-[16.8px] tracking-[0.01em]">
              Super Series
            </h1>
            <img src="/smartphone/S24/superSeriesStar.svg" alt="Super Series Star" className="w-3" />
          </motion.div>

          {/* S24 Text */}
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            variants={{
              showSecond: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Faster slide-in
              hidden: { opacity: 0, x: -100 },
            }}
          >
            <h1 className="font-markot text-mobile/h1 lg:text-desktop/large/h bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent">
              S24
            </h1>
          </motion.div>
        </div>
        
        {/* Description */}
        <motion.div
          className="max-w-[400px] lg:max-w-full font-markot text-mobile/tile lg:text-desktop/title text-grey/grey/2 lg:text-grey/grey/2 lg:w-[473px] uppercase"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          variants={{
            showThird: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Faster slide-in
            hidden: { opacity: 0, x: -100 },
          }}
        >
          108MP AI Camera | 16GB* (8GB+8GB*) RAM + 128GB ROM | Helio G91 Processor
        </motion.div>

        <div className="w-full ">
          {/* Available at Price */}
          <motion.div
            className="text-white flex flex-col gap-[16px]"
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            variants={{
              showFourth: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Faster slide-in
              hidden: { opacity: 0, x: -100 },
            }}
          >
            <h1 className="flex flex-row justify-start items-center gap-1 font-markot lg:text-[20px] lg:leading-[24px] lg:tracking-[0.01em] text-mobile/small/body">
              <span>Available at </span>
              <span className="font-markot font-bold text-[20px] leading-[26px] tracking-[0.01em] ">
                ₹10,999
              </span>
            </h1>

            {/* Buy Now Button (Visible only on medium and larger screens) */}
            <div className="hidden lg:block">
              <BuyNowSquareBG />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Memory Fusion Technology text */}
      <p className="absolute font-markot text-desktop/caption text-grey/grey/3 lg:bottom-6 lg:right-6 lg:rotate-0 lg:translate-x-0 lg:translate-y-0 lg:top-auto lg:left-auto  -left-[14%] top-[82%] -rotate-[90deg]">
        *Memory Fusion Technology
      </p>
    </motion.section>
  );
};

export default HeroSection;
