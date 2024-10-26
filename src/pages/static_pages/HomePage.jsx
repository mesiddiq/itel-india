import React from 'react'
import CountOnItel from '../../components/core/static_pages_core/Homepage/CountOnItel'
import DareToDoIt from '../../components/core/static_pages_core/Homepage/DareToDoIt'
import HeroSection from '../../components/core/static_pages_core/Homepage/HeroSection'
import OurSmartAppliances from '../../components/core/static_pages_core/Homepage/OurSmartAppliances'
import EnjoyBetterLife from '../../components/core/static_pages_core/Homepage/EnjoyBetterLife'
import SimilarProducts from '../../components/core/static_pages_core/Homepage/SimilarProducts'
import StayPlugged from '../../components/core/static_pages_core/Homepage/StayPlugged'
import SupportChannels from '../../components/core/static_pages_core/Homepage/SupportChannels'
import Video from '../../components/core/static_pages_core/Homepage/Video'

const HomePage = () => {
    return (
        <div className='bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] px-5 md:px-0 overflow-x-hidden font-markot'>
            <HeroSection />
            <EnjoyBetterLife/>
            <SimilarProducts />
            <DareToDoIt />
            <StayPlugged />
            <CountOnItel />
            <OurSmartAppliances />
            <SupportChannels/>
            <Video/>
            {/* <ServiceCenters/> */}
        </div>
    )
}

export default HomePage