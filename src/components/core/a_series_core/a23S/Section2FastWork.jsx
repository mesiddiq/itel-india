/* eslint-disable react/prop-types */
import GradientBackgroundWrapper from './GradientBackgroundWrapper ';

const StorageItem = ({ imgSrc, altText, text }) => (
  <div className='flex items-center lg:items-start flex-col gap-1'>
    <img src={imgSrc} alt={altText} className='w-[24px] h-[24px] md:w-[48px] md:h-[48px]' />
    <p className='text-[#050036] font-medium text-[12px] md:text-[16px] lg:text-[28px]'>{text}</p>
  </div>
);

const Section2FastWork = () => (
  <GradientBackgroundWrapper bgImage='/smartphone/A23s/Backgrounds/StorageBG.webp' mobileBgImage='/smartphone/A23s/Backgrounds/storageROM-mobile.webp' paddingStart='60px'>
    <div className='md:h-[739px] h-[444px] text-center lg:pt-[37px] md:text-left text-black flex w-full lg:justify-end justify-center content'>
      <div className='lg:pt-28'>
        <div className='lg:w-[502px] lg:h-[545px] flex flex-col gap-4 lg:gap-8'>
          <div className='flex flex-col gap-2 lg:gap-5 text-center lg:text-left'>
            <p className='md:text-desktop/h2 text-mobile/h4'>Work Fast, Store More</p>
            <span className='md:text-desktop/h4 text-mobile/body/2 lg:text-[#6F7384]'>
              Ample 32GB ROM Storage
            </span>
          </div>
          <div className='flex gap-10 mx-auto'>
            <div className='flex flex-col lg:gap-6'>
              <StorageItem imgSrc='/smartphone/A23s/galarrysvgIcon.svg' altText='storage' text='6,000 Photos' />
              <StorageItem imgSrc='/smartphone/A23s/galarrysvgIcon.svg' altText='storage' text='150 TV Episodes' />
            </div>
            <div className='flex flex-col lg:gap-6'>
              <StorageItem imgSrc='/smartphone/A23s/galarrysvgIcon.svg' altText='storage' text='4,000 Short Videos' />
              <StorageItem imgSrc='/smartphone/A23s/galarrysvgIcon.svg' altText='storage' text='50 Movies' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </GradientBackgroundWrapper>
);

export default Section2FastWork;
