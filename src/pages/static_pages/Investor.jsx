import React from 'react'
import Herosection from '../../components/core/static_pages_core/investor/Herosection'
import PDFs from '../../components/core/static_pages_core/investor/PDFs'
import Bottom from '../../components/core/static_pages_core/investor/Bottom'


import { Helmet } from 'react-helmet'
const Investor = () => {
  return (

    <>
      <Helmet>
    <title>Investor Relation</title>
            <meta name="description" content={`investor relation , investors`} />
      
    </Helmet>
    
   
    <div className=' lg:space-y-[120px] space-y-[60px]'>
         <Herosection/>
         <PDFs/>
         <Bottom/>
    </div>
     </>
  )
}

export default Investor