import FullSpecifications from "../../components/common/FullSpecifications"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"
import StickyHeader from "../../components/common/StickyHeader"
import FeatureSectionA05i from "../../components/core/a_series_core/A05i/FeatureSectionA05I"
import ColorImageCarousel from "../../components/core/a_series_core/A05i/ColorImageCarousel"
import MultipleCardComponents from "../../components/core/a_series_core/A05i/MultipleCardComponents"
import Parent4Divs from "../../components/core/a_series_core/A05i/Parent4Divs"
import TimelessLeatherElegance from "../../components/core/a_series_core/A05i/TimelessLeatherElegance"

import { FullSpecificationsA05i } from '../../data/smartphonedata/A05iData'
import { ImageCarouselData } from '../../data/smartphonedata/A05iImageCarouselData'

const A05i = () => {
  return (
    <>

        <HeroSmartPhoneCommon
          headingText="Aura 05i"
          bgDesktop="/smartphone/smartphonehero/aura.webp"
          bgMobile="/smartphone/smartphonehero/aura_mobile.webp"
          theme="dark"
          purchaseLink=""
          description={` 6.6" HD+ Waterdrop Display | 4000 mAh Battery with Type-C Charging| 32GB ROM `}
          gradient1="#181818"
          gradient2="#181818"
          price="4,799"
          tagText="Awesome series"
        />

        <StickyHeader title="A05i" purchaseLink="" icon="/smartphone/A05i/A50iLogo.svg" bgColor="white" dark={true} borderBottom={true} />

        <FeatureSectionA05i />

        <SliderAnimationCommon
          text1="Awesome series"
          text2="IMPRESSIVELY AWESOME"
          svgCode={<img src="/smartphone/A23s/scrollA23.svg" alt="star" className="" />}
          bgColor="#EBE8E2"
          textGradient1="#6B6682"
          textGradient2="#6B6682"
        />

        <Parent4Divs />

        <TimelessLeatherElegance />

        <MultipleCardComponents />

        <div className="lg:px-0 py-[48px] lg:py-[120px] bg-white">
            <div className="lg:content bg-white overflow-hidden">
                <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false}/>
            </div>
        </div>

        <div className="px-4 lg:pb-[80px] bg-white">
          <FullSpecifications FullSpecificationsData={FullSpecificationsA05i} mode="light" gifStar="/smartphone/A05i/StarFullSpecifications.svg"/>
        </div>

    </>
  )
}

export default A05i