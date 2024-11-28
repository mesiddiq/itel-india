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
import { FullSpecificationsP555g } from '../../data/smartphonedata/P555gData'
import { ImageCarouselData } from '../../data/smartphonedata/P555gImageCarouselData';
import StickyHeader from '../../components/common/StickyHeader';
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import NearestStore from '../../components/core/p_series_core/P_Fifty_Five_5g/NearestStore';
import { Helmet } from 'react-helmet'
const PFiftyFive = () => {
  return (
    <>
     <Helmet>
                <title>P55 5g</title>
                <meta name="description" content={` The powerful itel P55 5G is one of the best phones under ₹12,000, featuring a superfast MediaTek Dimensity 6080 processor, a stunning 6.6" HD+ IPS display, and a robust 5000mAh battery with 18W fast charging. This chic 5G smartphone offers up to 12GB* (6GB+6GB*) RAM, 128GB storage, and a high-camera mobile setup with a 50MP AI Dual Rear and 8MP Selfie Camera. With enhanced security, an elegant design, and a Type-C charger, the itel P55 5G stands out among the latest itel smartphones.`} />
                <meta name="keywords" content="itel P55 5g,itel P55 +,itel P55 5g smartphone,itel P55 5g mobile price,itel P55 5g phone,itel P55 Plus,itel P55 5g mobile,itel P55 mobile 5g" />
            </Helmet>
      <HeroSmartPhoneCommon
       headingText='P55 5G'
        bgDesktop='/smartphone/smartphonehero/p555g.webp'
        bgMobile='/smartphone/smartphonehero/p555g_mobile.webp'
        description='5G with NRCA | MediaTek Dimensity 6080 | 12GB* (6GB + 6Gb*) RAM + 128GB ROM'
       gradient1="#FFFFFF"
          gradient2="#FFFFFF"
        price={'9,999'}
        tagText={'power-series'}
         purchaseLink="https://www.amazon.in/dp/B0CHJN2HNZ"
      />
       <StickyHeader bgColor={'#013EA3'} textColor={true} title={'P55 5g'} purchaseLink="https://www.amazon.in/dp/B0CHJN2HNZ" />
      <About />
      <SliderAnimationCommon
        bgColor={'#000032'}
        svgCode={<svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 1973340116">
          <rect x="0.523438" y="0.347656" width="38.341" height="23.3053" rx="11.6527" fill="#0A0A5A"/>
          <path id="Vector" d="M24.7183 11.8557L17.275 19.8307C17.1961 19.9149 17.092 19.9711 16.9783 19.991C16.8647 20.0108 16.7477 19.9931 16.645 19.9406C16.5423 19.888 16.4594 19.8035 16.409 19.6998C16.3585 19.5961 16.3431 19.4787 16.3652 19.3655L17.3395 14.4921L13.5095 13.054C13.4272 13.0232 13.3539 12.9725 13.296 12.9065C13.2381 12.8405 13.1974 12.7611 13.1777 12.6756C13.1579 12.59 13.1597 12.5008 13.1828 12.4161C13.2059 12.3314 13.2496 12.2537 13.3101 12.19L20.7534 4.21501C20.8323 4.13083 20.9364 4.07459 21.0501 4.05478C21.1637 4.03496 21.2807 4.05265 21.3834 4.10517C21.4861 4.15769 21.569 4.24219 21.6195 4.34592C21.6699 4.44965 21.6853 4.56699 21.6632 4.68022L20.6863 9.55892L24.5163 10.9951C24.5979 11.0261 24.6707 11.0767 24.7281 11.1424C24.7856 11.2082 24.826 11.2871 24.8457 11.3722C24.8654 11.4573 24.8638 11.5459 24.8411 11.6302C24.8185 11.7146 24.7754 11.792 24.7157 11.8557H24.7183Z" fill="#4682E6"/>
          </g>
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
        textGradient2={'#4682E6'}
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
      <div className="lg:px-0 py-[48px] lg:py-[120px] bg-[#181818]">
          <div className="lg:content bg-[#181818]  overflow-hidden">
            <ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={true} />
          </div>
        </div>
      <FullSpecifications FullSpecificationsData={FullSpecificationsP555g} mode="dark" />

    </>

  )
}

export default PFiftyFive