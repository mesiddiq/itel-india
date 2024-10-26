import React from 'react'
import { FeatureRich, KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import { FeatureRichDatait5262, FullSpecificationsDatait5262, HeroDatait5262, KingVoiceDatait5262, ProductGalleryDataIt5262, TechSpecsDatait5262 } from '../../data/featurephonedata/it5262Data'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import GrandScreen from '../../components/core/feature_phone/it5262/GrandScreen'
import TypeC from '../../components/core/feature_phone/it5262/TypeC'
import CaptivatingGlass from '../../components/core/feature_phone/it5262/CaptivatingGlass'
import UnlimitedEnergy from '../../components/core/feature_phone/it5262/UnlimitedEnergy'

const It5262 = () => {
    return (
        <div>
            <Hero {...HeroDatait5262} />
            <StickyHeader {...HeroDatait5262} />
            <FeatureRich {...FeatureRichDatait5262} />
            <PhoneSliderAnimation />
            <TypeC />
            <CaptivatingGlass />
            <UnlimitedEnergy />
            <KingVoice {...KingVoiceDatait5262} />
            <GrandScreen />
            <TechSpecs {...TechSpecsDatait5262} />
            <FeaturePhoneProductGallery {...ProductGalleryDataIt5262} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDatait5262} mode={'light'} />
        </div>
    )
}

export default It5262