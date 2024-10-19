import React, { useEffect, useState } from 'react';

import '../../style.css'
import StickyHeader from '../../components/common/StickyHeader';
import FullSpecifications from '../../components/common/FullSpecifications';
import AmoledDisplay from '../../components/core/s_series_core/s_twenty_three_plus/AmoledDisplay';
import HeroBanner from '../../components/core/s_series_core/s_twenty_three_plus/HeroBanner';
import ImmersiveEntertainment from '../../components/core/s_series_core/s_twenty_three_plus/ImmersiveEntertainment';
import NewVision from '../../components/core/s_series_core/s_twenty_three_plus/NewVision';
import OverviewTwo from '../../components/core/s_series_core/s_twenty_three_plus/OverviewTwo';
import SharpFocus from '../../components/core/s_series_core/s_twenty_three_plus/SharpFocus';
import SnapFlawlessSelfie from '../../components/core/s_series_core/s_twenty_three_plus/SnapFlawlessSelfie';
import UltraHDMode from '../../components/core/s_series_core/s_twenty_three_plus/UltraHDMode';
import ThinDesign from '../../components/core/s_series_core/s_twenty_three_plus/ThinDesign';
import TimeLapse from '../../components/core/s_series_core/s_twenty_three_plus/TimeLapse';
import UnlockTouch from '../../components/core/s_series_core/s_twenty_three_plus/UnlockTouch';
import Video from '../../components/core/s_series_core/s_twenty_three_plus/Video';
import BlogCardsNew from '../../components/core/s_series_core/S_Twenty_Three_Plus/BlogCardsNew';
import PicturePerfect from '../../components/core/s_series_core/s_twenty_three_plus/PicturePerfect';
import { FullSpecificationsDataS23Plus } from '../../data/smartphonedata/S23PlusData';

const STwentyThreePlus = () => {

  return (
    <>
      <div>
        {/* <Navbar /> */}
        <HeroBanner />
        <StickyHeader title={"S23+"} purchaseLink={''} icon={'/s_twenty_three_plus/overview.png'} />
        <OverviewTwo />
        <Video />
        <AmoledDisplay />
        <NewVision />
        <ImmersiveEntertainment />
        <PicturePerfect />

        <SharpFocus />
        <TimeLapse />
        <SnapFlawlessSelfie />
        {/* Use https://swiperjs.com/react for the slider in the below component */}
        <UltraHDMode />
        <UnlockTouch />
        <ThinDesign />
        <BlogCardsNew />
        <FullSpecifications FullSpecificationsData={FullSpecificationsDataS23Plus} mode='dark' />
      </div>
    </>
  )
}
export default STwentyThreePlus;
