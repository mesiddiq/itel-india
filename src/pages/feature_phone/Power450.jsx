import { FeatureRich, KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import {
    HeroDataPower450,
    FeatureRichDataPower450,
    FullSpecificationsDataPower450,
    KingVoiceDataPower450,
    TechSpecsDataPower450,
    ProductGalleryDataPower450
} from '../../data/featurephonedata/power450'
import ChargeUp from '../../components/core/feature_phone/power_450/ChargeUp'
import MoreDetails from '../../components/core/feature_phone/power_450/MoreDetails'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import { Helmet } from 'react-helmet'

const Power450 = () => {
    return (
        <>
            <Helmet>
                <title>Power 450</title>
                <meta name="description" content={`Meet the itel Power 450, your ultimate feature phone for staying charged and connected on the go! With a 2500 mAh battery, Type-C Charging, and up to 15 days* of battery backup, you can kiss low battery anxiety goodbye. Enjoy a crystal-clear view on the large 6.1cm (2.4”) QVGA display, perfect for browsing, texting, and more. Tune in to your favorite radio stations wherever you are with the built-in wireless FM radio. Slim and stylish, in three eye-catching colors, the itel Power 450 is sure to turn heads wherever you go.`} />
            </Helmet>
            <Hero {...HeroDataPower450} />
            <StickyHeader {...HeroDataPower450} />
            <FeatureRich {...FeatureRichDataPower450} />
            <PhoneSliderAnimation />
            <ChargeUp />
            <MoreDetails />
            <KingVoice linearGradient={true} {...KingVoiceDataPower450} />
            <TechSpecs {...TechSpecsDataPower450} />
            <FeaturePhoneProductGallery {...ProductGalleryDataPower450} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataPower450} mode={'light'} />
        </>
    )
}

export default Power450