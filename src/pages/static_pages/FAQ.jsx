import React from 'react'
import Herosection from '../../components/core/static_pages_core/FAQ/Herosection'
import MainBody from '../../components/core/static_pages_core/FAQ/MainBody'
import { Helmet } from 'react-helmet'
const FAQ = () => {
  return (

    <>

<Helmet>
    <title>FAQ</title>
            <meta name="description" content={`FAQ`} />
      
    </Helmet>

      <div className=' space-y-[32px] lg:space-y-[120px]'>
      <Herosection/>
      <MainBody/>
    </div>
    </>
  
  )
}

export default FAQ