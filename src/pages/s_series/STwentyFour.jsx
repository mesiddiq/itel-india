// import HeroSection from "../../components/core/s_series_core/S_Twenty_Four/HeroSection"
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
import FullSpecifications from "../../components/core/s_series_core/S_Twenty_Four/FullSpecifications"
import ColorImageCarousel from "../../components/core/s_series_core/S_Twenty_Four/ColorImageCarousel"

const STwentyFour = () => {
    return (
        <>
            <ProductDescription />
            <OverViewBanner />
            <ProductDescription />
            <SliderAnimation />
            <Video1 />
            <FillerFrame />
            <CameraSpecifications />
            <SliderAnimation />

            <ProcessorSpecifications />
            <SliderAnimation />

            <SinglePhoneImageContainer />
            <SliderAnimation />

            <PunchHoleDisplay />
            <SliderAnimation />

            <MultipleCardComponents />
            <SliderAnimation />

            <ColorImageCarousel />
            <FullSpecifications />
            

        </>
    )
}

export default STwentyFour