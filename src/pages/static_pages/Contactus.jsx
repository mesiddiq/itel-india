import React from 'react'
import Herosection from '../../components/core/static_pages_core/Contactus/Herosection'
import Form from '../../components/core/static_pages_core/Contactus/Form'
import { Helmet } from 'react-helmet'
const Contactus = () => {
  return (
    <>
    
    <Helmet>
        <title>Contact us</title>
        <meta
          name="description"
          content={`Contact us,contact , contactus`}
        />
      </Helmet>
 
    <div className=' space-y-10  lg:space-y-[100px]'>
      <Herosection/>
      <Form/>
    </div>
    </>
  )
}

export default Contactus








