import React from 'react'
import HeroSection from '../../components/core/static_pages_core/StoreLocator/Herosection'
import Mainbody from '../../components/core/static_pages_core/StoreLocator/Mainbody'

const Storelocator = () => {
  return (
    <div className=" lg:space-y-[120px] lg:mb-[120px] mb-[60px] space-y-[60px]">
        <HeroSection/>
        <Mainbody/>
    </div>
  )
}

export default Storelocator