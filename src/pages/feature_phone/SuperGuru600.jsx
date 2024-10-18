import React from 'react'
import FeatureRich from '../../components/common/feature_phone_common/FeatureRich'
import Hero from '../../components/common/feature_phone_common/Hero'
import StickyHeader from '../../components/common/StickyHeader'
import PayAnywhere from '../../components/common/feature_phone_common/PayAnywhere'
import { KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import FullSpecifications from '../../components/common/FullSpecifications'
import {
    HeroDataSuperGuru600,
    FeatureRichDataSuperGuru600,
    FullSpecificationsDataSuperGuru600,
    KingVoiceDataSuperGuru600,
    TechSpecsDataSuperGuru600
} from '../../data/featurephonedata/SGuru600Data'
import UninterruptedConnectivity from '../../components/core/feature_phone/s_guru_600/UninterruptedConnectivity'

const SuperGuru600 = () => {
    return (
        <div>
            <Hero {...HeroDataSuperGuru600} />
            <StickyHeader {...HeroDataSuperGuru600} />
            <FeatureRich {...FeatureRichDataSuperGuru600} />
            <UninterruptedConnectivity/>
            <PayAnywhere upiImageUrl={'/featurephone/superguru600/upi.webp'} />
            <KingVoice {...KingVoiceDataSuperGuru600} />
            <TechSpecs {...TechSpecsDataSuperGuru600} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataSuperGuru600} mode={'light'} />
        </div>
    )
}

export default SuperGuru600