import Feature_Section from "../../components/core/feature_phone/king_signal/Feature_section";
import Rigorous_Test from "../../components/core/feature_phone/king_signal/Rigorous_test";
import King_signal_section1 from "../../components/core/feature_phone/king_signal/Section1";
import Signal_performance from "../../components/core/feature_phone/king_signal/Signal_performance";
import Silverplated from "../../components/core/feature_phone/king_signal/Silverplated";
import Stay_connected from "../../components/core/feature_phone/king_signal/Stay_connected";
import Strong_Signal from "../../components/core/feature_phone/king_signal/strong_signal";
import Touch_switch from "../../components/core/feature_phone/king_signal/Torch_switch";
import Tough_sleek from "../../components/core/feature_phone/king_signal/Tough_sleek";
import Type_C from "../../components/core/feature_phone/king_signal/Type-C";

function King_signal(){
    return (
        <>
            <Feature_Section/>
            <Signal_performance/>
            <King_signal_section1/>
            <Strong_Signal/>
            <Silverplated/>
            <Stay_connected/>
            <Rigorous_Test/>
            <Tough_sleek/>
            <Type_C/>
            <Touch_switch/>
        </>
    )
}

export default King_signal;