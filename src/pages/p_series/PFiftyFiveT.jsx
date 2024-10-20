import React, { useEffect, useState } from 'react';

import FullSpecifications from '../../components/common/FullSpecifications';
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import LevelUpWithAndroid from '../../components/core/p_series_core/P_Fifty_Five_T/LevelUpWithAndroid';
import StayConnected from '../../components/core/p_series_core/P_Fifty_Five_T/StayConnected';
import StunningScreen from '../../components/core/p_series_core/P_Fifty_Five_T/StunningScreen';
import GetNotifications from '../../components/core/p_series_core/P_Fifty_Five_T/GetNotifications';
import CaptureEveryDetail from '../../components/core/p_series_core/P_Fifty_Five_T/CaptureEveryDetail';
import BoosterEngine from '../../components/core/p_series_core/P_Fifty_Five_T/BoosterEngine';
import ExtendedMemory from '../../components/core/p_series_core/P_Fifty_Five_T/ExtendedMemory';
import MasonaryCards from '../../components/core/p_series_core/P_Fifty_Five_T/MasonaryCards';

import { ImageCarouselData, FullSpecificationsData } from '../../data/smartphonedata/P55TData';

const PFiftyFiveT = () => {
  return (
    <>
      <main className="bg-[#EBE8E2]">
        <div className='h-[200px]'></div>
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
            <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={true}/>
          </div>
        </div>
        <FullSpecifications FullSpecificationsData={FullSpecificationsData} mode='' />
      </main>
    </>
  )
}

export default PFiftyFiveT;