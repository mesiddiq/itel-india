import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSection from '../../components/core/static_pages_core/Ewaste/HeroSection'
import Topbody from '../../components/core/static_pages_core/Ewaste/Topbody'
import Droppoints from '../../components/core/static_pages_core/Ewaste/Droppoints'
import Informations from '../../components/core/static_pages_core/Ewaste/Informations'
import DoDont from '../../components/core/static_pages_core/Ewaste/Do&Dont'
import Endinformation from '../../components/core/static_pages_core/Ewaste/Endinformation'
import { Helmet } from 'react-helmet'
const EWaste = () => {
  return (
    <>
  <Helmet>
            <title>E-waste Management</title>
            <meta name="description" content={`e waste management,electronic waste,where to sell old electronic items,e waste disposal,e waste recycling in india,ministry of environment and forest,e waste management rules 2016,3r recycler pvt ltd,exigo recycling,electronic asset management`} />
        </Helmet>
      <div className=' lg:space-y-[120px] lg:mb-[120px] mb-[60px] space-y-[60px]'> 
      <HeroSection/>
      <Topbody/>
      <Droppoints/>
      <Informations/>
      <DoDont/>
      <Endinformation/>
    </div>
    </>
  
  )
}

export default EWaste

