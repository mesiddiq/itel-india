import React from 'react'
import A50Heropage from '../../components/core/a_series_core/a50/A50Heropage'
import { a50FeatureRichData, a50FullSpecifications, a50ImageCaraousel } from '../../data/smartphonedata/A50Data'
import StickyHeader from '../../components/core/a_series_core/a05/A05StickyHeader'
import FeatureRich from '../../components/common/feature_phone_common/FeatureRich'
import A05Video from '../../components/core/a_series_core/a05/A05Video'
import Frames from '../../components/core/a_series_core/a50/Frames'
import Sections from '../../components/core/a_series_core/a50/Sections'
import A05ColorImageCarausel from '../../components/core/a_series_core/a05/A05ColorImageCarausel'
import FullSpecifications from '../../components/common/FullSpecifications'

export default function A50() {
  return (
    <div className='bg-white font-markot'>
        <A50Heropage/>
        <StickyHeader bgColor="#fff" title="A50" icon="/smartphone/a05/logos/a05StickyIcon.png" />
        <FeatureRich {...a50FeatureRichData}/>
        <A05Video/>
        <img src="/smartphone/a05/moblePatterns.png" alt="mobilePatterns" className="flex lg:hidden w-full" />
        <img src="/smartphone/a05/Patterns.png" alt="patterns" className="hidden lg:flex w-full" />
        <Frames/>

       <div className='md:h-screen h-[215px] w-full flex items-center justify-center bg-cover bg-center md:bg-[url("/smartphone/a50/4mo.webp")] bg-[url("/smartphone/a50/4mob.webp")] my-[40px] md:my-[100px]'>
          <img src="/smartphone/a50/grp.webp" alt="grp" className='w-[80%] hidden md:flex lg:pt-[60px] pt-[40px]'/>
          <img src="/smartphone/a50/grpMob.webp" alt="grp" className='w-[80%] md:hidden flex pt-[20px]'/>
       </div>

        <Sections/>

        <A05ColorImageCarausel  
            ImageCarouselData={a50ImageCaraousel}
            showTitleInMobile={true}
          />

          <FullSpecifications FullSpecificationsData={a50FullSpecifications} mode='light' gifStar='/smartphone/a05/startImg.png'/>
    </div>
  )
}
