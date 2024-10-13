import React from 'react'
import Home from '../../components/core/p_series_core/P_Fifty_Five.jsx/Home'
import About from '../../components/core/p_series_core/P_Fifty_Five.jsx/About'
import Grayframe from '../../components/core/p_series_core/P_Fifty_Five.jsx/Grayframe'
import Powerful from '../../components/core/p_series_core/P_Fifty_Five.jsx/Powerful';
import Accessories from '../../components/common/smartphone_common/Accessories'
import Model from '../../components/common/smartphone_common/Model';
import Connectivity from '../../components/core/p_series_core/P_Fifty_Five.jsx/Connectivity'
import Power from '../../components/core/p_series_core/P_Fifty_Five.jsx/Power'
import Storage from '../../components/core/p_series_core/P_Fifty_Five.jsx/Storage'
import Gaming from '../../components/core/p_series_core/P_Fifty_Five.jsx/Gaming'
import Chatgpt from '../../components/core/p_series_core/P_Fifty_Five.jsx/Chatgpt'
import Warrenty from '../../components/core/p_series_core/P_Fifty_Five.jsx/Warrenty'
import Mobile_grid from '../../components/core/p_series_core/P_Fifty_Five.jsx/Mobilegrid'
const PFiftyFive = () => {
    return (
      <>
      <Home/>
      <About />
  
     
      <Connectivity />
      <Storage/>
      <Powerful/>
      <Gaming />
      
      <Grayframe/>
      <Chatgpt/>
      <Warrenty/>
      <Power />
     <Mobile_grid/>
     
      <Accessories/>
      <Model />

      </>
    )
}

export default PFiftyFive