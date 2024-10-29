import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import About from '../../components/core/p_series_core/P_Fifty_Five_5g/About'
import Grayframe from '../../components/core/p_series_core/P_Fifty_Five_5g/Grayframe'
import Powerful from '../../components/core/p_series_core/P_Fifty_Five_5g/Powerful';
import Accessories from '../../components/common/smartphone_common/Accessories'
import Model from '../../components/common/smartphone_common/Model';
import Pvideo from '../../components/core/p_series_core/P_Fifty_Five_5g/Pvideo';
import Connectivity from '../../components/core/p_series_core/P_Fifty_Five_5g/Connectivity'
import Storage from '../../components/core/p_series_core/P_Fifty_Five_5g/Storage'
import Gaming from '../../components/core/p_series_core/P_Fifty_Five_5g/Gaming'
import Chatgpt from '../../components/core/p_series_core/P_Fifty_Five_5g/Chatgpt'
import Warrenty from '../../components/core/p_series_core/P_Fifty_Five_5g/Warrenty'
import Mobile_grid from '../../components/core/p_series_core/P_Fifty_Five_5g/Mobilegrid'
import Battery from '../../components/core/p_series_core/P_Fifty_Five_5g/Battery'
import Camera from '../../components/core/p_series_core/P_Fifty_Five_5g/Camera'
import FullSpecifications from "../../components/common/FullSpecifications"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"
import { FullSpecificationsP55 } from '../../data/smartphonedata/P55Data'

const PFiftyFive = () => {
  return (
    <>
      <HeroSmartPhoneCommon
        bgDesktop={'/SmartPhone/P55fiveg/Backgrounds/Hero.webp'}
        bgMobile={'/SmartPhone/P55fiveg/Backgrounds/Heromobile.webp'}
        description={'5G with NRCA | MediaTek Dimensity 6080 | 12GB* (6GB + 6Gb*) RAM + 128GB ROM'}
        headingText={'P55 5G'}
        price={'9,999'}
        tagText={'power series'}

      />
      <About />
      <SliderAnimationCommon
        bgColor={'#000032'}
        svgCode={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" fill="none">
          <rect x="0.841309" y="0.347656" width="38.341" height="23.3053" rx="11.6527" fill="#0A0A5A" />
          <path d="M25.7183 11.8577L18.275 19.8327C18.1961 19.9169 18.092 19.9731 17.9783 19.9929C17.8647 20.0127 17.7477 19.995 17.645 19.9425C17.5423 19.89 17.4594 19.8055 17.409 19.7018C17.3585 19.598 17.3431 19.4807 17.3652 19.3675L18.3395 14.4941L14.5095 13.0559C14.4272 13.0252 14.3539 12.9745 14.296 12.9085C14.2381 12.8424 14.1974 12.7631 14.1777 12.6775C14.1579 12.5919 14.1597 12.5028 14.1828 12.4181C14.2059 12.3333 14.2496 12.2557 14.3101 12.192L21.7534 4.21696C21.8323 4.13278 21.9364 4.07654 22.0501 4.05673C22.1637 4.03692 22.2807 4.0546 22.3834 4.10712C22.4861 4.15964 22.569 4.24414 22.6195 4.34787C22.6699 4.45161 22.6853 4.56894 22.6632 4.68217L21.6863 9.56088L25.5163 10.997C25.5979 11.028 25.6707 11.0786 25.7281 11.1444C25.7856 11.2102 25.826 11.2891 25.8457 11.3742C25.8654 11.4592 25.8638 11.5478 25.8411 11.6322C25.8185 11.7165 25.7754 11.794 25.7157 11.8577H25.7183Z" fill="#4682E6" />

          <path d="M26.0927 12C26.0943 12.2052 26.032 12.4058 25.9143 12.5739C25.7967 12.742 25.6296 12.8693 25.4363 12.9381L21.4701 14.3808L20.0284 18.3476C19.9574 18.5391 19.8294 18.7042 19.6618 18.8209C19.4941 18.9375 19.2948 19 19.0906 19C18.8864 19 18.6871 18.9375 18.5195 18.8209C18.3519 18.7042 18.2239 18.5391 18.1529 18.3476L16.7112 14.3802L12.745 12.9381C12.5535 12.867 12.3884 12.739 12.2719 12.5713C12.1553 12.4036 12.0928 12.2043 12.0928 12C12.0928 11.7957 12.1553 11.5964 12.2719 11.4287C12.3884 11.261 12.5535 11.133 12.745 11.0619L16.7112 9.61981L18.1529 5.65241C18.2239 5.46092 18.3519 5.29576 18.5195 5.17914C18.6871 5.06251 18.8864 5 19.0906 5C19.2948 5 19.4941 5.06251 19.6618 5.17914C19.8294 5.29576 19.9574 5.46092 20.0284 5.65241L21.4707 9.61981L25.4363 11.0619C25.6296 11.1307 25.7967 11.258 25.9143 11.4261C26.032 11.5942 26.0943 11.7948 26.0927 12Z" fill="url(#paint0_linear_13925_27922)" />
          <defs>
            <linearGradient id="paint0_linear_13925_27922" x1="11.9987" y1="19" x2="20.6906" y2="21.7957" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFCF92" />
              <stop offset="1" stopColor="#FFE8CB" />
            </linearGradient>
          </defs>
        </svg>}
        text1={'power series'}
        text2={'Intensively powerful'}
        textGradient1={'#4682E6'}
        textGradient2={'#ffe8cb'}
      />
      <Pvideo />
      <Grayframe />
      <Connectivity />
      <Powerful />
      <Storage />

      <Gaming />
      <Battery />

      <Camera />

      <Chatgpt />

      <Warrenty />
      <Mobile_grid />
      <FullSpecifications FullSpecificationsData={FullSpecificationsP55} mode="dark" />

    </>

  )
}

export default PFiftyFive