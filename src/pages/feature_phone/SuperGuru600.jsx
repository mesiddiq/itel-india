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
                <title>Super Guru 600</title>
                <meta name="description" content={`Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Featuring a 2.8" large display, 1900 mAh battery, and 1.3 MP camera, itel SG600 offers sleek metal finish design paired with a long-lasting battery.Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Perfect for a busy lifestyle, this phone supports 4G and UPI payments, ensuring you stay connected and efficient. With Kingmedia, access YouTube, YouTube Shorts, news, cricket updates, and weather information effortlessly. The Kingvoice feature lets your phone speak out loud for you.`} />
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