import FeatureRich from "../../components/common/feature_phone_common/FeatureRich";
import PhoneSliderAnimation from "../../components/common/feature_phone_common/PhoneSliderAnimation";
import StickyHeader from "../../components/common/StickyHeader";
import King_signal_section1 from "../../components/core/feature_phone/king_signal/Section1";
import Silverplated from "../../components/core/feature_phone/king_signal/Silverplated";
import Strong_Signal from "../../components/core/feature_phone/king_signal/strong_signal";
import { FeatureRichDataKingSignal, HeroDataKingSignal } from "../../data/featurephonedata/KingSignal";

function King_signal() {
    return (
        <>
            <StickyHeader {...HeroDataKingSignal} />
            <FeatureRich {...FeatureRichDataKingSignal} />
            <PhoneSliderAnimation />
            <King_signal_section1 />
            <Strong_Signal />
            <Silverplated />
        </>
    )
}

export default King_signal;