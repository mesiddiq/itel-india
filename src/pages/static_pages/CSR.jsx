import React from 'react'
import HeroSection from '../../components/core/static_pages_core/CSR/HeroSection'
import MainBody from '../../components/core/static_pages_core/CSR/MainBody'
import { Helmet } from 'react-helmet'
const CSR = () => {
  return (
    <>
       <Helmet>
        <title>Corporate Social Responsibility</title>
        <meta
          name="description"
          content={`Corporate Social Responsibility`}
        />
      </Helmet>
     <div className=' lg:space-y-[120px]  lg:pb-[120px] pb-[60px] space-y-8'>
      <HeroSection/>
      <MainBody/>
    </div>
    </>
   
  )
}

export default CSR








