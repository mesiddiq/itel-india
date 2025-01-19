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
import FeatureSection from '../../components/core/p_series_core/P_Fifty_Five/FeatureSection';
import SliderAnimationCommon from '../../components/common/smartphone_common/SliderAnimationCommon';

const PFiftyFive = () => {
    return (
        <>
            <Helmet>
                <title>Discover the itel P55 5G Mobile: Fast, Fun, Affordable! | itel India</title>
                <meta name="description" content={`Discover the itel P55 5G mobile, packed with cutting-edge features and impressive performance. Explore its price, specs, and more on our exclusive product page!`} />
                <meta name="keywords" content="itel P55 5g,itel P55 +,itel P55 5g smartphone,itel P55 5g mobile price,itel P55 5g phone,itel P55 Plus,itel P55 5g mobile,itel P55 mobile 5g" />
            </Helmet>
            <HeroSmartPhoneCommon {...HeroDataP55} />
            <StickyHeader bgColor={'#91C9EC'} title={'P55'} purchaseLink="https://www.amazon.in/dp/B0CSKKNLTT?ie=UTF8&ref_=itel_P55_PDP_WS&th=1" dark />
            <FeatureSection />
            <SliderAnimationCommon
				text1="Power Series"
				text2="intensively powerful"
				svgCode={<img src="/smartphone/P55/P55SliderLightning.svg" alt="star" className="" />}
				bgColor="#001C3A"
                textColor="#D5EEF9"
                svgBgColor='bg-[#4D88D2]'
			/>
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