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
import { Helmet } from 'react-helmet'
import SuperSeriesHeader from '../../components/common/feature_phone_common/SuperSeriesHeader'
import SuperSeriesStickyHeader from '../../components/common/feature_phone_common/SuperSeriesStickyHeader'


const SuperGuru400 = () => {
    return (
        <>
            <Helmet>
                <title>Super Guru 400</title>
                <meta name="description" content={`Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Featuring a 2.4" display, 1200 mAh battery, crystal clear audio, and 1.3 MP camera, all in a 9.8 mm ultra-thin itel SG400 keypad phone.`} />
            </Helmet>
            <SuperSeriesHeader {...HeroDataSuperGuru400} />
            <Hero {...HeroDataSuperGuru400} />
            {/* <StickyHeader {...HeroDataSuperGuru400} /> */}
            <SuperSeriesStickyHeader {...HeroDataSuperGuru400} />
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