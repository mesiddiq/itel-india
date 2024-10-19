import FullSpecifications from "../../components/common/FullSpecifications"
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import StickyHeader from "../../components/common/StickyHeader"
import MultipleCardComponents from "../../components/core/a_series_core/A05i/MultipleCardComponents"
import Parent4Divs from "../../components/core/a_series_core/A05i/Parent4Divs"
import TimelessLeatherElegance from "../../components/core/a_series_core/A05i/TimelessLeatherElegance"

import { FullSpecificationsA05i } from '../../data/smartphonedata/A05iData'
import { ImageCarouselData } from '../../data/smartphonedata/A05iImageCarouselData'

const A05i = () => {
  return (
    <>
        <StickyHeader title="A05i" purchaseLink="" icon="/smartphone/A05i/A50iLogo.svg" bgColor=""/>

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