import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from '../../components/core/p_series_core/P_Fifty_Five_5g/Home'
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

import { FullSpecificationsP55 } from '../../data/smartphonedata/P55Data'
const PFiftyFive5g = () => {
 
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  
    return (
      <>
      <Home/>
      <About />
      <Pvideo/>
      <Grayframe/>
      <Connectivity />
      <Powerful/>
      <Storage/>
   
      <Gaming />
      <Battery/>
      
      <Camera/>
     
      <Chatgpt/>
     
      <Warrenty/>
     <Mobile_grid/>
     <FullSpecifications FullSpecificationsData={FullSpecificationsP55} mode="dark"/>
      <Accessories/>
      <Model />


      <Grayframe />
      <Chatgpt />
      <Battery />
      <Storage />
      <Camera />
      <Warrenty />
      <Mobile_grid />

    </>
  )
}

export default PFiftyFive5g