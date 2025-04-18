/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
// import HeroSectionOfPage from "./components/core/a_series_core/a70/HeroSectionOfPage";
import { Helmet } from "react-helmet";
import FullSpecifications from "../../components/common/FullSpecifications";
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel";
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon";
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon";
import StickyHeader from "../../components/common/StickyHeader";
import A05ColorImageCarausel from "../../components/core/a_series_core/a05/A05ColorImageCarausel";
import FeatureSection70 from "../../components/core/a_series_core/a70/FeatureSectionA70";
import HeroSectionOfPage from "../../components/core/a_series_core/a70/HeroSectionOfPage";
import ScrollingBannerA70 from "../../components/core/a_series_core/a70/ScrollingBannerA70";
import Section1Entertainment from "../../components/core/a_series_core/a70/Section1Entertainment";
import Section2DisplayWithDynamicIsland from "../../components/core/a_series_core/a70/Section2DisplayWithDynamicIsland";
import Section3CamersSpecs from "../../components/core/a_series_core/a70/Section3CamersSpecs";
import Section4Securitypage from "../../components/core/a_series_core/a70/Section4Securitypage";
import Section5batterySpecs from "../../components/core/a_series_core/a70/Section5batterySpecs";
import Section6MobileShowcase from "../../components/core/a_series_core/a70/Section6MobileShowcase";
import Section7PhonesSpecs from "../../components/core/a_series_core/a70/Section7PhonesSpecs";
import VideoA70 from "../../components/core/a_series_core/a70/VideoSectionA70";
import { FullSpecificationsA70 } from "../../data/smartphonedata/A70Data";
import { ImageCarouselDataA70 } from "../../data/smartphonedata/A70ImageCarouselData";

const ASeventy = () => {
  return (
    <div className="bg-white font-markot">

      <Helmet>
        <title>itel A70 | Affordable, Feature-Packed Smartphone | itel India</title>
        <meta name="description" content={`Explore the itel A70, an affordable smartphone packed with essential features. Get the best of technology and style with the itel A70, available across India.`} />
      </Helmet>
      {/* <HeroSectionOfPage /> */}
      <HeroSmartPhoneCommon
        tagText="Awesome series"
        headingText="A70"
        price={"6,299"}
        description={'12GB* (4GB+8GB*) RAM + 256GB ROM | Dynamic bar | 13MP AI Dual Rear Camera'}
        bgDesktop={'/smartphone/smartphonehero/a70.webp'}
        bgMobile={'/smartphone/smartphonehero/a70_mobile.webp'}
        gradient1='#000'
        gradient2='#000'
        theme='dark'
        purchaseLink={'https://www.amazon.in/dp/B0CQ7MKZ1F?ie=UTF8&ref_=itel_A70_Launch_Web'}
      />
      <StickyHeader title="A70" purchaseLink={'https://www.amazon.in/dp/B0CQ7MKZ1F?ie=UTF8&ref_=itel_A70_Launch_Web'} icon={'/smartphone/a70/stickyeHeaderIcon.svg'} bgColor={'black'} />
      <FeatureSection70 />
      {/* <ScrollingBannerA70 /> */}
      <SliderAnimationCommon
        text1="Awesome series"
        text2="IMPRESSIVELY AWESOME"
        svgCode={<img src="/smartphone/A23s/scrollA23.svg" alt="star" className="" />}
        bgColor="#EBE8E2"
        textGradient1="#6B6682"
        textGradient2="#6B6682"
      />
 
      <VideoA70 />
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
          {/* <ColorImageCarousel ImageCarouselData={ImageCarouselDataA70} showTitleInMobile={true} /> */}
          <A05ColorImageCarausel
            ImageCarouselData={ImageCarouselDataA70}
            showTitleInMobile={true}
          />
        </div>
      </div>

      <div className="px-4 py-[60px] lg:py-[80px] bg-[#ffffff]">
        <FullSpecifications FullSpecificationsData={FullSpecificationsA70} mode="light" />
      </div>

    </div >
  );
};

export default ASeventy;
