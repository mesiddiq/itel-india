import React, { useEffect, useState } from 'react';

import StickyHeader from '../../components/common/StickyHeader';
import FullSpecifications from '../../components/common/FullSpecifications';
import AmoledDisplay from '../../components/core/s_series_core/s_twenty_three_plus/AmoledDisplay';
// import BlogCards from '../../components/core/s_series_core/s_twenty_three_plus/BlogCards';
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
import BlogCardsNew from '../../components/core/s_series_core/S_Twenty_Three_Plus/BlogCardsNew';
const STwentyThreePlus = () => {
  const [scrollY, setScrollY] = useState(0);
  const FullSpecificationsData = [
    {
      id: 'general',
      label: 'General',
      data: [
        {
          label: 'Model',
          value: 'S23+',
        },
        {
          label: 'Colors',
          value: 'Elemental Blue & Lake Cyan',
        }
      ]
    },
    {
      id: 'display',
      label: 'Display Features',
      data: [
        {
          label: 'Display Size',
          value: '6.78" FHD+ AMOLED Curved Screen',
        },
        {
          label: 'Resolution',
          value: '1080*2400 Pixels',
        },
        {
          label: 'Resolution Type',
          value: 'AMOLED',
        },
        {
          label: 'Dimension',
          value: '164.4 x 75.1 x 7.9mm',
        },
        {
          label: 'Technology',
          value: 'G+F, Incell',
        },
        {
          label: 'Refresh Rate',
          value: '60Hz',
        },
        {
          label: 'Touch Sampling Rate',
          value: '240 Hz',
        },
        {
          label: 'Pixel Density',
          value: '388 PPI',
        },
      ]
    },
    {
      id: 'os',
      label: 'OS & Processor',
      data: [
        {
          label: 'Operating System',
          value: 'Android 13',
        },
        {
          label: 'Chipset',
          value: 'Unisoc Tiger T616',
        },
        {
          label: 'Processor Core',
          value: 'Octacore',
        },
      ]
    },
    {
      id: 'camera',
      label: 'Camera',
      data: [
        {
          label: 'Rear Camera',
          value: '50MP AI Dual Rear Cam',
        },
        {
          label: 'Rear Flash',
          value: 'Yes',
        },
        {
          label: 'Front Camera',
          value: '32MP',
        },
        {
          label: 'Front Flash',
          value: 'Yes',
        },
      ]
    },
    {
      id: 'battery',
      label: 'Battery',
      data: [
        {
          label: 'Battery Capacity',
          value: '5000mAh',
        },
        {
          label: 'Battery Type',
          value: 'Li-Polymer',
        },
        {
          label: 'Fast Charging',
          value: '18W',
        },
        {
          label: 'USB',
          value: 'Type-C',
        },
        {
          label: 'Standby',
          value: '32 Days',
        },
        {
          label: 'Talktime',
          value: '7.5 Hours',
        },
        {
          label: 'Media Playback Time',
          value: '112 Hours',
        },
      ]
    },
    {
      id: 'memory',
      label: 'Memory & Storage',
      data: [
        {
          label: 'RAM',
          value: '8GB+8GB*',
        },
        {
          label: 'ROM',
          value: '256GB',
        },
        {
          label: 'User Memory',
          value: '238GB',
        },
        {
          label: 'Expandable',
          value: '1TB',
        },
      ]
    },
    {
      id: 'connectivity',
      label: 'Connectivity',
      data: [
        {
          label: 'Network Type',
          value: '4G',
        },
        {
          label: 'GSM',
          value: '2G:B3/B5/B8',
        },
        {
          label: 'EDGE',
          value: 'Support Download',
        },
        {
          label: 'WCDMA',
          value: '3G:B1/B5/B8',
        },
        {
          label: 'LTE',
          value: '4G:B1/B3/B5/B8/B40/B38/B41(120M)',
        },
        {
          label: 'SIM Slot',
          value: 'Slot1 & Slot2-Nano',
        },
        {
          label: 'Dual Active/Standby',
          value: 'Dual Active',
        },
        {
          label: 'Bluetooth Support',
          value: 'Yes',
        },
        {
          label: 'Wi-Fi',
          value: 'Yes',
        },
        {
          label: 'GPS',
          value: 'Yes',
        },
        {
          label: 'USB Connectivity',
          value: 'Type-C',
        },
      ]
    },
    {
      id: 'additional',
      label: 'Additional',
      data: [
        {
          label: 'Earphone Jack',
          value: 'Type-C interface',
        },
        {
          label: 'Thickness',
          value: '7.9mm',
        },
        {
          label: 'Sensors',
          value: 'In Display Fingerprint | Face Unlock | G Sensor',
        },
        {
          label: 'Accessories',
          value: '18W Adapter | USB Cable | Protective Cover | Screen Film Protection',
        },
      ]
    }
  ]

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
        {/* <BlogCards scrollY={scrollY} /> */}
        <BlogCardsNew scrollY={scrollY} />
        <FullSpecifications FullSpecificationsData={FullSpecificationsData} mode='dark' />
      </main>
    </>
  )
}
export default STwentyThreePlus;
