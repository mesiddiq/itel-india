import FullSpecifications from "../../components/common/FullSpecifications"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"
import StickyHeader from "../../components/common/StickyHeader"
import FeatureSectionA05i from "../../components/core/a_series_core/A05i/FeatureSectionA05I"
import ColorImageCarousel from "../../components/core/a_series_core/A05i/ColorImageCarousel"
import MultipleCardComponents from "../../components/core/a_series_core/A05i/MultipleCardComponents"
// import Parent4Divs from "../../components/core/a_series_core/A05i/Parent4Divs"
import TimelessLeatherElegance from "../../components/core/a_series_core/A05i/TimelessLeatherElegance"
import {
  FullSpecificationsA05i,
  ImageCarouselData,
  HeroDataA05i,
} from '../../data/smartphonedata/A05iData'
import { Helmet } from 'react-helmet'
import DisplayElephant from "../../components/core/a_series_core/A05i/DisplayElephant"
import QuickBoost from "../../components/core/a_series_core/A05i/QuickBoost"
import RAMHighPerformance from "../../components/core/a_series_core/A05i/RAMHighPerformance"
import MultiTaskEase from "../../components/core/a_series_core/A05i/MultiTaskEase"
import HighPerformance from "../../components/core/a_series_core/A05i/HighPerformance"

const A05i = () => {
  return (
    <>
      <Helmet>
        <title>itel Aura 05i - Sleek Design with 5MP Camera | itel India</title>
        <meta name="description" content={`Explore the itel Aura 05i, the latest itel phone with a 5MP front camera and stylish design. Experience innovation and reliability with itel India!`} />
      </Helmet>
      <HeroSmartPhoneCommon {...HeroDataA05i} />
      <StickyHeader
        title="A05i"
        purchaseLink="https://www.amazon.in/Memory-Fusion-Charging-Display-Nebula/dp/B0CMQQ8VSZ?ref_=ast_sto_dp&th=1"
        icon="/smartphone/A05i/A50iLogo.svg"
        bgColor="white"
        dark={true}
        borderBottom={true}
      />
      <FeatureSectionA05i />
      <SliderAnimationCommon
        text1="Awesome series"
        text2="IMPRESSIVELY AWESOME"
        svgCode={<img src="/smartphone/A23s/scrollA23.svg" alt="star" className="" />}
        bgColor="#EBE8E2"
        textGradient1="#6B6682"
        textGradient2="#6B6682"
      />
      {/* <Parent4Divs /> */}
      <div className="h-auto w-full bg-white py-10 lg:py-[100px]">

        <div className="content lg:border border-[#FCCE8D] rounded-[64px] px-4 lg:p-4 flex flex-col gap-4">
          <DisplayElephant/>
          <QuickBoost/>
          <RAMHighPerformance />
          <MultiTaskEase/>
          <HighPerformance/>
        </div>

      </div>
      <TimelessLeatherElegance />
      <MultipleCardComponents />
      <div className="lg:px-0 py-[48px] lg:py-[120px] bg-white">
        <div className="lg:content bg-white overflow-hidden">
          <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false} />
        </div>
      </div>
      <div className="px-4 lg:pb-[80px] bg-white">
        <FullSpecifications FullSpecificationsData={FullSpecificationsA05i} mode="light" gifStar="/smartphone/A05i/StarFullSpecifications.svg" />
      </div>
    </>
  )
}

export default A05i