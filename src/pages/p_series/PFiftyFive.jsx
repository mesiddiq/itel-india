import 'aos/dist/aos.css';
import React from 'react';
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

// import VideoAsset from '../../components/core/p_series_core/P_Fifty_Five/VideoAsset';
import { FullSpecificationsP55 } from '../../data/smartphonedata/P55Data';
import { ImageCarouselData } from '../../data/smartphonedata/P55ImageCarouselData';

const PFiftyFive = () => {
    return (
        <>

           
            <HeroSmartPhoneCommon
       headingText='P55'
        bgDesktop='/smartphone/smartphonehero/p55.webp'
        bgMobile='/smartphone/smartphonehero/p55_mobile.webp'
        description='24GB* (8GB + 16GB*) RAM + 128GB ROM | 50MP AI Dual Rear Camera | T606 Octacore Processor'
       gradient1="#FFFFFF"
          gradient2="#FFFFFF"
        price={'6,999'}
        tagText={'power-series'}
         purchaseLink="https://www.amazon.in/dp/B0CSKKNLTT?ie=UTF8&ref_=itel_P55_PDP_WS&th=1"
      />
       <StickyHeader bgColor={'#91C9EC'} title={'P55'} purchaseLink="https://www.amazon.in/dp/B0CSKKNLTT?ie=UTF8&ref_=itel_P55_PDP_WS&th=1" dark/>
             {/* <VideoAsset /> */}
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

            <div className="px-4 py-[60px] lg:py-[120px] bg-[#1c1b1b]">
                <FullSpecifications FullSpecificationsData={FullSpecificationsP55} mode="dark" />
            </div>
        </>

    )
}

export default PFiftyFive