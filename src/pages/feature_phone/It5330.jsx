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
    TechSpecsDatait5330,
    ProductGalleryDatait5330
} from '../../data/featurephonedata/it5330Data'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import BigScreen from '../../components/core/feature_phone/it5330/BigScreen'
import StorageSuperstar from '../../components/core/feature_phone/it5330/StorageSuperstar'
import EpicBatteryPower from '../../components/core/feature_phone/it5330/EpicBatteryPower'
import GlassDesign from '../../components/core/feature_phone/it5330/GlassDesign'

const It5330 = () => {
    return (
        <>
            <Hero {...HeroDatait5330} />
            <StickyHeader {...HeroDatait5330} />
            <FeatureRich {...FeatureRichDatait5330} />
            <PhoneSliderAnimation />
            <BigScreen />
            <EpicBatteryPower />
            <GlassDesign />
            <StorageSuperstar />
            <KingVoice {...KingVoiceDatait5330} />
            <TechSpecs {...TechSpecsDatait5330} />
            <FeaturePhoneProductGallery {...ProductGalleryDatait5330} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDatait5330} mode={'light'} />
        </>
    )
}

export default It5330