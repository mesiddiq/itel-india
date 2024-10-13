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
import ColorImageCarousel from "../../components/core/s_series_core/S_Twenty_Four/ColorImageCarousel"
import SensorZoom from "../../components/core/s_series_core/S_Twenty_Four/SensorZoom"
import { FullSpecificationsSGuru4g } from "../../data/featurephonedata/SGuru4gData"
import FullSpecifications from "../../components/common/FullSpecifications"

const STwentyFour = () => {
    return (
        <>
            {/* <HeroSection /> */}
            {/* <ProductDescription /> */}
            <OverViewBanner />
            <ProductDescription />
            <SliderAnimation />
            <Video1 />
            <FillerFrame />

            <CameraSpecifications />
            
            {/* <SensorZoom /> */}

            <ProcessorSpecifications />

            <SinglePhoneImageContainer />

            <PunchHoleDisplay />

            <MultipleCardComponents />

            <ColorImageCarousel />

            {/* <FullSpecifications FullSpecificationsData={FullSpecificationsSGuru4g} /> */}
            

        </>
    )
}

export default STwentyFour