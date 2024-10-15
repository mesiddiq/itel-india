import React, { useState, useEffect } from 'react';

import Navbar from '../../components/common/Navbar'
import HeroBanner from '../../components/core/s_series_core/s_twenty_three_plus/HeroBanner'
import Overview from '../../components/core/s_series_core/s_twenty_three_plus/Overview'
import OverviewTwo from '../../components/core/s_series_core/s_twenty_three_plus/OverviewTwo'
import Video from '../../components/core/s_series_core/s_twenty_three_plus/Video'
import AmoledDisplay from '../../components/core/s_series_core/s_twenty_three_plus/AmoledDisplay'
import NewVision from '../../components/core/s_series_core/s_twenty_three_plus/NewVision'
import ImmersiveEntertainment from '../../components/core/s_series_core/s_twenty_three_plus/ImmersiveEntertainment'
import PicturePerfect from '../../components/core/s_series_core/s_twenty_three_plus/PicturePerfect'
import SharpFocus from '../../components/core/s_series_core/s_twenty_three_plus/SharpFocus'
import TimeLapse from '../../components/core/s_series_core/s_twenty_three_plus/TimeLapse'
import SnapFlawlessSelfie from '../../components/core/s_series_core/s_twenty_three_plus/SnapFlawlessSelfie'
import UnlockTouch from '../../components/core/s_series_core/s_twenty_three_plus/UnlockTouch'
import ThinDesign from '../../components/core/s_series_core/s_twenty_three_plus/ThinDesign'
import BlogCards from '../../components/core/s_series_core/s_twenty_three_plus/BlogCards'
import OtherCoolGears from '../../components/common/smartphone_common/OtherCoolGears'
import StayInTheLoop from '../../components/common/smartphone_common/StayInTheLoop'

const STwentyThreePlus = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(parseInt(window.scrollY));
    console.log("MainWindowscrollY", parseInt(window.scrollY));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/s_twenty_three_plus/style.css" />
      <main className="bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] px-5 md:px-0">
        <Navbar />
        <HeroBanner scrollY={scrollY} />
        <Overview scrollY={scrollY} />
        <OverviewTwo scrollY={scrollY} />
        <Video scrollY={scrollY} />
        <AmoledDisplay scrollY={scrollY} />
        <NewVision scrollY={scrollY} />
        <ImmersiveEntertainment scrollY={scrollY} />
        <PicturePerfect scrollY={scrollY} />
        <SharpFocus scrollY={scrollY} />
        <TimeLapse scrollY={scrollY} />
        <SnapFlawlessSelfie scrollY={scrollY} />
        <UnlockTouch scrollY={scrollY} />
        <ThinDesign scrollY={scrollY} />
        <BlogCards scrollY={scrollY} />
        <OtherCoolGears />
        <StayInTheLoop />
      </main>
    </>
  )
}
export default STwentyThreePlus;
