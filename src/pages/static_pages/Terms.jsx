import React from 'react'
import Mainbody from '../../components/core/static_pages_core/Termsandcondition/Mainbody'
import Herosection from '../../components/core/static_pages_core/Termsandcondition/Herosection'
import { Helmet } from 'react-helmet'
const Terms = () => {
  return (
    <>

<Helmet>
    <title>Terms</title>
            <meta name="description" content={`terms, condition,terms&condition`} />
      
    </Helmet>



     <div className=' lg:pb-[120px] pb-[60px] lg:space-y-[120px] space-y-[60px]'>
    <Herosection/>
    <Mainbody/>

    </div>
    </>
   

  )
}

export default Terms