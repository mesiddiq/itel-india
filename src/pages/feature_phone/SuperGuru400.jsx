import React from 'react'
import FeatureRich from '../../components/common/feature_phone_common/FeatureRich'
import {
    FeatureRichDataSuperGuru400,
    FullSpecificationsDataSuperGuru400,
    HeroDataSuperGuru400,
    KingVoiceDataSuperGuru400,
    ProductGalleryDataSuperGuru400,
    TechSpecsDataSuperGuru400
} from '../../data/featurephonedata/SGuru400Data'
import Hero from '../../components/common/feature_phone_common/Hero'
import PayAnywhere from '../../components/common/feature_phone_common/PayAnywhere'
import { KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import UltraFastSupport from '../../components/common/feature_phone_common/UltraFastSupport'
import ExtendedTalktime from '../../components/core/feature_phone/s_guru_400/ExtendedTalktime'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'


const SuperGuru400 = () => {
    return (
        <>
            <Hero {...HeroDataSuperGuru400} />
            <StickyHeader {...HeroDataSuperGuru400} />
            <FeatureRich {...FeatureRichDataSuperGuru400} />
            <PhoneSliderAnimation />
            <ExtendedTalktime />
            <PayAnywhere upiImageUrl="/featurephone/superguru400/upi.webp" />
            <UltraFastSupport />
            <KingVoice {...KingVoiceDataSuperGuru400} />
            <TechSpecs {...TechSpecsDataSuperGuru400} />
            <FeaturePhoneProductGallery {...ProductGalleryDataSuperGuru400} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataSuperGuru400} mode={'light'} />
        </>
    )
}

export default SuperGuru400