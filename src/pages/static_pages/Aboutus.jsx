import React from 'react'
import Bottem from '../../components/core/static_pages_core/Aboutus/Bottem'
import Herosection from '../../components/core/static_pages_core/Aboutus/Herosection'
import Mission from '../../components/core/static_pages_core/Aboutus/Mission'
import Cards from '../../components/core/static_pages_core/Aboutus/Cards'
import Centervid from '../../components/core/static_pages_core/Aboutus/Centervid'
import Milestone from '../../components/core/static_pages_core/Aboutus/Milestone'
import Awards from '../../components/core/static_pages_core/Aboutus/Awards'
import Customer from '../../components/core/static_pages_core/Aboutus/Customer'

const Aboutus = () => {
  return (
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
  )
}



export default Aboutus

