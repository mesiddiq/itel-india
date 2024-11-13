import React from 'react'
import Herosection from '../../components/core/static_pages_core/Promise/Herosection'
import Cards from '../../components/core/static_pages_core/Promise/Cards'
import TermsAndCondition from '../../components/core/static_pages_core/Promise/TermsAndCondition'
import Bottom from '../../components/core/static_pages_core/Promise/Bottom'
import { Helmet } from 'react-helmet'
const Promise100 = () => {
  return (
    <>
    <Helmet>
    <title>100 days replacement Promise</title>
            <meta name="description" content={`replacement 100 days,itel screen replacement,itel customer service,itel mobile warranty,one time screen replacement offer,itel warranty check`} />
      
    </Helmet>


    <div className='  space-y-[72px] lg:space-y-[100px]'>
      <Herosection/>
      <Cards/>
      <TermsAndCondition/>
      <Bottom/>
    </div>
    </>
    
  )
}

export default Promise100












