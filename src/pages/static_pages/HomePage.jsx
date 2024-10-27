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
import TvFrame from '../../components/core/static_pages_core/Homepage/TvFrame'
import OurCoolGadgets from '../../components/core/static_pages_core/Homepage/OurCoolGadgets'

const HomePage = () => {
    return (
        <div className='bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] overflow-x-hidden font-markot'>
            <HeroSection />
            <EnjoyBetterLife />
            {/* <SimilarProducts /> */}
            <DareToDoIt />
            <TvFrame />
            <StayPlugged />
            {/* <SupportChannels/> */}
            {/* <Video/> */}
            {/* <ServiceCenters/> */}
            <CountOnItel />
            <OurCoolGadgets/>
            <OurSmartAppliances />
            <div className="">
                <img src="https://res.cloudinary.com/djwj42mic/image/upload/v1729919905/EnjoybetterLife_bpnvdv.gif" alt="" className='hidden md:block' />
                {/* <video src="https://res.cloudinary.com/djwj42mic/image/upload/v1729919905/EnjoybetterLife_bpnvdv.gif" autoPlay loop></video> */}
                <img src="https://res.cloudinary.com/djwj42mic/image/upload/v1729920395/d2d_qcs7zp.gif" alt="" className='md:hidden rounded-[16px] overflow-hidden mx-auto lg:rounded-none' />
            </div>
        </div>
    )
}

export default HomePage