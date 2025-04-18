import React, { useEffect, useState } from 'react';

import '../../style.css'
import StickyHeader from '../../components/common/StickyHeader';
import FullSpecifications from '../../components/common/FullSpecifications';
import AmoledDisplay from '../../components/core/s_series_core/s_twenty_three_plus/AmoledDisplay';
import HeroBanner from '../../components/core/s_series_core/s_twenty_three_plus/HeroBanner';
import ImmersiveEntertainment from '../../components/core/s_series_core/s_twenty_three_plus/ImmersiveEntertainment';
import NewVision from '../../components/core/s_series_core/s_twenty_three_plus/NewVision';
import Overview from '../../components/core/s_series_core/s_twenty_three_plus/Overview';
// import SharpFocus from '../../components/core/s_series_core/s_twenty_three_plus/SharpFocus';
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
import SharpFoucsNew from '../../components/core/s_series_core/S_Twenty_Three_Plus/SharpFoucsNew';
import { Helmet } from 'react-helmet'
const STwentyThreePlus = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Discover the itel S23+: Stunning 3D Curved Display | itel India</title>
          <meta name="description" content={`The itel S23+ combines stunning specifications with a remarkable 3D curved display. Get ready for an unparalleled smartphone experience with itel.`} />
          <meta name="keywords" content="itel S24,itel s23+,itel rs4,itel S24 price,itel s23+ price,about itel s24,itel s23 plus,itel s24 mobile,itel s24 smartphone,s23+ itel" />
        </Helmet>
        <HeroSmartPhoneCommon
          tagText="super series"
          headingText="s23+"
          price={"12,999"}
          description={'3D Curved FHD+ AMOLED Display | In-Display Fingerprint| 50MP AI Dual ReaR Camera'}
          bgDesktop={'/smartphone/smartphonehero/s23p.webp'}
          bgMobile={'/smartphone/smartphonehero/s23p_mobile.webp'}
          gradient1='#ca86ff'
          gradient2='#85e2fd'
          purchaseLink={'https://www.amazon.in/dp/B0CHJN4R28'}
        />
        <StickyHeader title={"S23+"} purchaseLink={'https://www.amazon.in/dp/B0CHJN4R28'} icon={'/smartphone/S23+/Backgrounds/OverviewIcon.webp'} />
        <Overview />
        <Video />
        <AmoledDisplay />
        <NewVision />
        <ImmersiveEntertainment />
        <PicturePerfect />
        {/* <SharpFocus /> */}
        <SharpFoucsNew />
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
