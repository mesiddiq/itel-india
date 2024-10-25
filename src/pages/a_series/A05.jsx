
import FeatureRich from "../../components/common/feature_phone_common/FeatureRich"
import A05ColorImageCarausel from "../../components/core/a_series_core/a05/A05ColorImageCarausel"
import StickyHeader from "../../components/core/a_series_core/a05/A05StickyHeader"
import A05Video from "../../components/core/a_series_core/a05/A05Video"
import First from "../../components/core/a_series_core/a05/First"
import Second from "../../components/core/a_series_core/a05/Second"
import Third from "../../components/core/a_series_core/a05/Third"
import FullSpecifications from "../../components/common/FullSpecifications"
import { a05FeatureRichData, a05ImageCaraousel,a05FullSpecifications } from "../../data/smartphonedata/A05Data"
import A05Hero from "../../components/core/a_series_core/a05/A05hero"

export default function A05() {
  return (
    <div className="bg-white font-markot">
        <A05Hero/>
       <StickyHeader bgColor="#fff" title="A05s" icon="/SmartPhone/a05/logos/a05StickyIcon.png" />
        <FeatureRich {...a05FeatureRichData}/>
        <A05Video/>
      <img src="/SmartPhone/a05/moblePatterns.png" alt="mobilePatterns" className="flex lg:hidden w-full" />
      <img src="/SmartPhone/a05/Patterns.png" alt="patterns" className="hidden lg:flex w-full" />
      <First />
      <Second />
      <Third />
        
          <A05ColorImageCarausel  
            ImageCarouselData={a05ImageCaraousel}
            showTitleInMobile={true}
          />

          <FullSpecifications FullSpecificationsData={a05FullSpecifications} mode='light' gifStar='/SmartPhone/a05/startImg.png'/>
    </div>
  )
}
