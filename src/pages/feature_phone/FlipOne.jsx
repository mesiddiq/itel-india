import React from 'react'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import FeatureRich from '../../components/common/feature_phone_common/FeatureRich'
import Hero from '../../components/common/feature_phone_common/Hero'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import { FeatureRichDataFlipOne, FullSpecificationsDataFlipOne, HeroDataFlipOne, ProductGalleryDataFlipOne } from '../../data/featurephonedata/FlipOne'
import Section1 from '../../components/core/feature_phone/flipOne/Section1'
import Section2 from '../../components/core/feature_phone/flipOne/Section2'
import Section3 from '../../components/core/feature_phone/flipOne/Section3'
import Section4 from '../../components/core/feature_phone/flipOne/Section4'
import Section5 from '../../components/core/feature_phone/flipOne/Section5'
import Section6 from '../../components/core/feature_phone/flipOne/Section6'

const FlipOne = () => {
    return (
        <div className='font-markot'>
            <Hero {...HeroDataFlipOne} />
            <StickyHeader {...HeroDataFlipOne} />
            <FeatureRich {...FeatureRichDataFlipOne} />
            <PhoneSliderAnimation />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section6 />
            <Section5 />
            <FeaturePhoneProductGallery {...ProductGalleryDataFlipOne} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataFlipOne} mode={'light'} />
        </div>
    )
}

export default FlipOne