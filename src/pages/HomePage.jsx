import React from 'react'
import HeroSection from '../components/HeroSection'
import SimilarProducts from '../components/SimilarProducts'
import DareToDoIt from '../components/DareToDoIt'
import StayPlugged from '../components/StayPlugged'
import CountOnItel from '../components/CountOnItel'
import OurSmartAppliances from '../components/OurSmartAppliances'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div className='bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] px-5 md:px-0 overflow-x-hidden'>
            <HeroSection />
            {/* <SimilarProducts /> */}
            <DareToDoIt />
            {/* <StayPlugged /> */}
            <CountOnItel />
            <OurSmartAppliances />
            <Footer />
        </div>
    )
}

export default HomePage