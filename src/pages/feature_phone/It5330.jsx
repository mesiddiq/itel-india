import React from 'react'
import { FeatureRich, KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import {
    HeroDatait5330,
    FeatureRichDatait5330,
    FullSpecificationsDatait5330,
    KingVoiceDatait5330,
    TechSpecsDatait5330
} from '../../data/featurephonedata/it5330Data'

const It5330 = () => {
    return (
        <div>
            <Hero {...HeroDatait5330} />
            <StickyHeader {...HeroDatait5330} />
            <FeatureRich {...FeatureRichDatait5330} />
            <PhoneSliderAnimation />
            <KingVoice {...KingVoiceDatait5330} />
            <TechSpecs {...TechSpecsDatait5330} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDatait5330} mode={'light'} />
        </div>
    )
}

export default It5330