import React from 'react'
import HeroSection from '../../components/core/Homepage/HeroSection'
import SimilarProducts from '../../components/core/Homepage/SimilarProducts'
import DareToDoIt from '../../components/core/Homepage/DareToDoIt'
import StayPlugged from '../../components/core/Homepage/StayPlugged'
import CountOnItel from '../../components/core/Homepage/CountOnItel'
import OurSmartAppliances from '../../components/core/Homepage/OurSmartAppliances'
// import Footer from ''
import EnjoyBetterLife from '../../components/core/Homepage/EnjoyBetterLife'
import Footer from '../../components/common/Footer'

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
            <Footer/>
        </div>
    )
}

export default HomePage