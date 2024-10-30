import React, { useEffect, useState } from 'react';

import '../../style.css'
import StickyHeader from '../../components/common/StickyHeader';
import FullSpecifications from '../../components/common/FullSpecifications';
import AmoledDisplay from '../../components/core/s_series_core/s_twenty_three_plus/AmoledDisplay';
import HeroBanner from '../../components/core/s_series_core/s_twenty_three_plus/HeroBanner';
import ImmersiveEntertainment from '../../components/core/s_series_core/s_twenty_three_plus/ImmersiveEntertainment';
import NewVision from '../../components/core/s_series_core/s_twenty_three_plus/NewVision';
import Overview from '../../components/core/s_series_core/s_twenty_three_plus/Overview';
import SharpFocus from '../../components/core/s_series_core/s_twenty_three_plus/SharpFocus';
import SnapFlawlessSelfie from '../../components/core/s_series_core/s_twenty_three_plus/SnapFlawlessSelfie';
import UltraHDMode from '../../components/core/s_series_core/s_twenty_three_plus/UltraHDMode';
import ThinDesign from '../../components/core/s_series_core/s_twenty_three_plus/ThinDesign';
import TimeLapse from '../../components/core/s_series_core/s_twenty_three_plus/TimeLapse';
import UnlockTouch from '../../components/core/s_series_core/s_twenty_three_plus/UnlockTouch';
import Video from '../../components/core/s_series_core/s_twenty_three_plus/Video';
import BlogCards from '../../components/core/s_series_core/S_Twenty_Three_Plus/BlogCards';
import PicturePerfect from '../../components/core/s_series_core/s_twenty_three_plus/PicturePerfect';
import HeroSmartPhoneCommon from '../../components/common/smartphone_common/HeroSmartPhoneCommon';
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import { ImageCarouselData, FullSpecificationsData } from '../../data/smartphonedata/S23PlusData';

const STwentyThreePlus = () => {
  return (
    <>
      <div>
        <HeroSmartPhoneCommon
          tagText="super series"
          headingText="s23+"
          price={"12,999"}
          description={'3D Curved FHD+ AMOLED Display | In-Display Fingerprint| 50MP AI Dual ReaR Camera'}
          bgDesktop={'/smartphone/smartphonehero/s23p.webp'}
          bgMobile={'/smartphone/smartphonehero/s23p_mobile.webp'}
          gradient1='#ca86ff'
          gradient2='#85e2fd'
        />
        <StickyHeader title={"S23+"} purchaseLink={''} icon={'/smartphone/S23+/Backgrounds/OverviewIcon.webp'} />
        <Overview />
        <Video />
        <AmoledDisplay />
        <NewVision />
        <ImmersiveEntertainment />
        <PicturePerfect />
        <SharpFocus />
        <TimeLapse />
        <SnapFlawlessSelfie />
        <UltraHDMode />
        <UnlockTouch />
        <ThinDesign />
        <BlogCards />
        <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false} />
        <FullSpecifications FullSpecificationsData={FullSpecificationsData} mode='dark' />
      </div>
    </>
  )
}
export default STwentyThreePlus;
