import React from 'react'
import HeroSection from '../../components/core/static_pages_core/Ewaste/HeroSection'
import Topbody from '../../components/core/static_pages_core/Ewaste/Topbody'
import Droppoints from '../../components/core/static_pages_core/Ewaste/Droppoints'
import Informations from '../../components/core/static_pages_core/Ewaste/Informations'
import DoDont from '../../components/core/static_pages_core/Ewaste/Do&Dont'
import Endinformation from '../../components/core/static_pages_core/Ewaste/Endinformation'
const EWaste = () => {
  return (
    <div className=' lg:space-y-[120px] lg:mb-[120px] mb-[60px] space-y-[60px]'> 
      <HeroSection/>
      <Topbody/>
      <Droppoints/>
      <Informations/>
      <DoDont/>
      <Endinformation/>
    </div>
  )
}

export default EWaste

