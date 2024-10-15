import React, { useEffect, useState } from 'react';

import StickyHeader from '../../components/common/StickyHeader';
import AmoledDisplay from '../../components/core/s_series_core/s_twenty_three_plus/AmoledDisplay';
import BlogCards from '../../components/core/s_series_core/s_twenty_three_plus/BlogCards';
import HeroBanner from '../../components/core/s_series_core/s_twenty_three_plus/HeroBanner';
import ImmersiveEntertainment from '../../components/core/s_series_core/s_twenty_three_plus/ImmersiveEntertainment';
import NewVision from '../../components/core/s_series_core/s_twenty_three_plus/NewVision';
import OverviewTwo from '../../components/core/s_series_core/s_twenty_three_plus/OverviewTwo';
import PicturePerfect from '../../components/core/s_series_core/s_twenty_three_plus/PicturePerfect';
import SharpFocus from '../../components/core/s_series_core/s_twenty_three_plus/SharpFocus';
import SnapFlawlessSelfie from '../../components/core/s_series_core/s_twenty_three_plus/SnapFlawlessSelfie';
import ThinDesign from '../../components/core/s_series_core/s_twenty_three_plus/ThinDesign';
import TimeLapse from '../../components/core/s_series_core/s_twenty_three_plus/TimeLapse';
import UnlockTouch from '../../components/core/s_series_core/s_twenty_three_plus/UnlockTouch';
import Video from '../../components/core/s_series_core/s_twenty_three_plus/Video';
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
      <main className="bg-[#111111]">
        {/* <Navbar /> */}
        <HeroBanner scrollY={scrollY} />
        <StickyHeader title={"S23+"} icon={'/s_twenty_three_plus/overview.png'} />
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
      </main>
    </>
  )
}
export default STwentyThreePlus;
