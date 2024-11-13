import React, { useEffect, useState } from 'react';

import StickyHeader from '../../components/common/StickyHeader';
import FullSpecifications from '../../components/common/FullSpecifications';
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import Herobanner from '../../components/core/p_series_core/P_Fifty_Five_T/Herobanner';
import Overview from '../../components/core/p_series_core/P_Fifty_Five_T/Overview';
import Scroller from '../../components/core/p_series_core/P_Fifty_Five_T/Scroller';
import LevelUpWithAndroid from '../../components/core/p_series_core/P_Fifty_Five_T/LevelUpWithAndroid';
import StayConnected from '../../components/core/p_series_core/P_Fifty_Five_T/StayConnected';
import StunningScreen from '../../components/core/p_series_core/P_Fifty_Five_T/StunningScreen';
import GetNotifications from '../../components/core/p_series_core/P_Fifty_Five_T/GetNotifications';
import CaptureEveryDetail from '../../components/core/p_series_core/P_Fifty_Five_T/CaptureEveryDetail';
import BoosterEngine from '../../components/core/p_series_core/P_Fifty_Five_T/BoosterEngine';
import ExtendedMemory from '../../components/core/p_series_core/P_Fifty_Five_T/ExtendedMemory';
import MasonaryCards from '../../components/core/p_series_core/P_Fifty_Five_T/MasonaryCards';

import { ImageCarouselData, FullSpecificationsData } from '../../data/smartphonedata/P55TData';
import HeroSmartPhoneCommon from '../../components/common/smartphone_common/HeroSmartPhoneCommon';

const PFiftyFiveT = () => {
  return (
    <>
      <main className="bg-[#EBE8E2]">
        <HeroSmartPhoneCommon
          headingText="P55T"
          bgDesktop="/smartphone/smartphonehero/p55t.webp"
          bgMobile="/smartphone/smartphonehero/p55t_mobile.webp"

          description={`Android 14 Go Edition | 6000 mAh battery | 6.6″ HD+ Punch-Hole Display`}
          gradient1="#EECF7F"
          gradient2="#D2B363"
          price="7,999"
          tagText="power series"
          purchaseLink="https://www.amazon.in/Android-6000mAh-Battery-Charger-Dynamic/dp/B0CZL2SSCY/ref=sr_1_1?crid=NVS34O1D7FGT&dib=eyJ2IjoiMSJ9.q_-E36ffwB4sN1mXaKZnYYsS2V3g4DOzRrGUB74B5mo1hZQQD9CR7M6thhdNYKItfz9g5-gNVv737rGiNg06k8GZJDIygl_bTo2taTEmbVWK0MJOo8nDxnFw-vnPUrcpiZ5pO0pZthLQp9A4nK8Lx9R4-fSl6gBC-2sxT_6YeawmmHi9Fr51_5V7JJH3pLmdYq1mp-iDcP_7iQ7puB0DJsizr_B_zKat-DbtC8DHxe_obfV-Csd0jlkDUa6JJH5CWJex_xmd3UsQQL9vJMFp-MG9KJOIZMGqH5VDFfRRg7g.lvFObLtL7TJPZxScGbIz0TdCCAmkW7oZGJdwaLau2UI&dib_tag=se&keywords=itel+P55t&qid=1726729471&s=electronics&sprefix=itel+p55t%2Celectronics%2C231&sr=1-1"
        />
        <StickyHeader
          bgColor={'#eecf7f'}
          dark={true}
          title={'P55T'}
          icon={'/smartphone/p55T/stickyicon.svg'}
          purchaseLink="https://www.amazon.in/Android-6000mAh-Battery-Charger-Dynamic/dp/B0CZL2SSCY/ref=sr_1_1?crid=NVS34O1D7FGT&dib=eyJ2IjoiMSJ9.q_-E36ffwB4sN1mXaKZnYYsS2V3g4DOzRrGUB74B5mo1hZQQD9CR7M6thhdNYKItfz9g5-gNVv737rGiNg06k8GZJDIygl_bTo2taTEmbVWK0MJOo8nDxnFw-vnPUrcpiZ5pO0pZthLQp9A4nK8Lx9R4-fSl6gBC-2sxT_6YeawmmHi9Fr51_5V7JJH3pLmdYq1mp-iDcP_7iQ7puB0DJsizr_B_zKat-DbtC8DHxe_obfV-Csd0jlkDUa6JJH5CWJex_xmd3UsQQL9vJMFp-MG9KJOIZMGqH5VDFfRRg7g.lvFObLtL7TJPZxScGbIz0TdCCAmkW7oZGJdwaLau2UI&dib_tag=se&keywords=itel+P55t&qid=1726729471&s=electronics&sprefix=itel+p55t%2Celectronics%2C231&sr=1-1" />
        <Overview />
        <Scroller />
        <LevelUpWithAndroid />
        <StayConnected />
        <StunningScreen />
        <GetNotifications />
        <CaptureEveryDetail />
        <BoosterEngine />
        <ExtendedMemory />
        <MasonaryCards />
        <div className="lg:px-0 py-[48px] lg:py-[120px] bg-[#EBE8E2]">
          <div className="lg:content bg-[#EBE8E2]  overflow-hidden">
            <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={true} />
          </div>
        </div>
        <FullSpecifications FullSpecificationsData={FullSpecificationsData} mode='' />
      </main>
    </>
  )
}

export default PFiftyFiveT;