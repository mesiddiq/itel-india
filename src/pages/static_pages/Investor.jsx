import React from 'react'
import Herosection from '../../components/core/static_pages_core/investor/Herosection'
import PDFs from '../../components/core/static_pages_core/investor/PDFs'
import Bottom from '../../components/core/static_pages_core/investor/Bottom'



const Investor = () => {
  return (
    <div className=' lg:space-y-[120px] space-y-[60px]'>
         <Herosection/>
         <PDFs/>
         <Bottom/>
    </div>
  )
}

export default Investor