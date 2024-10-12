import React from 'react'

import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import HeroBanner from '../../components/core/s_series_core/s_twenty_three_plus/HeroBanner'
import Overview from '../../components/core/s_series_core/s_twenty_three_plus/Overview'
import OverviewTwo from '../../components/core/s_series_core/s_twenty_three_plus/OverviewTwo'
import Video from '../../components/core/s_series_core/s_twenty_three_plus/Video'
import AmoledDisplay from '../../components/core/s_series_core/s_twenty_three_plus/AmoledDisplay'
import NewVision from '../../components/core/s_series_core/s_twenty_three_plus/NewVision'
import ImmersiveEntertainment from '../../components/core/s_series_core/s_twenty_three_plus/ImmersiveEntertainment'

const STwentyThreePlus = () => {
  return (
    <main className="bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] px-5 md:px-0">
      <Navbar />
      <HeroBanner />
      <Overview />
      <OverviewTwo />
      <Video />
      <AmoledDisplay />
      <NewVision />
      <ImmersiveEntertainment />
      <Footer />
    </main>
  )
}
export default STwentyThreePlus;