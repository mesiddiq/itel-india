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
import {
    FullSpecificationsS24,
    ImageCarouselData,
    HeroDataS24,
    SliderAnimationS24
} from '../../data/smartphonedata/S24Data'
import MultipleCameraModes from "../../components/core/s_series_core/S_Twenty_Four/MultipleCameraModes"
import StandAloneImage from "../../components/core/s_series_core/S_Twenty_Four/StandAloneImage"
import ModernTwist from "../../components/core/s_series_core/S_Twenty_Four/ModernTwist"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"
import StickyHeader from "../../components/common/StickyHeader"
import { Helmet } from 'react-helmet'

const STwentyFour = () => {
    return (
        <>
            <Helmet>
                <title>S24</title>
                <meta name="description" content={`Capture stories with the all-new itel S24. Packed with a stunning 108MP ultra clear AI camera, bring your pictures to life. Experience blazing-fast speed with 8GB RAM, expandable up to 16GB* with memory fusion and 128GB ROM smartphone. With a 5000 mAh battery and 18W fast charging, always stay on top of your game. Get a super smooth and responsive experience with a 90Hz refresh rate on the 6.6-inch HD+ punch-hole display smartphone.`} />
                <meta name="keywords" content="itel S24,itel s23+,itel rs4,itel S24 price,itel s23+ price,about itel s24,itel s23 plus,itel s24 mobile,itel s24 smartphone,s23+ itel" />
            </Helmet>
            <HeroSmartPhoneCommon {...HeroDataS24} />
            <StickyHeader
                title="S24"
                purchaseLink="https://www.amazon.in/dp/B0CZNV9YCX?ie=UTF8&ref_=itel_S24_PDP_WS"
                icon="/smartphone/S24/s24Logo.svg"
                bgColor="#161616"
                dark={false}
            />
            <ProductDescription />
            <SliderAnimationCommon {...SliderAnimationS24} svgCode={<svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.7514 7C14.753 7.20521 14.6907 7.40581 14.573 7.57393C14.4554 7.74205 14.2883 7.86932 14.095 7.93807L10.1288 9.38082L8.68711 13.3476C8.61606 13.5391 8.48811 13.7042 8.32047 13.8209C8.15283 13.9375 7.95353 14 7.74933 14C7.54514 14 7.34583 13.9375 7.17819 13.8209C7.01055 13.7042 6.88261 13.5391 6.81155 13.3476L5.36987 9.38019L1.40368 7.93807C1.21224 7.86699 1.04714 7.73901 0.930548 7.57132C0.813958 7.40363 0.751465 7.20426 0.751465 7C0.751465 6.79574 0.813958 6.59637 0.930548 6.42868C1.04714 6.26099 1.21224 6.13301 1.40368 6.06193L5.36987 4.61981L6.81155 0.652409C6.88261 0.460917 7.01055 0.295764 7.17819 0.179138C7.34583 0.062512 7.54514 0 7.74933 0C7.95353 0 8.15283 0.062512 8.32047 0.179138C8.48811 0.295764 8.61606 0.460917 8.68711 0.652409L10.1294 4.61981L14.095 6.06193C14.2883 6.13068 14.4554 6.25795 14.573 6.42607C14.6907 6.59419 14.753 6.79479 14.7514 7Z"
                    fill="url(#paint0_linear_14389_10444)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_14389_10444"
                        x1="0.657346"
                        y1="14"
                        x2="9.34928"
                        y2="16.7957"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFCF92" />
                        <stop offset="1" stopColor="#FFE8CB" />
                    </linearGradient>
                </defs>
            </svg>} />
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