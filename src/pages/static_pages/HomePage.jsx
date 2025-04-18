import { Helmet } from 'react-helmet'
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
            <Helmet>
                <title>itel India | Latest Smartphones, Television and Gadgets </title>
                <meta name="description" content="itel India is a leading and popular electronics brand for latest smartphones, televisions and gadgets. We are the apex electronics icon." />
                <meta name="keywords" content="itel ka phone, itel, itel new model, itel cellphone, itel new mobile, itel mobile price, itel phone, itel phone price,itel new model price,itel cell phone" />
            </Helmet>
            <HeroSection />
            <EnjoyBetterLife />
            <HotPicks />
            <Video />
            <DareToDoIt />
            <StayPlugged />
            <TvFrame />
            <Transform />
            <DiscoverNextGen />
            <Product />
            <CountOnItel />
            <OurCoolGadgets />
            <OurSmartAppliances />
            <div className="">
                <img src="/static_page/homepage/enjoybetterlife.webp" alt="Enjoy better life" className='hidden md:block w-full object-cover' />
                <img src="/static_page/homepage/enjoybetterlife_mobile.webp" alt="Enjoy better life" className='md:hidden w-full object-cover' />
            </div>
        </div>
    )
}

export default HomePage