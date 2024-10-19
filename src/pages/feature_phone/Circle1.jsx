import React from 'react'
import DesignSection from '../../components/core/feature_phone/circle_1/DesignSection'
import LanyardSection from '../../components/core/feature_phone/circle_1/LanyardSection'
import BluetoothSection from '../../components/core/feature_phone/circle_1/BluetoothSection'
// import CompareModelsSection from '../../components/core/feature_phone/circle_1/CompareModelsSection'
import NearestStoreSection from '../../components/core/feature_phone/circle_1/NearestStoreSection'
import SimilarProducts from '../../components/core/feature_phone/circle_1/SimilarProducts'
import Hero from '../../components/common/feature_phone_common/Hero'
import { FeatureRichDataCircle1, FullSpecificationsDataCircle1, HeroDataCircle1, ProductGalleryDataCircle1, TechSpecsDataCircle1 } from '../../data/featurephonedata/circle1'
import StickyHeader from '../../components/common/StickyHeader'
import FeatureRich from '../../components/common/feature_phone_common/FeatureRich'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import { KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import Circle1KingVoice from '../../components/core/feature_phone/circle_1/Circle1KingVoice'
import FullSpecifications from '../../components/common/FullSpecifications'
const Circle1 = () => {
    return (
        <div className='font-markot'>
            <Hero {...HeroDataCircle1} />
            <StickyHeader {...HeroDataCircle1} />
            <FeatureRich {...FeatureRichDataCircle1} />
            <PhoneSliderAnimation />
            <DesignSection />
            <LanyardSection />
            <BluetoothSection />
            <Circle1KingVoice />
            <TechSpecs {...TechSpecsDataCircle1} />
            <FeaturePhoneProductGallery {...ProductGalleryDataCircle1} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataCircle1} mode={'light'} />
            {/* <CompareModelsSection /> */}
            <NearestStoreSection />
            {/* <SimilarProducts /> */}
        </div>
    )
}

export default Circle1