import GradientBackgroundWrapper from './GradientBackgroundWrapper ';

const features = [
  { img: '/smartphone/a70/batteryicon.svg', alt: 'battery', text: '6.6inch HD+ Display' },
  { img: '/smartphone/a70/mobicon.svg', alt: 'mobile', text: '90% + Screen to Body Ratio' },
  { img: '/smartphone/a70/fingericon.svg', alt: 'fingerP', text: '120 Hz Touch Sampling Rate' },
];

const Section2DisplayWithDynamicIsland = () => (
  <GradientBackgroundWrapper mobileBgImage="/smartphone/a70/AmpleStorage-Mobile.webp" paddingStart="0px">
    <div className="flex lg:flex-row flex-col-reverse md:justify-start xl:ps-[60px] justify-end h-[690px] md:h-[840px] xl:h-[850px]">
      <div className="flex md:justify-start items-end mx-auto lg:mx-0">
        <img src="/smartphone/a70/iphonespecs.svg" alt="dynamicIsland" className="xl:w-[532px] h-[400px] lg:h-auto xl:h-[700px]" />
      </div>
      <div className="xl:pt-[148px] lg:pt-[90px] ">
        <div className="lg:w-[502px] lg:h-[545px] flex flex-col gap-8">
          <div className="flex flex-col gap-5 lg:max-w-[486px] text-center lg:text-left">
            <p className="md:text-desktop/h2 text-mobile/h4">
              Vivid 6.6” HD+ Display with Integrated Dynamic Bar
            </p>
            <span className="md:text-desktop/body/large text-mobile/body/2">
              Stay informed at a glance with the dynamic notification bar, seamlessly integrated into the 6.6-inch HD+ display. Enjoy an intuitive experience where notifications are both clear and convenient.
            </span>
          </div>
          <div className="flex gap-5 lg:justify-between lg:max-w-[502px] lg:flex-wrap pb-6 lg:pb-0">
            {features.map(({ img, alt, text }) => (
              <div key={alt} className="lg:w-[230px] flex flex-col gap-5">
                <img src={img} alt={alt} className="w-[48px] h-[48px]" />
                <span className="text-mobile/h7 md:text-desktop/h6/medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <img src="/smartphone/a70/AmpleStorage-Mobile.webp" alt="dynamicIsland" className="xl:w-[532px] h-[400px] lg:h-auto xl:h-[700px]" /> */}

    </div>
  </GradientBackgroundWrapper>
);

export default Section2DisplayWithDynamicIsland;
