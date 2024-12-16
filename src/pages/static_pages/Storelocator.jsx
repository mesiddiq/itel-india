import React from 'react'
import HeroSection from '../../components/core/static_pages_core/StoreLocator/Herosection'
import Mainbody from '../../components/core/static_pages_core/StoreLocator/Mainbody'
import { Helmet } from 'react-helmet'
const Storelocator = () => {
  return (

    <>
      <Helmet>
        <title>Store Locator</title>
        <meta name="description" content={`Store Locator, stores , store locations`} />
      </Helmet>


      <section className=" lg:space-y-[120px] lg:mb-[120px] mb-[60px] space-y-[60px]">
        <HeroSection />
        <Mainbody />
      </section>
    </>

  )
}

export default Storelocator