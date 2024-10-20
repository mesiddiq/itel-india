/* eslint-disable react-refresh/only-export-components */
// import HeroSectionOfPage from "./components/core/a_series_core/a70/HeroSectionOfPage";
import FullSpecifications from "../../components/common/FullSpecifications";
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel";
import StickyHeader from "../../components/common/StickyHeader";
import HeroSectionOfPage from "../../components/core/a_series_core/a70/HeroSectionOfPage";
import Section1Entertainment from "../../components/core/a_series_core/a70/Section1Entertainment";
import Section2DisplayWithDynamicIsland from "../../components/core/a_series_core/a70/Section2DisplayWithDynamicIsland";
import Section3CamersSpecs from "../../components/core/a_series_core/a70/Section3CamersSpecs";
import Section4Securitypage from "../../components/core/a_series_core/a70/Section4Securitypage";
import Section5batterySpecs from "../../components/core/a_series_core/a70/Section5batterySpecs";
import Section6MobileShowcase from "../../components/core/a_series_core/a70/Section6MobileShowcase";
import Section7PhonesSpecs from "../../components/core/a_series_core/a70/Section7PhonesSpecs";
import { FullSpecificationsA70 } from "../../data/smartphonedata/A70Data";
import { ImageCarouselDataA70 } from "../../data/smartphonedata/A70ImageCarouselData";

const ASeventy = () => {
  return (
    <div className="bg-white">
      <HeroSectionOfPage />
      <StickyHeader title="A70" purchaseLink={''} icon={'/smartphone/a70/stickyeHeaderIcon.svg'} bgColor={'black'} />

      <div
        className="md:rounded-[64px] rounded-[16px]  my-10 p-2 content"
        style={{
          background: 'linear-gradient(to right, #08E488, #00C6FF)',
          padding: '1px',
        }}
      >
        <div className="bg-white md:rounded-[64px] rounded-[16px] text-black  space-y-5 p-[16px]">
          <Section1Entertainment />
          <Section2DisplayWithDynamicIsland />
          <Section3CamersSpecs />
          <Section4Securitypage />
          <Section5batterySpecs />
        </div>
      </div>
      <Section6MobileShowcase />

      <Section7PhonesSpecs />

      <div className="lg:px-0 py-[48px] lg:py-[80px] bg-[#ffffff]">
        <div className="lg:content bg-[#ffffff]  overflow-hidden">
          <ColorImageCarousel ImageCarouselData={ImageCarouselDataA70} showTitleInMobile={true} />
        </div>
      </div>

      <div className="px-4 py-[60px] lg:py-[80px] bg-[#ffffff]">
        <FullSpecifications FullSpecificationsData={FullSpecificationsA70} mode="light" />
      </div>
  
    </div >
  );
};

export default ASeventy;
