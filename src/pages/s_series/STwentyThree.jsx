import React from 'react'
import HeroSection from '../../components/core/s_series_core/S_Twenty_Three/HeroSection'
import ScrollingBanner from '../../components/core/s_series_core/S_Twenty_Three/ScrollingBanner'
import MemoryFusionSection from '../../components/core/s_series_core/S_Twenty_Three/MemoryFusionSection'
import NightModeSection from '../../components/core/s_series_core/S_Twenty_Three/NightModeSection'
import CameraSection from '../../components/core/s_series_core/S_Twenty_Three/CameraSection'
import ColorChangeSection from '../../components/core/s_series_core/S_Twenty_Three/ColorChangeSection'
import StyleSection from '../../components/core/s_series_core/S_Twenty_Three/StyleSection'
import HDRSection from '../../components/core/s_series_core/S_Twenty_Three/HDRSection'
import FeatureSection from '../../components/core/s_series_core/S_Twenty_Three/FeatureSection'
import FeatureHeader from '../../components/core/s_series_core/S_Twenty_Three/FeatureHeader'
import Features from '../../components/core/s_series_core/S_Twenty_Three/Features'
import FullSpecifications from "../../components/common/FullSpecifications"
import {FullSpecificationsS23} from '../../data/smartphonedata/S23Data'

import VideoSection from '../../components/core/s_series_core/S_Twenty_Three/VideoSection'
import SimilarProducts from '../../components/common/smartphone_common/SimilarProducts'
import SupportChannels from '../../components/common/smartphone_common/SupportChannels'
import OtherProducts from '../../components/common/smartphone_common/OtherProducts'


const STwentyThree = () => {
    return (
        <div className='overflow-hidden'>
        
            <HeroSection />
            <FeatureHeader/>
            <FeatureSection />
            <ScrollingBanner />
            <VideoSection />
            <CameraSection/>
            <HDRSection/>
            <NightModeSection/>
            <ColorChangeSection/>
            <MemoryFusionSection />
            <StyleSection />
            <Features/>
            <FullSpecifications FullSpecificationsData={FullSpecificationsS23} mode="dark"/>
            
            <SimilarProducts/>
            <SupportChannels/>
            {/* <OtherProducts/> */}
            

        </div>
    )
}

export default STwentyThree