import King_signal_section1 from "../../components/core/feature_phone/king_signal/Section1";
import Silverplated from "../../components/core/feature_phone/king_signal/Silverplated";
import Stay_connected from "../../components/core/feature_phone/king_signal/Stay_connected";
import Strong_Signal from "../../components/core/feature_phone/king_signal/strong_signal";
import Touch_switch from "../../components/core/feature_phone/king_signal/Torch_switch";
import Tough_sleek from "../../components/core/feature_phone/king_signal/Tough_sleek";

function King_signal(){
    return (
        <>
            <King_signal_section1/>
            <Strong_Signal/>
            <Silverplated/>
            <Stay_connected/>
            <Tough_sleek/>
            <Touch_switch/>
        </>
    )
}

export default King_signal;