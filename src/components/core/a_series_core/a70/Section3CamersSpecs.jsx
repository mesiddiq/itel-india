import GradientBackgroundWrapper from './GradientBackgroundWrapper ';

const features = [
  { img: '/smartphone/a70/beautymode.svg', alt: 'beautyMode', text: '5 AI Beauty Mode' },
  { img: '/smartphone/a70/portraight.svg', alt: 'portraitMode', text: 'Portrait Lowlight' },
  { img: '/smartphone/a70/promode.svg', alt: 'proMode', text: 'Pro Mode' },
  { img: '/smartphone/a70/paranoma.svg', alt: 'panoramaMode', text: 'Panorama' },
  { img: '/smartphone/a70/hdrmode.svg', alt: 'hdrMode', text: 'HDR Mode' },
];

const Section3CamersSpecs = () => (
  <GradientBackgroundWrapper
    bgImage='/smartphone/a70/A70CameraBG.webp'
    paddingStart='48px'
    padding='5px'
    mobileBgImage='/smartphone/a70/A70CameraBg-Mobile.webp'
    mobileBgPosition='bottom'
    backgroundSizeDesktop='100% 100%'
    bgClass='responsive-bg'
  >
    <div className='relative flex flex-col lg:flex-row h-[480px] md:h-[739px] responsive-bg-height lg:justify-between lg:pt-[48px] gap-4 md:gap-5 overflow-hidden'>
      <div className='lg:w-[455px] w-[289px] md:w-full flex flex-col gap-4 text-center lg:text-left relative lg:gap-6 lg:flex lg:flex-col mx-auto md:mx-0 h-auto'>
        <p className='md:text-desktop/h2 text-mobile/h4'>
          Unleash Pure Beauty with Enhanced HDR
        </p>
        <div className='md:text-desktop/body/large responsive-width text-mobile/body/2'>
          Featuring an 8MP AI Front Camera and 13MP AI Dual Rear Camera, every shot is infused with stunning detail and clarity.
        </div>
      </div>

      <div className='flex justify-center lg:justify-start'>
        <div className='lg:max-w-[224px] lg:h-[325.86px] lg:mt-[170px] grid items-center lg:grid-cols-2 grid-cols-3 gap-2 z-10'>
          {features.map(({ img, alt, text }) => (
            <div key={alt} className='flex lg:flex-col gap-2'>
              <img src={img} alt={alt} className='md:w-[44px] md:h-[44px] h-[30px] w-[30px]' />
              <span className='text-mobile/h7 md:text-desktop/h6/medium'>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </GradientBackgroundWrapper>
);

export default Section3CamersSpecs;
