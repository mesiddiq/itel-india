import FullSpecifications from "../../components/common/FullSpecifications"
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import StickyHeader from "../../components/common/StickyHeader"

import Video1 from "../../components/core/a_series_core/A50C/Video1"
import FillerFrame from "../../components/core/a_series_core/A50C/FillerFrame"

import MultipleCardComponents from "../../components/core/a_series_core/A50C/MultipleCardComponents"
import Parent4Divs from "../../components/core/a_series_core/A50C/Parent4Divs"

import { FullSpecificationsA50C } from '../../data/smartphonedata/A50CData'
import { ImageCarouselData } from '../../data/smartphonedata/A50CImageCarouselData'
import PhonesImage from "../../components/core/a_series_core/A50C/PhonesImage"

const A50C = () => {
  return (
    <>
        <StickyHeader title="A50C" purchaseLink="" icon="/smartphone/A50C/A50CLogo.svg" bgColor=""/>

        <Video1 />

        <FillerFrame />

        <Parent4Divs />

        <PhonesImage />

        <MultipleCardComponents />

        <div className="lg:px-0 py-[48px] lg:py-[120px] bg-white">
            <div className="lg:content bg-white overflow-hidden">
                <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false}/>
            </div>
        </div>

        <div className="px-4 lg:pb-[80px] bg-white">
          <FullSpecifications FullSpecificationsData={FullSpecificationsA50C} mode="light" gifStar="/smartphone/A05i/StarFullSpecifications.svg"/>
        </div>

    </>
  )
}

export default A50C;