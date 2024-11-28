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
                <title>Super Guru 4G</title>
                <meta name="description" content={`Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Perfect for a busy lifestyle, this phone supports 4G and UPI payments, ensuring you stay connected and efficient. With Kingmedia, access YouTube, YouTube Shorts, news, cricket updates, and weather information effortlessly. The Kingvoice feature lets your phone speak out loud for you.`} />
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