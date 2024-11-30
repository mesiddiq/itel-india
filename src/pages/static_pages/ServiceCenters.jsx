import React from 'react'
import HeroBanner from '../../components/core/static_pages_core/ServiceCenter/HeroBanner'
import Card from '../../components/core/static_pages_core/ServiceCenter/Card'
import Bottom from '../../components/core/static_pages_core/ServiceCenter/Bottom'
import { Helmet } from 'react-helmet'
const ServiceCenters = () => {
  return (

    <>
      <Helmet>
    <title>Service Centers</title>
            <meta name="description" content={`service centers`} />
      
    </Helmet>
    
   
    <div className=' lg:space-y-[100px] lg:pb-[100px] pb-[72px] space-y-[72px]'> 
      <HeroBanner/>
      <Card/>
      <Bottom/>
    </div>
    
     </>
  )
}

export default ServiceCenters



