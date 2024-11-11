import { FeatureRich, KingVoice, TechSpecs } from '../../components/core/feature_phone/s_guru_4g'
import PhoneSliderAnimation from '../../components/common/feature_phone_common/PhoneSliderAnimation'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import StickyHeader from '../../components/common/StickyHeader'
import {
    HeroDataPower120,
    FeatureRichDataPower120,
    FullSpecificationsDataPower120,
    KingVoiceDataPower120,
    TechSpecsDataPower120,
    ProductGalleryDataPower120
} from '../../data/featurephonedata/power120'
import FeaturePhoneProductGallery from '../../components/common/feature_phone_common/FeaturePhoneProductGallery'
import StyleAndSubstance from '../../components/core/feature_phone/power_120/StyleAndSubstance'
import BigScreen from '../../components/core/feature_phone/power_120/BigScreen'
import EndlessPowerScreen from '../../components/core/feature_phone/power_120/EndlessPowerScreen'
import CommunicationPage from '../../components/core/feature_phone/power_120/CommunicationPage'
import HighIntensityTourch from '../../components/core/feature_phone/power_120/HighIntensityTourch'
import { Helmet } from 'react-helmet'

const Power120 = () => {
    return (
        <>
            <Helmet>
                <title>Power 120</title>
                <meta name="description" content={`Fuel your conversations with the itel Power 120. This beast of a phone keeps you connected all day with its 2500 mAh Battery, straight with an insane standby of 55 Days*! Whoa! Dive into a crisp, clear world on its 5.08cm (2”) display, perfect for a bigger view and an elevated style and experience. Plus, it's got a cool LED torch that you can flick on whenever you need it. Tune into your favorite beats with the wireless FM radio phone, and don't worry about missing out – you can even record tracks for later!`} />
            </Helmet>
            <Hero {...HeroDataPower120} />
            <StickyHeader {...HeroDataPower120} />
            <FeatureRich {...FeatureRichDataPower120} />
            <PhoneSliderAnimation />
            <BigScreen />
            <EndlessPowerScreen />
            <HighIntensityTourch />
            <KingVoice {...KingVoiceDataPower120} />
            <CommunicationPage />
            <StyleAndSubstance />
            <TechSpecs {...TechSpecsDataPower120} />
            <FeaturePhoneProductGallery {...ProductGalleryDataPower120} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataPower120} mode={'light'} />
        </>
    )
}

export default Power120