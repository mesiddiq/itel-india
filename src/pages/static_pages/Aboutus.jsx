import React from 'react'
import Bottem from '../../components/core/static_pages_core/Aboutus/Bottem'
import Herosection from '../../components/core/static_pages_core/Aboutus/Herosection'
import Mission from '../../components/core/static_pages_core/Aboutus/Mission'
import Cards from '../../components/core/static_pages_core/Aboutus/Cards'
import Centervid from '../../components/core/static_pages_core/Aboutus/Centervid'
import Milestone from '../../components/core/static_pages_core/Aboutus/Milestone'
import Awards from '../../components/core/static_pages_core/Aboutus/Awards'
import Customer from '../../components/core/static_pages_core/Aboutus/Customer'
import { Helmet } from 'react-helmet'
const Aboutus = () => {
  return (
    <>
      <Helmet>
            <title>About US </title>
            <meta name="description" content={`itel,itel electronics,itel product,popular smartphone brands,best budget smart tv india,itel India,mobile excellence awards,itel mobile india`} />
        </Helmet>
      <div className=' lg:space-y-[120px] lg:pb-[120px] pb-[60px]  space-y-[60px]'>
      <Herosection/>
      <Mission/>
      <Cards/>
      <Centervid/>
      <Milestone/>
      <Awards/>
      <Customer/>
      <Bottem/>
    </div>
    </>
  
  )
}



export default Aboutus

