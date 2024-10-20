
import React from 'react'
import Pvideo from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/PVideo';
import MemoryFusion from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/MemoryFusion';
import Grid from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/Grid';
import CoreProcessor from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/CoreProcessor';
import SuperCharge from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/SuperCharge'
import About from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/About'
import IdealCamera from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/IdealCamera'
import LargeStorage from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/LargeStorage'
import BatteryLab from '../../components/core/p_series_core/P_Fifty_Five_Plus.jsx/BatteryLab';
const PFiftyFivePlus = () => {
  return (
    <>
    <About/>
   <Pvideo/>
   <CoreProcessor/>
    <BatteryLab/>
    <MemoryFusion/>
    <LargeStorage/>
    <IdealCamera />
   
    <SuperCharge/>
  
    <Grid />
    </>
  )
}

export default PFiftyFivePlus