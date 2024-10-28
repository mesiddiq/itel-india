// import HeroSection from "../../components/core/s_series_core/S_Twenty_Four/HeroSection"
import CameraSpecifications from "../../components/core/s_series_core/S_Twenty_Four/CameraSpecifications"
import PunchHoleDisplay from "../../components/core/s_series_core/S_Twenty_Four/PunchHoleDisplay"
import ProcessorSpecifications from "../../components/core/s_series_core/S_Twenty_Four/ProcessorSpecifications"
import FillerFrame from "../../components/core/s_series_core/S_Twenty_Four/FillerFrame"
import OverViewBanner from "../../components/core/s_series_core/S_Twenty_Four/OverViewBanner"
import ProductDescription from "../../components/core/s_series_core/S_Twenty_Four/ProductDescription"
// import SliderAnimation from "../../components/common/smartphone_common/SliderAnimationCommon"
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
// import HeroSection1 from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"

const STwentyFour = () => {
    return (
        <>
            <HeroSmartPhoneCommon
                bgDesktop={'/smartphone/S24/hero_banner.webp'}
                bgMobile={'/smartphone/S24/hero_banner_mobile.webp'}
                description={'108MP AI Camera | 16GB* (8GB+8GB*) RAM + 128GB ROM | Helio G91 Processor'}
                headingText={'S24'}
                price={'10,999'}
                tagText={'super series'}
                gradient1={'#ffcf92'}
                gradient2={'#ffe8cb'}
            />

            <OverViewBanner />

            <ProductDescription />

            <SliderAnimationCommon
                bgColor={'#120F0D'}
                svgCode={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="24" viewBox="0 0 39 24" fill="none">
                    <rect x="0.0927734" y="0.347656" width="38.341" height="23.3053" rx="11.6527" fill="#FFCF92" fill-opacity="0.16" />
                    <path d="M26.0927 12C26.0943 12.2052 26.032 12.4058 25.9143 12.5739C25.7967 12.742 25.6296 12.8693 25.4363 12.9381L21.4701 14.3808L20.0284 18.3476C19.9574 18.5391 19.8294 18.7042 19.6618 18.8209C19.4941 18.9375 19.2948 19 19.0906 19C18.8864 19 18.6871 18.9375 18.5195 18.8209C18.3519 18.7042 18.2239 18.5391 18.1529 18.3476L16.7112 14.3802L12.745 12.9381C12.5535 12.867 12.3884 12.739 12.2719 12.5713C12.1553 12.4036 12.0928 12.2043 12.0928 12C12.0928 11.7957 12.1553 11.5964 12.2719 11.4287C12.3884 11.261 12.5535 11.133 12.745 11.0619L16.7112 9.61981L18.1529 5.65241C18.2239 5.46092 18.3519 5.29576 18.5195 5.17914C18.6871 5.06251 18.8864 5 19.0906 5C19.2948 5 19.4941 5.06251 19.6618 5.17914C19.8294 5.29576 19.9574 5.46092 20.0284 5.65241L21.4707 9.61981L25.4363 11.0619C25.6296 11.1307 25.7967 11.258 25.9143 11.4261C26.032 11.5942 26.0943 11.7948 26.0927 12Z" fill="url(#paint0_linear_13925_27922)" />
                    <defs>
                        <linearGradient id="paint0_linear_13925_27922" x1="11.9987" y1="19" x2="20.6906" y2="21.7957" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFCF92" />
                            <stop offset="1" stopColor="#FFE8CB" />
                        </linearGradient>
                    </defs>
                </svg>}
                text1={'super series'}
                text2={'incredibly super'}
                textGradient1={'#ffcf92'}
                textGradient2={'#ffe8cb'}
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