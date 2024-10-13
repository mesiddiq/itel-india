import React from 'react'

import Navbar from '../../components/common/Navbar'
import HeroBanner from '../../components/core/s_series_core/s_twenty_three_plus/HeroBanner'
import Overview from '../../components/core/s_series_core/s_twenty_three_plus/Overview'
import OverviewTwo from '../../components/core/s_series_core/s_twenty_three_plus/OverviewTwo'
import Video from '../../components/core/s_series_core/s_twenty_three_plus/Video'
import AmoledDisplay from '../../components/core/s_series_core/s_twenty_three_plus/AmoledDisplay'
import NewVision from '../../components/core/s_series_core/s_twenty_three_plus/NewVision'
import ImmersiveEntertainment from '../../components/core/s_series_core/s_twenty_three_plus/ImmersiveEntertainment'
import PicturePerfect from '../../components/core/s_series_core/s_twenty_three_plus/PicturePerfect'
import SnapFlawlessSelfie from '../../components/core/s_series_core/s_twenty_three_plus/SnapFlawlessSelfie'
import UnlockTouch from '../../components/core/s_series_core/s_twenty_three_plus/UnlockTouch'
import ThinDesign from '../../components/core/s_series_core/s_twenty_three_plus/ThinDesign'
import BlogCards from '../../components/core/s_series_core/s_twenty_three_plus/BlogCards'
import OtherCoolGears from '../../components/common/smartphone_common/OtherCoolGears'
import StayInTheLoop from '../../components/common/smartphone_common/StayInTheLoop'

const STwentyThreePlus = () => {
  return (
    <>
      <link rel="stylesheet" href="/s_twenty_three_plus/style.css" />
      <main className="bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] px-5 md:px-0">
        <Navbar />
        <HeroBanner />
        <Overview />
        <OverviewTwo />
        <Video />
        <AmoledDisplay />
        <NewVision />
        <ImmersiveEntertainment />
        <PicturePerfect />
        <SnapFlawlessSelfie />
        <UnlockTouch />
        <ThinDesign />
        <BlogCards />
        <OtherCoolGears />
        <StayInTheLoop />
      </main>
    </>
  )
}
export default STwentyThreePlus;
