import React from 'react'
import { FeatureRich, KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import {
    HeroDatait5027,
    FeatureRichDatait5027,
    FullSpecificationsDatait5027,
    KingVoiceDatait5027,
    ProductGalleryDatait5027,
    TechSpecsDatait5027
} from '../../data/featurephonedata/it5027'
import GreatVisuals from '../../components/core/feature_phone/it5027/GreatVisuals'
import SaveYourContacts from '../../components/core/feature_phone/it5027/SaveYourContacts'
import YourOwnLanguage from '../../components/core/feature_phone/it5027/YourOwnLanguage'
import CreateYourStyle from '../../components/core/feature_phone/it5027/CreateYourStyle'

const It5027 = () => {
    return (
        <>
            <Hero {...HeroDatait5027} />
            <StickyHeader {...HeroDatait5027} />
            <FeatureRich {...FeatureRichDatait5027} />
            <PhoneSliderAnimation />
            <GreatVisuals/>
            <CreateYourStyle/>
            <KingVoice {...KingVoiceDatait5027} />
            <SaveYourContacts/>
            <YourOwnLanguage/>
            <TechSpecs {...TechSpecsDatait5027} />
            <FeaturePhoneProductGallery {...ProductGalleryDatait5027} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDatait5027} mode={'light'} />
        </>
    )
}

export default It5027