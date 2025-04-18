import React from 'react'
import Bottom from '../../components/core/static_pages_core/Support/Bottom'
import Cards from '../../components/core/static_pages_core/Support/Cards'
import FAQ from '../../components/core/static_pages_core/Support/FAQ'
import Herosection from '../../components/core/static_pages_core/Support/Herosection'
import MoileIn from '../../components/core/static_pages_core/Support/MoileIn'
import { Helmet} from 'react-helmet'

const Support = () => {
  return (
    <>
     <Helmet>
    <title>Support Landing </title>
            <meta name="description" content={`itel support,itel service centre,itel store,itel store near me,itel mobile`} />
      
    </Helmet>

     <div className=' lg:space-y-[120px] lg:pb-[120px] pb-[60px]  space-y-[60px]'>
      <Herosection/>
      <Cards/>
      <FAQ/>
      <MoileIn/>
      <Bottom/>
    </div>
    </>
   
  )
}

export default Support















