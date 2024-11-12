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
import { Helmet } from 'react-helmet'

const FlipOne = () => {
    return (
        <>
            <Helmet>
                <title>Flip One</title>
                <meta name="description" content={`Experience nostalgia with a modern twist with our premium flip phone. Crafted with a classic leather design and a vibrant OVGA display, it’s elegance in your hands. Compact yet stylish, it’s perfect for those who want to flip it like a boss. Rediscover the joy of flipping open a phone with unmatched flair..`} />
            </Helmet>
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
            <div className="mt-[60px] lg:mt-[120px]">
                <FeaturePhoneProductGallery {...ProductGalleryDataFlipOne} />
            </div>
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataFlipOne} mode={'light'} />
        </>
    )
}

export default FlipOne