
import FeatureRich from "../../components/common/feature_phone_common/FeatureRich"
import A05ColorImageCarausel from "../../components/core/a_series_core/a05/A05ColorImageCarausel"
import StickyHeader from "../../components/common/StickyHeader"
import A05Video from "../../components/core/a_series_core/a05/A05Video"
import First from "../../components/core/a_series_core/a05/First"
import Second from "../../components/core/a_series_core/a05/Second"
import Third from "../../components/core/a_series_core/a05/Third"
import FullSpecifications from "../../components/common/FullSpecifications"
import { a05FeatureRichData, a05ImageCaraousel, a05FullSpecifications } from "../../data/smartphonedata/A05Data"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import { Helmet } from "react-helmet"

export default function A05() {
  return (
    <div className="bg-white font-markot">
      <Helmet>
        <title>A05s</title>
        <meta name="description" content={`Experience breathtaking visuals on the itel A05s smartphone with its expansive 6.6-inch HD+ Drop Notch Display, featuring a crisp 1612 x 720 pixel resolution. Stay powered all day with the robust 4000 mAh battery and Type-C charging support. Effortlessly multitask with 8GB* (4GB+4GB*) RAM and 64GB ROM. Capture stunning photos with the 5MP dual rear camera and enjoy enhanced security with dual protection for your device.`} />
        <meta name="keywords" content={`a05s, 4000mah battery ,mobile large display phones, 2gb ram 32gb internal memory mobiles,60hz refresh rate,5mp camera`} />
      </Helmet>
      <HeroSmartPhoneCommon
        headingText="A05s"
        bgDesktop="/smartphone/smartphonehero/a05.webp"
        bgMobile="/smartphone/smartphonehero/a05_mobile.webp"
        theme="dark"
        purchaseLink="https://www.flipkart.com/itel-a05s-orange-orange-32-gb/p/itmf0a5403570bdd"
        description={`8GB* (4GB+4GB*) RAM + 64GB ROM | 6.6" HD+ Drop Notch DIsplay | Type-C Charger`}
        gradient1="#181818"
        gradient2="#181818"
        price="6,499"
        tagText="awesome series"
      />
      <StickyHeader bgColor="#fff" title="A05s" icon="/smartphone/a05/logos/a05StickyIcon.png" purchaseLink={'https://www.flipkart.com/itel-a05s-orange-orange-32-gb/p/itmf0a5403570bdd'} dark={true}/>
      <FeatureRich {...a05FeatureRichData} />
      <A05Video />
      <img src="/smartphone/a05/moblePatterns.png" alt="mobilePatterns" className="flex lg:hidden w-full" />
      <img src="/smartphone/a05/Patterns.png" alt="patterns" className="hidden lg:flex w-full" />
      <First />
      <Second />
      <Third />

      <A05ColorImageCarausel
        ImageCarouselData={a05ImageCaraousel}
        showTitleInMobile={true}
      />

      <FullSpecifications FullSpecificationsData={a05FullSpecifications} mode='light' gifStar='/static_page/Hotstar.gif' />
    </div>
  )
}
