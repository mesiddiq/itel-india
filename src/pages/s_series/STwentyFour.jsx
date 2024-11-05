import CameraSpecifications from "../../components/core/s_series_core/S_Twenty_Four/CameraSpecifications"
import PunchHoleDisplay from "../../components/core/s_series_core/S_Twenty_Four/PunchHoleDisplay"
import ProcessorSpecifications from "../../components/core/s_series_core/S_Twenty_Four/ProcessorSpecifications"
import FillerFrame from "../../components/core/s_series_core/S_Twenty_Four/FillerFrame"
import ProductDescription from "../../components/core/s_series_core/S_Twenty_Four/ProductDescription"
import SinglePhoneImageContainer from "../../components/core/s_series_core/S_Twenty_Four/SinglePhoneImageContainer"
import MultipleCardComponents from "../../components/core/s_series_core/S_Twenty_Four/MultipleCardComponents"
import Video1 from "../../components/core/s_series_core/S_Twenty_Four/Video1"
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import SensorZoom from "../../components/core/s_series_core/S_Twenty_Four/SensorZoom"
import FullSpecifications from "../../components/common/FullSpecifications"

import { ImageCarouselData } from '../../data/smartphonedata/S24ImageCarouselData'
import { FullSpecificationsS24 } from '../../data/smartphonedata/S24Data'

import MultipleCameraModes from "../../components/core/s_series_core/S_Twenty_Four/MultipleCameraModes"
import StandAloneImage from "../../components/core/s_series_core/S_Twenty_Four/StandAloneImage"
import ModernTwist from "../../components/core/s_series_core/S_Twenty_Four/ModernTwist"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"
import StickyHeader from "../../components/common/StickyHeader"

const STwentyFour = () => {
    return (
        <>
            <HeroSmartPhoneCommon
                bgDesktop={'/smartphone/smartphonehero/s24.webp'}
                bgMobile={'/smartphone/smartphonehero/s24_mobile.webp'}
                description={'108MP AI Camera | 16GB* (8GB+8GB*) RAM + 128GB ROM | Helio G91 Processor'}
                headingText={'S24'}
                price={'10,999'}
                tagText={'super series'}
                gradient1={'#ffcf92'}
                gradient2={'#ffe8cb'}
                purchaseLink="https://www.amazon.in/dp/B0CZNV9YCX?ie=UTF8&ref_=itel_S24_PDP_WS"
            />

            <StickyHeader 
                title="S24" 
                purchaseLink="https://www.amazon.in/dp/B0CZNV9YCX?ie=UTF8&ref_=itel_S24_PDP_WS" 
                icon="/smartphone/S24/s24Logo.svg"
                bgColor="#161616"
                dark={false}
            />

            <ProductDescription />

            <SliderAnimationCommon
				text1="Super Series"
				text2="incredibly super"
				svgCode={<img src="/smartphone/S24/sliderAnimationStar.svg" alt="star" className="" />}
				bgColor="#120F0D"
                textGradient1="#FFCF92"
				textGradient2="#FFE8CB"
                svgBgColor='bg-[#FFCF92] bg-opacity-[16%]'
			/>

            <Video1 />

            <FillerFrame />

            <CameraSpecifications />

            <SensorZoom />

            <MultipleCameraModes />

            <StandAloneImage />

            <ProcessorSpecifications />

            <SinglePhoneImageContainer />

            <PunchHoleDisplay />

            <ModernTwist />

            <MultipleCardComponents />

            <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false} />

            <div className="px-4 py-[60px] lg:py-[120px] bg-[#1c1b1b]">
                <FullSpecifications FullSpecificationsData={FullSpecificationsS24} mode="dark" />
            </div>
        </>
    )
}

export default STwentyFour