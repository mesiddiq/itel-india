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
    TechSpecsDataSuperGuru4g
} from '../../data/featurephonedata/SGuru4gData'
import YourSideKick from '../../components/core/feature_phone/s_guru_4g/YourSideKick'


const SuperGuru4G = () => {
    return (
        <div >
            <Hero {...HeroDataSuperGuru4g} />
            <StickyHeader {...HeroDataSuperGuru4g} />
            <FeatureRich {...FeatureRichDataSuperGuru4g} />
            <EnjoyHIgh />
            <EntireWorld />
            <PayAnywhere upiImageUrl="/featurephone/superguru4g/upiphone.png" />
            <YourSideKick />
            <KingVoice {...KingVoiceDataSuperGuru4g} />
            <TechSpecs {...TechSpecsDataSuperGuru4g} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataSuperGuru4g} mode={'light'} />
        </div>
    )
}

export default SuperGuru4G