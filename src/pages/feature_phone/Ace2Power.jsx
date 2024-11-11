import React from 'react'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import {
    EnjoyHIgh,
    FeatureRich,
    KingVoice,
    TechSpecs
} from '../../components/core/feature_phone/s_guru_4g'
import StickyHeader from '../../components/common/StickyHeader'
import {
    FeatureRichDataAce2Power,
    FullSpecificationsDataAce2Power,
    HeroDataAce2Power,
    KingVoiceDataAce2Power,
    ProductGalleryDataAce2Power,
    TechSpecsDataAce2Power
} from '../../data/featurephonedata/Ace2Power'
import { Helmet } from 'react-helmet'
import DiveIntoWorld from '../../components/core/feature_phone/ace2power/DiveIntoWorld'
import ExtendedBattery from '../../components/core/feature_phone/ace2power/ExtendedBattery'
import Communicate from '../../components/core/feature_phone/ace2power/Communicate'

const Ace2Power = () => {
    return (
        <>
            <Helmet>
                <title>Ace 2 Power</title>
                <meta name="description" content={`itel’s ACE 2 Power delivers unmatched power-packed performance with its big 2500 mAh battery and trendy design. Features a vibrant 4.57cm (1.8") QQVGA Display, Big LED Torch, Smart notifications feature to stay connected, and exclusive LetsChat feature, to stay connected with friends and family effortlessly. Don't miss out on the power and style – grab your itel ACE 2 Power today!`} />
            </Helmet>
            <Hero {...HeroDataAce2Power} />
            <StickyHeader {...HeroDataAce2Power} />
            <FeatureRich {...FeatureRichDataAce2Power} />
            <PhoneSliderAnimation />
            <ExtendedBattery />
            <Communicate />
            <DiveIntoWorld />
            <KingVoice {...KingVoiceDataAce2Power} />
            <TechSpecs {...TechSpecsDataAce2Power} />
            <FeaturePhoneProductGallery {...ProductGalleryDataAce2Power} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataAce2Power} mode={'light'} />
        </>
    )
}

export default Ace2Power