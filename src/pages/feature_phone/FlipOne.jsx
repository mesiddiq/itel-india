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
                <title>itel Flip One - Stylish Slim Flip Phone | itel India</title>
                <meta name="description" content={`Experience the sleek design of itel Flip One, a slim flip phone that redefines style and functionality. Discover itel Flip One price in India with itel India!`} />
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