import React from 'react'
import { FeatureRich, KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import {
    HeroDatait2175p,
    FeatureRichDatait2175p,
    FullSpecificationsDatait2175p,
    KingVoiceDatait2175p,
    ProductGalleryDatait2175p,
    TechSpecsDatait2175p,
} from '../../data/featurephonedata/it2175p'
import SanpAndSave from '../../components/core/feature_phone/it2175p/SanpAndSave'
import OtherSections from '../../components/core/feature_phone/it2175p/OtherSections'
import { Helmet } from 'react-helmet'

const It2175p = () => {
    return (
        <>
            <Helmet>
                <title>it2175 Pro</title>
                <meta name="description" content={`Meet the it2175 Pro, your new stylish feature phone with a big and bright 5.1cm (2”) display, 1200 mAh long-lasting battery with up to 25 days* of standby time, kingvoice, and a rear camera to capture memories. Store and organize up to 2000 contacts with photos, helping you find contacts easily. Looking for sleek phones with incredible battery life? The itel it2175 Pro is your go-to choice.`} />
            </Helmet>
            <Hero {...HeroDatait2175p} />
            <StickyHeader {...HeroDatait2175p} />
            <FeatureRich {...FeatureRichDatait2175p} />
            <PhoneSliderAnimation />
            <OtherSections />
            <KingVoice {...KingVoiceDatait2175p} />
            <SanpAndSave />
            <TechSpecs {...TechSpecsDatait2175p} />
            <FeaturePhoneProductGallery {...ProductGalleryDatait2175p} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDatait2175p} mode={'light'} />
        </>
    )
}

export default It2175p