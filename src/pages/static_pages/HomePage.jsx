import React from 'react'
import CountOnItel from '../../components/core/static_pages_core/Homepage/CountOnItel'
import DareToDoIt from '../../components/core/static_pages_core/Homepage/DareToDoIt'
import HeroSection from '../../components/core/static_pages_core/Homepage/HeroSection'
import OurSmartAppliances from '../../components/core/static_pages_core/Homepage/OurSmartAppliances'
import EnjoyBetterLife from '../../components/core/static_pages_core/Homepage/EnjoyBetterLife'

const HomePage = () => {
    return (
        <div className='bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] px-5 md:px-0 overflow-x-hidden'>
            <HeroSection />
            <EnjoyBetterLife/>
            {/* <SimilarProducts /> */}
            <DareToDoIt />
            {/* <StayPlugged /> */}
            <CountOnItel />
            <OurSmartAppliances />

            {/* <Footer/> */}
        </div>
    )
}

export default HomePage