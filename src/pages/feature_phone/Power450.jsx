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

const Power450 = () => {
    return (
        <div className=''>
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
        </div>
    )
}

export default Power450