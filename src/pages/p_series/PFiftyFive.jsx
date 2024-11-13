import 'aos/dist/aos.css';
import FullSpecifications from "../../components/common/FullSpecifications";
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon";
import StickyHeader from '../../components/common/StickyHeader';
import AutomaticCarousel from '../../components/core/p_series_core/P_Fifty_Five/AutomaticCarousel';
import ChargeUpFull from '../../components/core/p_series_core/P_Fifty_Five/ChargeUpFull';
import ClearVision from '../../components/core/p_series_core/P_Fifty_Five/ClearVision';
import FillerFrame from '../../components/core/p_series_core/P_Fifty_Five/FillerFrame';
import Frame24GB from '../../components/core/p_series_core/P_Fifty_Five/Frame24GB';
import GamingRevolution from '../../components/core/p_series_core/P_Fifty_Five/GamingRevolution';
import MultipleCardComponents from '../../components/core/p_series_core/P_Fifty_Five/MultipleCardComponents';
import SeeMoreCaptureMore from '../../components/core/p_series_core/P_Fifty_Five/SeeMoreCaptureMore';
import SuperfastUnisoc from '../../components/core/p_series_core/P_Fifty_Five/SuperfastUnisoc';
import ColorImageCarousel from '../../components/core/p_series_core/P_Fifty_Five/ColorImageCarousel';
import {
    FullSpecificationsP55,
    ImageCarouselData,
    HeroDataP55
} from '../../data/smartphonedata/P55Data';
import { Helmet } from 'react-helmet'

const PFiftyFive = () => {
    return (
        <>
            <Helmet>
                <title>P55</title>
                <meta name="description" content={`Fuel your conversations with the itel Power 120. This beast of a phone keeps you connected all day with its 2500 mAh Battery, straight with an insane standby of 55 Days*! Whoa! Dive into a crisp, clear world on its 5.08cm (2”) display, perfect for a bigger view and an elevated style and experience. Plus, it's got a cool LED torch that you can flick on whenever you need it. Tune into your favorite beats with the wireless FM radio phone, and don't worry about missing out – you can even record tracks for later!`} />
                <meta name="keywords" content="itel P55 5g,itel P55 +,itel P55 5g smartphone,itel P55 5g mobile price,itel P55 5g phone,itel P55 Plus,itel P55 5g mobile,itel P55 mobile 5g" />
            </Helmet>
            <HeroSmartPhoneCommon {...HeroDataP55} />
            <StickyHeader bgColor={'#91C9EC'} title={'P55'} purchaseLink="https://www.amazon.in/dp/B0CSKKNLTT?ie=UTF8&ref_=itel_P55_PDP_WS&th=1" dark />
            <FillerFrame />
            <Frame24GB />
            <SeeMoreCaptureMore />
            <AutomaticCarousel />
            <ChargeUpFull />
            <ClearVision />
            <SuperfastUnisoc />
            <GamingRevolution />
            <MultipleCardComponents />
            <div className="lg:px-0 py-[48px] lg:py-[120px] bg-[#D5EEF9]">
                <div className="lg:content bg-[#D5EEF9]  overflow-hidden">
                    <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={true} />
                </div>
            </div>
            <FullSpecifications FullSpecificationsData={FullSpecificationsP55} mode="dark" />
        </>
    )
}

export default PFiftyFive