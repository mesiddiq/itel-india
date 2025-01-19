import { Helmet } from "react-helmet"
import FullSpecifications from "../../components/common/FullSpecifications"
// import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"
import StickyHeader from "../../components/common/StickyHeader"
import A05ColorImageCarausel from "../../components/core/a_series_core/a05/A05ColorImageCarausel"
import FeatureSectionA23s from "../../components/core/a_series_core/a23S/FeatureSectionA23s"
import Section1TechPartner from "../../components/core/a_series_core/a23S/Section1TechPartner"
import Section2FastWork from "../../components/core/a_series_core/a23S/Section2FastWork"
import Section3EnhanceBattery from "../../components/core/a_series_core/a23S/Section3EnhanceBattery"
import Section4SpecialOsFeatures from "../../components/core/a_series_core/a23S/Section4SpecialOsFeatures"
import Section5MultiLanguageSupport from "../../components/core/a_series_core/a23S/Section5MultiLanguageSupport"
import Section6MobileShowcase from "../../components/core/a_series_core/a23S/Section6MobileShowcase"
import Section7PhonesSpecs from "../../components/core/a_series_core/a23S/Section7PhonesSpecs"
import { ImageCarouselDataA23 } from "../../data/smartphonedata/A23SCarouselData"
import { FullSpecificationsA23 } from "../../data/smartphonedata/A23SData"

const ATwentyThreeS = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>itel A23s - Compact Mobile with Great Features | itel India</title>
        <meta name="description" content={`Discover the itel A23s mobile, a compact and reliable device with impressive features. Explore the itel A23s and redefine your mobile experience with itel India!`} />
      </Helmet>

      {/* <HeroSectionOfA23SPage /> */}
      <HeroSmartPhoneCommon
        tagText="Awesome series"
        headingText="A23s"
        price={"4,799"}
        description={'4GB*(2GB+2GB*) RAM + 32GB ROM | Smart Face Unlock | 3020 mAh battery'}
        bgDesktop={'/smartphone/smartphonehero/a23s.webp'}
        bgMobile={'/smartphone/smartphonehero/a23s_mobile.webp'}
        gradient1='#000'
        gradient2='#000'
        theme='dark'
        purchaseLink={'https://amzn.in/d/0jGRm3r'}
      />


      <StickyHeader title="A23s" purchaseLink={'https://amzn.in/d/0jGRm3r'} icon={'/smartphone/a70/stickyeHeaderIcon.svg'} bgColor={'black'} />
      <FeatureSectionA23s />
      {/* <ScrollingBannerA23S /> */}
      <SliderAnimationCommon
        text1="Awesome series"
        text2="IMPRESSIVELY AWESOME"
        svgCode={<img src="/smartphone/A23s/scrollA23.svg" alt="star" className="" />}
        bgColor="#EBE8E2"
        textGradient1="#6B6682"
        textGradient2="#6B6682"
      />

      <div
        className="md:rounded-[64px] lg:my-[100px] my-[80px] lg:py-2 rounded-[16px] border-[#00000033] border-2 text-black pb-0 p-2 content flex flex-col gap-10"

      >
        <Section1TechPartner />
        <Section2FastWork />
        <Section3EnhanceBattery />
        <Section4SpecialOsFeatures />
        <Section5MultiLanguageSupport />
      </div>
      <Section6MobileShowcase />
      <Section7PhonesSpecs />

      <div className="lg:px-0 py-[48px] lg:py-[80px] bg-[#ffffff]">
        <div className="lg:content bg-[#ffffff]  overflow-hidden">
          {/* <ColorImageCarousel ImageCarouselData={ImageCarouselDataA23} showTitleInMobile={true} /> */}
          <A05ColorImageCarausel
            ImageCarouselData={ImageCarouselDataA23}
            showTitleInMobile={true}
          />
        </div>
      </div>

      <div className="px-4 py-[60px] lg:py-[80px] bg-[#ffffff]">
        <FullSpecifications FullSpecificationsData={FullSpecificationsA23} mode="light" />
      </div>
    </div>
  )
}

export default ATwentyThreeS
