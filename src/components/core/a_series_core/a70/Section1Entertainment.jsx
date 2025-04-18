import GradientBackgroundWrapper from './GradientBackgroundWrapper ';

const Section1Entertainment = () => (
  <GradientBackgroundWrapper mobileBgImage="/a70/AmpleStorage-Mobile.webp">
    <div className="md:max-w-[735px] md:p-5 lg:p-0 text-center lg:pt-[57px] md:text-left">
      <p className="lg:text-desktop/h2 text-mobile/h4">
        Ample Storage for Entertainment
      </p>
      <p className="lg:text-[24px] md:max-w-[666px] lg:pt-[12px] lg:text-desktop/body/large text-mobile/body/2 md:text-[16px] text-[12px] text-wrap">
        Enjoy ample storage, effortless multitasking, and expandable space with
        its massive 256GB storage and 12GB* (4GB+8GB*) RAM. Say hello to endless
        possibilities and goodbye to storage worries!
      </p>
    </div>

    <div className="flex md:flex-row md:items-start items-center md:p-5 lg:p-0 lg:pt-[16px] flex-col pt-[15px]">
      <div>
        <div className="md:py-5 md:space-y-2 flex md:block gap-2 sm:w-[320px] ">
          <p className="md:text-desktop/h3 text-mobile/title sm:max-w-[136px] md:w-[335px] md:max-w-[335px]">
            12GB* (4GB+8GB*) RAM
          </p>
          <span className="md:text-[16px] hidden md:block text-mobile/h5/medium md:text-desktop/body/1">
            With Memory Fusion <br /> Technology
          </span>
          <hr className="h-[2px] hidden  md:block bg-grey/grey/3" style={{ margin: "24px 0" }} />
          <hr className="h-[40px] w-[2px] block md:hidden bg-grey/grey/3" style={{ margin: "6px 0" }} />
          <p className="lg:text-desktop/h3 max-w-[431px] text-mobile/title sm:max-w-[135px] md:max-w-full">
            64GB/128GB/256GB ROM
          </p>
        </div>
        <span className="text-[8px] block md:hidden">
          With Memory Fusion Technology
        </span>

      </div>
      <div className="mt-5 md:mt-0 relative lg:left-[-121px] lg:top-[-29px]">
        <img
          src="/smartphone/a70/partypop.svg"
          alt="Ample Storage Multitasking"
          className="md:w-[1160px] w-[300px]"
        />
      </div>
    </div>
  </GradientBackgroundWrapper>
);

export default Section1Entertainment;
