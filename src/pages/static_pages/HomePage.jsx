import React from 'react'
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
import { Helmet } from 'react-helmet'
import ReactPlayer from 'react-player'

const HomePage = () => {
    return (
        <div className='bg-[#111111] min-h-screen space-y-[60px] md:space-y-[120px] overflow-x-hidden font-markot'>
            <Helmet>
                <title>itel India | Best Smartphones, Televisions, Home Appliances and Gadgets | Affordable Prices</title>
                <meta name="description" content="itel India is a leading and popular electronics brand for latest smartphones, televisions, home appliances and gadgets. We offer affordable prices for premium quality products." />
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
            <div className="px-4 md:px-0">
                <ReactPlayer
                    url={['/videos/homepage/enjoybetterlife.webm']}
                    width={"100%"}
                    height={"100%"}
                    playing
                    loop
                    muted
                    className='hidden md:block z-20'
                />
                <ReactPlayer
                    url={['/videos/homepage/enjoybetterlife_mobile.mp4']}
                    width={"100%"}
                    height={"100%"}
                    playing
                    loop
                    muted
                    className='md:hidden rounded-[16px] overflow-hidden mx-auto lg:rounded-none'
                />
            </div>
        </div>
    )
}

export default HomePage