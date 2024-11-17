import React from 'react'
import Mainpage from '../../components/core/static_pages_core/privacy&policy/Mainpage'
import Herosection from '../../components/core/static_pages_core/privacy&policy/Herosection'

const PrivacyAndPolicy = () => {
  return (
    <div className=' lg:space-y-[120px] space-y-[60px] lg:pb-20 pb-10'>
      <Herosection />
      <Mainpage />
    </div>
  )
}

export default PrivacyAndPolicy