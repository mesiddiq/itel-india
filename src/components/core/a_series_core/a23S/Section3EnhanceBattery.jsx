import GradientBackgroundWrapper from './GradientBackgroundWrapper ';

const features = [
  { img: '/smartphone/A23s/smartsavingMode.svg', alt: 'smartsavingMode', text: 'Smart Saving Mode' },
  { img: '/smartphone/A23s/Optimizer.svg', alt: 'Optimizer', text: 'APP Standby Optimizer' },
  
];

const features2 = [
  { img: '/smartphone/A23s/sleepMode.svg', alt: 'sleepMode', text: 'Sleep Mode' },
  { img: '/smartphone/A23s/brightnessAdjustment.svg', alt: 'brightnessAdjustment', text: 'Auto-Adjustment of Screen Brightness' },
];


// const features = [
//   { img: '/smartphone/A23s/smartsavingMode.svg', alt: 'smartsavingMode', text: 'Smart Saving Mode' },
//   { img: '/smartphone/A23s/sleepMode.svg', alt: 'sleepMode', text: 'Sleep Mode' },
//   { img: '/smartphone/A23s/Optimizer.svg', alt: 'Optimizer', text: 'APP Standby Optimizer' },
//   { img: '/smartphone/A23s/brightnessAdjustment.svg', alt: 'brightnessAdjustment', text: 'Auto-Adjustment of Screen Brightness' },
// ];
const Section3EnhanceBattery = () => (
  <GradientBackgroundWrapper
    bgImage='/smartphone/A23s/Backgrounds/batterySectionBg.png'
    paddingStart='48px'
    padding='0'
    mobileBgImage='/smartphone/A23s/Backgrounds/batterySectionBg.png'
  >
    <div className='flex flex-col-reverse lg:flex-row lg:h-[739px] h-auto gap-5 overflow-hidden'>
      <div className='flex justify-center lg:justify-end items-end w-full lg:w-[50%] relative lg:left-[3rem]'>
        <img
          src='/smartphone/A23s/Backgrounds/a23Battery.png'
          alt='battery'
          className='w-[70%] lg:w-[535px]  object-contain'
        />
      </div>

      <div className='flex flex-col lg:pt-[110px] py-5 lg:py-0 items-center lg:items-start w-full lg:h-[521.37px] lg:w-[416px] gap-10 lg:gap-20'>
        <div className='w-full lg:w-[416px] flex flex-col gap-2 lg:gap-6 text-center lg:text-left'>
          <p className='text-mobile/h4 md:text-desktop/h2'>Enhanced Battery with Smart Power Master</p>
          <span className='text-mobile/h6 md:text-desktop/h4 lg:text-[#6F7384]'>3020 mAh Battery</span>
        </div>

        <div className='flex flex-row gap-4 lg:gap-8  w-[296px] md:w-full lg:w-[399px] md:items-center justify-center lg:justify-start lg:items-start'>
          <div className="px-1 flex flex-col gap-4 lg:gap-8">
            {features.map(({ img, alt, text }) => (
              <div key={alt} className="flex lg:flex-col items-center lg:items-start gap-2 w-[132px] md:w-full  lg:max-w-[182px]">
                <img src={img} alt={alt} className="w-[30px] h-[30px] md:w-[44px] md:h-[44px]" />
                <span className="text-mobile/h7 md:text-desktop/h6/medium md:text-center lg:text-left">{text}</span>
              </div>
            ))}
          </div>
          <div className="px-1 flex flex-col  gap-4 lg:gap">
            {features2.map(({ img, alt, text }) => (
              <div key={alt} className="flex lg:flex-col items-center lg:items-start gap-2 w-[150px] md:w-full  lg:max-w-[158px]">
                <img src={img} alt={alt} className="w-[30px] h-[30px] md:w-[44px] md:h-[44px]" />
                <span className="text-mobile/h7 md:text-desktop/h6/medium md:text-center lg:text-left">{text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  </GradientBackgroundWrapper>
);

export default Section3EnhanceBattery;
