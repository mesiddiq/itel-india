import OverViewBanner from "../../components/core/s_series_core/S_Twenty_Four/OverViewBanner"

import FillerFrame from "../../components/core/p_series_core/P_Fifty_Five/FillerFrame"
import GamingRevolution from "../../components/core/p_series_core/P_Fifty_Five/GamingRevolution"
import VideoAsset from "../../components/core/p_series_core/P_Fifty_Five/VideoAsset"
import SeeMoreCaptureMore from "../../components/core/p_series_core/P_Fifty_Five/SeeMoreCaptureMore"
import Frame24GB from "../../components/core/p_series_core/P_Fifty_Five/Frame24GB"
import SuperfastUnisoc from "../../components/core/p_series_core/P_Fifty_Five/SuperfastUnisoc"
import ClearVision from "../../components/core/p_series_core/P_Fifty_Five/ClearVision"
import ChargeUpFull from "../../components/core/p_series_core/P_Fifty_Five/ChargeUpFull"
import MultipleCardComponents from "../../components/core/p_series_core/P_Fifty_Five/MultipleCardComponents"
import AutomaticCarousel from "../../components/core/p_series_core/P_Fifty_Five/AutomaticCarousel"
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import FullSpecifications from "../../components/common/FullSpecifications"

import { ImageCarouselData } from '../../data/smartphonedata/P55ImageCarouselData'
import { FullSpecificationsP55 } from '../../data/smartphonedata/P55Data'

const PFiftyFive = () => {
    return (
        <>
            <OverViewBanner />

            <VideoAsset />

            <FillerFrame />

            <Frame24GB />

            <AutomaticCarousel />

            <SeeMoreCaptureMore />

            <ChargeUpFull />

            <ClearVision />

            <SuperfastUnisoc />

            <GamingRevolution />

            <MultipleCardComponents />
 
            <div className="lg:px-0 py-[48px] lg:py-[120px] bg-[#D5EEF9]">
                <div className="lg:content bg-[#D5EEF9]  overflow-hidden">
                    <ColorImageCarousel ImageCarouselData={ImageCarouselData}/>
                </div>
            </div>

            <FullSpecifications FullSpecificationsData={FullSpecificationsP55} mode="dark"/>

        </>

    )
}

export default PFiftyFive