import React from 'react'
import BluetoothSection from '../../components/core/feature_phone/circle_1/BluetoothSection'
import DesignSection from '../../components/core/feature_phone/circle_1/DesignSection'
import LanyardSection from '../../components/core/feature_phone/circle_1/LanyardSection'
// import CompareModelsSection from '../../components/core/feature_phone/circle_1/CompareModelsSection'
import { Helmet } from 'react-helmet'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import FeatureRich from '../../components/common/feature_phone_common/FeatureRich'
import Hero from '../../components/common/feature_phone_common/Hero'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import Circle1KingVoice from '../../components/core/feature_phone/circle_1/Circle1KingVoice'
import { TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import { FeatureRichDataCircle1, FullSpecificationsDataCircle1, HeroDataCircle1, ProductGalleryDataCircle1, TechSpecsDataCircle1 } from '../../data/featurephonedata/circle1'
const Circle1 = () => {
    return (
        <>
            <Helmet>
                <title>Circle 1</title>
                <meta name="description" content={`Step into Style and Connectivity with itel Circle 1: Featuring a unique round screen design and an included lanyard, this device lets you carry style effortlessly. Capture every moment with the camera and flash, and stay connected on the go with the inbuilt BT Caller. Available in two captivating colors, it complements your style while keeping you chic and connected.`} />
            </Helmet>
            <Hero {...HeroDataCircle1} dark={true} />
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
        </>
    )
}

export default Circle1