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
    TechSpecsDataSuperGuru600,
    ProductGalleryDataSuperGuru400
} from '../../data/featurephonedata/SGuru600Data'
import UninterruptedConnectivity from '../../components/core/feature_phone/s_guru_600/UninterruptedConnectivity'
import UltraFastSupport from '../../components/common/feature_phone_common/UltraFastSupport'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import { Helmet } from 'react-helmet'
import SuperSeriesHeader from '../../components/common/feature_phone_common/SuperSeriesHeader'
import SuperSeriesStickyHeader from '../../components/common/feature_phone_common/SuperSeriesStickyHeader'

const SuperGuru600 = () => {
    return (
        <>
            <Helmet>
                <title>itel Super Guru 600 - Long-Lasting 1900mAh Battery | itel India</title>
                <meta name="description" content={`Stay connected with the itel Super Guru 600, featuring a powerful 1900mAh battery. Explore the reliability of itel keypad phones with itel India!`} />
            </Helmet>
            <SuperSeriesHeader {...HeroDataSuperGuru600} />
            <Hero {...HeroDataSuperGuru600} />
            {/* <StickyHeader {...HeroDataSuperGuru600} /> */}
            <SuperSeriesStickyHeader {...HeroDataSuperGuru600} />
            <FeatureRich {...FeatureRichDataSuperGuru600} />
            <PhoneSliderAnimation />
            <UninterruptedConnectivity />
            <PayAnywhere upiImageUrl={'/featurephone/superguru600/upi.webp'} />
            <UltraFastSupport />
            <KingVoice {...KingVoiceDataSuperGuru600} />
            <TechSpecs {...TechSpecsDataSuperGuru600} />
            <FeaturePhoneProductGallery  {...ProductGalleryDataSuperGuru400} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataSuperGuru600} mode={'light'} />
        </>
    )
}

export default SuperGuru600