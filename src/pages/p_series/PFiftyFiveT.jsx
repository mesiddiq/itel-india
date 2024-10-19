import React, { useEffect, useState } from 'react';

import LevelUpWithAndroid from '../../components/core/p_series_core/P_Fifty_Five_T/LevelUpWithAndroid';
import StayConnected from '../../components/core/p_series_core/P_Fifty_Five_T/StayConnected';
import StunningScreen from '../../components/core/p_series_core/P_Fifty_Five_T/StunningScreen';
import MasonaryCards from '../../components/core/p_series_core/P_Fifty_Five_T/MasonaryCards';

const PFiftyFiveT = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(parseInt(window.scrollY));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <main className="bg-[#EBE8E2]">
        <LevelUpWithAndroid scrollY={scrollY} />
        <StayConnected scrollY={scrollY} />
        <StunningScreen scrollY={scrollY} />
        <MasonaryCards scrollY={scrollY} />
      </main>
    </>
  )
}

export default PFiftyFiveT;