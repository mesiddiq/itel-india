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
    TechSpecsDataPower120
} from '../../data/featurephonedata/power120'

const Power120 = () => {
    return (
        <div>
            <Hero {...HeroDataPower120} />
            <StickyHeader {...HeroDataPower120} />
            <FeatureRich {...FeatureRichDataPower120} />
            <PhoneSliderAnimation />
            <KingVoice {...KingVoiceDataPower120} />
            <TechSpecs {...TechSpecsDataPower120} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataPower120} mode={'light'} />
        </div>
    )
}

export default Power120