import HeroSection from "../../components/core/s_series_core/S_Twenty_Four/HeroSection"
import CameraSpecifications from "../../components/core/s_series_core/S_Twenty_Four/CameraSpecifications"
import PunchHoleDisplay from "../../components/core/s_series_core/S_Twenty_Four/PunchHoleDisplay"
import ProcessorSpecifications from "../../components/core/s_series_core/S_Twenty_Four/ProcessorSpecifications"
import FillerFrame from "../../components/core/s_series_core/S_Twenty_Four/FillerFrame"
import OverViewBanner from "../../components/core/s_series_core/S_Twenty_Four/OverViewBanner"
import ProductDescription from "../../components/core/s_series_core/S_Twenty_Four/ProductDescription"
import SliderAnimation from "../../components/core/s_series_core/S_Twenty_Four/SliderAnimation"
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

const STwentyFour = () => {
    return (
        <>
            <HeroSection />

            <OverViewBanner />

            <ProductDescription />

            <SliderAnimation />

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

            <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false}/>

            <div className="px-4 py-[60px] lg:py-[120px] bg-[#1c1b1b]">
                <FullSpecifications FullSpecificationsData={FullSpecificationsS24} mode="dark"/>
            </div>
        </>
    )
}

export default STwentyFour