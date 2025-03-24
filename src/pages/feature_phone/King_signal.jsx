import FeatureRich from "../../components/common/feature_phone_common/FeatureRich";
import PhoneSliderAnimation from "../../components/common/feature_phone_common/PhoneSliderAnimation";
import FullSpecifications from "../../components/common/FullSpecifications";
import StickyHeader from "../../components/common/StickyHeader";
import HeroKingSignal from "../../components/core/feature_phone/king_signal/HeroKingSignal";
import KingSignalKingVoice from "../../components/core/feature_phone/king_signal/KingSingnalKingVoice";
import King_signal_section1 from "../../components/core/feature_phone/king_signal/Section1";
import Silverplated from "../../components/core/feature_phone/king_signal/Silverplated";
import Stay_connected from "../../components/core/feature_phone/king_signal/Stay_connected";
import Strong_Signal from "../../components/core/feature_phone/king_signal/strong_signal";
import Tough_sleek from "../../components/core/feature_phone/king_signal/Tough_sleek";
import { TechSpecs } from "../../components/core/feature_phone/s_guru_4g";
import { FeatureRichDataKingSignal, FullSpecificationsDataKingSignal, HeroDataKingSignal, TechSpecsDataKingSignal } from "../../data/featurephonedata/KingSignal";

function King_signal() {
    return (
        <>
            <HeroKingSignal />
            <StickyHeader {...HeroDataKingSignal} />
            <FeatureRich {...FeatureRichDataKingSignal} />
            <PhoneSliderAnimation />
            <King_signal_section1 />
            <Strong_Signal />
            <Silverplated />
            <Stay_connected />
            <Tough_sleek />
            <KingSignalKingVoice />
            <TechSpecs {...TechSpecsDataKingSignal} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataKingSignal} mode={'light'} />
        </>
    )
}

export default King_signal;