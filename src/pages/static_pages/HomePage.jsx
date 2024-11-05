import CountOnItel from '../../components/core/static_pages_core/Homepage/CountOnItel'
import DareToDoIt from '../../components/core/static_pages_core/Homepage/DareToDoIt'
import DiscoverNextGen from '../../components/core/static_pages_core/Homepage/DiscoverNextGen'
import EnjoyBetterLife from '../../components/core/static_pages_core/Homepage/EnjoyBetterLife'
import HeroSection from '../../components/core/static_pages_core/Homepage/HeroSection'
import HotPicks from '../../components/core/static_pages_core/Homepage/HotPicks'
import OurCoolGadgets from '../../components/core/static_pages_core/Homepage/OurCoolGadgets'
import OurSmartAppliances from '../../components/core/static_pages_core/Homepage/OurSmartAppliances'
import Product from '../../components/core/static_pages_core/Homepage/Product'
import StayPlugged from '../../components/core/static_pages_core/Homepage/StayPlugged'
import Transform from '../../components/core/static_pages_core/Homepage/Transform'
import TvFrame from '../../components/core/static_pages_core/Homepage/TvFrame'
import Video from '../../components/core/static_pages_core/Homepage/Video'

const HomePage = () => {
    return (
        <div className='bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] overflow-x-hidden font-markot'>
            <HeroSection />
            <EnjoyBetterLife />
            <HotPicks />
            <Video />
            <DareToDoIt />
            <TvFrame />
            <Transform />
            <DiscoverNextGen />
            <StayPlugged />
            <Product />
            <CountOnItel />
            <OurCoolGadgets />
            <OurSmartAppliances />
            <div className="px-4 md:px-0">
                <img src="https://res.cloudinary.com/djwj42mic/image/upload/v1729919905/EnjoybetterLife_bpnvdv.gif" alt="" className='hidden md:block' />
                <img src="https://res.cloudinary.com/djwj42mic/image/upload/v1729920395/d2d_qcs7zp.gif" alt="" className='md:hidden rounded-[16px] overflow-hidden mx-auto lg:rounded-none' />
            </div>
        </div>
    )
}

export default HomePage