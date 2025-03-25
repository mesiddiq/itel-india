import FeatureRich from "../../components/common/feature_phone_common/FeatureRich";
import PhoneSliderAnimation from "../../components/common/feature_phone_common/PhoneSliderAnimation";
import FullSpecifications from "../../components/common/FullSpecifications";
import StickyHeader from "../../components/common/StickyHeader";
import HeroKingSignal from "../../components/core/feature_phone/king_signal/HeroKingSignal";
import KingSignalKingVoice from "../../components/core/feature_phone/king_signal/KingSingnalKingVoice";
import Feature_Section from "../../components/core/feature_phone/king_signal/Feature_section";
import Rigorous_Test from "../../components/core/feature_phone/king_signal/Rigorous_test";
import King_signal_section1 from "../../components/core/feature_phone/king_signal/Section1";
import Signal_performance from "../../components/core/feature_phone/king_signal/Signal_performance";
import Silverplated from "../../components/core/feature_phone/king_signal/Silverplated";
import Stay_connected from "../../components/core/feature_phone/king_signal/Stay_connected";
import Strong_Signal from "../../components/core/feature_phone/king_signal/strong_signal";
import Touch_switch from "../../components/core/feature_phone/king_signal/Torch_switch";
import Tough_sleek from "../../components/core/feature_phone/king_signal/Tough_sleek";
import { TechSpecs } from "../../components/core/feature_phone/s_guru_4g";
import { FeatureRichDataKingSignal, FullSpecificationsDataKingSignal, HeroDataKingSignal, TechSpecsDataKingSignal } from "../../data/featurephonedata/KingSignal";
import Type_C from "../../components/core/feature_phone/king_signal/Type-C";
import { Helmet } from "react-helmet";

function King_signal() {
    return (
        <>
            <Helmet>
                <title>King Signal</title>
                <meta name="description" content="Experience unmatched connectivity with Signal Enhancement Technology, ensuring a super strong signal no matter where you are. Whether you're in remote areas, underground spaces, or high-rise buildings, stay connected without interruptions. With optimized antenna performance and advanced network stability, your calls remain crystal clear, and your messages are delivered instantly." />
            </Helmet>
            <HeroKingSignal />
            <StickyHeader {...HeroDataKingSignal} />
            <FeatureRich {...FeatureRichDataKingSignal} />
            <PhoneSliderAnimation />
            <Feature_Section />
            <Signal_performance/>
            <King_signal_section1 />
            <Strong_Signal />
            <Silverplated />
            <Stay_connected />
            <Tough_sleek />
            <Rigorous_Test />
            <Type_C />
            <Touch_switch />
            <KingSignalKingVoice />
            <TechSpecs {...TechSpecsDataKingSignal} />
            <FullSpecifications FullSpecificationsData={FullSpecificationsDataKingSignal} mode={'light'} />
        </>
    )
}

export default King_signal;