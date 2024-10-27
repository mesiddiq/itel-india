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
          purchaseLink=""
          description={`Android 14 Go Edition | 6000 mAh battery | 6.6″ HD+ Punch-Hole Display`}
          gradient1="#EECF7F"
          gradient2="#D2B363"
          price="7,999"
          tagText="power series"
        />
        <StickyHeader bgColor={'#eecf7f'} textColor={true} title={'P55T'} />
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