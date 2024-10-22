import FullSpecifications from "../../components/common/FullSpecifications"
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import StickyHeader from "../../components/common/StickyHeader"
import FeatureSectionA23s from "../../components/core/a_series_core/a23S/FeatureSectionA23s"
import HeroSectionOfA23SPage from "../../components/core/a_series_core/a23S/HeroSectionOfA23SPage"
import ScrollingBannerA23S from "../../components/core/a_series_core/a23S/ScrollingBannerA23s"
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
      <HeroSectionOfA23SPage />
      <StickyHeader title="A23s" purchaseLink={''} icon={'/smartphone/a70/stickyeHeaderIcon.svg'} bgColor={'black'} />
      <FeatureSectionA23s />
      <ScrollingBannerA23S />
      <div
        className="md:rounded-[64px] lg:my-[100px] py-[80px] lg:py-2 rounded-[16px] border-[#00000033] border-2 text-black p-2 content flex flex-col gap-10"

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
          <ColorImageCarousel ImageCarouselData={ImageCarouselDataA23} showTitleInMobile={true} />
        </div>
      </div>

      <div className="px-4 py-[60px] lg:py-[80px] bg-[#ffffff]">
        <FullSpecifications FullSpecificationsData={FullSpecificationsA23} mode="light" />
      </div>
    </div>
  )
}

export default ATwentyThreeS
