import React, { useEffect, useState } from 'react';

import LevelUpWithAndroid from '../../components/core/p_series_core/P_Fifty_Five_T/LevelUpWithAndroid';
import StayConnected from '../../components/core/p_series_core/P_Fifty_Five_T/StayConnected';
import StunningScreen from '../../components/core/p_series_core/P_Fifty_Five_T/StunningScreen';
import GetNotifications from '../../components/core/p_series_core/P_Fifty_Five_T/GetNotifications';
import CaptureEveryDetail from '../../components/core/p_series_core/P_Fifty_Five_T/CaptureEveryDetail';
import BoosterEngine from '../../components/core/p_series_core/P_Fifty_Five_T/BoosterEngine';
import MasonaryCards from '../../components/core/p_series_core/P_Fifty_Five_T/MasonaryCards';

const PFiftyFiveT = () => {
  return (
    <>
      <main className="bg-[#EBE8E2]">
        <LevelUpWithAndroid />
        <StayConnected />
        <StunningScreen />
        <GetNotifications />
        <CaptureEveryDetail />
        <BoosterEngine />
        <MasonaryCards />
      </main>
    </>
  )
}

export default PFiftyFiveT;