import { a50FullSpecifications, a50ImageCaraousel } from '../../data/smartphonedata/A50Data'
import StickyHeader from '../../components/core/a_series_core/a05/A05StickyHeader'
import A05Video from '../../components/core/a_series_core/a05/A05Video'
import Frames from '../../components/core/a_series_core/a50/Frames'
import Sections from '../../components/core/a_series_core/a50/Sections'
import A05ColorImageCarausel from '../../components/core/a_series_core/a05/A05ColorImageCarausel'
import FullSpecifications from '../../components/common/FullSpecifications'
import HeroSmartPhoneCommon from '../../components/common/smartphone_common/HeroSmartPhoneCommon'
import FeatureSectionA50 from '../../components/core/a_series_core/a50/FeatureSectionA50'

export default function A50() {
  return (
    <div className='bg-white font-markot'>
      <HeroSmartPhoneCommon
        headingText="A50"
        bgDesktop="/smartphone/smartphonehero/a50.webp"
        bgMobile="/smartphone/smartphonehero/a50_mobile.webp"
        theme="dark"
        purchaseLink="https://www.amazon.in/Display-Dynamic-Octacore-Processor-Battery/dp/B0DBR1CMQ2"
        description={`6.6" HD+ Display with Dynamic Bar | 12GB*(4GB+8GB*) RAM + 64GB ROM | 8MP AI Rear Camera`}
        gradient1="#181818"
        gradient2="#181818"
        price="6,499"
        tagText="awesome series"
      />
      <StickyHeader bgColor="#fff" title="A50" icon="/smartphone/a05/logos/a05StickyIcon.png" purchaseLink={'https://www.amazon.in/Display-Dynamic-Octacore-Processor-Battery/dp/B0DBR1CMQ2'}/>
      {/* <FeatureRich {...a50FeatureRichData} /> */}
      <FeatureSectionA50 />

      <A05Video />
      <img src="/smartphone/a05/moblePatterns.png" alt="mobilePatterns" className="flex lg:hidden w-full" />
      <img src="/smartphone/a05/Patterns.png" alt="patterns" className="hidden lg:flex w-full" />
      <Frames />

      <div className='md:h-screen h-[215px] w-full flex items-center justify-center bg-cover bg-center md:bg-[url("/smartphone/a50/4mo.webp")] bg-[url("/smartphone/a50/4mob.webp")] my-[40px] md:my-[100px]'>
        <img src="/smartphone/a50/grp.webp" alt="grp" className='w-[80%] hidden md:flex lg:pt-[60px] pt-[40px]' />
        <img src="/smartphone/a50/grpMob.webp" alt="grp" className='w-[80%] md:hidden flex pt-[20px]' />
      </div>

      <Sections />

      <A05ColorImageCarausel
        ImageCarouselData={a50ImageCaraousel}
        showTitleInMobile={true}
      />

      <FullSpecifications FullSpecificationsData={a50FullSpecifications} mode='light' gifStar='/smartphone/a05/startImg.png' />
    </div>
  )
}
