import React from 'react'
import {
    EnjoyHIgh,
    FeatureRich,
    KingVoice,
    PayAnywhere,
    TechSpecs
} from '../../components/core/feature_phone/s_guru_4g'
import StickyHeader from '../../components/common/StickyHeader'
import EntireWorld from '../../components/core/feature_phone/s_guru_4g/EntireWorld'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import {
    FullSpecificationsDataSuperGuru4g,
    FeatureRichDataSuperGuru4g,
    HeroDataSuperGuru4g,
    KingVoiceDataSuperGuru4g,
    TechSpecsDataSuperGuru4g,
    ProductGalleryDataSuperGuru4g
} from '../../data/featurephonedata/SGuru4gData'
import YourSideKick from '../../components/core/feature_phone/s_guru_4g/YourSideKick'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import { Helmet } from 'react-helmet'
import SuperSeriesHeader from '../../components/common/feature_phone_common/SuperSeriesHeader'
import SuperSeriesStickyHeader from '../../components/common/feature_phone_common/SuperSeriesStickyHeader'


const SuperGuru4G = () => {
    return (
        <>
            <Helmet>
                <title>itel Super Guru 4G - Reliable Keypad Phone | itel India</title>
                <meta name="description" content={`Upgrade to itel Super Guru 4G, a keypad phone with modern 4G connectivity. Explore durability, style, and the best itel Super Guru 4G price at itel India!`} />
            </Helmet>
            <SuperSeriesHeader {...HeroDataSuperGuru4g} />
            <Hero {...HeroDataSuperGuru4g} />
            <SuperSeriesStickyHeader {...HeroDataSuperGuru4g} />
            <FeatureRich {...FeatureRichDataSuperGuru4g} />
            <PhoneSliderAnimation />
            <EnjoyHIgh />
            <EntireWorld />
            <PayAnywhere upiImageUrl="/featurephone/superguru4g/upiphone.png" />
            <YourSideKick />
            <KingVoice {...KingVoiceDataSuperGuru4g} />
            <TechSpecs {...TechSpecsDataSuperGuru4g} />
            <FeaturePhoneProductGallery {...ProductGalleryDataSuperGuru4g} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataSuperGuru4g} mode={'light'} />
        </>
    )
}

export default SuperGuru4G