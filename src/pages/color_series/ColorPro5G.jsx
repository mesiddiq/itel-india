import React, { useEffect, useState } from 'react';

import '../../style.css'
import StickyHeader from '../../components/common/StickyHeader';
import FullSpecifications from '../../components/common/FullSpecifications';
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import HeroBanner from '../../components/core/color_series_core/color_pro_5g/HeroBanner';
import BeUnstoppable from '../../components/core/color_series_core/color_pro_5g/BeUnstoppable';
import FeaturesGrid from '../../components/core/color_series_core/color_pro_5g/FeaturesGrid';
import EnhanceYourStyle from '../../components/core/color_series_core/color_pro_5g/EnhanceYourStyle';
import TransformYourPhone from '../../components/core/color_series_core/color_pro_5g/TransformYourPhone';
import PhoneCarousel from '../../components/core/color_series_core/color_pro_5g/PhoneCarousel';
import Revolution from '../../components/core/color_series_core/color_pro_5g/Revolution';
import ElevateUnparalled from '../../components/core/color_series_core/color_pro_5g/ElevateUnparalled';
import AIPoweredCamera from '../../components/core/color_series_core/color_pro_5g/AIPoweredCamera';
import UnlockBoundless from '../../components/core/color_series_core/color_pro_5g/UnlockBoundless';
import CaptureMore from '../../components/core/color_series_core/color_pro_5g/CaptureMore';
import Carousel from '../../components/core/color_series_core/color_pro_5g/Carousel';
import NextGenPerformance from '../../components/core/color_series_core/color_pro_5g/NextGenPerformance';
import EnjoyOptimalGaming from '../../components/core/color_series_core/color_pro_5g/EnjoyOptimalGaming';
import UltraSmooth from '../../components/core/color_series_core/color_pro_5g/UltraSmooth';
import PowerThrough from '../../components/core/color_series_core/color_pro_5g/PowerThrough';
import { ImageCarouselData, FullSpecificationsData } from '../../data/smartphonedata/ColorPro5GData';

const ColorPro5G = () => {
	return (
    <>
    	<HeroBanner />
    	<StickyHeader purchaseLink={"https://www.amazon.in/dp/B0DHVX144Z?th=1"} icon={'/smartphone/color-pro-5g/StickyHeader/image.png'} iconSize={'h-[44px]'} bgColor={'radial-gradient(56.49% 350.52% at 50% 0%, #201853 0%, #12052D 100%)'} />
    	<BeUnstoppable />
    	<FeaturesGrid />
    	<EnhanceYourStyle />
    	<TransformYourPhone />
    	<PhoneCarousel />
    	<Revolution />
    	<ElevateUnparalled />
    	<AIPoweredCamera />
    	<UnlockBoundless />
    	<CaptureMore />
    	<Carousel />
    	<NextGenPerformance />
    	<EnjoyOptimalGaming />
    	<UltraSmooth />
    	<PowerThrough />
    	<ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false}/>
      <FullSpecifications FullSpecificationsData={FullSpecificationsData} mode='dark' />
    </>
  )
}

export default ColorPro5G;