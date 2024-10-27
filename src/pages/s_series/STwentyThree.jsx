import React from 'react'
import FullSpecifications from "../../components/common/FullSpecifications"
import CameraSection from '../../components/core/s_series_core/S_Twenty_Three/CameraSection'
import ColorChangeSection from '../../components/core/s_series_core/S_Twenty_Three/ColorChangeSection'
import Features from '../../components/core/s_series_core/S_Twenty_Three/Features'
import FeatureSection from '../../components/core/s_series_core/S_Twenty_Three/FeatureSection'
import HDRSection from '../../components/core/s_series_core/S_Twenty_Three/HDRSection'
import MemoryFusionSection from '../../components/core/s_series_core/S_Twenty_Three/MemoryFusionSection'
import NightModeSection from '../../components/core/s_series_core/S_Twenty_Three/NightModeSection'
import ScrollingBanner from '../../components/core/s_series_core/S_Twenty_Three/ScrollingBanner'
import StyleSection from '../../components/core/s_series_core/S_Twenty_Three/StyleSection'
import { FullSpecificationsS23 } from '../../data/smartphonedata/S23Data'
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import HeroSmartPhoneCommon from '../../components/common/smartphone_common/HeroSmartPhoneCommon'
import StickyHeader from '../../components/common/StickyHeader'
import VideoSection from '../../components/core/s_series_core/S_Twenty_Three/VideoSection'
import SliderAnimationCommon from '../../components/common/smartphone_common/SliderAnimationCommon'
import { ImageCarouselData } from '../../data/smartphonedata/S23ImageCarouselData'


const STwentyThree = () => {
    return (
        <div className='font-markot'>
            <HeroSmartPhoneCommon
                tagText="super series"
                headingText="s23"
                price={"8,199"}
                description={'50MP Super Clear Rear Camera | 16GB* (8GB+8GB*) RAM + 128GB ROM | Photochromic Effects'}
                bgDesktop={'/smartphone/smartphonehero/s23.webp'}
                bgMobile={'/smartphone/smartphonehero/s23_mobile.webp'}
                gradient1='#ca86ff'
                gradient2='#85e2fd'

            />
            <StickyHeader title="S23" purchaseLink={''} icon={''} bgColor={'#181818'} />
            <FeatureSection />
            <SliderAnimationCommon
                text1="super series"
                text2="incredibly super"
                svgCode={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="24" viewBox="0 0 39 24" fill="none">
                    <rect x="0.0925293" y="0.347656" width="38.341" height="23.3053" rx="11.6527" fill="#3A3358" />
                    <path d="M26.0925 12C26.0941 12.2052 26.0317 12.4058 25.9141 12.5739C25.7964 12.742 25.6293 12.8693 25.4361 12.9381L21.4699 14.3808L20.0282 18.3476C19.9571 18.5391 19.8292 18.7042 19.6615 18.8209C19.4939 18.9375 19.2946 19 19.0904 19C18.8862 19 18.6869 18.9375 18.5193 18.8209C18.3516 18.7042 18.2237 18.5391 18.1526 18.3476L16.7109 14.3802L12.7447 12.9381C12.5533 12.867 12.3882 12.739 12.2716 12.5713C12.155 12.4036 12.0925 12.2043 12.0925 12C12.0925 11.7957 12.155 11.5964 12.2716 11.4287C12.3882 11.261 12.5533 11.133 12.7447 11.0619L16.7109 9.61981L18.1526 5.65241C18.2237 5.46092 18.3516 5.29576 18.5193 5.17914C18.6869 5.06251 18.8862 5 19.0904 5C19.2946 5 19.4939 5.06251 19.6615 5.17914C19.8292 5.29576 19.9571 5.46092 20.0282 5.65241L21.4705 9.61981L25.4361 11.0619C25.6293 11.1307 25.7964 11.258 25.9141 11.4261C26.0317 11.5942 26.0941 11.7948 26.0925 12Z" fill="url(#paint0_linear_13925_25571)" />
                    <defs>
                        <linearGradient id="paint0_linear_13925_25571" x1="11.9984" y1="19" x2="20.6903" y2="21.7957" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#CA86FF" />
                            <stop offset="1" stop-color="#85E2FD" />
                        </linearGradient>
                    </defs>
                </svg>}
                bgColor="#181818"
                textGradient1="#ca86ff"
                textGradient2="#85e2fd"
            />
            <VideoSection />
            <CameraSection />
            <HDRSection />
            <NightModeSection />
            <ColorChangeSection />
            <MemoryFusionSection />
            <StyleSection />
            <Features />
            <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsS23} mode="dark" />
        </div>
    )
}

export default STwentyThree