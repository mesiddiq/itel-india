
import React from 'react'
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import Pvideo from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/PVideo';
import MemoryFusion from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/MemoryFusion';
import Grid from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/Grid';
import CoreProcessor from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/CoreProcessor';
import SuperCharge from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/SuperCharge'
import About from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/About'
import IdealCamera from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/IdealCamera'
import LargeStorage from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/LargeStorage'
import BatteryLab from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/BatteryLab';
import FullSpecifications from "../../components/common/FullSpecifications"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"
import { FullSpecificationsP55 } from '../../data/smartphonedata/P55PLUSData'
const PFiftyFivePlus = () => {
  return (
    <>
      <HeroSmartPhoneCommon
        bgDesktop={'/SmartPhone/P55+/Backgrounds/HeroBG.webp'}
        bgMobile={'/SmartPhone/P55+/Backgrounds/HeroBGMobile.webp'}
        description={'45W super Charging | 16GB* (8GB+8GB*) RAM & 256GB ROM | 50MP AI Camera '}
        headingText={'P55+'}
        price={'9,499'}
        tagText={'power series'}

      />
      <About />
      <SliderAnimationCommon
        bgColor={'#181818'}
        svgCode={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="24" viewBox="0 0 39 24" fill="none">
          <rect x="0.523438" y="0.347656" width="38.341" height="23.3053" rx="11.6527" fill="#3C482E" />
          <path d="M24.7183 11.8557L17.275 19.8307C17.1961 19.9149 17.092 19.9711 16.9783 19.991C16.8647 20.0108 16.7477 19.9931 16.645 19.9406C16.5423 19.888 16.4594 19.8035 16.409 19.6998C16.3585 19.5961 16.3431 19.4787 16.3652 19.3655L17.3395 14.4921L13.5095 13.054C13.4272 13.0232 13.3539 12.9725 13.296 12.9065C13.2381 12.8405 13.1974 12.7611 13.1777 12.6756C13.1579 12.59 13.1597 12.5008 13.1828 12.4161C13.2059 12.3314 13.2496 12.2537 13.3101 12.19L20.7534 4.21501C20.8323 4.13083 20.9364 4.07459 21.0501 4.05478C21.1637 4.03496 21.2807 4.05265 21.3834 4.10517C21.4861 4.15769 21.569 4.24219 21.6195 4.34592C21.6699 4.44965 21.6853 4.56699 21.6632 4.68022L20.6863 9.55892L24.5163 10.9951C24.5979 11.0261 24.6707 11.0767 24.7281 11.1424C24.7856 11.2082 24.826 11.2871 24.8457 11.3722C24.8654 11.4573 24.8638 11.5459 24.8411 11.6302C24.8185 11.7146 24.7754 11.792 24.7157 11.8557H24.7183Z" fill="#AEC68F" />

          <defs>
            <linearGradient id="paint0_linear_13925_27922" x1="11.9987" y1="19" x2="20.6906" y2="21.7957" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFCF92" />
              <stop offset="1" stopColor="#FFE8CB" />
            </linearGradient>
          </defs>
        </svg>}
        text1={'power series'}
        text2={'Intensively powerful'}
        textGradient1={'#AEC68F'}
        textGradient2={'#ffe8cb'}
      />
      <Pvideo />
      <SuperCharge />

      <BatteryLab />
      <MemoryFusion />
      <LargeStorage />
      <IdealCamera />

      <CoreProcessor />

      <Grid />
      <FullSpecifications FullSpecificationsData={FullSpecificationsP55} mode="dark" />

    </>
  )
}

export default PFiftyFivePlus