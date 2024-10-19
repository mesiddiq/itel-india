import GradientBackgroundWrapper from './GradientBackgroundWrapper ';

const features = [
  { img: '/a70/batteryicon.svg', alt: 'battery', text: '6.6inch HD+ Display' },
  { img: '/a70/mobicon.svg', alt: 'mobile', text: '90% + Screen to Body Ratio' },
  { img: '/a70/fingericon.svg', alt: 'fingerP', text: '120 Hz Touch Sampling Rate' },
];

const Section2DisplayWithDynamicIsland = () => (
  <GradientBackgroundWrapper mobileBgImage='/a70/AmpleStorage-Mobile.webp' paddingStart='60px'>
    <div className='flex lg:flex-row flex-col-reverse justify-end h-[690px] md:h-[850px]'>
      <div className='flex md:justify-start items-end'>
        <img src='/a70/iphonespecs.svg' loading='lazy' alt='dynamicIsland' className='lg:w-[532px] lg:h-[700px]' />
      </div>
      <div className='lg:pt-[148px] lg:ps-[60px]'>
        <div className='lg:w-[502px] lg:h-[545px] flex flex-col gap-8'>
          <div className='flex flex-col gap-5 text-center lg:text-left'>
            <p className='md:text-desktop/h2 text-mobile/h4'>Vivid 6.6” HD+ Display with Integrated Dynamic Bar</p>
            <span className='md:text-desktop/body/large text-mobile/body/2'>
              Stay informed at a glance with the dynamic notification bar, seamlessly integrated into the 6.6-inch HD+ display. Enjoy an intuitive experience where notifications are both clear and convenient.
            </span>
          </div>
          <div className='flex gap-5 lg:justify-between lg:flex-wrap pb-6 lg:pb-0'>
            {features.map(({ img, alt, text }) => (
              <div key={alt} className='lg:w-[230px] flex flex-col gap-5'>
                <img src={img} alt={alt} className='w-[48px] h-[48px]' />
                <span className='text-mobile/h7 md:text-desktop/h6/medium'>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </GradientBackgroundWrapper>
);

export default Section2DisplayWithDynamicIsland;
