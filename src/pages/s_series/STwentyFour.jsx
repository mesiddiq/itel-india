// import HeroSection from "../../components/core/s_series_core/S_Twenty_Four/HeroSection"
import CameraSpecifications from "../../components/core/s_series_core/S_Twenty_Four/CameraSpecifications"
import PunchHoleDisplay from "../../components/core/s_series_core/S_Twenty_Four/PunchHoleDisplay"
import ProcessorSpecifications from "../../components/core/s_series_core/S_Twenty_Four/ProcessorSpecifications"
import FillerFrame from "../../components/core/s_series_core/S_Twenty_Four/FillerFrame"
import OverViewBanner from "../../components/core/s_series_core/S_Twenty_Four/OverViewBanner"
import ProductDescription from "../../components/core/s_series_core/S_Twenty_Four/ProductDescription"
import SliderAnimation from "../../components/core/s_series_core/S_Twenty_Four/SliderAnimation"
import SinglePhoneImageContainer from "../../components/core/s_series_core/S_Twenty_Four/SinglePhoneImageContainer"
// import Video1 from "../../components/core/s_series_core/S_Twenty_Four/Video1"

const STwentyFour = () => {
    return (
        <>
            <ProductDescription />
            <OverViewBanner />
            <ProductDescription />
            <SliderAnimation />
            {/* <Video1 /> */}
            <FillerFrame />
            <CameraSpecifications />
            <SliderAnimation />

            <ProcessorSpecifications />
            <SliderAnimation />

            <SinglePhoneImageContainer />
            <SliderAnimation />

            <PunchHoleDisplay />
            <SliderAnimation />

        </>
    )
}

export default STwentyFour